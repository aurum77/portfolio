import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full max-w-3xl p-4">
      {/* need to determine what to do in case of mobile */}
      <nav className="flex flex-row justify-center items-center w-full">
        <Link to="/" className="font-bold text-catppuccin-sapphire">
          Name Surname
        </Link>
        <ul className="flex gap-6 ml-auto">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
