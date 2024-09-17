const Header = () => {
  return (
    <header className="w-full max-w-3xl p-4">
      { /* need to determine what to do in case of mobile */}
      <nav className="flex flex-row justify-center items-center w-full">
        <a href="#" className="font-bold text-gruvbox-yellow">Name Surname</a>
        <div className="flex gap-6 ml-auto">
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
