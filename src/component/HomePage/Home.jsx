import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
