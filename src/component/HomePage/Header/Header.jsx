import NavBar from '../NavBar/Navbar';
import Hero from '../Hero/Hero';
import './Header.css';

const Header = () => {
  return (
    <header className="header" data-section-theme="dark">
      <NavBar />
      <Hero />
    </header>
  );
};

export default Header;
