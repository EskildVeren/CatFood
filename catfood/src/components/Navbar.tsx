import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Hjem</Link>
      <Link to="/">Oppskriftfinner</Link>
      <Link to="/">Om meg</Link>
      <Link to="/">Ta kontakt</Link>
      <Link to="/writerecipe">Lag en oppskrift!</Link>
    </div>
  );
}

export default Navbar;
