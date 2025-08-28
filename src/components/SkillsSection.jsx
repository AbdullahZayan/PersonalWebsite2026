import React, { useState, useEffect } from "react"
import {
  Code,
  Terminal,
  Database,
  Globe,
  Server,
  FileCode,
  Braces,
  Cpu,
  GitBranch,
  Github,
  FileText,
  BarChart3,
  Palette,
  Settings,
} from "lucide-react"

export default function SkillsSection() {
  const [animatedLevels, setAnimatedLevels] = useState({})

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "JavaScript", level: 90, icon: <FileCode className="w-5 h-5" />, color: "text-yellow-400" },
        { name: "TypeScript", level: 50, icon: <Braces className="w-5 h-5" />, color: "text-blue-400" },
        { name: "Python", level: 45, icon: <Code className="w-5 h-5" />, color: "text-green-400" },
        { name: "HTML", level: 95, icon: <Globe className="w-5 h-5" />, color: "text-orange-400" },
        { name: "CSS", level: 95, icon: <Palette className="w-5 h-5" />, color: "text-blue-300" },
        { name: "Node.js", level: 85, icon: <Server className="w-5 h-5" />, color: "text-green-500" },
        { name: "Express.js", level: 85, icon: <Terminal className="w-5 h-5" />, color: "text-gray-300" },
        { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5" />, color: "text-green-600" },
        { name: "SQL", level: 50, icon: <Database className="w-5 h-5" />, color: "text-blue-500" },
        { name: "PHP", level: 35, icon: <Code className="w-5 h-5" />, color: "text-purple-400" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "VS Code", icon: <FileCode className="w-5 h-5" />, color: "text-blue-400" },
        { name: "Git", icon: <GitBranch className="w-5 h-5" />, color: "text-orange-500" },
        { name: "GitHub", icon: <Github className="w-5 h-5" />, color: "text-gray-300" },
        { name: "Jira", icon: <Settings className="w-5 h-5" />, color: "text-blue-500" },
        { name: "Power BI", icon: <BarChart3 className="w-5 h-5" />, color: "text-yellow-500" },
        { name: "Word", icon: <FileText className="w-5 h-5" />, color: "text-blue-600" },
        { name: "Excel", icon: <BarChart3 className="w-5 h-5" />, color: "text-green-500" },
        { name: "PowerPoint", icon: <FileText className="w-5 h-5" />, color: "text-red-500" },
        { name: "Canva", icon: <Palette className="w-5 h-5" />, color: "text-purple-500" },
      ],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const levels = {}
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          if (skill.level) {
            levels[skill.name] = skill.level
          }
        })
      })
      setAnimatedLevels(levels)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Custom Progress Component
  const Progress = ({ value, className }) => (
    <div className={`w-full bg-slate-700/50 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value || 0}%` }}
      />
    </div>
  )

  // Custom Badge Component
  const Badge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${className}`}>
      {children}
    </span>
  )

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        {/* Floating code symbols */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-cyan-400/20 text-2xl font-mono animate-pulse">
            &lt;/&gt;
          </div>
          <div className="absolute top-3/4 right-1/4 text-purple-400/20 text-xl font-mono animate-pulse">
            {}
          </div>
          <div
            className="absolute top-1/2 left-1/6 text-blue-400/20 text-lg font-mono animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            ( )
          </div>
          <div
            className="absolute bottom-1/4 right-1/3 text-indigo-400/20 text-2xl font-mono animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            [ ]
          </div>
        </div>

        {/* Moving border lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400/50 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-t from-transparent via-indigo-400/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <Code className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] group rounded-lg"
            >
              {/* Card Header */}
              <div className="p-6 pb-6">
                <div className="flex items-center space-x-3 text-2xl">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}
                  >
                    {category.icon}
                  </div>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    {category.title}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-0 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group/skill"
                    style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                  >
                    {skill.level ? (
                      // Programming Languages with Progress Bars
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}
                            >
                              {skill.icon}
                            </div>
                            <span className="font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10 group-hover/skill:bg-cyan-500/20 transition-colors duration-300"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress value={animatedLevels[skill.name] || 0} className="h-2 bg-slate-700/50" />
                      </div>
                    ) : (
                      // Tools & Technologies as Badges
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group-hover/skill:scale-105">
                        <div className={`${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-cyan-400/60">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400/60" />
            <Code className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-mono">Continuously Learning & Growing</span>
            <Code className="w-4 h-4 animate-pulse" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
        </div>
      </div>
    </section>
  )
}