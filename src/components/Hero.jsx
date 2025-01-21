import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
              <img
                src="/assets/main.jpg"
                className="img-cover"
                alt="Profile"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 text-3xl font-bold mt-5 mb-8 lg:mb-10 max-w-[15ch]">
            Hi! I'm Aryan Srivastava
          </h2>
          <h3 className="text-lg lg:text-xl font-semibold text-pink-400 mb-4">
            An Android Developer
          </h3>
          <p className="text-base lg:text-lg text-zinc-400 leading-relaxed mb-6">
            I hold expertise in{" "}
            <span className="font-medium text-zinc-300">Kotlin</span> & Jetpack.
            Besides, I have experience in building Native Android projects in{" "}
            <span className="font-medium text-zinc-300">Java</span> and{" "}
            <span className="font-medium text-zinc-300">XML</span>. I'm also
            semi-skilled in video editing and graphic designing.
          </p>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="My Resume" icon="download" />
           
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 to-sky-200 rounded-[60px] overflow-hidden">
            <img
              src="/assets/main.jpg"
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


