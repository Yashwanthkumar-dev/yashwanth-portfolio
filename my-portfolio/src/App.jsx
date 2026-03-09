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
  const url = `https://wa.me/${whatappNumnber}?${message}`;
  const SECRETKEY = "0f513161-d12f-4245-83f5-33bee768137e";

  return (
    <>
      <div className="bg-primary outline-0 scroll-smooth duration-700">
        {/* navigation starts */}

        <header className="sticky top-0 w-full z-50 backdrop-blur-lg border-b border-white/5 mb-4">
          <div className="flex justify-between py-4 mx-6 items-center xl:mx-23">
            <h1 className="text-white font-mono capitalize sm:text-lg ">
              {"<yashwanth/>"}
              <span className="text-accent">.</span>
            </h1>
            <ul className="hidden md:inline-flex md:text-white/50 md:font-mono md:gap-x-5 uppercase lg:gap-x-7 xl:gap-x-9 ">
              <li className="nav duration-500 hover:text-accent">
                {" "}
                <a href="#home">home</a>{" "}
              </li>
              <li className="nav duration-500 hover:text-accent">
                <a href="#about">about</a>
              </li>
              {/* <li className="nav duration-500 hover:text-accent"> skills</li> */}
              <li className="nav duration-500 hover:text-accent">
                <a href="#project">project</a>
              </li>
              <li className="nav duration-500 hover:text-accent">
                <a href="#contact">contact</a>
              </li>
            </ul>
            <button className="text-white text-sm  font-mono capitalize px-5 py-2 border border-white/5 bg-white/10 backdrop-blur-md rounded-xl sm:text-md cursor-pointer hover:bg-primary hover:border-accent hover:text-accent duration-500 transition-all hover:scale-[1.05]">
              <a href={url}>hire me</a>
            </button>
          </div>
        </header>

        {/* navigation ends */}

        {/* hero section starts */}
        <section
          className="relative px-6 pt-2 pb-16 font-poppins md:mt-30 xl:mx-20"
          id="home"
        >
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse  transition-transform duration-700" />

          <p className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 text-blue-300 text-xs uppercase tracking-widest mb-10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Java Full Stack Developer
          </p>

          <h1 className="text-6xl font-bold leading-tight tracking-tight mb-10 lg:text-7xl xl:text-8xl">
            <span className="block text-white">Building things</span>
            <span className="block text-white/20">that matter</span>
            <span className="block text-blue-400">for people.</span>
          </h1>

          <hr className="border-white/10 mb-10" />

          {/*                                                            parent open                        */}

          <div className=" inline md:flex md:items-center md:justify-between ">
            {/* left side  */}
            <div className=" border md:border-r-gray-400/10 md:pr-7 md:py-10 lg:pr-30 lg:pl-3 xl:pl-10 xl:pr-0 xl:border-0">
              <h3 className="text-gray-400/60 font-poppins md:text-md lg:text-lg">
                About
              </h3>

              <p className="text-white/50 mt-7 text-justify font-poppins md:w-85 md:leading-relaxed md:text-md lg:text-lg lg:w-95 xl:w-1/2">
                Crafting <span className="text-white"> scalable backends </span>
                with Spring Boot and
                <span className="text-white"> clean UIs with React</span> —
                end-to-end, from DB to browser.
              </p>
            </div>
            <hr className="border-white/10 my-8 md:hidden" />

            {/* right side */}
            <div className=" xl:mr-47">
              <h3 className="text-gray-400/60 font-poppins uppercase lg:text-md ">
                GET STARTED
              </h3>
              <div className="flex flex-col">
                <button className="rounded-lg py-3 w-full text-white font-poppins  capitalize mt-4 bg-blue-700 hover:bg-accent md:w-80 lg:w-98 xl:w-120 transition duration-500 hover:shadow-accent shadow-md cursor-pointer hover:scale-110">
                  <a href="#project"> view project</a>
                </button>
                <button className="rounded-lg py-3 w-full text-white/40 font-poppins  capitalize mt-4  border border-white/20 backdrop-blur-md bg-white/1 md:w-80 lg:w-98 xl:w-120 hover:bg-white/10 cursor-pointer transition duration-500 hover:scale-110">
                  get in touch
                </button>
              </div>
            </div>
          </div>
          {/* parent close */}
        </section>

        {/* hero section ends */}

        {/* skills list movement */}

        <div className="py-4 ">
          <marquee scrollamount="2">
            <ul className="flex items-center list-disc gap-x-20 capitalize justify-between">
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                Reactjs
              </li>
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                tailwindcss
              </li>
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                java
              </li>
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                springboot
              </li>
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                mysql
              </li>
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                postgres
              </li>
              <li className="text-white/20 font-poppins tracking-wide marker:text-accent  pr-10">
                restapi's
              </li>
            </ul>
          </marquee>
        </div>
        {/* About me section starts*/}
        <section className="mt-8 leading-relaxed xl:mx-17 pb-10" id="about">
          <p className="text-accent font-poppins ml-3 xl:text-xl">About</p>
          <h1 className="text-white font-poppins ml-5 mt-2 text-4xl font-semibold tracking-tight xl:text-6xl">
            Who I am.
          </h1>
          <div className="xl:flex xl:justify-between xl:mx-6 xl:gap-x-5">
            <div className="border border-white/4 bg-white/5 text-poppins group text-white capitalize rounded-2xl mt-10 relative overflow-hidden backdrop-blur-md mx-4 xl:w-230">
              <div className="absolute -top-10 right-10 w-42 h-52 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors"></div>
              <i className="border-b h-60 border-white/10 text-[4rem] mx-auto flex items-center justify-evenly sm:h-70">
                👨&zwj;💻
              </i>
              <p className="mt-5 font-semibold font-poppins pl-3">
                Yashwanth kumar
              </p>
              <p className="text-accent uppercase font-poppins text-sm font-semibold tracking-wider pl-3 mt-1">
                java full stack developer
              </p>
              <div className="flex border-b border-white/10 pb-2 justify-between capitalize font-poppins text-sm mx-3 p-3 mt-3">
                <p className="text-white/20 tracking-wide">location</p>
                <p className="text-sm">TamilNadu,India</p>
              </div>

              <div className="flex border-b border-white/10 pb-2 justify-between capitalize font-poppins text-sm mx-3 p-3 mt-3">
                <p className="text-white/20 tracking-wide">Stack</p>
                <p className="text-accent text-[12px]">
                  java | react | springboot
                </p>
              </div>

              <div className="flex border-b border-white/10 pb-2 justify-between capitalize font-poppins text-sm mx-3 p-3 mt-3">
                <p className="text-white/20 tracking-wide">Degree</p>
                <p className="text-sm">MBA</p>
              </div>

              <div className="flex border border-green-400/10 mx-3 items-center px-1 py-2 gap-x-3 bg-green-400/10 rounded-lg mt-3 mb-5">
                <div className="p-1 rounded-full bg-green-500 w-1 h-1 ml-2" />
                <h2 className="text-green-500 text-[13px] font-semibold">
                  open to work
                </h2>
              </div>
            </div>
            <div className="mt-20">
              <p className="font-poppins text-white/40 xl:text-xl xl:leading-relaxed text-justify mx-4">
                <span className="text-white/80">
                  Java Full Stack Developer | Scalable Systems & Seamless UIs.
                </span>{" "}
                I build high-performance products with a focus on clean
                architecture and user-centric design.
                <br />
                <br />
                <span className="text-accent">Based in Tamil Nadu,</span> I’m
                passionate about the full development lifecycle—from solid
                database design to responsive frontends.
                <br />
                <br />I believe in code that is as readable as it is functional,{" "}
                <span className="text-white/80">
                  built to grow as your business does.
                </span>
              </p>
              <ul className="text-white font-poppins mt-10 capitalize flex items-center gap-x-12 flex-wrap  overflow-hidden mx-4 space-y-3">
                <li className="bg-white/5 px-5 py-2 rounded-xl text-white/20 border border-white/10 text-[13px] transition duration-700 hover:text-accent hover:border-accent cursor-pointer">
                  clean code
                </li>
                <li className="bg-white/5 px-5 py-2 rounded-xl text-white/20 border border-white/10 text-[13px] transition duration-700 hover:text-accent hover:border-accent cursor-pointer">
                  problem solver
                </li>
                <li className="bg-white/5 px-5 py-2 rounded-xl text-white/20 border border-white/10 text-[13px] transition duration-700 hover:text-accent hover:border-accent cursor-pointer">
                  team player
                </li>
                <li className="bg-white/5 px-5 py-2 rounded-xl text-white/20 border border-white/10 text-[13px] transition duration-700 hover:text-accent hover:border-accent cursor-pointer">
                  fast learner
                </li>
                <li className="bg-white/5 px-5 py-2 rounded-xl text-white/20 border border-white/10 text-[13px] transition duration-700 hover:text-accent hover:border-accent cursor-pointer pointer-events-none">
                  open source
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About me sectios ends */}

        {/* project section starts */}

        <div
          className="border border-t-white/5 relative overflow-hidden py-20 mx-4"
          id="project"
        >
          <div className="absolute bg-accent/10 w-50 h-50 top-10 right-19 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bg-accent/10 w-50 h-50 top-180 left-19 rounded-full blur-3xl pointer-events-none" />

          <div className="mt-13">
            <h3 className=" text-accent font-poppins ml-3 xl:text-xl">work</h3>
          </div>
          <div className=" xl:flex items-center justify-between">
            <div>
              <h1 className="text-white font-poppins ml-5 mt-2 text-4xl font-semibold tracking-tight xl:text-6xl">
                Selected projects.
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-white/40 font-poppins tracking-wider leading-relaxed font-light pl-4 mr-6">
                Real apps build end-to-end database to deployment
              </p>
            </div>
          </div>
          <div className="xl:grid grid-cols-2 gap-8 lg:grid lg:grid-cols-2 mx-7">
            <div className="border border-accent/20 rounded-lg p-5 leading-relaxed mt-8 bg-white/3 group">
              <a href="https://github.com/Yashwanthkumar-dev/SmileCart-Backend.git">
                <div className="flex item-center justify-between">
                  <h1 className="font-poppins text-accent text-lg sm:text-xl">
                    SmileCart -Full Stack E-Commerce Platform
                  </h1>
                  <a href="">
                    <ExternalLink
                      size={20}
                      className="text-accent group-hover:scale-[1.3] duration-700 transition-all"
                    />
                  </a>
                </div>
              </a>

              <div>
                <p className="text-white/50 text-justify leading-relaxed mt-4 text-md">
                  Designed a Robust REST API using Spring Boot for seamless
                  product management and user authentication.Implemented a
                  Secure Checkout Flow and integrated MySQL for efficient
                  relational data handling {"(Orders, Users, Products)."}
                  Built a Dynamic Shopping Experience with React.js and Tailwind
                  CSS, focusing on mobile-first responsiveness.
                </p>
              </div>

              <ul className="text-white flex flex-wrap font-poppins items-center gap-4 mt-5">
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  Springboot
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  Reactjs
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  tailwindcss
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  java
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  mysql
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  docker
                </li>
              </ul>
            </div>

            <div className="border border-accent/20 rounded-lg p-5 leading-relaxed mt-8 bg-white/3 group">
              <a href="https://github.com/Yashwanthkumar-dev/yoursGiftStory.git">
                <div className="flex item-center justify-between">
                  <h1 className="font-poppins text-accent/80 text-lg">
                    YoursGiftStory – Personalized Gifting Platform
                  </h1>
                  <a href="">
                    <ExternalLink
                      size={20}
                      className="text-accent group-hover:scale-[1.3] duration-700 transition-all"
                    />
                  </a>
                </div>
              </a>

              <div>
                <p className="text-white/50 text-justify leading-relaxed mt-4 text-md">
                  Developing a Highly Visual & Interactive UI tailored to the
                  gifting industry's aesthetic needs. Focusing on User
                  Experience
                  {" (UX)"} to simplify the customization process for
                  personalized gifts. Leveraging Tailwind CSS for rapid UI
                  development and ensuring pixel-perfect design across all
                  devices.
                </p>
              </div>

              <ul className="text-white flex flex-wrap font-poppins items-center gap-4 mt-5">
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  Reactjs
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  tailwindcss
                </li>
                <li className="border border-accent/50 backdrop-md bg-white/5  px-5 py-1 rounded-xl text-accent tracking-wide">
                  freelance
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* project section ends */}

        {/* expertise section starts */}
        <div className="border border-t-white/5 mx-4 py-20 ">
          <p className="text-accent font-poppins ml-3 xl:text-xl uppercase mt-10 tracking-wide">
            expertise
          </p>
          <h1 className="text-white font-poppins ml-5 mt-2 text-4xl font-semibold tracking-wide xl:text-6xl">
            What I bring.
          </h1>
          {/* cart starts */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:mx-16">
            {/* 1 card */}
            <div className="border border-white/2 bg-white/5 p-6 rounded-xl mt-9">
              <h1 className="text-white/60 font-poppins capitalize text-2xl text-center leading-relaxed">
                Full-Stack Architecture
              </h1>
              <div className="flex items-center gap-3 mt-4 text-lg">
                <i>
                  <Layers size={20} className="text-accent/60" />
                </i>
                <h2 className="text-accent/60 capitalize font-poppins">
                  building logic and experience
                </h2>
              </div>
              <p className="text-white/50 text-justify mt-4 font-poppins capitalize leading-relaxed">
                I don’t just build features; I architect systems where every
                piece fits perfectly. My strength lies in bridging the gap
                between a high-performance Java/Spring Boot backend and a
                seamless React frontend. For me, it’s about ensuring that the
                complex logic hidden under the hood translates into a fast,
                intuitive, and reliable experience for the user. I make sure the
                'handshake' between the server and the browser is always
                flawless.
              </p>
            </div>

            {/* 2 card */}
            <div className="border border-white/2 bg-white/5 p-6 rounded-xl mt-9">
              <h1 className="text-white/60 font-poppins capitalize text-2xl text-center leading-relaxed">
                Backend & Database
              </h1>
              <div className="flex items-center gap-3 mt-4 text-lg">
                <i>
                  <Database size={20} className="text-accent/60" />
                </i>
                <h2 className="text-accent/60 capitalize font-poppins">
                  Data Built for the Long Haul
                </h2>
              </div>
              <p className="text-white/50 text-justify mt-4 font-poppins capitalize leading-relaxed">
                I believe a product is only as strong as its foundation. Whether
                it’s managing thousands of products in SmileCart or handling
                custom client data, I focus on building clean MySQL schemas that
                are optimized for speed and integrity. I’m obsessed with
                database normalization and query performance because I know that
                as your business scales, your data shouldn't be what slows you
                down. I build for today with an eye on tomorrow.
              </p>
            </div>

            {/* 3 card */}
            <div className="border border-white/2 bg-white/5 p-6 rounded-xl mt-9">
              <h1 className="text-white/60 font-poppins capitalize text-2xl text-center leading-relaxed">
                Frontend Excellence
              </h1>
              <div className="flex items-center gap-3 mt-4 text-lg">
                <i>
                  <MonitorSmartphone size={20} className="text-accent/60" />
                </i>
                <h2 className="text-accent/60 capitalize font-poppins">
                  Interfaces with an Impact
                </h2>
              </div>
              <p className="text-white/50 text-justify mt-4 font-poppins capitalize leading-relaxed">
                Code is invisible to the user—the interface is everything.
                That’s why I treat the frontend with as much respect as the
                backend logic. Using Tailwind CSS, I craft pixel-perfect,
                mobile-first UIs that don't just look good but feel natural to
                use. In projects like YoursGiftStory, I focus on the
                'micro-moments'—smooth transitions and rapid load times—because
                I know that a great user experience is what turns a visitor into
                a loyal customer.
              </p>
            </div>

            {/* 4 card */}
            <div className="border border-white/2 bg-white/5 p-6 rounded-xl mt-9">
              <h1 className="text-white/60 font-poppins capitalize text-2xl text-center leading-relaxed">
                Software Engineering
              </h1>
              <div className="flex items-center gap-3 mt-4 text-lg">
                <i>
                  <Code2 size={20} className="text-accent/60" />
                </i>
                <h2 className="text-accent/60 capitalize font-poppins">
                  Code that Speaks for Itself
                </h2>
              </div>
              <p className="text-white/50 text-justify mt-4 font-poppins capitalize leading-relaxed">
                I’m a firm believer that 'done' is not the same as 'right.' I
                write code that is clean, modular, and built to be shared. By
                following SOLID principles and maintaining strict engineering
                standards, I ensure that my projects are easy to maintain and
                simple to scale. I focus on reducing technical debt from day
                one, so that when the business needs to pivot or grow, the
                codebase is a launchpad, not an anchor.
              </p>
            </div>
          </div>
          {/* cart ends*/}
        </div>
        {/* expertise section ends */}

        {/* footer section starts */}
        <footer>
          <div
            className="relative overflow-hidden border border-t-white/5 pt-20"
            id="contact"
          >
            <div className="absolute w-50 h-50 blur-2xl bg-accent/20 top-20 right-50 md:right-130" />
            <div className="text-center">
              <p className="w-fit mx-auto border border-accent/50 px-5 py-2 rounded-2xl bg-white/5 text-accent backdrop-blur-md capitalize">
                Let's connect
              </p>
            </div>

            <div className="mt-8">
              <h1 className="font-bold font-poppins text-white w-fit mx-auto capitalize text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl">
                let's build
              </h1>
              <p className="text-accent  w-fit mx-auto italic font-poppins text-4xl mt-1 tracking-wide md:text-5xl lg:text-6xl xl:text-7xl">
                together.
              </p>
            </div>
            <div>
              <p className="text-white/30 text-center mt-8 leading-relaxed mx-3">
                Open to full-time roles, freelance, and interesting
                collaborations. I respond within 24 hours.
              </p>
            </div>

            <div className="mt-12 max-w-md mx-auto outline-0 mb-4">
              <form
                method="POST"
                action="https://api.web3forms.com/submit"
                className="flex flex-col sm:flex-row gap-3 p-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md focus-within:border-accent/50 transition-all"
              >
                <input type="hidden" name="access_key" value={SECRETKEY} />
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  name="email"
                  className="flex-1 bg-transparent py-3 px-4 outline-none text-white placeholder:text-white/20 font-poppins text-sm"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/80 text-white font-poppins px-6 py-3 rounded-lg transition-all active:scale-95 font-semibold text-sm cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="border border-t-white/10 flex items-center justify-between mt-10 py-5">
              <div className="ml-6">
                <h1 className="text-white/20 font-mono mt-4 text-xl">
                  {"<yashwanth kumar />"}
                </h1>
              </div>
              <div className="ml-6">
                <h2 className="text-white/20 font-mono mt-4 text-lg mr-8">
                  @ {new Date().getFullYear()} . JAVA FULL STACK DEVELOPER
                </h2>
              </div>
            </div>
          </div>
        </footer>
        {/* footer section ends */}
      </div>
    </>
  );
}
export default App;
