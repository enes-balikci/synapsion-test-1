import { useState } from 'react'
import { useThemeStore } from '../../store/themeStore'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const { isDarkMode } = useThemeStore()
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@synapsion.com')
  const [password, setPassword] = useState('admin123')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@synapsion.com' && password === 'admin123') {
      localStorage.setItem('adminToken', 'demo-token-' + Date.now())
      navigate('/admin/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center pt-20 ${isDarkMode ? 'bg-dark-950' : 'bg-gray-50'}`}>
      <motion.div className={`w-full max-w-md ${isDarkMode ? 'bg-dark-900 border-dark-800' : 'bg-white border-gray-200'} border rounded-lg p-8`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center mx-auto mb-4"><span className="text-white font-bold text-2xl">S</span></div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>Admin Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-dark-800 border-dark-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:border-accent-blue`} />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-dark-800 border-dark-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:border-accent-blue`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
            </div>
          </div>
          {error && <div className={`p-3 rounded-lg text-sm ${isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'}`}>{error}</div>}
          <button type="submit" className="w-full btn-primary mt-6">Sign In</button>
        </form>
      </motion.div>
    </div>
  )
}