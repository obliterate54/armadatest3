export interface UserLocation {
  lat: number;
  lon: number;
  timestamp: number;
}

export interface RouteData {
  distance: number; // in meters
  duration: number; // in seconds
  geometry: [number, number][]; // [lon, lat] pairs
}

export type TransportProfile = 'driving' | 'walking' | 'cycling';

// Haversine distance calculation
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Format distance for display
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
}

// Format duration for display
export function formatDuration(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
}

// Cache user location
const LOCATION_CACHE_KEY = 'armada_last_location';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function cacheLocation(location: UserLocation): void {
  try {
    localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(location));
  } catch (error) {
    console.warn('Failed to cache location:', error);
  }
}

export function getCachedLocation(): UserLocation | null {
  try {
    const cached = localStorage.getItem(LOCATION_CACHE_KEY);
    if (!cached) return null;
    
    const location: UserLocation = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is still valid
    if (now - location.timestamp > CACHE_DURATION) {
      localStorage.removeItem(LOCATION_CACHE_KEY);
      return null;
    }
    
    return location;
  } catch (error) {
    console.warn('Failed to get cached location:', error);
    return null;
  }
}

// Parse deep link parameters
export function parseMapParams(searchParams: URLSearchParams): {
  lat?: number;
  lon?: number;
  profile?: TransportProfile;
} {
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const profile = searchParams.get('profile') as TransportProfile;
  
  return {
    lat: lat ? parseFloat(lat) : undefined,
    lon: lon ? parseFloat(lon) : undefined,
    profile: ['driving', 'walking', 'cycling'].includes(profile) ? profile : undefined,
  };
}

// Generate deep link
export function generateMapLink(
  lat: number,
  lon: number,
  profile: TransportProfile = 'driving'
): string {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
    profile,
  });
  return `${window.location.origin}/map?${params.toString()}`;
}

// Fetch route from OSRM
export async function fetchRoute(
  startLat: number,
  startLon: number,
  endLat: number,
  endLon: number,
  profile: TransportProfile = 'driving'
): Promise<RouteData | null> {
  try {
    const url = `https://router.project-osrm.org/route/v1/${profile}/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`OSRM API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.routes || data.routes.length === 0) {
      return null;
    }
    
    const route = data.routes[0];
    const geometry = route.geometry.coordinates.map(([lon, lat]: [number, number]) => [lat, lon]);
    
    return {
      distance: route.distance,
      duration: route.duration,
      geometry,
    };
  } catch (error) {
    console.error('Failed to fetch route:', error);
    return null;
  }
}

// Get user's current position
export function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000, // 1 minute
      }
    );
  });
}