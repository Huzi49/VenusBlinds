'use client'

import { useState, useEffect, useRef } from 'react'

interface TestimonialProps {
  content: string;
  author: string;
  rating: number;
}

function Testimonial({ content, author, rating }: TestimonialProps) {
  return (
    <div className="bg-[#00a9e0] text-white p-8 rounded-lg h-full flex flex-col justify-between">
      <p className="text-lg mb-6">{content}</p>
      <div>
        <div className="text-yellow-400 flex mb-2">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="font-medium text-xl">{author}</p>
      </div>
    </div>
  )
}

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [

    {
      content: "I was amazed at the quality of the blinds I received. They look even better in person than they do on the website. Venus Blinds has added a whole new level of comfort and style to my office.",
      author: "Emily R.",
      rating: 5
    },
    {
      content: "The customer service at Venus Blinds is exceptional. They were patient with all my questions and helped me find the perfect solution for my unusual window shapes. The end result is stunning!",
      author: "Michael T.",
      rating: 5
    },
    {
      content: "I can't say enough good things about Venus Blinds. From their extensive collection to their excellent customer service, everything was top-notch. The blinds were easy to install and gave my home a modern touch.",
      author: "James M.",
      rating: 5
    },
 
    {
      content: "The design consultation was incredibly helpful. The expert suggestions helped me coordinate my window treatments with my existing decor. I'm thrilled with the results!The blinds were easy to install and gave my home a modern touch",
      author: "David W.",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Animate the transition
    if (testimonialRef.current) {
      testimonialRef.current.style.transition = 'transform 1s ease-in-out';
      testimonialRef.current.style.transform = 'translateX(-33.33%)';
      
      // After animation completes
      setTimeout(() => {
        if (testimonialRef.current) {
          testimonialRef.current.style.transition = 'none';
          testimonialRef.current.style.transform = 'translateX(0)';
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          setIsTransitioning(false);
        }
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Prepare for backward animation
    if (testimonialRef.current) {
      testimonialRef.current.style.transition = 'none';
      testimonialRef.current.style.transform = 'translateX(-33.33%)';
      
      // Force reflow
      testimonialRef.current.getBoundingClientRect();
      
      // Animate backward
      testimonialRef.current.style.transition = 'transform 1s ease-in-out';
      testimonialRef.current.style.transform = 'translateX(0)';
      
      // After animation completes
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsTransitioning(false);
      }, 1000);
    }
  };

  // Get the visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
      testimonials[(currentIndex + 3) % testimonials.length] // Extra one for smooth transition
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="px-4 overflow-hidden">
        <div 
          ref={testimonialRef}
          className="flex gap-6"
          style={{ width: '133.33%' }} // To accommodate the extra card
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <Testimonial
                content={testimonial.content}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={prevSlide}
        disabled={isTransitioning}
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={nextSlide}
        disabled={isTransitioning}
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${currentIndex === index ? 'bg-[#00a9e0]' : 'bg-gray-300'}`}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentIndex(index);
              }
            }}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}