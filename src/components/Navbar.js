import logo from "../logo.svg";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </div>
  );
}

export default Navbar;
