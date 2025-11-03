'use client'

import { useState } from 'react'
import { StepForm } from './step-form'

export function LandingHeroClient() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    zipCode: '',
    name: '',
    phone: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly.')
    // Reset form
    setFormData({
      zipCode: '',
      name: '',
      phone: '',
      email: ''
    })
    setStep(1)
  }

  return (
    <StepForm
      step={step}
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
      handleSubmit={handleSubmit}
    />
  )
}
