"use client"
import { useState } from 'react'

const skills = [
  { icon: '🎨', name: 'Tailwind CSS', color: 'bg-cyan-500' },
  { icon: '🚀', name: 'JavaScript', color: 'bg-yellow-400' },
  { icon: '⚛️', name: 'React.js', color: 'bg-blue-400' },
  { icon: '⚡', name: 'Vite.js', color: 'bg-purple-500' },
  { icon: '🔍', name: 'SEO', color: 'bg-green-500' },
  { icon: '🎭', name: 'Figma', color: 'bg-pink-500' },
  { icon: '▲', name: 'Next.js', color: 'bg-white text-black' },
]

export default function DevPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null); // Updated type

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 py-20">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl font-bold mb-2 text-gray-100">Sourav Chhimpa</h1>
          <h2 className="text-2xl text-gray-300">Freelance Web Developer</h2>
          <p className="text-lg mt-2 text-gray-400">Rajasthan, India</p>
        </header>

        <div className="mb-8 animate-fade-in-up">
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">About Me</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Passionate about crafting exceptional digital experiences, I bring your ideas to life with fully animated and interactive websites. My expertise extends beyond coding to include SEO optimization and intuitive design with Figma, ensuring your website not only looks amazing but also performs flawlessly.
            </p>
          </div>
        </div>

        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Skills & Expertise</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                  className={`${skill.color} p-3 rounded-lg flex flex-col items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <span className="text-xs text-center">{skill.name}</span>
                </div>
              ))}
            </div>
            {activeSkill && (
              <div className="mt-4 p-4 bg-gray-700 rounded-lg animate-fade-in">
                <p className="text-sm text-gray-200">
                  {`${activeSkill} is one of my core skills. I have extensive experience using it in various projects.`}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/sourav-chhimpa/" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 hover:rotate-6">
                <span className="sr-only">LinkedIn</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
              <a href="https://github.com/Souravhere" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 hover:rotate-6">
                <span className="sr-only">GitHub</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-114.7-28-114.7-124.3 0-27.5 9.8-50 25.9-67.8-2.6-6.2-11.3-31.7 2.6-66.4 0 0 21.3-6.9 70.2 25.8 20.3-5.6 41.9-8.5 63.5-8.5 21.6 0 43.2 2.9 63.5 8.5 48.9-32.7 70.2-25.8 70.2-25.8 13.6 34.7 5.2 60.3 2.6 66.4 16.1 17.8 25.9 40.4 25.9 67.8 0 96.9-58.9 118-115.1 124.3 9.1 8.2 17 23.7 17 48.1 0 35.1-.3 78.4-.3 87.4 0 6.6 4.3 14.4 17.3 12.1C426.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
