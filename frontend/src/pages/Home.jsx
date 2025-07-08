import React from 'react'
import Navbar from '../components/Navbar'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Footer from '../components/Footer'
import { Lock, Plus, Eye, Key } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-8 py-20 pt-32">
        <div className="text-center mb-16">
          <ScrollFadeIn delay={200}>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <Key className="w-10 h-10 text-white" />
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={400}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple Password Storage
            </h1>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={600}>
            <p className="text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
              A straightforward way to store your passwords. Sign up, add your passwords, and access them whenever you need.
            </p>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/register" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer text-lg">
                Get Started for Free
              </Link>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Simple Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <ScrollFadeIn delay={800}>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Add Passwords</h3>
              <p className="text-lg text-gray-400">Store your passwords securely in the database</p>
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={1100}>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">View Passwords</h3>
              <p className="text-lg text-gray-400">Access your saved passwords anytime</p>
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={1400}>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Simple & Free</h3>
              <p className="text-lg text-gray-400">No premium features, just basic storage</p>
            </div>
          </ScrollFadeIn>
        </div>

        {/* CTA */}
        <ScrollFadeIn delay={100}>
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to start saving passwords?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Create a free account and start storing your passwords today.
              </p>
              <Link to="/register" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 inline-block hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer text-lg">
                Sign Up for Free
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>

      <Footer />
    </div>
  )
}

export default Home