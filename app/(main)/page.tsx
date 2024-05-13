import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Skill from "./_components/skill";

const page = () => {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Skill />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
