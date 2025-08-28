import { useState, useEffect } from "react"
import { Menu, X, Code, User, Award, Mail, ChevronDown, Terminal, Cpu, Zap, FolderOpen } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [particles, setParticles] = useState([])

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-md border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-cyan-500/25">
                <Terminal className="w-5 h-5 text-white animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Abdullah Zayan
                </span>
                <span className="text-xs text-cyan-300/70 font-mono">Cs major</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a
                href="#home"
                className="relative px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 font-medium group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-4 h-4 group-hover:animate-spin transition-transform duration-300" />
                  <span>Home</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="#about"
                className="relative px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 font-medium group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>About</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="#skills"
                className="relative px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 font-medium group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Code className="w-4 h-4 group-hover:animate-bounce transition-transform duration-300" />
                  <span>Skills</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="#projects"
                className="relative px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 font-medium group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <FolderOpen className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Projects</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="#certificates"
                className="relative px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 font-medium group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Award className="w-4 h-4 group-hover:animate-pulse transition-transform duration-300" />
                  <span>Certificates</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="#contact"
                className="relative ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 border-0 overflow-hidden group px-6 py-2 rounded-md inline-flex items-center space-x-2"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span>Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/30 px-3 py-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6 animate-spin" /> : <Menu className="w-6 h-6 hover:animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-slate-800/95 backdrop-blur-md rounded-xl mt-2 border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
              <a
                href="#home"
                className="block px-4 py-3 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3"
                onClick={toggleMenu}
              >
                <Zap className="w-4 h-4" />
                <span>Home</span>
              </a>

              <a
                href="#about"
                className="block px-4 py-3 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3"
                onClick={toggleMenu}
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </a>

              <div className="px-4 py-3">
                <div className="text-cyan-300 font-medium flex items-center space-x-3 mb-3">
                  <Code className="w-4 h-4" />
                  <span>Skills</span>
                </div>
                <div className="ml-7 space-y-2">
                  <a
                    href="#programming-languages"
                    className="block px-3 py-2 text-sm text-cyan-400/80 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300 flex items-center space-x-2"
                    onClick={toggleMenu}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>Programming Languages</span>
                  </a>
                  <a
                    href="#tools"
                    className="block px-3 py-2 text-sm text-cyan-400/80 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300 flex items-center space-x-2"
                    onClick={toggleMenu}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Tools & Technologies</span>
                  </a>
                </div>
              </div>

              <a
                href="#certificates"
                className="block px-4 py-3 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-green-500/20 hover:to-cyan-500/20 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3"
                onClick={toggleMenu}
              >
                <Award className="w-4 h-4" />
                <span>Certificates</span>
              </a>

              <div className="px-4 py-3">
                <a
                  href="#contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-md inline-flex items-center justify-center space-x-2"
                  onClick={toggleMenu}
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}