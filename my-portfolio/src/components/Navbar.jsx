import { useEffect, useState } from "react";

const Navbar = ({ sections, activeSection, setActiveSection }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      let currentSection = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, setActiveSection]);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-row justify-between items-center h-auto md:h-16 gap-2 md:gap-0">
        <h1 className="text-2xl font-bold text-orange-500 tracking-wide flex items-center gap-2">
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Anh Xuân's Portfolio
        </h1>
        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Navigation menu */}
        <ul
          className={`font-semibold space-y-3 md:space-y-0 md:space-x-6 w-full md:w-auto items-center overflow-x-auto px-1 flex-col md:flex-row flex
            ${menuOpen ? "flex" : "hidden"} md:flex
            absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none z-40 md:z-auto py-4 md:py-0`}
        >
          {sections.map((s) => (
            <li key={s.id}>
              <button
                className={`flex items-center gap-1 text-base md:text-lg hover:text-orange-500 transition-colors ${
                  activeSection === s.id ? "text-orange-500 font-semibold" : ""
                }`}
                onClick={() => {
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(s.id);
                  setMenuOpen(false);
                }}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
