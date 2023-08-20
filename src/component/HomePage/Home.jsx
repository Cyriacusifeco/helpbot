import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Features from './Features/Features';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
      </main>
    </>
  );
};

export default Home;
