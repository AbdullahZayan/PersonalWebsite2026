import { useState } from "react"
import { ExternalLink, Github, Code2, Smartphone, Brain, ShoppingCart } from "lucide-react"

const projects = [
  {
     id: 1,
    title: "HealthCare Storage System",
    description:
      "Comprehensive healthcare data management system for storing and organizing patient records, medical histories, and healthcare documents with secure access controls and data encryption.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/AbdullahZayan/HealthCare-Storage-System",
    icon: Brain,
    gradient: "from-cyan-500 to-blue-500",
    year: "2025",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce application with product catalog, shopping cart, secure payment integration, user authentication, and admin dashboard for inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/AbdullahZayan/E-Commerce_MERN",
    icon: ShoppingCart,
    gradient: "from-purple-500 to-pink-500",
    year: "2024",
  },
  {
    id: 3,
    title: "ToDo List App",
    description:
      "Interactive task management application with add, edit, delete functionality, task prioritization, completion tracking, and responsive design for productivity enhancement.",
    technologies: ["React", "Next.js"],
    githubUrl: "https://github.com/AbdullahZayan/TodoList_React.js",
    icon: Smartphone,
    gradient: "from-green-500 to-teal-500",
    year: "2024",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-float-reverse" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-slow" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-slide-right" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-yellow-500/50 to-transparent animate-slide-left" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-slide-down" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent animate-slide-up" />

        {/* Floating Code Symbols */}
        <div className="absolute top-1/4 left-1/3 text-orange-500/20 text-2xl font-mono animate-float-slow">
          &lt;/&gt;
        </div>
        <div className="absolute top-3/4 right-1/3 text-yellow-500/20 text-xl font-mono animate-float-reverse">{`{}`}</div>
        <div className="absolute top-1/2 left-1/4 text-purple-500/20 text-lg font-mono animate-float-slow">[]</div>
        <div className="absolute bottom-1/4 right-1/4 text-pink-500/20 text-2xl font-mono animate-float-reverse">
          ()
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest software engineering projects showcasing full-stack development and
            modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Border */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
                  style={{ padding: "1px" }}
                >
                  <div className="w-full h-full bg-slate-800/90 rounded-2xl" />
                </div>

                <div className="relative p-8">
                  {/* Project Icon & Year */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm text-orange-400 font-mono bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-cyan-300 rounded-full border border-slate-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:animate-spin" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Particles */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-slate-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-gray-400 font-medium">Projects Built</div>
            </div>
            <div className="w-px h-12 bg-slate-600" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                8+
              </div>
              <div className="text-sm text-gray-400 font-medium">Technologies</div>
            </div>
            <div className="w-px h-12 bg-slate-600" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                2+
              </div>
              <div className="text-sm text-gray-400 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
