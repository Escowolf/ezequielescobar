import React from 'react';

function Navbar() {
  return (
    <nav id="nav-container" className="nav-container">
      <img id="logo" src="./images/logo_new.svg" alt="logo Escmeanything" />

      <div className="nav-links">
        <a href="#welcome-section" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">About</a>
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
