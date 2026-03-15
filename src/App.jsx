import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowDown,
  Plus,
  ChevronLeft,
  ChevronRight,
  Expand,
} from "lucide-react";

const projectData = {
  starride: {
    title: "StarRide Mobile App",
    subtitle: "Community Ride Booking App",
    images: [
      "./assets/starride-1.jpeg",
      "./assets/starride-2.jpeg",
      "./assets/starride-3.jpeg",
      "./assets/starride-4.jpeg",
      "./assets/starride-5.jpeg",
      "./assets/starride-6.jpeg",
    ],
    desc: "StarRide addresses the challenges of informal carpooling on social media by building a safe, structured, and community-based solution. \n\nFeatures include verified drivers/passengers, residential & organizational community segments, and strict smart gender preferences for safety.",
    tags: [
      "React Native",
      "TanStack",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "Expo",
    ],
  },
  chatty: {
    title: "Chatty",
    subtitle: "Organizational Chat Platform",
    images: [
      "./assets/chatty-1.png",
      "./assets/chatty-2.png",
      "./assets/chatty-3.png",
      "./assets/chatty-4.png",
      "./assets/chatty-5.png",
      "./assets/chatty-6.png",
      "./assets/chatty-7.png",
      "./assets/chatty-8.png",
    ],
    desc: "A scalable, multi-tenant organizational chatting platform. Built with .NET 9, React, SQL Server, and Dapper for high-frequency WebSocket messaging. Features real-time presence, typing indicators, read receipts, and strict decoupled repository patterns.",
    tags: [
      ".NET 9",
      "Dapper",
      "SQL Server",
      "React & TS",
      "WebSockets",
      "Tailwind",
    ],
  },
  streetscorer: {
    title: "Street Scorer",
    subtitle: "Digital Cricket Scoring",
    images: [
      "./assets/streetscorer-1.jpeg",
      "./assets/streetscorer-2.jpeg",
      "./assets/streetscorer-3.jpeg",
      "./assets/streetscorer-4.jpeg",
      "./assets/streetscorer-5.jpeg",
      "./assets/streetscorer-6.jpeg",
    ],
    desc: "A mobile application built to modernize local street cricket matches. Replaces paper scorecards with an intuitive, real-time digital scoring system built with React Native and Expo.",
    tags: [
      "React Native",
      "Typescript",
      "Tailwind",
      "SQLite",
      "Zustand",
      "Expo",
    ],
  },
  riphah: {
    title: "Riphah Resource Lake",
    subtitle: "Curated Academic Resources",
    images: [
      "./assets/riphah-1.png",
      "./assets/riphah-2.png",
      "./assets/riphah-3.png",
      "./assets/riphah-4.png",
      "./assets/riphah-5.jpeg",
    ],
    desc: "Curated 100+ resources with structured categorization. Implemented authentication using PHP & MySQL, achieving 300+ users in the first month.",
    tags: ["PHP", "MySQL", "Html/CSS", "Google Drive"],
  },
  starrideweb: {
    title: "StarRide Admin",
    subtitle: "Ecosystem Management Dashboard",
    images: [
      "./assets/starride-web-1.png",
      "./assets/starride-web-2.png",
      "./assets/starride-web-3.png",
      "./assets/starride-web-4.png",
      "./assets/starride-web-5.png",
      "./assets/starride-web-6.png",
      "./assets/starride-web-7.png",
    ],
    desc: "A comprehensive web dashboard to manage the StarRide ecosystem. Features manual and AI-assisted approvals, user management, complaint tracking, and centralized system monitoring.",
    tags: [
      "React & TS",
      "TanStack",
      "Tailwind",
      "MongoDB",
      "Admin Panel",
      "AI Integration",
    ],
  },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const openModal = (key) => {
    setActiveProject(projectData[key]);
    setCurrentImgIndex(0);
  };

  const nextImg = () =>
    setCurrentImgIndex((prev) => (prev + 1) % activeProject.images.length);
  const prevImg = () =>
    setCurrentImgIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1,
    );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(null), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  // Dynamic Experience Calculator
  const getProfessionalExperience = () => {
    const startDate = new Date(2025, 6, 1); // Month is 0-indexed, so 6 is July
    const today = new Date();

    let months = (today.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += today.getMonth();

    // Adjust if we haven't reached the 1st of the current month yet
    if (today.getDate() < startDate.getDate()) {
      months--;
    }

    if (months <= 0) return "just starting out";
    if (months < 12) return `${months} months`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) return `${years}+ years`;
    return `${years} year${years > 1 ? "s" : ""} and ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  };

  const dynamicExperience = getProfessionalExperience();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white pb-20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-md z-40 border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">EU</span>
            </div>
            Ehsan Ullah
          </div>

          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#about" className="hover:text-gray-500 transition-colors">
              About Me
            </a>
            <a
              href="#experience"
              className="hover:text-gray-500 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-gray-500 transition-colors"
            >
              Projects
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Contact Me <ArrowUpRight size={16} />
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#fafafa] z-30 flex flex-col items-center py-12 gap-8 text-2xl font-medium tracking-tight">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About Me
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            Experience
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Me
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-30 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex-1 w-full relative">
          <div className="absolute -left-14 -top-20 -rotate-90 text-gray-400 text-xs tracking-widest uppercase hidden lg:block">
            Software Engineer
          </div>

          <div className="flex gap-12 mb-4">
            <div>
              <h3 className="text-4xl font-light tracking-tighter">+2</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-light tracking-tighter">+5</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                Major Projects
              </p>
            </div>
          </div>

          <h1 className="text-[120px] md:text-[180px] font-light tracking-tighter leading-none -ml-2 text-[#111]">
            Hello
          </h1>
          <p className="text-lg md:text-xl font-medium mt-4 flex items-center gap-2">
            — It's Ehsan a Full Stack Developer.
          </p>

          <a
            href="#about"
            className="mt-20 flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            Scroll down <ArrowDown size={16} />
          </a>
        </div>

        <div className="w-full md:w-5/12 aspect-4/5 bg-gray-200 rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative">
          <img
            src="./assets/pic.jpg"
            alt="Ehsan Ullah"
            className="w-full h-full object-cover object-top scale-105"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-medium tracking-tighter mb-6">
              About Me
            </h2>
            <p className="text-gray-600 text-justify leading-relaxed font-light text-lg">
              I am a dedicated full-stack developer specializing in crafting
              seamless, interactive user experiences and robust backend systems.
              With a strong foundation in modern web standards like .NET, the MERN stack, React Native
              and SQL, I ensure projects look great and perform flawlessly under
              pressure. From real-time organizational tools to community-driven
              mobile apps, I bring creativity and precision to every level of
              development, transforming complex visions into reality.
            </p>

            <a
              href="/Portfolio/assets/resume.pdf"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all"
            >
              Download CV <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-5xl font-light tracking-tighter mb-2">
                  3.77
                </div>
                <p className="text-sm text-gray-500">
                  CGPA in BS Software Engineering
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Riphah International University (2022 - 2026)
                </p>
              </div>
            </div>

            {/* --- Block 1: Personal Experience --- */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="bg-black text-white p-1 rounded-full shrink-0 mt-1">
                <Plus size={16} />
              </div>
              <p className="text-sm text-gray-600 text-justify leading-relaxed font-light">
                With{" "}
                <strong className="font-medium text-black">
                  2+ years of personal coding experience
                </strong>
                , I specialize in creating intuitive, full-stack solutions that
                solve real-world problems and deliver seamless digital
                experiences.
              </p>
            </div>

            {/* --- Block 2: Professional Experience (Dynamic) --- */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="bg-black text-white p-1 rounded-full shrink-0 mt-1">
                <Plus size={16} />
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="inline-block px-3 py-1 bg-gray-100 text-black text-xs font-semibold rounded-full w-max tracking-wide uppercase">
                  {dynamicExperience} Professional Exp.
                </span>
                <p className="text-sm text-gray-600 text-justify leading-relaxed font-light">
                  Since July 2025, I have been working professionally to build
                  scalable backend architectures, craft intuitive frontend
                  interfaces, collaborate with diverse teams, and deploy
                  production-ready applications.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="bg-black text-white p-1 rounded-full shrink-0">
                <Plus size={16} />
              </div>
              <p className="text-sm text-justify text-gray-600 leading-relaxed font-light">
                I thrive on blending robust backend architecture (C#, .NET, SQL)
                with beautiful, responsive frontends (React, Tailwind) to bring
                visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase (Latest Works Layout) */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            • Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">
            Latest Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projectData).map(([key, project], index) => (
            <div
              key={key}
              className="group cursor-pointer flex flex-col"
              onClick={() => openModal(key)}
            >
              <div className="relative aspect-4/5 overflow-hidden bg-gray-100 mb-5 rounded-sm">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay with Arrow that appears on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight size={28} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                {project.subtitle}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <span
                  className={`px-2.5 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm ${
                    index === 0 || index === 2
                      ? "bg-black text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {index === 0 || index === 2 ? "Mobile" : "Web"}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-semibold rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        id="experience"
        className="py-24 px-6 max-w-7xl mx-auto bg-white rounded-[40px] shadow-sm border border-gray-50 p-12 md:p-24 my-20"
      >
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              • Experiences
            </p>
            <h2 className="text-4xl font-medium tracking-tighter mb-4">
              Explore My
              <br />
              Journey
            </h2>
          </div>
          <div className="lg:col-span-2 text-justify text-gray-500 font-light flex items-end">
            Over my career, I've had the opportunity to work on scalable
            platforms, collaborating with diverse teams to bring creative
            solutions to life.
          </div>
        </div>

        <div className="flex flex-col">
          {/* Single Combined Experience Entry */}
          <div className="py-8 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Role & Timeline (Takes 3 columns on large screens) */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-medium tracking-tight">
                Associate Software Engineer
              </h3>
              <p className="text-xs text-gray-500 mt-2 tracking-wide">
                Kodware • July 2025 - Present
              </p>
            </div>

            {/* Description (Takes 6 columns for wider reading area) */}
            <div className="lg:col-span-6 text-sm text-gray-600 font-light pr-4 lg:pr-8 flex flex-col gap-4">
              <p>
                Building responsive user interfaces and developing comprehensive
                admin and superadmin panels to streamline platform management
                and user workflows.
              </p>

              <div>
                <strong className="text-black font-medium">Chatty:</strong>{" "}
                Built a complete full-stack organizational chatting platform.
                Engineered robust backend systems and real-time messaging
                features.
              </div>

              <div>
                <strong className="text-black font-medium">
                  AustGuards:
                </strong>{" "}
                Led frontend development for an Australian enterprise security
                dashboard product, ensuring a seamless user experience.
              </div>
            </div>

            {/* Tech Stack Tags (Takes 3 columns) */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-2 content-start w-full">
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                C# / .NET 9
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                EF Core & Dapper
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                SQL Server
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                React & TS
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                WebSockets
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                Redux
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                Tailwind
              </span>
              <span className="bg-[#f0f0f0] px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-center truncate">
                REST APIs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-6 bg-[#1a1a1a] text-white mt-20 rounded-t-[40px]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">
            Got a Vision? Let's Bring It to Life!
          </h2>
          <p className="text-gray-400 font-light mb-16 text-lg max-w-2xl mx-auto">
            I'm always excited to collaborate on new and innovative projects.
            Whether you're starting from scratch or refining an existing idea.
          </p>

          <form
            action="https://formspree.io/f/mwvrkknv"
            method="POST"
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-white transition-colors text-white placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-white transition-colors text-white placeholder-gray-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-white transition-colors text-white placeholder-gray-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black py-4 rounded-sm font-medium hover:bg-gray-200 transition-colors mt-2"
            >
              Send Message
            </button>
            {formStatus === "success" && (
              <p className="text-green-400 text-sm text-center mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">
                Oops! There was a problem submitting your form.
              </p>
            )}
          </form>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/emehsaan76/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Ehsaaan76"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
            <a
              href="mailto:hello@dnova.com"
              className="text-2xl text-white font-medium tracking-tight"
            >
              emehsaan.76@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Standard Modal */}
      {activeProject && !isFullscreen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={(e) =>
            e.target === e.currentTarget && setActiveProject(null)
          }
        >
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto relative rounded-sm">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 cursor-pointer text-gray-400 hover:text-black z-10"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="p-8 md:p-16">
              <div className="mb-8">
                <h2 className="text-4xl font-medium tracking-tighter mb-2">
                  {activeProject.title}
                </h2>
                <div className="flex gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-widest text-gray-500"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative bg-[#f5f5f5] aspect-video flex items-center justify-center group mb-12">
                <button
                  onClick={prevImg}
                  className="absolute left-4 p-3 bg-white cursor-pointer text-black rounded-full hover:scale-110 transition-transform z-10 shadow-sm"
                >
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </button>

                <img
                  src={activeProject.images[currentImgIndex]}
                  alt="Project View"
                  className="max-h-full max-w-full object-contain cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                />

                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 p-2 bg-white cursor-pointer text-black rounded-sm hover:scale-110 transition-transform z-10 shadow-sm"
                >
                  <Expand size={20} strokeWidth={1.5} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-4 p-3 bg-white cursor-pointer text-black rounded-full hover:scale-110 transition-transform z-10 shadow-sm"
                >
                  <ChevronRight size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="text-gray-600 leading-relaxed font-light text-lg whitespace-pre-wrap max-w-3xl">
                {activeProject.desc}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {isFullscreen && activeProject && (
        <div
          className="fixed inset-0 bg-black z-[60] flex items-center justify-center p-4"
          onClick={(e) =>
            e.target === e.currentTarget && setIsFullscreen(false)
          }
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white/50 cursor-pointer hover:text-white z-10"
          >
            <X size={36} strokeWidth={1.5} />
          </button>
          <button
            onClick={prevImg}
            className="absolute left-4 md:left-12 p-4 text-white/50 cursor-pointer hover:text-white"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          <img
            src={activeProject.images[currentImgIndex]}
            alt="Fullscreen View"
            className="max-w-full max-h-[95vh] object-contain"
          />

          <button
            onClick={nextImg}
            className="absolute right-4 md:right-12 p-4 text-white/50 cursor-pointer hover:text-white"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>
      )}
    </div>
  );
}
