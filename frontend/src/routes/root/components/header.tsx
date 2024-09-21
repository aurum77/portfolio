import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full max-w-3xl p-4">
      {/* need to determine what to do in case of mobile */}
      <nav className="flex flex-row justify-center items-center w-full">
        <Link to="/" className="font-bold text-gruvbox-yellow">
          Name Surname
        </Link>
        <div className="flex gap-6 ml-auto">
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
