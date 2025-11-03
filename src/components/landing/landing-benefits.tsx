import { FaRuler, FaHome, FaDollarSign, FaShieldAlt, FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
}

function Benefit({ icon, title }: BenefitProps) {
  return (
    <div 
      className="bg-white p-5 rounded-[20px] shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:bg-[var(--background-bg-color)] hover:text-white group border-[11px] border-solid border-[#f5f5f5] hover:shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[var(--background-bg-color)] text-white group-hover:bg-white group-hover:text-[var(--background-bg-color)] transition-all duration-500 ease-in-out">
          <div className="text-3xl">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-center text-lg font-medium text-gray-800 group-hover:text-white transition-colors duration-500 ease-in-out">
        {title}
      </h3>
    </div>
  )
}

export function LandingBenefits() {
  const benefits = [
    {
      icon: <FaPencilAlt />,
      title: "Measurements Done Right"
    },
    {
      icon: <FaHome />,
      title: "Style That Matches Your Home"
    },
    {
      icon: <FaDollarSign />,
      title: "Durable & Affordable"
    },
    {
      icon: <FaShieldAlt />,
      title: "Zero-Risk Consultation"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}