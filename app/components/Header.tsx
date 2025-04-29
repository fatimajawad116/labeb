import { useEffect, useState } from "react";
import { FaSchool, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/logo.png"
export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "faq", "contact"];
      const scrollY = window.scrollY;
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, offsetTop: Infinity };
        return { id, offsetTop: el.offsetTop - 150 };
      });

      const current = offsets.reduce((acc, section) => {
        if (scrollY >= section.offsetTop) {
          return section.id;
        }
        return acc;
      }, "");

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = (

<>
<NavLink
  to="/"
  className={({ isActive }) => 
    `relative flex items-center justify-center h-16 px-4 my-2 md:my-0 md:mx-4 transition-all duration-300 
    ${isActive ? "text-[var(--orange)]" : "text-[var(--black)]"} 
    hover:text-[var(--orange)]`
  }
>
{({ isActive }) => (
    <span className="relative flex items-center group">
  الرئيسية
      <span
        className={`absolute left-0 right-0 ${
          isActive ? "bg-[var(--orange)]" : "bg-transparent"
        } group-hover:bg-[var(--orange)] h-[5px] bottom-[-38px] transition-all duration-300`}
      />
    </span>
  )}
</NavLink>


<NavLink
  to="/about"
  className={({ isActive }) =>
    `relative flex items-center justify-center h-16 px-8 my-2 md:my-0 md:mx-4 transition-all duration-300 
    ${isActive ? "text-[var(--orange)]" : "text-[var(--black)]"} 
    hover:text-[var(--orange)]`
  }
>
{({ isActive }) => (
    <span className="relative flex items-center group">
      من لبيب
      <span
        className={`absolute left-0 right-0 ${
          isActive ? "bg-[var(--orange)]" : "bg-transparent"
        } group-hover:bg-[var(--orange)] h-[5px] bottom-[-38px] transition-all duration-300`}
      />
    </span>
  )}
</NavLink>


<NavLink
  to="/faq"
  className={({ isActive }) =>
    `relative flex items-center justify-center h-16 px-8 my-2 md:my-0 md:mx-4 transition-all duration-300 
    ${isActive ? "text-[var(--orange)]" : "text-[var(--black)]"} 
    hover:text-[var(--orange)]`
  }
>
{({ isActive }) => (
    <span className="relative flex items-center group">
       الاسئلة الشائعة
      <span
        className={`absolute left-0 right-0 ${
          isActive ? "bg-[var(--orange)]" : "bg-transparent"
        } group-hover:bg-[var(--orange)] h-[5px] bottom-[-38px] transition-all duration-300`}
      />
    </span>
  )}
</NavLink>


      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `relative flex items-center justify-center h-16 px-8 my-2 md:my-0 md:mx-4 transition-all duration-300 
          ${isActive ? "text-[var(--orange)]" : "text-[var(--black)]"} 
          hover:text-[var(--orange)]`
        }
      >
  {({ isActive }) => (
    <span className="relative flex items-center group">
      تواصل معنا
      <span
        className={`absolute left-0 right-0 ${
          isActive ? "bg-[var(--orange)]" : "bg-transparent"
        } group-hover:bg-[var(--orange)] h-[5px] bottom-[-38px] transition-all duration-300`}
      />
    </span>
  )}
      </NavLink>
</>

  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center px-[6%] py-4 bg-[var(--white)] shadow-sm md:justify-start justify-between">
      <NavLink to="/" className="text-2xl font-bold text-[var(--black)] flex items-center gap-2 tracking-[1px]">
        <img src={logo} className="w-[200px]"/> 
      </NavLink>
      <nav className="hidden md:flex mr-[70px]">{navLinks}</nav>
      <div className="flex items-center md:gap-0">
        {showMobileMenu ? (
          <FaTimes 
            className="text-3xl ml-6 text-[var(--black)] cursor-pointer hover:text-[var(--orange)] md:hidden" 
            onClick={() => setShowMobileMenu(false)}
          />
        ) : (
          <FaBars 
            className="text-3xl ml-6 text-[var(--black)] cursor-pointer hover:text-[var(--orange)] md:hidden" 
            onClick={() => setShowMobileMenu(true)}
          />
        )}
      </div>
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-[var(--white)] shadow-md flex flex-col items-center py-4 md:hidden">
          {navLinks}
        </div>
      )}
    </header>
  );
}
