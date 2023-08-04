
import './Newnav.css';
import {BrowserRouter, Link} from "react-router-dom";
function App() {
  return (
    

<header>
  <a href="#main-menu"
     id="main-menu-toggle"
     className="menu-toggle"
     aria-label="Open main menu">
    <span className="sr-only">Open main menu</span>
    <span className="fa fa-bars" aria-hidden="true"></span>
  </a>
  <img src={require("./logooo.png")} id="tl" alt="Logo" />
  <h1 className="logo">Valsco Technology</h1>
  <nav id="main-menu" className="main-menu" aria-label="Main menu">
    <a href="#main-menu-toggle"
       id="main-menu-close"
       className="menu-close"
       aria-label="Close main menu">
      <span className="sr-only">Close main menu</span>
      <span className="fa fa-close" aria-hidden="true"></span>
    </a>
    <h2 id="main-menu-heading" className="sr-only">Main menu</h2>
   <div id="lis">
    <ul aria-labelledby="main-menu-heading" id="lis">
      <li><Link to="/Products" className="lisbox">Products</Link></li>
      <li><a href="#" className="lisbox">About us</a></li>
      <li><a href="#" className='lisbox'>Contact us</a></li>
    </ul>
    </div>
  </nav>
  <a href="#main-menu-toggle"
     className="backdrop"
     tabindex="-1"
     aria-hidden="true" hidden></a>
</header>

  );
}

export default App;