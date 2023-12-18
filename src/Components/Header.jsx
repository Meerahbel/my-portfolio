const Header = () => {
  return (
    <header className="flex justify-between pt-8 px-5">
      <p className="text-sm text-white tracking-widest">Mirabel Ugoji.</p>

      <div>
        <img
          src="/images/align-right.png"
          alt="hamburger menu"
          className="w-6 h-6"
        />
      </div>
    </header>
  );
};

export default Header;
