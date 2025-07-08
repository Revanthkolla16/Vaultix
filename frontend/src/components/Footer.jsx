import React from 'react'
import { Lock } from 'lucide-react'

const Footer = () => (
  <footer className="border-t border-gray-800 py-8 text-center">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
          <Lock className="w-4 h-4 text-white" />
        </div>
        <span className="text-lg font-semibold text-white">Vaultix</span>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Vaultix. A simple hobby project for password storage.
      </p>
    </div>
  </footer>
)

export default Footer 