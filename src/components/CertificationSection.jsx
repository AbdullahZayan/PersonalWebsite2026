import { useRef } from "react"
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const certificates = [
  {
    id: 1,
    name: "Professional in Agile and SCRUM",
    year: "2025",
    description:
      "Comprehensive training in Agile methodologies and SCRUM framework, covering sprint planning, team collaboration, and iterative development practices.",
    platform: "Udemy",
    category: "Software Engineer",
  },
  {
    id: 2,
    name: "Scrum Master Certification",
    year: "2025",
    description: "Professional certification focusing on SCRUM Master role, facilitating agile teams, removing impediments, and ensuring project delivery excellence.",
    platform: "Udemy",
    category: "Software Engineer",
  },
  {
    id: 3,
    name: "Professional Certificate in DevOps",
    year: "2025",
    description: "Complete DevOps training covering CI/CD pipelines, containerization, automation tools, and infrastructure as code practices.",
    platform: "Udemy",
    category: "Software Engineer",
  },
  {
    id: 4,
    name: "Python Performance Optimization",
    year: "2025",
    description: "Advanced Python techniques for optimizing code performance, memory management, profiling, and efficient algorithm implementation.",
    platform: "Udemy",
    category: "Software Engineer",
  },
  {
    id: 5,
    name: "Python for Data Science & Machine Learning",
    year: "2025",
    description: "Comprehensive data science course using Python, covering machine learning algorithms, statistical analysis, and predictive modeling.",
    platform: "Udemy",
    category: "Data Science & Analytics",
  },
  {
    id: 6,
    name: "Master Python With NumPy for Data Science",
    year: "2025",
    description: "Specialized training in NumPy library for numerical computing, array operations, and scientific computing applications in data science.",
    platform: "Udemy",
    category: "Data Science & Analytics",
  },
  {
    id: 7,
    name: "SQL From Zero To Hero",
    year: "2025",
    description: "Complete SQL mastery from basics to advanced queries, database design, optimization, and complex data manipulation techniques.",
    platform: "Udemy",
    category: "DataBase",
  },
  {
    id: 8,
    name: "MySQL for Beginner",
    year: "2025",
    description: "Foundational MySQL database course covering installation, basic queries, table management, and essential database operations.",
    platform: "Udemy",
    category: "DataBase",
  },
  {
    id: 9,
    name: "MERN Stack",
    year: "2024",
    description: "Full-stack JavaScript development using MongoDB, Express.js, React, and Node.js for building modern web applications.",
    platform: "Udemy",
    category: "Web Development",
  },
  {
    id: 10,
    name: "HTML&CSS for beginners",
    year: "2024",
    description: "Fundamental web development course covering HTML structure, CSS styling, responsive design, and modern web page creation.",
    platform: "Udemy",
    category: "Web Development",
  },
  {
    id: 11,
    name: "CSS and JavaScript Crash Course",
    year: "2024",
    description: "Intensive course combining CSS styling techniques and JavaScript programming for interactive and dynamic web development.",
    platform: "Udemy",
    category: "Web Development",
  },
]

const CertificationSection = () => {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="certificates" className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Enhanced Floating Orbs with more movement */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-60 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-xl animate-float-slow"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>

        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-slide-left"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent animate-slide-down"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent animate-slide-up"></div>

        {/* Floating Certificates Icons with enhanced animation */}
        <div className="absolute top-1/4 left-1/3 text-cyan-500/20 animate-float-slow">
          <Award size={24} />
        </div>
        <div className="absolute top-3/4 right-1/4 text-purple-500/20 animate-float-reverse">
          <Award size={20} />
        </div>
        <div className="absolute top-1/2 left-1/6 text-emerald-500/20 animate-float-slow">
          <Award size={28} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-pink-500/20 animate-float-reverse">
          <Award size={22} />
        </div>
        <div className="absolute bottom-1/4 left-2/3 text-indigo-500/20 animate-float-slow">
          <Award size={26} />
        </div>

        {/* Pulsing Dots */}
        <div className="absolute top-32 left-1/2 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-40 right-1/2 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-sm">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Professional Certifications</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
            My Achievements
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Continuous learning through professional certifications in modern technologies and development practices
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 backdrop-blur-sm border border-cyan-500/40 rounded-full flex items-center justify-center text-cyan-300 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 backdrop-blur-sm border border-cyan-500/40 rounded-full flex items-center justify-center text-cyan-300 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Certificates Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certificates.map((cert, index) => (
              <div key={cert.id} className="flex-shrink-0 w-80 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Certificate Icon */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar size={14} />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="relative z-10">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                      {cert.name}
                    </h3>

                    <p className="text-gray-200 text-sm leading-relaxed mb-4">{cert.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          U
                        </div>
                        <span className="text-sm text-gray-300">{cert.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                +10
              </div>
              <div className="text-sm text-gray-300">Certificates</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500/30 to-purple-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                +5
              </div>
              <div className="text-sm text-gray-300">Categories</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500/30 to-purple-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                2025
              </div>
              <div className="text-sm text-gray-300">Latest</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
