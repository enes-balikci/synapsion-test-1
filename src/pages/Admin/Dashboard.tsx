import { useEffect, useState } from 'react'
import { useThemeStore } from '../../store/themeStore'
import { motion } from 'framer-motion'
import { LogOut, BarChart3, MessageSquare, Eye, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface FormSubmission {
  id: number
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  date: string
}

export default function AdminDashboard() {
  const { isDarkMode } = useThemeStore()
  const navigate = useNavigate()
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin/login')
    }

    // Load submissions from localStorage
    const stored = localStorage.getItem('formSubmissions')
    if (stored) {
      setSubmissions(JSON.parse(stored))
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  const handleDelete = (id: number) => {
    const updated = submissions.filter(s => s.id !== id)
    setSubmissions(updated)
    localStorage.setItem('formSubmissions', JSON.stringify(updated))
    setSelectedSubmission(null)
  }

  const stats = {
    totalMessages: submissions.length,
    todayMessages: submissions.filter(s => new Date(s.date).toDateString() === new Date().toDateString()).length,
    visitorsThisMonth: Math.floor(Math.random() * 1000) + 500,
    averageResponseTime: '2 hours'
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-dark-950' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-dark-900 border-dark-800' : 'bg-white border-gray-200'} border-b sticky top-0 z-40 transition-colors duration-300`}>
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>Admin Dashboard</h1>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Synapsion Group</p>
            </div>
          </div>
          <motion.button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </motion.button>
        </div>
      </header>

      <div className="container-custom py-8">
        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: 'Total Messages', value: stats.totalMessages, icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
            { label: 'Today', value: stats.todayMessages, icon: BarChart3, color: 'from-green-500 to-green-600' },
            { label: 'This Month', value: stats.visitorsThisMonth, icon: Eye, color: 'from-purple-500 to-purple-600' },
            { label: 'Avg Response', value: stats.averageResponseTime, icon: MessageSquare, color: 'from-orange-500 to-orange-600' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className={`${isDarkMode ? 'bg-dark-900 border-dark-800' : 'bg-white border-gray-200'} border rounded-lg p-6 transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  <p className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Submissions List */}
          <motion.div
            className={`lg:col-span-2 ${isDarkMode ? 'bg-dark-900 border-dark-800' : 'bg-white border-gray-200'} border rounded-lg p-6 transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>Recent Form Submissions</h2>
            {submissions.length === 0 ? (
              <p className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No submissions yet</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {submissions.map((submission) => (
                  <motion.div
                    key={submission.id}
                    onClick={() => setSelectedSubmission(submission)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${selectedSubmission?.id === submission.id ? `${isDarkMode ? 'bg-accent-blue' : 'bg-blue-50'} border-accent-blue` : `${isDarkMode ? 'bg-dark-800 hover:bg-dark-700' : 'bg-gray-50 hover:bg-gray-100'}`} border ${isDarkMode ? 'border-dark-700' : 'border-gray-200'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`font-semibold transition-colors duration-300 ${selectedSubmission?.id === submission.id ? 'text-white' : isDarkMode ? 'text-white' : 'text-dark-900'}`}>{submission.name}</p>
                        <p className={`text-sm transition-colors duration-300 ${selectedSubmission?.id === submission.id ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{submission.email}</p>
                      </div>
                      <span className={`text-xs transition-colors duration-300 ${selectedSubmission?.id === submission.id ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{new Date(submission.date).toLocaleDateString()}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Submission Details */}
          <motion.div
            className={`${isDarkMode ? 'bg-dark-900 border-dark-800' : 'bg-white border-gray-200'} border rounded-lg p-6 transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>Details</h2>
            {selectedSubmission ? (
              <div className="space-y-4">
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Name</p>
                  <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>{selectedSubmission.name}</p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                  <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>{selectedSubmission.email}</p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                  <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>{selectedSubmission.phone || 'N/A'}</p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Service</p>
                  <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>{selectedSubmission.service}</p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message</p>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedSubmission.message}</p>
                </div>
                <motion.button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition mt-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <Trash2 size={18} />
                  <span>Delete</span>
                </motion.button>
              </div>
            ) : (
              <p className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Select a submission to view details</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
