import Hero from "./main-components/Hero";
import About from "./main-components/About";
import Team from "./main-components/Team";
import Clients from "./main-components/Clients";
import ProjectsGrid from "./main-components/ProjectsGrid";
import Testimonials from "./main-components/Testimonials";
import CTABar from "./sections/CTABar";

export default function Main() {
  return (
    <section>
      <Hero />

      <About />

      <Team />

      <ProjectsGrid />

      <Clients />

      <Testimonials />

      <CTABar />
    </section>
  );
}
