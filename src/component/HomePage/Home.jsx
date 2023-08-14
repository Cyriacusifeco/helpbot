import NavBar from './NavBar/Navbar';
import Hero from './Hero/Hero';
import '../Hero/Hero.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div>
        <h1>hi, Barbie!</h1>
      </div>
    </>
  );
}
