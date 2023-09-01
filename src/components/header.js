import * as React from "react";
import { Link } from "gatsby";
// Import the style from seprate css file
import "../components/headerStyle.css" 


//Typesc.png was not loading into the website, same with the Blue rose img, so I had to use external links
const Header = ({ siteTitle }) => (
  <header className="header"> 
  <h1 id="headerh1">Muhammads Challenge</h1>
    <nav className="navbar">
    <Link to="using-typescript">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="TSLOGO"></img>
    </Link>
    <Link to="/">
      IndexPage
    </Link>
    <Link to="/page-2">
      Page2
    </Link>
    <Link to="/using-typescript">
      Using TypeScript
    </Link>
    <Link to="/" className="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <path d="M50 10 L10 45 L10 80 L40 80 L40 60 L60 60 L60 80 L90 80 L90 45 Z" fill="#3178C6"/>
</svg>
</Link>
<img src="https://images.unsplash.com/photo-1564640227760-db286729bf83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHJvc2UlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Blue rose">
</img>
    </nav>
    <img
      alt="Gatsby logo"
      height={20}
      style={{ margin: 0 }} 
      src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E...SVG data...%3E%3C/svg%3E"
    />
  </header>
);

export default Header;
