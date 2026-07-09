import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
    alert(t('contact.form.success'))
  }

  return (
    <section className="py-20 bg-dark-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className="section-subtitle">{t('contact.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="card-dark">
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.address')}</h3>
                <p className="text-gray-400">Istanbul, Turkey</p>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.phone')}</h3>
                <p className="text-gray-400">+90 (212) XXX-XXXX</p>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h3>
                <p className="text-gray-400">info@synapsion.com.tr</p>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.hours')}</h3>
                <p className="text-gray-400">{t('contact.weekdays')}</p>
                <p className="text-gray-400">{t('contact.emergency')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('contact.form.phone')}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
              />
              <input
                type="text"
                name="company"
                placeholder={t('contact.form.company')}
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-accent-blue transition"
              >
                <option value="">{t('contact.form.service')}</option>
                <option value="industrial">{t('contact.services.industrial')}</option>
                <option value="commercial">{t('contact.services.commercial')}</option>
                <option value="construction">{t('contact.services.construction')}</option>
                <option value="maintenance">{t('contact.services.maintenance')}</option>
                <option value="efficiency">{t('contact.services.efficiency')}</option>
                <option value="consulting">{t('contact.services.consulting')}</option>
              </select>
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition resize-none"
              ></textarea>
              <button type="submit" className="w-full btn-primary">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
