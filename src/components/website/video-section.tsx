import { VideoPlayerButton } from './video-player-button'

export function VideoSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="animate__animated animate__fadeIn text-center mb-10">
          <div className="animate__animated animate__fadeInDown animate__delay-1s inline-block mb-2">
            <h5 className="text-[#00a9e0] font-medium">Our Gallery</h5>
            <div className="w-24 h-1 bg-[#00a9e0] mt-1 mx-auto"></div>
          </div>
          <h2 className="animate__animated animate__fadeInUp animate__delay-1s text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-4">
            Our Video
          </h2>
          <p className="animate__animated animate__fadeIn animate__delay-2s text-gray-600 max-w-2xl mx-auto">
            Our Blinds offers both residential and commercial.see our video
          </p>
        </div>

        {/* Video Container */}
        <div className="animate__animated animate__zoomIn animate__delay-2s relative max-w-5xl mx-auto">
          <VideoPlayerButton />
        </div>
      </div>
    </section>
  )
}