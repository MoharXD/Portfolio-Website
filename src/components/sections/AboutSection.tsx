import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, AnimatedText, TypingHeading, SquishBounce, BorderGlow } from '../ui';

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-20 flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0">
        <SquishBounce>
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, -2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="absolute bottom-[8%] left-[-2%] sm:left-[1%] md:left-[3%] lg:left-[5%] w-[100px] sm:w-[140px] md:w-[180px] z-0">
        <SquishBounce>
          <motion.div animate={{ y: [0, 15, 0], rotate: [0, -4, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0">
        <SquishBounce>
          <motion.div animate={{ y: [0, -18, 0], rotate: [0, -5, 3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
            <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-[8%] right-[-2%] sm:right-[1%] md:right-[3%] lg:right-[5%] w-[130px] sm:w-[170px] md:w-[220px] z-0">
        <SquishBounce>
          <motion.div animate={{ y: [0, 12, 0], rotate: [0, 3, -3, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}>
            <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
        <FadeIn delay={0} y={40}>
          <TypingHeading 
            text="ABOUT ME" 
            className="hero-heading font-black uppercase leading-none tracking-normal text-center mb-10 sm:mb-14 md:mb-16" 
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          />
        </FadeIn>

        <div className="mt-6 sm:mt-8 md:mt-10 w-full max-w-[560px]">
          <AnimatedText 
            text="I am a Junior at Vellore Institute of Technology pursuing my B.Tech in IT. I focus on full-stack development, algorithms, and software engineering. I truly enjoy building software, experimenting with new technologies, and learning by turning ideas into real projects. Let's build something incredible together!" 
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 w-full flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
          {/* Education Card */}
          <FadeIn delay={0.1} y={30} className="w-full lg:w-[60%] z-10">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="205 27 88"
              backgroundColor="#0C0C0C"
              borderRadius={40}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#D7E2EA', '#ffffff', '#D7E2EA']}
              className="w-full h-full shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex flex-col w-full h-full p-6 sm:p-8 md:p-10 relative z-10">
                <h3 className="font-black text-[#D7E2EA] uppercase text-2xl sm:text-3xl lg:text-2xl xl:text-3xl tracking-tight whitespace-nowrap mb-8">Academic Background</h3>
                <div className="flex flex-col">
                  <div className="flex flex-col border-l-2 border-[#D7E2EA]/20 pl-4 sm:pl-6 pb-8 relative before:absolute before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-[#D7E2EA] before:-left-[7px] before:top-1.5 after:absolute after:content-[''] after:w-3 after:h-3 after:rounded-full after:bg-[#D7E2EA] after:animate-ping after:-left-[7px] after:top-1.5">
                    <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-medium mb-1">2024 - 2028</span>
                    <a href="https://maps.app.goo.gl/pZkYUgh3742BgZXWA" target="_blank" rel="noreferrer" className="no-cursor text-[#D7E2EA] font-bold text-lg sm:text-xl hover:text-white transition-colors duration-200">Vellore Institute of Technology</a>
                    <p className="text-[#D7E2EA]/70 mt-1">B.Tech in Information Technology</p>
                  </div>
                  <div className="flex flex-col border-l-2 border-[#D7E2EA]/20 pl-4 sm:pl-6 pb-8 relative before:absolute before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-[#D7E2EA]/40 before:-left-[7px] before:top-1.5">
                    <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-medium mb-1">2022 - 2024</span>
                    <a href="https://maps.app.goo.gl/nD2ao2iAiJb1SaeE7" target="_blank" rel="noreferrer" className="no-cursor text-[#D7E2EA] font-bold text-lg sm:text-xl hover:text-white transition-colors duration-200">St. Patrick's Higher Secondary School</a>
                    <p className="text-[#D7E2EA]/70 mt-1">Intermediate, PCM with Computer Science</p>
                  </div>
                  <div className="flex flex-col border-l-2 border-[#D7E2EA]/20 pl-4 sm:pl-6 relative before:absolute before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-[#D7E2EA]/40 before:-left-[7px] before:top-1.5">
                    <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-medium mb-1">2011 - 2022</span>
                    <a href="https://maps.app.goo.gl/wWhYfimi8xbiQJkSA" target="_blank" rel="noreferrer" className="no-cursor text-[#D7E2EA] font-bold text-lg sm:text-xl hover:text-white transition-colors duration-200">St. Vincent's High & Technical School</a>
                    <p className="text-[#D7E2EA]/70 mt-1">Matriculation, General Studies</p>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </FadeIn>

          {/* Languages Card */}
          <FadeIn delay={0.2} y={30} className="w-full lg:w-[40%] z-10">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="205 27 88"
              backgroundColor="#0C0C0C"
              borderRadius={40}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#D7E2EA', '#ffffff', '#D7E2EA']}
              className="w-full h-full shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex flex-col w-full h-full p-6 sm:p-8 md:p-10 relative z-10">
                <h3 className="font-black text-[#D7E2EA] uppercase text-2xl sm:text-3xl lg:text-2xl xl:text-3xl tracking-tight whitespace-nowrap mb-8">Lingual Proficiency</h3>
                <ul className="flex flex-col gap-4 sm:gap-6">
                  <li className="flex justify-between items-center border-b border-[#D7E2EA]/10 pb-4">
                    <strong className="text-[#D7E2EA] text-lg sm:text-xl font-medium">English</strong>
                    <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">Fluent</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-[#D7E2EA]/10 pb-4">
                    <strong className="text-[#D7E2EA] text-lg sm:text-xl font-medium">Bengali</strong>
                    <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">Fluent</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-[#D7E2EA]/10 pb-4">
                    <strong className="text-[#D7E2EA] text-lg sm:text-xl font-medium">Hindi</strong>
                    <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">Fluent</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <strong className="text-[#D7E2EA] text-lg sm:text-xl font-medium">Japanese</strong>
                    <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">N5 Level</span>
                  </li>
                </ul>
              </div>
            </BorderGlow>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
