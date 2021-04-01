import { useEffect } from 'react'

export const useEventListener = (event: string, callback: () => any, trigger?: boolean) => {
  useEffect(() => {
    if (trigger) callback()
    window.addEventListener(event, callback)

    return () => window.removeEventListener(event, callback)
  }, [])
}