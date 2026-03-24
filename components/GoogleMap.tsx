'use client'

import { GoogleMap as GMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useCallback, useState } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
}

// Default: Utah area (update with your actual business location)
const defaultCenter = {
  lat: 40.7608,
  lng: -111.891,
}

interface GoogleMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  className?: string
}

export default function GoogleMap({
  center = defaultCenter,
  zoom = 12,
  className = '',
}: GoogleMapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  })

  const [, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
    return (
      <div className={`bg-navy-900/50 rounded-xl border border-white/10 flex items-center justify-center h-[400px] ${className}`}>
        <p className="text-white/50 text-sm">
          Google Maps — Add your API key to .env.local
        </p>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className={`bg-navy-900/50 rounded-xl border border-white/10 flex items-center justify-center h-[400px] ${className}`}>
        <p className="text-red-400 text-sm">Failed to load Google Maps</p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className={`bg-navy-900/50 rounded-xl border border-white/10 flex items-center justify-center h-[400px] animate-pulse ${className}`}>
        <p className="text-white/30 text-sm">Loading map...</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <GMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#1a1a2e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a2e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#8892b0' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2a2a4a' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e1a3a' }] },
          ],
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        }}
      >
        <Marker position={center} />
      </GMap>
    </div>
  )
}
