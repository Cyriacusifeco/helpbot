import Header from './Header/Header';
import About from './About/About';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
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
