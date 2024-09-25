import Hero from "./components/Hero";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Agenda from "./components/Agenda";
import Faq from "./components/Faq";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="agenda">
        <Agenda />
      </section>
      <section id="faq">
        <Faq />
      </section>
    </div>
  );
}
