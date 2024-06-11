import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <p>© {currentYear}. All Rights Reserved. Ezequiel Escobar.</p>
    </footer>
  );
}

export default Footer;
