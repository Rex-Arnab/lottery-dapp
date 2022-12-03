import NavButton from "./NavButton";

function Header() {
  return (
    <nav className="flex items-center space-x-2">
      {/* Left Side */}

      <img
        src="https://i.imgur.com/4h7mAu7.png"
        className="rounded-full h-20 w-20"
        alt="logo"
      />

      <div>
        <h1 className="text-lg text-white font-bold">DREAMERS DRAW</h1>
        <p className="text-xs text-emerald-500 truncate">User...</p>
      </div>

      {/* Middle Section*/}
      <div className="bg-[#0A1F1C] p-4 space-x-2">
        <NavButton isActive title="Buy Tickets" />
        <NavButton title="Logout" />
      </div>
    </nav>
  );
}

export default Header;
