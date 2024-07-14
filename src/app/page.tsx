
import Approach from "@/Components/Approaches";
import Client from "@/Components/Client";
import Experience from "@/Components/Experience";
import { CardHoverEffectDemo } from "@/Components/Pages/Grid";
import Hero from "@/Components/Pages/Hero";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Hero/>
        <CardHoverEffectDemo/>
        <Projects/>
        <Client/>
        <Experience/>
        <Approach/>
      </div>
    </main>
  );
}
