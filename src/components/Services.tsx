import { useThemeStore } from '../store/themeStore'
import { useTranslation } from 'react-i18next'
import { FadeInUp, HoverScale } from './Animations'
import { motion } from 'framer-motion'

export default function Services() {
  const { t } = useTranslation()
  const { isDarkMode } = useThemeStore()

  const services = [
    {
      titleKey: 'services.industrial.title',
      descriptionKey: 'services.industrial.description',
      featuresKey: [
        'services.industrial.features.0',
        'services.industrial.features.1',
        'services.industrial.features.2',
        'services.industrial.features.3',
      ]
    },
    {
      titleKey: 'services.commercial.title',
      descriptionKey: 'services.commercial.description',
      featuresKey: [
        'services.commercial.features.0',
        'services.commercial.features.1',
        'services.commercial.features.2',
        'services.commercial.features.3',
      ]
    },
    {
      titleKey: 'services.construction.title',
      descriptionKey: 'services.construction.description',
      featuresKey: [
        'services.construction.features.0',
        'services.construction.features.1',
        'services.construction.features.2',
        'services.construction.features.3',
      ]
    },
    {
      titleKey: 'services.maintenance.title',
      descriptionKey: 'services.maintenance.description',
      featuresKey: [
        'services.maintenance.features.0',
        'services.maintenance.features.1',
        'services.maintenance.features.2',
        'services.maintenance.features.3',
      ]
    },
    {
      titleKey: 'services.efficiency.title',
      descriptionKey: 'services.efficiency.description',
      featuresKey: [
        'services.efficiency.features.0',
        'services.efficiency.features.1',
        'services.efficiency.features.2',
        'services.efficiency.features.3',
      ]
    },
    {
      titleKey: 'services.consulting.title',
      descriptionKey: 'services.consulting.description',
      featuresKey: [
        'services.consulting.features.0',
        'services.consulting.features.1',
        'services.consulting.features.2',
        'services.consulting.features.3',
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  return (
    <section className={`py-20 relative transition-colors duration-300 ${isDarkMode ? 'bg-dark-950' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-dark-900 to-dark-950' : 'bg-gradient-to-b from-gray-50 to-white'} z-0`}></div>

      <div className="container-custom relative z-10">
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.h2 
              className={`section-title transition-colors duration-300 ${isDarkMode ? '' : 'text-dark-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('services.title')}
            </motion.h2>
            <motion.p 
              className={`section-subtitle transition-colors duration-300 ${isDarkMode ? '' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('services.subtitle')}
            </motion.p>
          </div>
        </FadeInUp>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <HoverScale>
                <div className={`${isDarkMode ? 'card-dark' : 'bg-white border border-gray-200 rounded-xl p-6'} group cursor-pointer transition-all duration-300`}>
                  <motion.div 
                    className={`mb-4 p-4 rounded-lg w-fit transition-all duration-300 ${isDarkMode ? 'bg-dark-900 group-hover:bg-accent-blue group-hover:bg-opacity-10' : 'bg-gray-100 group-hover:bg-blue-100'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    ></motion.div>
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}>{t(service.titleKey)}</h3>
                  <p className={`mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t(service.descriptionKey)}</p>
                  <ul className="space-y-2">
                    {service.featuresKey.map((featureKey, idx) => (
                      <motion.li 
                        key={idx} 
                        className={`flex items-start text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-accent-cyan mr-2">✓</span>
                        <span>{t(featureKey)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </HoverScale>
            </FadeInUp>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
