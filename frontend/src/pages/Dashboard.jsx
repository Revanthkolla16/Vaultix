import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Lock } from 'lucide-react'
import Loader from '../components/Loader'

const Dashboard = () => {
  const [passwords, setPasswords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editData, setEditData] = useState(null)
  const [form, setForm] = useState({ site: '', username: '', password: '' })

  const token = localStorage.getItem('token')

  // Fetch passwords
  useEffect(() => {
    const fetchPasswords = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('https://vaultix-qs63.onrender.com/api/passwords', {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (!res.ok) throw new Error('Failed to fetch passwords')
        const data = await res.json()
        setPasswords(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPasswords()
  }, [token])

  // Handle form input
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  // Add password
  const handleAdd = async e => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('https://vaultix-qs63.onrender.com/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to add password')
      const newPass = await res.json()
      setPasswords([...passwords, newPass])
      setForm({ site: '', username: '', password: '' })
      setShowAdd(false)
    } catch (err) {
      setError(err.message)
    }
  }

  // Edit password
  const handleEdit = async e => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch(`https://vaultix-qs63.onrender.com/api/passwords/${editData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to update password')
      const updated = await res.json()
      setPasswords(passwords.map(p => p._id === updated._id ? updated : p))
      setShowEdit(false)
      setEditData(null)
      setForm({ site: '', username: '', password: '' })
    } catch (err) {
      setError(err.message)
    }
  }

  // Delete password
  const handleDelete = async id => {
    setError(null)
    try {
      const res = await fetch(`https://vaultix-qs63.onrender.com/api/passwords/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error('Failed to delete password')
      setPasswords(passwords.filter(p => p._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  // Open edit modal
  const openEdit = pass => {
    setEditData(pass)
    setForm({ site: pass.site, username: pass.username, password: pass.password })
    setShowEdit(true)
  }

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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">Your Passwords</h2>
              <button onClick={() => { setShowAdd(true); setForm({ site: '', username: '', password: '' }) }} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all">Add</button>
            </div>
            {error && <div className="text-red-400 mb-4">{error}</div>}
            {loading ? (
              <div className="flex justify-center py-8"><Loader /></div>
            ) : passwords.length === 0 ? (
              <div className="text-gray-400 text-center py-8">No passwords saved yet. Add your first password!</div>
            ) : (
              <table className="w-full text-left text-gray-300">
                <thead>
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {passwords.map(pass => (
                    <tr key={pass._id} className="border-b border-gray-800">
                      <td className="py-2">{pass.site}</td>
                      <td className="py-2">{pass.username}</td>
                      <td className="py-2">{pass.password}</td>
                      <td className="py-2 flex gap-2">
                        <button onClick={() => openEdit(pass)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
                        <button onClick={() => handleDelete(pass._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {/* Add Password Modal */}
            {showAdd && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <form onSubmit={handleAdd} className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
                  <h3 className="text-xl font-bold text-white mb-4">Add Password</h3>
                  <input name="site" value={form.site} onChange={handleChange} placeholder="Site" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" required />
                  <input name="username" value={form.username} onChange={handleChange} placeholder="Username" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" required />
                  <input name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" required />
                  <div className="flex gap-2 mt-4">
                    <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all">Add</button>
                    <button type="button" onClick={() => setShowAdd(false)} className="bg-gray-700 text-white px-4 py-2 rounded-lg">Cancel</button>
                  </div>
                </form>
              </div>
            )}
            {/* Edit Password Modal */}
            {showEdit && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <form onSubmit={handleEdit} className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
                  <h3 className="text-xl font-bold text-white mb-4">Edit Password</h3>
                  <input name="site" value={form.site} onChange={handleChange} placeholder="Site" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" required />
                  <input name="username" value={form.username} onChange={handleChange} placeholder="Username" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" required />
                  <input name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white" required />
                  <div className="flex gap-2 mt-4">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all">Save</button>
                    <button type="button" onClick={() => { setShowEdit(false); setEditData(null) }} className="bg-gray-700 text-white px-4 py-2 rounded-lg">Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard
