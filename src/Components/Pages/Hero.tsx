import { RiSendPlaneFill } from "react-icons/ri";
import MagicButton from "../UI/MagicButton";
import { Spotlight } from "../UI/Spotlight";
import { TextGenerateEffect } from "../UI/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Wizardry for Dynamic Web Solutions
          </h2>

          <TextGenerateEffect
            words="Transforming Ideas into Digital Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Aqib Akram, Web and Application Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Contact Me"
              icon={<RiSendPlaneFill />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
