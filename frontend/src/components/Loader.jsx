import React from 'react'

const Loader = () => (
  <div className="flex justify-center items-center h-full w-full">
    <svg className="animate-spin h-12 w-12 drop-shadow-lg" viewBox="0 0 40 40" fill="none">
      <circle
        cx="20" cy="20" r="16" stroke="#fff" strokeWidth="2.5" opacity="0.25" />
      <path
        fill="url(#loader-gradient)"
        d="M36 20c0-8.837-7.163-16-16-16v6c5.523 0 10 4.477 10 10h6z"
        style={{ filter: 'drop-shadow(0 0 6px #ec4899)' }}
      />
      <defs>
        <linearGradient id="loader-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a21caf" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export default Loader 