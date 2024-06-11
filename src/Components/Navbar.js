import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (

    <nav id="nav-container" className="nav-container">
      <img id="logo" src="./images/logo_new.svg" onClick={handleLogoClick} alt="logo Escmeanything" />

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <a href="/about" className="nav-link">About</a>
        <a href="/projects" className="nav-link">Projects</a>
        <a href="/contact" className="nav-link">Contact</a>
        <button id="btTrans" className="nav-link" onClick={lightModeFunction}>
          <img id="light-mode" className="icon" src="./images/light.svg" alt="Toggle light mode" value="1" />
        </button>
      </div>
    </nav>
  );

  //Função que altera tema da página. 
  //A variável element serve para definir qual elemento será alterado.
  function lightModeFunction() {
    var element = document.documentElement;
    element.classList.toggle("light-mode");
  }

}

export default Navbar;
