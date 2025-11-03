'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

export function VideoPlayerButton() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
      {!isPlaying ? (
        <>
          {/* Video Thumbnail */}
          <Image
            src="/hero/blinds-window-2048x1365.webp"
            alt="Venus Blinds Installation Video"
            fill
            className="object-cover animate__animated animate__pulse animate__slow animate__infinite"
          />
          
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#00a9e0]/20"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="group animate__animated animate__heartBeat animate__slow animate__infinite"
            >
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-gray-700 ml-1" />
              </div>
            </button>
          </div>
        </>
      ) : (
        /* Video Player - Replace with actual video */
        <div className="animate__animated animate__fadeIn w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="w-16 h-16 mx-auto mb-4 opacity-50 animate__animated animate__pulse animate__infinite animate__slow" />
            <p className="text-lg animate__animated animate__fadeInUp">Video Player</p>
            <p className="text-sm opacity-75 mt-2 animate__animated animate__fadeInUp animate__delay-1s">Replace this with your actual video component</p>
            <button
              onClick={() => setIsPlaying(false)}
              className="animate__animated animate__fadeInUp animate__delay-2s mt-4 px-6 py-3 bg-[#00a9e0] text-white rounded-full hover:bg-[#0088b3] transition-colors"
            >
              Close Video
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
