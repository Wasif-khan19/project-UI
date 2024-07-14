import { HoverEffect } from "@/Components/UI/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Frontend",
    description:
      "HTML5, CSS3, Bootstrap, ANT DESIGN, MUI (Material-UI), SHADCN, ACETERNITY, FRAMER MOTION.",
    link: "",
  },
  {
    title: "Backend",
    description:
      "Django, NodeJS, ExpressJS, PostgreSQL, Firebase, MongoDB, MySQL, Next.js, NestJS, Apollo Server, PHP, Laravel",
    link: "",
  },
  {
    title: "Cloud",
    description:
      "PostgreSQL, Firebase, MongoDB, MySQL, AWS, AZURE.",
    link: "",
  },
  
];
