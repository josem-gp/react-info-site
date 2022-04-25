import logo from "../logo.svg";

function Navbar() {
  return (
    <navbar className="nav">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </navbar>
  );
}

export default Navbar;
