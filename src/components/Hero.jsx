import { ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[#d8c2bb] text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-[#d5c78e]">
                <span className="absolute inset-0 rounded-full bg-[#d5c78e] animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 text-3xl font-bold mt-3 mb-8 lg:mb-10 max-w-[15ch]">
            Hi! I&apos;m Aryan Srivastava
          </h2>
          <h3 className="text-lg lg:text-2xl font-bold text-[#f1dfd9] mb-4">
            Sophomore @ IIIT Allahabad
          </h3>
          <p className="text-base lg:text-lg text-[#d8c2bb] leading-relaxed mb-6">
            I build modern, secure Android apps using <span className="font-medium text-[#d5c78e]">Kotlin</span>, 
            <span className="font-medium text-[#d5c78e]"> Jetpack Compose</span>, and <span className="font-medium text-[#d5c78e]">Firebase</span>. 
            I also work with the MERN stack and have a strong foundation in <span className="font-medium text-[#d5c78e]">Data Structures 
            and Algorithms</span>. I enjoy crafting scalable solutions, exploring design tools, and practicing <span className="font-medium text-[#d5c78e]">competitive 
            programming</span> in my free time.
          </p>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="My Resume" icon="download"/>
           
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[440px] object-fill rounded-[40px] ml-auto overflow-hidden">
            <img
              src="../../assets/cuteFlame.png"
              alt="Hero Image"
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;


