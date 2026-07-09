import { useThemeStore } from '../store/themeStore'
import { useTranslation } from 'react-i18next'
import { FadeInUp, FadeInLeft, FadeInRight } from './Animations'
import { motion } from 'framer-motion'

export default function Hero() {
  const { t } = useTranslation()
  const { isDarkMode } = useThemeStore()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-dark-900 via-dark-950 to-dark-950' : 'bg-gradient-to-br from-white via-gray-50 to-white'}`}>
      <div className={`absolute top-20 right-10 w-96 h-96 ${isDarkMode ? 'bg-accent-blue opacity-5' : 'bg-accent-blue opacity-10'} rounded-full blur-3xl z-0`}></div>
      <div className={`absolute bottom-20 left-10 w-96 h-96 ${isDarkMode ? 'bg-accent-cyan opacity-5' : 'bg-accent-cyan opacity-10'} rounded-full blur-3xl z-0`}></div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FadeInLeft>
            <div className="space-y-8">
              <div>
                <motion.h1 
                  className={`text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-dark-900'} mb-4 leading-tight transition-colors duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {t('hero.title')}
                </motion.h1>
                <motion.p 
                  className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 transition-colors duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {t('hero.description')}
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta_services')}
                </motion.button>
                <motion.button 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta_contact')}
                </motion.button>
              </motion.div>

              <motion.div 
                className={`grid grid-cols-3 gap-6 pt-8 border-t ${isDarkMode ? 'border-dark-700' : 'border-gray-300'} transition-colors duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-accent-blue">500+</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300`}>{t('hero.completed')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-accent-cyan">98%</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300`}>{t('hero.satisfaction')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-3xl font-bold text-accent-orange">24/7</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300`}>{t('hero.support')}</p>
                </motion.div>
              </motion.div>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div className="relative hidden lg:block">
              <motion.div 
                className={`w-full aspect-square ${isDarkMode ? 'bg-gradient-to-br from-dark-800 to-dark-900 border-dark-700' : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-300'} rounded-2xl border p-8 flex items-center justify-center transition-colors duration-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full mx-auto mb-6 opacity-20 blur-xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Professional electrical services</p>
                </div>
              </motion.div>
            </div>
          </FadeInRight>
        </motion.div>
      </div>
    </section>
  )
}
