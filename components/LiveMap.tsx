'use client';

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons
import icon2x from 'leaflet/dist/images/marker-icon-2x.png';
import icon1x from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x.src,
  iconUrl: icon1x.src,
  shadowUrl: shadow.src,
});

import { PLACES, Place } from '@/lib/places';
import {
  UserLocation,
  RouteData,
  TransportProfile,
  calculateDistance,
  formatDistance,
  formatDuration,
  fetchRoute,
  getCurrentPosition,
  cacheLocation,
  getCachedLocation,
  generateMapLink,
  parseMapParams,
} from '@/lib/geo';
import MapControls from '@/components/MapControls';
import LocationBanner from '@/components/LocationBanner';

// Custom hook to update map view
function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
}

// Custom markers
const createUserIcon = () => new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="#22E3E3" stroke="#ffffff" stroke-width="2"/>
      <circle cx="12" cy="12" r="3" fill="#ffffff"/>
    </svg>
  `),
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const createPlaceIcon = () => new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#FFD84D" stroke="#ffffff" stroke-width="2"/>
      <circle cx="12" cy="10" r="3" fill="#ffffff"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface LiveMapProps {
  initialParams?: {
    lat?: number;
    lon?: number;
    profile?: TransportProfile;
  };
}

const LiveMap = ({ initialParams }: LiveMapProps) => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [nearestPlace, setNearestPlace] = useState<Place | null>(null);
  const [route, setRoute] = useState<RouteData | null>(null);
  const [profile, setProfile] = useState<TransportProfile>(initialParams?.profile || 'driving');
  const [locationState, setLocationState] = useState<'loading' | 'success' | 'error' | 'denied'>('loading');
  const [isLocating, setIsLocating] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number]>([34.0522, -118.2437]); // Default to LA
  const [mapZoom, setMapZoom] = useState(10);
  
  const mapRef = useRef<L.Map | null>(null);

  // Initialize location on mount
  useEffect(() => {
    initializeLocation();
  }, []);

  // Handle initial params
  useEffect(() => {
    if (initialParams?.lat && initialParams?.lon) {
      const location: UserLocation = {
        lat: initialParams.lat,
        lon: initialParams.lon,
        timestamp: Date.now(),
      };
      setUserLocation(location);
      setMapCenter([initialParams.lat, initialParams.lon]);
      setMapZoom(13);
      setLocationState('success');
    }
  }, [initialParams]);

  // Update route when location or profile changes
  useEffect(() => {
    if (userLocation && nearestPlace) {
      updateRoute();
    }
  }, [userLocation, nearestPlace, profile]);

  const initializeLocation = async () => {
    // Try cached location first
    const cached = getCachedLocation();
    if (cached) {
      setUserLocation(cached);
      setMapCenter([cached.lat, cached.lon]);
      setMapZoom(13);
      setLocationState('success');
      findNearestPlace(cached);
      return;
    }

    // Request fresh location
    await requestLocation();
  };

  const requestLocation = async () => {
    setIsLocating(true);
    setLocationState('loading');

    try {
      const position = await getCurrentPosition();
      const location: UserLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        timestamp: Date.now(),
      };

      setUserLocation(location);
      setMapCenter([location.lat, location.lon]);
      setMapZoom(13);
      setLocationState('success');
      
      // Cache the location
      cacheLocation(location);
      
      // Find nearest place
      findNearestPlace(location);
    } catch (error: any) {
      console.error('Geolocation error:', error);
      
      if (error.code === 1) {
        setLocationState('denied');
      } else {
        setLocationState('error');
      }
    } finally {
      setIsLocating(false);
    }
  };

  const findNearestPlace = (location: UserLocation) => {
    if (PLACES.length === 0) {
      setNearestPlace(null);
      return;
    }

    let nearest = PLACES[0];
    let minDistance = calculateDistance(location.lat, location.lon, nearest.lat, nearest.lon);

    for (const place of PLACES.slice(1)) {
      const distance = calculateDistance(location.lat, location.lon, place.lat, place.lon);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = place;
      }
    }

    setNearestPlace(nearest);
  };

  const updateRoute = async () => {
    if (!userLocation || !nearestPlace) {
      setRoute(null);
      return;
    }

    try {
      const routeData = await fetchRoute(
        userLocation.lat,
        userLocation.lon,
        nearestPlace.lat,
        nearestPlace.lon,
        profile
      );
      setRoute(routeData);
    } catch (error) {
      console.error('Failed to fetch route:', error);
      setRoute(null);
    }
  };

  const handleProfileChange = (newProfile: TransportProfile) => {
    setProfile(newProfile);
  };

  const handleShare = async () => {
    if (!userLocation) return;

    const link = generateMapLink(userLocation.lat, userLocation.lon, profile);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Location - Armada',
          text: 'Check out my location on Armada',
          url: link,
        });
      } catch (error) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(link);
      }
    } else {
      await navigator.clipboard.writeText(link);
    }
  };

  const getBannerMessage = () => {
    switch (locationState) {
      case 'loading':
        return 'Looking for your location...';
      case 'denied':
        return 'Location access denied. Enable location to see nearby places.';
      case 'error':
        return 'Failed to get your location. Please try again.';
      case 'success':
        return userLocation ? 'Location acquired' : 'Ready to navigate';
      default:
        return '';
    }
  };

  const getInfoCardContent = () => {
    if (!userLocation) {
      return {
        title: 'Looking for your location...',
        subtitle: 'Grant location access to see nearby places',
      };
    }

    if (!nearestPlace) {
      return {
        title: 'Location acquired',
        subtitle: 'Add a place to get directions',
      };
    }

    if (!route) {
      return {
        title: nearestPlace.name,
        subtitle: 'Calculating route...',
      };
    }

    return {
      title: nearestPlace.name,
      subtitle: `${formatDistance(route.distance)} • ${formatDuration(route.duration)}`,
    };
  };

  const infoCard = getInfoCardContent();

  return (
    <div className="relative h-screen w-full">
      {/* Location Banner */}
      <AnimatePresence>
        {locationState !== 'success' && (
          <LocationBanner
            type={locationState}
            message={getBannerMessage()}
            onRetry={locationState === 'error' || locationState === 'denied' ? requestLocation : undefined}
            isRetrying={isLocating}
          />
        )}
      </AnimatePresence>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-4 right-4 z-40 mx-auto max-w-md"
      >
        <div className="glass-strong p-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Navigation className="h-5 w-5 text-electric-cyan" />
            <h3 className="font-sora font-semibold text-lg">{infoCard.title}</h3>
          </div>
          <p className="text-text-muted text-sm">{infoCard.subtitle}</p>
        </div>
      </motion.div>

      {/* Map */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        className="h-full w-full"
        zoomControl={false}
        ref={mapRef}
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User Location Marker */}
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lon]}
            icon={createUserIcon()}
          >
            <Popup>
              <div className="text-center">
                <p className="font-semibold">Your Location</p>
                <p className="text-sm text-gray-600">
                  {userLocation.lat.toFixed(4)}, {userLocation.lon.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Nearest Place Marker */}
        {nearestPlace && (
          <Marker
            position={[nearestPlace.lat, nearestPlace.lon]}
            icon={createPlaceIcon()}
          >
            <Popup>
              <div className="text-center">
                <p className="font-semibold">{nearestPlace.name}</p>
                {nearestPlace.description && (
                  <p className="text-sm text-gray-600">{nearestPlace.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        )}

        {/* Route Polyline */}
        {route && (
          <Polyline
            positions={route.geometry}
            color="#22E3E3"
            weight={4}
            opacity={0.8}
          />
        )}
      </MapContainer>

      {/* Map Controls */}
      <MapControls
        profile={profile}
        onProfileChange={handleProfileChange}
        onLocateMe={requestLocation}
        onShare={handleShare}
        isLocating={isLocating}
        userLocation={userLocation}
      />
    </div>
  );
};

export default LiveMap;