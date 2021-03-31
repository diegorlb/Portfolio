import { useRef, useEffect } from 'react'

export default function useInterval(callback: () => any, delay: number, exit?: boolean, exitCallback?: () => any) {
  const savedCallback = useRef<() => any>()
  const savedId = useRef<NodeJS.Timeout>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback['current']()
    }, delay)

    savedId.current = id

    return () => clearInterval(id)
  }, [delay])

  useEffect(() => {
    if (exit) {
      clearInterval(savedId.current)
      if (exitCallback) exitCallback()
    }
  }, [exit])
}