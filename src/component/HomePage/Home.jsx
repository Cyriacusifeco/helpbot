import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Features from './Features/Features';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
