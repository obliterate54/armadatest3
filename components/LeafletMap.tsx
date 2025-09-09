'use client';

import { useEffect, useRef } from 'react';

export default function LeafletMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any;
    (async () => {
      const L = await import('leaflet');
      // Fix default marker icons in Next.js
      // @ts-ignore
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl:    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl:  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (mapRef.current) {
        map = L.map(mapRef.current).setView([43.6532, -79.3832], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);
        L.marker([43.6532, -79.3832]).addTo(map);
      }
    })();

    return () => {
      if (mapRef.current) {
        // Leaflet cleans itself up when element is removed
        mapRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: 400, width: '100%' }} />;
}