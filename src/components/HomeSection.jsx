import LetterGlitch from "./LetterGlitch"

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#00ffff", "#ff00ff", "#ffff00", "#00ff00"]}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Hello, I'm a Abdullah Zayan
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Recent graduate passionate about creating innovative solutions through code. I specialize in full-stack
            development and love turning complex problems into elegant, user-friendly applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a
    href="/AbdullahZayanCVKuwait.pdf"
    download
    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <svg
        className="w-5 h-5 transition-transform group-hover:scale-110"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      Download CV
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </a>

  <a
    href="#projects"
    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
  >
    View My Work
  </a>
</div>
        </div>

        <div className="absolute -top-10 -left-10 w-20 h-20 border border-cyan-500/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-12 h-12 border border-pink-500/30 rounded-lg rotate-12 animate-bounce"></div>
      </div>
    </section>
  )
}

export default HomeSection
