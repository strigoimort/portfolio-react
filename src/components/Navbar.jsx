import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // SCROLL EFFECT (sticky + to-top nanti bisa dipakai juga)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLICK OUTSIDE (close hamburger)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#hamburger") && !e.target.closest("#nav-menu")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // SMOOTH SCROLL
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    const offset = 80;

    if (el) {
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${isSticky ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          {/* LOGO */}
          <div className="px-8">
            <button
              onClick={() => handleScrollTo("home")}
              className="py-6 text-lg font-bold text-primary"
            >
              Petrik Siano
            </button>
          </div>

          {/* HAMBURGER */}
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="block lg:hidden"
            >
              <span
                className={`hamburger-line ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>

            {/* NAV MENU */}
            <nav
              id="nav-menu"
              className={`absolute right-4 top-full w-full max-w-62.5 rounded-lg bg-white py-5 shadow-lg transition
              ${isOpen ? "block" : "hidden"}
              lg:static lg:block lg:max-w-full lg:bg-transparent lg:shadow-none`}
            >
              <ul className="block lg:flex">
                {[
                  { name: "Home", id: "home" },
                  { name: "About Me", id: "about" },
                  { name: "Experience", id: "experience" },
                  { name: "Tools", id: "tools" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <li key={item.id} className="group">
                    <button
                      onClick={() => handleScrollTo(item.id)}
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
