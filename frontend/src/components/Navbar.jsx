import React, { useState, useEffect } from 'react'
import { Lock } from 'lucide-react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    
    navigate('/')
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-gray-900 border-b border-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2" onClick={()=>navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white cursor-pointer">Vaultix</span>
          </div>
          <div className="flex items-center">
            {location.pathname === '/dashboard' ? (
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 border border-pink-500 rounded-lg text-white font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-4 py-1.5 border border-purple-500 rounded-lg text-white font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
