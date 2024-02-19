import { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className={`nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <button className="burger-menu" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>          
          <li className="nav-item close-button">
            <button onClick={handleMenuClose}><i className="bi bi-x-lg"></i></button>
          </li>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects">My projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
