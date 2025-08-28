import { useState } from "react"
import Hyperspeed from "./Hyperspeed"
import { hyperspeedPresets } from "./hyperspeed-presets"

export default function AboutSection() {
  const [activePreset] = useState("one")

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedPresets[activePreset]} />
      </div>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900">
                <img src="/Personal.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-sans">
                I'm a passionate Software Engineer with a fresh perspective and strong foundation in modern
                technologies. Recently graduated with expertise in full-stack development, I love creating innovative
                solutions that bridge the gap between complex technical challenges and user-friendly experiences. My
                journey in computer science has equipped me with both theoretical knowledge and practical skills to
                build scalable, efficient applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative w-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-cyan-400 font-sans">3.36</div>
                  <div className="text-sm text-gray-400 font-sans">CGPA</div>
                </button>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative w-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-purple-400 font-sans">10+</div>
                  <div className="text-sm text-gray-400 font-sans">Projects</div>
                </button>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative w-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-pink-400 font-sans">2+</div>
                  <div className="text-sm text-gray-400 font-sans">Years Coding</div>
                </button>
              </div>
            </div>

            <div className="pt-4">
              <div className="group relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}