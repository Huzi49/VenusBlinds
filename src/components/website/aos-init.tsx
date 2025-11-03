'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Animation duration in milliseconds
      once: true,      // Whether animation should happen only once
      easing: 'ease-in-out',  // Animation easing
      delay: 100,      // Delay before animation starts
      offset: 120,     // Offset (in px) from the original trigger point
      anchorPlacement: 'top-bottom',  // Define which position of the element regarding to window should trigger the animation
    })
  }, [])

  return null
}
