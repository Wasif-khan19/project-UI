import Approach from "@/Components/Pages/Approaches";
import Client from "@/Components/Pages/Client";
import Experience from "@/Components/Pages/Experience";
import Footer from "@/Components/Pages/Footer";
import { CardHoverEffectDemo } from "@/Components/Pages/Grid";
import Hero from "@/Components/Pages/Hero";
import Projects from "@/Components/Pages/Projects";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <CardHoverEffectDemo />
        <Projects />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
