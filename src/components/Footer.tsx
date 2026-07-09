import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-white">Synapsion</span>
            </div>
            <p className="text-gray-400 text-sm">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.services_title')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-accent-cyan transition">Industrial</Link></li>
              <li><Link to="/services" className="hover:text-accent-cyan transition">Commercial</Link></li>
              <li><Link to="/services" className="hover:text-accent-cyan transition">Construction</Link></li>
              <li><Link to="/services" className="hover:text-accent-cyan transition">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.info_title')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-accent-cyan transition">{t('footer.links.home')}</Link></li>
              <li><Link to="/contact" className="hover:text-accent-cyan transition">{t('footer.links.contact')}</Link></li>
              <li><a href="#" className="hover:text-accent-cyan transition">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition">{t('footer.links.terms')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.contact_title')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@synapsion.com.tr</li>
              <li>+90 (212) XXX-XXXX</li>
              <li>Istanbul, Turkey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            {currentYear} Synapsion Group. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent-cyan transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-accent-cyan transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-accent-cyan transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
