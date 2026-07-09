import { useEffect } from 'react'
import Services from '../components/Services'

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Synapsion Group specializes in industrial, commercial, and construction electrical systems, 
          offering comprehensive service solutions for your needs.
        </p>
      </div>
      <Services />
    </div>
  )
}
