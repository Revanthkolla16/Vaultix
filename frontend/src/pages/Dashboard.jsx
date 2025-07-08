import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Lock } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-20 px-4">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome to Your Vault</h1>
            <p className="text-gray-400 text-lg">All your passwords in one secure place.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Passwords</h2>
            <div className="text-gray-400 text-center py-8">
              {/* Placeholder for password list */}
              <span>No passwords saved yet. Add your first password!</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard
