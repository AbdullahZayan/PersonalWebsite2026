import { useState } from "react"
import { Mail, Phone, Linkedin, Send, MapPin, Calendar } from "lucide-react"

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: "abdullahzayan.my@gmail.com",
      action: () => window.open("mailto:your.email@example.com"),
      description: "Send me an email",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      value: "Abdullah Zayan",
      action: () => window.open("https://www.linkedin.com/in/abdullah-zayan-/", "_blank"),
      description: "Connect with me",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      value: "+965 98817655",
      action: () => window.open("tel:+96598817655"),
      description: "Just Text me :)",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-reverse" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-xl animate-float-slow" />

        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-slide-right" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500 to-transparent animate-slide-left" />

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/3 text-cyan-500/20 animate-float-slow">
          <Send size={24} />
        </div>
        <div className="absolute top-3/4 right-1/4 text-blue-500/20 animate-float-reverse">
          <MapPin size={20} />
        </div>
        <div className="absolute bottom-1/3 left-1/5 text-green-500/20 animate-float-slow">
          <Calendar size={18} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-pulse">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's connect and build something amazing together.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact) => {
            const IconComponent = contact.icon
            return (
              <div
                key={contact.id}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  hoveredCard === contact.id ? "z-20" : "z-10"
                }`}
                onMouseEnter={() => setHoveredCard(contact.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={contact.action}
              >
                {/* Card Background */}
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.color} opacity-20 animate-pulse`}
                    />
                  </div>

                  {/* Floating Background Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${contact.color} mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <IconComponent size={28} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {contact.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {contact.description}
                    </p>

                    {/* Value */}
                    <p className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300 break-all">
                      {contact.value}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great Together</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              I'm always excited to work on new projects and collaborate with talented individuals.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
