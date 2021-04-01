import { useState, useEffect } from 'react'
import { useEventListener } from './useEventListener'

type DimensionsType = {
  width: Number,
  height: Number,
  isMobile: boolean,
}

export default function useDimensions() {
  const [dimensions, setDimensions] = useState<DimensionsType>({
    width: 450,
    height: 800,
    isMobile: true,
  })

  useEventListener('resize', () => setDimensions({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 640,
  }), true)

  return dimensions
}