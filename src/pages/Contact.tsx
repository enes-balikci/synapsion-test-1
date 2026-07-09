import { useEffect } from 'react'
import ContactForm from '../components/Contact'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <ContactForm />
    </div>
  )
}
