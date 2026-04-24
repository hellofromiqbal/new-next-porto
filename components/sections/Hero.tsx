import MotionWrapper from "@/components/motionWrapper/MotionWrapper";
import Image from "next/image";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-svh scroll-mt-14 md:scroll-mt-16 bg-white" aria-labelledby="hero-heading">
      {/* Content Layer */}
      <div className="relative z-10 min-h-svh max-w-7xl mx-auto flex flex-col-reverse lg:flex-row px-4 md:px-10 2xl:px-0 pb-12 md:pb-0">
        {/* Hero Text Content */}
        <div className="flex flex-1 items-end md:items-start lg:items-center -mt-10 lg:mt-0">
          <div className="flex flex-col">
            <MotionWrapper offsetX={-30}>
              <p className="ps-1 text-base md:text-lg text-[#0DB760] w-max">Welcome</p>
            </MotionWrapper>
            <MotionWrapper className="ps-1 mt-2" offsetX={-30} delay={.5}>
              <h1 className="text-3xl md:text-5xl font-bold text-black" id="hero-heading">I have <span className="text-[#0DB760]">Web Development</span> Experience</h1>
            </MotionWrapper>
            <MotionWrapper className="ps-1 mt-4" offsetX={-30} delay={.7}>
              <p className="text-sm md:text-base text-[#323433] md:w-[70%] lg:w-[90%]">I`m Muhammad Iqbal, a Web Developer. I`ve been developing high-performance with great UI/UX web applications for 2 years.</p>
            </MotionWrapper>
            <MotionWrapper className="ps-1 mt-4" offsetX={-30} delay={.9}>
              <div className="flex gap-4">
                <p className="ps-1 text-base md:text-lg text-[#0DB760] w-max">Follow me on:</p>
                <SocialMediaLinks />
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* Hero Image Content */}
        <div className="flex flex-1 items-end mt-10 lg:mt-0 md:items-center justify-center lg:justify-end">
          <MotionWrapper
            className="relative w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px] bg-[#0DB760] overflow-visible"
            offsetX={30}
            delay={.9}
          >
            <MotionWrapper
              className="absolute top-5 lg:top-10 right-5 lg:right-10 w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px] bg-transparent border-3 md:border-4 border-black rounded-xs md:rounded-sm"
              offsetX={-20}
              delay={1.1}
            ></MotionWrapper>
            <Image
              width={350}
              height={350}
              src="/images/your-photo.png"
              alt="Iqbal"
              className="absolute -top-7 md:-top-9 lg:-top-10 object-contain scale-125"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}