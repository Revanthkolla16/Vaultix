import React from 'react'
import { Lock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add registration logic here
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 w-full max-w-md shadow-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-gray-400">Sign up to start storing your passwords securely</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" autoComplete="email" required className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="password">Password</label>
              <input id="password" type="password" autoComplete="new-password" required className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 text-lg mt-2">Sign Up</button>
          </form>
          <div className="text-center mt-6">
            <Link to="/login" className="text-purple-400 hover:text-pink-400 transition font-medium">Already have an account? Login</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Register
