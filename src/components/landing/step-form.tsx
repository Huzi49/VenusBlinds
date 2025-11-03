'use client'

interface StepFormProps {
  step: number;
  formData: {
    zipCode: string;
    name: string;
    phone: string;
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function StepForm({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit
}: StepFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl" data-aos="fade-left">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get A Quote</h2>
        
        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num}>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      num === step ? 'bg-[var(--background-bg-color)] text-white' : num < step ? 'bg-[#00a9e0] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="mb-6">
              <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
                Your Zip/Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a9e0] focus:border-[#00a9e0] text-gray-900"
                placeholder="Enter your zip code"
                required
              />
            </div>
          )}
          
          {step === 2 && (
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a9e0] focus:border-[#00a9e0] text-gray-900"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          
          {step === 3 && (
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a9e0] focus:border-[#00a9e0] text-gray-900"
                placeholder="Enter your phone number"
                required
              />
            </div>
          )}
          
          {step === 4 && (
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a9e0] focus:border-[#00a9e0] text-gray-900"
                placeholder="Enter your email address"
                required
              />
            </div>
          )}
          
          <div className="flex justify-between mt-8 space-x-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300 font-medium"
              >
                Previous
              </button>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 px-6 py-3 bg-[var(--background-bg-color)] text-white rounded-md hover:bg-[#0085b3] transition-colors duration-300 font-medium"
                disabled={step === 1 && !formData.zipCode}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[var(--background-bg-color)] text-white rounded-md hover:bg-[#0085b3] transition-colors duration-300 font-medium"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}