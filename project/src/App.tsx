import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, FileText } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-80"></div>
          <img
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="photo.jpg"
                  alt="Your Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-full shadow-lg">
                <Code2 size={20} />
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Yaswanth Chintada</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Full Stack Developer
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex space-x-4">
              <a href="https://github.com/yaswanth8900" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yaswanth-chintada/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:chyaswanth890@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1n_YUS8DByJaQfFppmKvJXrhvqJcUeXJN/view?usp=drive_link"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-600 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </div>
          <a href="#about" className="animate-bounce inline-block">
            <ChevronDown size={32} className="text-gray-600" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="text-indigo-600" />
                About Me
              </h2>
              <p className="text-gray-600 mb-6">
              I am a motivated Full Stack Java Developer with a strong foundation in Java, and front-end technologies like React.
 Proficient in database management, including SQL and MongoDB, and knowledgeable in cloud basics such as AWS. I
 am eager to apply my skills in developing web applications.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2 justify-center">
            <Code2 className="text-indigo-600" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "React", "Java", "Node.js",
              "Python", "AWS", "Docker","JavaScript","HTML", "CSS",
              "GraphQL", "MongoDB", "MySQL"
            ].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2 justify-center">
            <Briefcase className="text-indigo-600" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "A full-stack e-commerce solution with React and Node.js",
                link: "#"
              },
              {
                title: "Task Management App",
                description: "Real-time task management application with React and Firebase",
                link: "#"
              }
            ].map((project) => (
              <div key={project.title} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:chyaswanth890@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 Yaswanth Chintada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
