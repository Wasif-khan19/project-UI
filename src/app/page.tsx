import Grid from "@/Components/Pages/Grid";
import Hero from "@/Components/Pages/Hero";
import { FloatingNav } from "@/Components/UI/floating-navbar";

import Image from "next/image";
import { BiHome } from "react-icons/bi";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:"Home", link:"/", icon:<BiHome/>}
        ]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
