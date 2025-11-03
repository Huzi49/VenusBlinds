import Image from 'next/image';
import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  subTitle: string;
  description: string;
}

function ProcessStep({ number, title, subTitle, description }: ProcessStepProps) {
  return (
    <div className="mb-8">
      <h3 className="text-3xl font-bold mb-3">{number} {title}</h3>
      <span className="block w-full h-[2px] bg-black mb-4"></span>
      <h4 className="text-lg font-medium text-gray-800 mb-3">{subTitle}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function LandingProcess() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4" data-aos="fade-up">
          How We Create Your Perfect Blinds
        </h2>
        
        <span className="block w-full h-[2px] bg-black mb-12 max-w-[120px] mx-auto"></span>
        
        {/* First Process Card - Image on Right */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-[10px] border-[#ECECEC] mt-0 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-gray-800">
              <ProcessStep 
                number="1."
                title="Understanding Your Needs"
                subTitle="Assess Your Space and Preferences"
                description="Begin by evaluating your specific requirements and preferences. Consider factors like room dimensions, existing décor, and personal style to ensure the solution aligns perfectly with your vision."
              />
            </div>
            
            <div className="relative h-[400px]" data-aos="fade-left">
              <Image 
                src="/hero/card1.webp"
                alt="Consultation process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Second Process Card - Image on Left */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-[10px] border-[#ECECEC] mt-0 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] order-2 lg:order-1" data-aos="fade-right">
              <Image 
                src="/hero/bg-form.webp"
                alt="Precise measurements"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6 text-gray-800 order-1 lg:order-2">
              <ProcessStep 
                number="2."
                title="Precise Measurements"
                subTitle="Ensure a Perfect Fit"
                description="Accurate measurements are crucial. Carefully measure the area to guarantee that the chosen solution fits seamlessly, enhancing both functionality and aesthetics."
              />
            </div>
          </div>
        </div>
        
        {/* Third Process Card - Image on Right */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-[10px] border-[#ECECEC] mt-0 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-gray-800">
              <ProcessStep 
                number="3."
                title="Professional Installation"
                subTitle="Expert Setup for Optimal Performance"
                description="Our expert installers ensure your window treatments are perfectly fitted and functioning optimally. We handle everything with care and precision, leaving you with beautiful, flawless results."
              />
            </div>
            
            <div className="relative h-[400px]" data-aos="fade-left">
              <Image 
                src="/hero/about-1.webp"
                alt="Professional installation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}