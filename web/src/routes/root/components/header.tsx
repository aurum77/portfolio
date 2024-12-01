import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full max-w-3xl p-4">
      {/* need to determine what to do in case of mobile */}
      <nav className="flex flex-row justify-center items-center w-full">
        <Link
          className="font-bold text-gruvbox-yellow hover:underline underline-offset-4"
          to="/"
        >
          Name Surname
        </Link>
        <ul className="flex gap-6 ml-auto">
          <li>
            <Link className="hover:underline underline-offset-4" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:underline underline-offset-4" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:underline underline-offset-4" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
