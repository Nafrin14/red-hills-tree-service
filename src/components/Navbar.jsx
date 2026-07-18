import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaCalendarAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-black/5 bg-white/90 shadow-[0_8px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
       <div className="mx-auto flex min-h-[82px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="relative z-50 flex items-center gap-3"
            aria-label="Red Hills Tree Service home"
          >
          <div className="relative flex h-[60px] w-[60px] items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M32 5C24 8 18 14 16 22H7l9 9h-6l11 10h-7l13 11h10l13-11h-7l11-10h-6l9-9h-9C46 14 40 8 32 5Z"
                  fill="#a30f18"
                />
                <path
                  d="M30 28h4v25h-4z"
                  fill="#7f0b12"
                />
                <path
                  d="M8 55h48"
                  stroke="#a30f18"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="leading-none">
              <p className="font-serif text-[22px] font-bold tracking-[0.08em] text-[#9f1018] sm:text-[25px]">
                RED HILLS
              </p>

              <p className="mt-1 text-[9px] font-semibold tracking-[0.35em] text-[#2b2323] sm:text-[10px]">
                TREE SERVICE
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-7 xl:flex 2xl:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
              className={({ isActive }) =>
  `group relative py-8 text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors duration-300 ${
    isActive
      ? "text-[#c5171e]"
      : isScrolled
        ? "text-[#211d1d] hover:text-[#c5171e]"
        : "text-white hover:text-[#ffb4b7]"
  }`
}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-[22px] left-0 h-[2px] bg-[#a30f18] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:+12297018733"
             className={`hidden items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-all duration-300 2xl:flex ${
  isScrolled
    ? "bg-[#fffaf6] text-[#252020] hover:bg-[#a30f18]/5 hover:text-[#a30f18]"
    : "border border-white/20 bg-white/90 text-[#252020] backdrop-blur-md hover:bg-white"
}`}
            >
              <FaPhoneAlt className="text-[#a30f18]" />
              (229) 701-8733
            </a>

            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-md bg-[#a30f18] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.05em] text-white shadow-[0_12px_35px_rgba(163,15,24,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#850b12] hover:shadow-[0_16px_40px_rgba(163,15,24,0.32)]"
            >
              Book a Free Estimate
              <FaCalendarAlt className="text-sm transition-transform duration-300 group-hover:scale-110" />
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`relative z-50 flex h-12 w-12 items-center justify-center rounded-md border transition-all duration-300 xl:hidden ${
              isScrolled || isMenuOpen
                ? "border-[#a30f18]/20 bg-white text-[#a30f18]"
                : "border-white/50 bg-white/75 text-[#a30f18] backdrop-blur-md"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#171313]/50 backdrop-blur-sm transition-all duration-300 xl:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-40 flex h-full w-full max-w-[390px] flex-col bg-[#fffaf6] px-7 pb-8 pt-28 shadow-2xl transition-transform duration-500 xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-1 flex-col">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#a30f18]">
            Navigation
          </p>

          <nav className="flex flex-col border-t border-[#2d2626]/10">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b border-[#2d2626]/10 py-5 transition-colors duration-300 ${
                    isActive
                      ? "text-[#a30f18]"
                      : "text-[#211d1d] hover:text-[#a30f18]"
                  }`
                }
              >
                <span className="font-serif text-2xl">
                  {link.name}
                </span>

                <span className="text-xs font-semibold text-[#a30f18]">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <div className="mb-5 rounded-xl border border-[#a30f18]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a30f18]">
                Need immediate assistance?
              </p>

              <a
                href="tel:+12297018733"
                className="mt-3 flex items-center gap-3 font-serif text-xl font-semibold text-[#211d1d]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a30f18] text-white">
                  <FaPhoneAlt className="text-sm" />
                </span>

                (229) 701-8733
              </a>
            </div>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#a30f18] px-6 py-4 text-sm font-bold uppercase tracking-[0.05em] text-white transition-colors duration-300 hover:bg-[#850b12]"
            >
              Book a Free Estimate
              <FaCalendarAlt />
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;