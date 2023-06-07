import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} Raja Aravindh</p>
    </footer>
  );
}

export default Footer;
