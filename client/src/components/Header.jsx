import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="flex">
            <img src={logo} alt="ProJoe Logo" className="mr-2" />
            ProJoe
          </div>
        </a>
      </div>
    </nav>
  );
}
