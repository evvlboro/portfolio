import {
  About,
  ContactForm,
  ContactModalProvider,
  Contacts,
  Education,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <ContactModalProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contacts />
      </main>
      <Footer />
      <ContactForm />
    </ContactModalProvider>
  );
}
