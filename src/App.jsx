import { useEffect, useState } from 'react';
import Navigation from './components/Navigation'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('dev'); // 'dev' or 'content'
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const devProjects = [
    {
      title: "Women in the Profession",
      description: "A simple website built using HTML and CSS, focused on showcasing women in professional fields.",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://women-in-profession.vercel.app/",
      githubUrl: "https://github.com/gichuhiii/women-in-profession"
    },
    {
      title: "MYCOUNSELLOR",
      description: "A counsellor booking android application built using Kotlin and MySQL Database, enabling efficient appointment scheduling.",
      technologies: ["Kotlin", "MySQL", "Android"],
      projectUrl: "https://github.com/gichuhiii/mycounsellor",
      githubUrl: "https://github.com/gichuhiii/mycounsellor"
    },
    {
      title: "ESOMA",
      description: "A web clone of the ESOMA KE online learning platform, providing educational resources and interactive learning experiences.",
      technologies: ["React", "Node.js", "MongoDB"],
      projectUrl: "https://github.com/gichuhiii/esoma-clone",
      githubUrl: "https://github.com/gichuhiii/esoma-clone"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_100%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative">
        <Navigation />

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="heading-xl mb-6 animate-slide-down">
                  Hey there! I'm <span className="text-gradient font-bold">Natasha Gichuhi</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl animate-fade-in">
                  Crafting <span className="text-blue-600 font-semibold">digital experiences</span> by day,
                  creating <span className="text-purple-600 font-semibold">engaging content</span> by night
                </p>
                <div className="flex justify-center md:justify-start gap-4 animate-slide-up">
                  <button 
                    className={`${activeTab === 'dev' ? 'btn-primary transform hover:scale-105 transition-transform' : 'btn-secondary hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('dev')}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Build & Design
                    </span>
                  </button>
                  <button 
                    className={`${activeTab === 'content' ? 'btn-primary transform hover:scale-105 transition-transform' : 'btn-secondary hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('content')}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Create & Connect
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6 scale-105"></div>
                  <img 
                    src="/image.jpeg" 
                    alt="Natasha Gichuhi" 
                    className="rounded-2xl shadow-2xl object-cover w-full h-full animate-fade-in relative z-10"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/10 to-transparent z-20"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </section>

        {activeTab === 'dev' ? (
          <>
            {/* About Section - Developer */}
            <section id="about" className="section bg-white/80 backdrop-blur-sm">
              <div className="section-container">
                <h2 className="heading-lg text-center mb-12 animate-on-scroll">
                  <span className="text-gradient">Code</span> is My Canvas
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 animate-on-scroll">
                    <p className="text-gray-600 text-lg">
                      As a full-stack developer, I transform ideas into reality through elegant code. Currently crafting pixel-perfect experiences
                      as a Junior Frontend Developer at Revolution Analytics, where every project tells a unique story.
                    </p>
                    <p className="text-gray-600 text-lg">
                      Armed with a Bachelor's degree in Informatics and Computer Science from Strathmore University,
                      I blend technical precision with creative innovation to build solutions that make a difference.
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg animate-on-scroll hover:transform hover:scale-105 transition-all duration-300">
                    <h3 className="heading-md mb-6">Technical Expertise</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-blue-600">Frontend & Design</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="skill-tag hover:scale-110 transition-transform">HTML</span>
                          <span className="skill-tag hover:scale-110 transition-transform">CSS</span>
                          <span className="skill-tag hover:scale-110 transition-transform">JavaScript</span>
                          <span className="skill-tag hover:scale-110 transition-transform">React</span>
                          <span className="skill-tag hover:scale-110 transition-transform">Tailwind</span>
                          <span className="skill-tag hover:scale-110 transition-transform">UI/UX</span>
                          <span className="skill-tag hover:scale-110 transition-transform">Figma</span>
                          <span className="skill-tag hover:scale-110 transition-transform">Sketch</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-purple-600">Backend & Mobile</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="skill-tag hover:scale-110 transition-transform">PHP</span>
                          <span className="skill-tag hover:scale-110 transition-transform">Laravel</span>
                          <span className="skill-tag hover:scale-110 transition-transform">MySQL</span>
                          <span className="skill-tag hover:scale-110 transition-transform">Kotlin</span>
                          <span className="skill-tag hover:scale-110 transition-transform">Android</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section bg-white/60 backdrop-blur-sm">
              <div className="section-container">
                <h2 className="heading-lg text-center mb-12 animate-on-scroll">
                  <span className="text-gradient">Featured</span> Creations
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {devProjects.map((project, index) => (
                    <div key={index} className="animate-on-scroll transform hover:scale-105 transition-all duration-300" 
                         style={{ animationDelay: `${index * 200}ms` }}>
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          // Content Creation Section
          <section id="content" className="section bg-white/80 backdrop-blur-sm">
            <div className="section-container">
              <h2 className="heading-lg text-center mb-12 animate-on-scroll">
                <span className="text-gradient">Content</span> That Connects
              </h2>
              
              {/* UGC Introduction */}
              <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
                <h3 className="heading-md mb-4">Digital Storyteller & User Generated Content (UGC) Creator</h3>
                <p className="text-gray-600 text-lg">
                  I don't just create content – I craft digital experiences that resonate. With a unique blend of tech expertise
                  and creative vision, I help brands tell their stories in ways that captivate and convert.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
                {/* Content Focus Areas */}
                <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg animate-on-scroll hover:transform hover:scale-105 transition-all duration-300 flex flex-col">
                  <h3 className="heading-md mb-6">Content Expertise</h3>
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                      <span className="text-blue-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Engaging Product Showcases</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg transition-colors">
                      <span className="text-purple-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Tech Tips & Life Hacks</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-pink-50 rounded-lg transition-colors">
                      <span className="text-pink-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Educational Content</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-lg transition-colors">
                      <span className="text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Lifestyle & Growth</span>
                    </div>
                  </div>
                </div>

                {/* Brands Section */}
                <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg animate-on-scroll hover:transform hover:scale-105 transition-all duration-300 flex flex-col">
                  <h3 className="heading-md mb-6">Let's Create Magic Together ✨</h3>
                  <div className="space-y-4 flex-grow">
                    <p className="text-gray-600">
                      Ready to elevate your brand's digital presence? Here's what I bring to the table:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Authentic Product Storytelling</span>
                      </li>
                      <li className="flex items-center gap-2 p-3 hover:bg-purple-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Engaging Social Media Content</span>
                      </li>
                      <li className="flex items-center gap-2 p-3 hover:bg-pink-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Strategic Brand Partnerships</span>
                      </li>
                      <li className="flex items-center gap-2 p-3 hover:bg-green-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tech Product Marketing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="text-center animate-on-scroll">
                <h3 className="heading-md mb-8">Connect With Me</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://www.tiktok.com/@gichuhiiii" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 btn-secondary hover:transform hover:scale-105 transition-all duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V11a8.55 8.55 0 006.33 2.62V10.28a4.84 4.84 0 01-3.77-4.25V5.6a4.83 4.83 0 004.66 3.64V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V11a8.55 8.55 0 006.33 2.62V10.28a4.84 4.84 0 01-3.77-4.25V5.6a4.83 4.83 0 003.77 4.25v3.38z"/>
                    </svg>
                    TikTok
                  </a>
                  <a href="https://www.instagram.com/gichuhiii/?hl=en" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 btn-secondary hover:transform hover:scale-105 transition-all duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="http://www.linkedin.com/in/natasha-gichuhi" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 btn-secondary hover:transform hover:scale-105 transition-all duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
        </a>
      </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="section bg-white/60 backdrop-blur-sm">
          <div className="section-container">
            <h2 className="heading-lg text-center mb-12 animate-on-scroll">
              Let's Create Something <span className="text-gradient">Amazing</span>
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-gray-600 text-lg mb-4">
                {activeTab === 'dev' ? (
                  <>
                    For development inquiries: {' '}
                    <a href="mailto:tashakuigichuhi@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      tashakuigichuhi@gmail.com
                    </a>
                  </>
                ) : (
                  <>
                    For content creation and collaborations: {' '}
                    <a href="mailto:gichuhicreates@gmail.com" className="text-purple-600 hover:text-purple-700 font-medium">
                      gichuhicreates@gmail.com
                    </a>
                  </>
                )}
              </p>
            </div>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const email = activeTab === 'dev' ? 'tashakuigichuhi@gmail.com' : 'gichuhicreates@gmail.com';
              window.location.href = `mailto:${email}?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(formData.get('message'))}`;
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" required className="input-field focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" required className="input-field focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <input type="text" id="subject" name="subject" required className="input-field focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={4} required className="input-field focus:ring-2 focus:ring-blue-500 transition-all duration-300"></textarea>
              </div>
              <div>
                <button type="submit" className="btn-primary w-full hover:transform hover:scale-105 transition-all duration-300">
                  Send Message
        </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default App
