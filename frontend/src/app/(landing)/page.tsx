import {
  About,
  Awards,
  Education,
  Experience,
  Footer,
  Hero,
  Nav,
  ResearchInterests,
  Skills,
} from "./components";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="mx-auto w-full max-w-3xl px-6 pb-10">
        <main>
          <Hero />
          <About />
          <ResearchInterests />
          <Education />
          <Experience />
          <Awards />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}
