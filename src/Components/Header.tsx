import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="bg-Neutral100-FAF5F3 w-full">
      <img src={logo} alt="Tech book club logo" className="mt-6 md:mt-8" />
    </header>
  );
}

export default Header;
