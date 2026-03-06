function App() {
  return (
    <>
      <div className="bg-primary outline-0 ">
        {/* navigation starts */}

        <header className="sticky top-0 w-full z-50 backdrop-blur-lg border-b border-white/5 mb-4">
          <div className="flex justify-between py-4 mx-6 items-center xl:mx-23">
            <h1 className="text-white font-mono capitalize sm:text-lg ">
              {"<yashwanth/>"}
              <span className="text-accent">.</span>
            </h1>
            <ul className="hidden md:inline-flex md:text-white/50 md:font-mono md:gap-x-5 uppercase lg:gap-x-7 xl:gap-x-9 ">
              <li className="">home</li>
              <li className="">about</li>
              <li className=""> skills</li>
              <li className="">project</li>
              <li className="">contact</li>
            </ul>
            <button className="text-white text-sm  font-mono capitalize px-5 py-2 border border-white/5 bg-white/10 backdrop-blur-md rounded-xl sm:text-md cursor-pointer hover:bg-primary hover:border-accent hover:text-accent duration-500 transition-all hover:scale-[1.05]">
              hire me
            </button>
          </div>
        </header>

        {/* navigation ends */}

        {/* hero section starts */}
        <section className="relative px-6 pt-2 pb-16 font-poppins md:mt-30 xl:mx-20">
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

          <div className=" inline md:flex md:items-center md:justify-between">
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
                  view project
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
        <section className="mt-8 leading-relaxed mx-6">
          <div>
            <p className="text-accent font-poppins ml-3">About</p>
            <h1 className="text-white font-poppins ml-5 mt-2 text-4xl font-semibold tracking-tight">
              Who I am.
            </h1>

            <div className="border border-white/4 bg-white/5 text-poppins group text-white capitalize rounded-2xl mt-10 relative overflow-hidden backdrop-blur-md ">
              <div className="absolute -top-10 right-10 w-42 h-52 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors"></div>
              <i className="border-b h-60 border-white/10 text-[4rem] mx-auto flex items-center justify-evenly sm:h-70">
                👨&zwj;💻
              </i>
              <p className="mt-5 font-semibold font-poppins pl-3">
                Yashwanth kumar
              </p>
              <p className="text-accent uppercase font-poppins text-sm font-semibold tracking-wider pl-3 mt-1">
                java full stack developers
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
                <div className="p-1 rounded-full bg-green-500 w-1 h-1 ml-2"/>
                <h2 className="text-green-500 text-[13px] font-semibold">open to work</h2>
              </div>
            </div>
          </div>
        </section>

        {/* About me sectios ends */}
      </div>
    </>
  );
}
export default App;
