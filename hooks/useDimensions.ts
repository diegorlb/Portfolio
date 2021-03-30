import { useState, useEffect } from 'react'

type DimensionsType = {
  width: Number,
  height: Number,
}

export default function useDimensions() {
  const [dimensions, setDimensions] = useState<DimensionsType>({
    width: 450,
    height: 800,
  })

  useEffect(() => {
    const handler = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
    handler()

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  return dimensions
}