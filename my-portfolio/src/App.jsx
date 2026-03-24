import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Code2,
  Database,
  ExternalLink,
  Layers,
  MonitorSmartphone,
} from "lucide-react";
import "../src/App.css";

function App() {
  const whatappNumnber = "918148035717";
  const message = "hi were are like to hire you !!!";
  const url = `https://wa.me/${whatappNumnber}?text=${encodeURIComponent(message)}`;
  const SECRETKEY = "0f513161-d12f-4245-83f5-33bee768137e";

  const skills = ["Reactjs", "tailwindcss", "java", "springboot", "mysql", "postgres", "restapi's", "docker"];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <div className="bg-primary outline-0 scroll-smooth">
        {/* Navigation */}
        <header className="sticky top-0 w-full z-50 backdrop-blur-lg border-b border-white/5 mb-4">
          <div className="flex justify-between py-4 mx-6 items-center xl:mx-24">
            <h1 className="text-white font-mono capitalize sm:text-lg">
              {"<yashwanth/>"}
              <span className="text-accent">.</span>
            </h1>
            <ul className="hidden md:flex md:text-white/50 md:font-mono md:gap-x-5 uppercase lg:gap-x-7 xl:gap-x-9">
              {["home", "about", "project", "contact"].map((item) => (
                <li key={item} className="nav duration-500 hover:text-accent">
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="text-white text-sm font-mono capitalize px-5 py-2 border border-white/5 bg-white/10 backdrop-blur-md rounded-xl sm:text-md cursor-pointer hover:border-accent hover:text-accent duration-500"
            >
              <a href={url}>hire me</a>
            </motion.button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative px-6 pt-2 pb-16 font-poppins md:mt-30 xl:mx-24" id="home">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 text-blue-300 text-xs uppercase tracking-widest mb-10">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Java Full Stack Developer
            </p>

            <h1 className="text-6xl font-bold leading-tight tracking-tight mb-10 lg:text-7xl xl:text-8xl">
              <span className="block text-white">Building things</span>
              <span className="block text-white/20">that matter</span>
              <span className="block text-blue-400">for people.</span>
            </h1>
          </motion.div>

          <hr className="border-white/10 mb-10" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="md:border-r border-white/10 md:pr-10 lg:pr-32 py-4">
              <h3 className="text-gray-400/60 lg:text-lg">About</h3>
              <p className="text-white/50 mt-7 text-justify max-w-lg">
                Crafting <span className="text-white">scalable backends</span> with Spring Boot and 
                <span className="text-white"> clean UIs with React</span> — end-to-end, from DB to browser.
              </p>
            </div>
            
            <div className="md:pl-10">
              <h3 className="text-gray-400/60 uppercase text-sm tracking-widest">GET STARTED</h3>
              <div className="flex flex-col gap-4 mt-4">
                <motion.button whileHover={{ scale: 1.05 }} className="rounded-lg py-3 px-10 text-white bg-blue-700 hover:bg-accent transition duration-500 shadow-md">
                  <a href="#project">view project</a>
                </motion.button>
                <motion.a href="/yashwanth-kumar-resume.pdf" download whileHover={{ scale: 1.05 }} className="rounded-lg py-3 px-10 text-white/40 border border-white/20 backdrop-blur-md bg-white/5 text-center">
                  My resume
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Slider (Replaces Marquee) */}
        <div className="py-10 border-y border-white/5 overflow-hidden whitespace-nowrap">
          <motion.div 
            className="flex gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="text-white/20 font-poppins uppercase tracking-widest flex items-center gap-4">
                <span className="text-accent text-3xl">•</span> {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* About Section */}
        <section className="mt-20 leading-relaxed xl:mx-24 pb-20 px-6" id="about">
          <p className="text-accent font-poppins xl:text-xl">About</p>
          <h1 className="text-white font-poppins mt-2 text-4xl font-semibold xl:text-6xl">Who I am.</h1>
          
          <div className="xl:flex xl:justify-between gap-16 mt-10">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="border border-white/5 bg-white/5 text-white rounded-2xl p-6 relative overflow-hidden group mb-10 xl:mb-0 xl:w-96"
            >
              <div className="absolute -top-10 right-10 w-42 h-52 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
              <div className="h-48 border-b border-white/10 text-[4rem] flex items-center justify-center">👨‍💻</div>
              <p className="mt-5 font-semibold">Yashwanth kumar</p>
              <p className="text-accent uppercase text-xs font-bold tracking-widest mt-1">java full stack developer</p>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2 text-sm text-white/40"><span>location</span><span className="text-white">TamilNadu, India</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2 text-sm text-white/40"><span>Stack</span><span className="text-accent text-xs">java | react | springboot</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2 text-sm text-white/40"><span>Degree</span><span className="text-white">MBA</span></div>
              </div>

              <div className="flex items-center px-4 py-2 gap-x-3 bg-green-400/10 rounded-lg mt-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <h2 className="text-green-500 text-xs font-bold uppercase tracking-widest">open to work</h2>
              </div>
            </motion.div>

            <div className="flex-1">
              <p className="font-poppins text-white/40 xl:text-xl text-justify">
                <span className="text-white/80">Java Full Stack Developer | Scalable Systems & Seamless UIs.</span> I build high-performance products with a focus on clean architecture and user-centric design.<br /><br />
                <span className="text-accent">Based in Tamil Nadu,</span> I’m passionate about the full development lifecycle—from solid database design to responsive frontends.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                {["clean code", "problem solver", "team player", "fast learner", "open source"].map(trait => (
                  <span key={trait} className="bg-white/5 px-5 py-2 rounded-xl text-white/30 border border-white/10 text-xs hover:border-accent hover:text-accent cursor-default transition-all">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <div className="border-t border-white/5 py-24 mx-6 xl:mx-24" id="project">
          <h3 className="text-accent font-poppins xl:text-xl uppercase tracking-widest">work</h3>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <h1 className="text-white font-poppins text-4xl font-semibold xl:text-6xl">Selected projects.</h1>
            <p className="text-white/40 font-poppins max-w-xs mt-4">Real apps built end-to-end from database to deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SmileCart - E-Commerce",
                link: "https://github.com/Yashwanthkumar-dev/SmileCart-Backend.git",
                desc: "Designed a Robust REST API using Spring Boot. Managed relational data handling with MySQL. Built a Dynamic Shopping Experience with React.js and Tailwind CSS.",
                tech: ["Springboot", "Reactjs", "tailwindcss", "java", "mysql", "docker"]
              },
              {
                title: "YoursGiftStory",
                link: "https://github.com/Yashwanthkumar-dev/yoursGiftStory.git",
                desc: "Developing a Highly Visual & Interactive UI tailored to the gifting industry. Focusing on UX to simplify customization. Leveraging Tailwind CSS for responsive design.",
                tech: ["Reactjs", "tailwindcss", "freelance"]
              }
            ].map((p, idx) => (
              <motion.div 
                key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="border border-accent/20 rounded-2xl p-8 bg-white/5 group hover:bg-white/[0.08] transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <h1 className="font-poppins text-accent text-xl">{p.title}</h1>
                  <a href={p.link} target="_blank" rel="noreferrer"><ExternalLink size={20} className="text-accent group-hover:scale-125 transition-all" /></a>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{p.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {p.tech.map(t => <span key={t} className="border border-accent/30 px-4 py-1 rounded-full text-accent text-[10px] uppercase tracking-widest">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="border-t border-white/5 mx-6 xl:mx-24 py-24">
          <p className="text-accent uppercase tracking-widest xl:text-xl">expertise</p>
          <h1 className="text-white font-poppins text-4xl font-semibold xl:text-6xl mb-16">What I bring.</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Layers size={22} />, title: "Full-Stack Architecture", subtitle: "building logic and experience", desc: "I architect systems where every piece fits perfectly. My strength lies in bridging the gap between a high-performance Java backend and a seamless React frontend." },
              { icon: <Database size={22} />, title: "Backend & Database", subtitle: "Data Built for the Long Haul", desc: "Focusing on clean MySQL schemas optimized for speed and integrity. I build for today with an eye on tomorrow." },
              { icon: <MonitorSmartphone size={22} />, title: "Frontend Excellence", subtitle: "Interfaces with an Impact", desc: "Using Tailwind CSS, I craft pixel-perfect, mobile-first UIs that don't just look good but feel natural to use." },
              { icon: <Code2 size={22} />, title: "Software Engineering", subtitle: "Code that Speaks for Itself", desc: "Writing code that is clean, modular, and built to be shared. Following SOLID principles to ensure scalability." }
            ].map((e, idx) => (
              <motion.div 
                key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="border border-white/5 bg-white/5 p-8 rounded-2xl"
              >
                <h1 className="text-white/80 text-xl font-semibold mb-4">{e.title}</h1>
                <div className="flex items-center gap-3 mb-6 text-accent/60">
                  {e.icon} <h2 className="text-xs uppercase font-bold tracking-widest">{e.subtitle}</h2>
                </div>
                <p className="text-white/40 text-sm leading-relaxed text-justify">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-24 pb-12" id="contact">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="border border-accent/50 px-6 py-2 rounded-full bg-white/5 text-accent text-xs uppercase tracking-[0.3em]">Let's connect</span>
            <h1 className="font-bold text-white text-6xl md:text-8xl tracking-tighter mt-12">let's build</h1>
            <p className="text-accent italic text-6xl md:text-8xl tracking-tighter -mt-2">together.</p>
            <p className="text-white/30 mt-10 max-w-sm mx-auto leading-relaxed">Open to full-time roles, freelance, and interesting collaborations. I respond within 24 hours.</p>

            <div className="mt-16 max-w-md mx-auto">
              <form method="POST" action="https://api.web3forms.com/submit" className="flex flex-col sm:flex-row gap-3 p-1.5 bg-white/5 border border-white/10 rounded-2xl focus-within:border-accent/50 transition-all">
                <input type="hidden" name="access_key" value={SECRETKEY} />
                <input type="email" placeholder="yourname@gmail.com" name="email" required className="flex-1 bg-transparent py-4 px-6 outline-none text-white text-sm" />
                <button type="submit" className="bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 text-xs uppercase">Submit</button>
              </form>
            </div>

            <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-white/20 font-mono text-[10px] gap-6 uppercase tracking-widest">
              <h1>{"<yashwanth kumar />"}</h1>
              <p>@ {new Date().getFullYear()} . JAVA FULL STACK DEVELOPER</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;