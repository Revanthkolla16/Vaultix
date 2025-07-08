import React, { useState, useEffect } from 'react'

const ScrollFadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div
      className={`transition-all duration-600 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  )
}

export default ScrollFadeIn 