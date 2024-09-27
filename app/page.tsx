import Hero from "./components/Hero";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Agenda from "./components/Agenda";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <section className="">
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
      <section className=" ">
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
