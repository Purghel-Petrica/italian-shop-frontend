import { NavLink, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Acasă", to: "/" },
    { name: "Produse", to: "/produse" },
    { name: "Despre", to: "/despre" },
    { name: "Contact", to: "/contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.95]);
  const height = useTransform(scrollY, [0, 200], ["4.5rem", "3.3rem"]);

  return (
    <motion.header
      style={{ opacity }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Bara tricoloră 🇮🇹 */}
      <motion.div
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-1 bg-[linear-gradient(90deg,green,white,red,green)] bg-[length:200%_100%]"
      ></motion.div>

      <motion.div
        style={{ height }}
        className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500"
      >
        {/* LOGO + TITLU */}
        <Link to="/" className="flex items-center space-x-3 py-2">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
            alt="logo"
            className={`rounded-full border border-neutral-300 shadow-sm transition-all duration-500 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Titlu animat cu gradient tricolor la hover */}
        <motion.h1
  className={`font-serif font-bold transition-all duration-500 cursor-pointer ${
    scrolled
      ? "text-lg text-green-700"
      : "text-xl md:text-2xl text-green-800"
  } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:via-white hover:to-red-600`}
  whileHover={{
    scale: 1.05,
    backgroundPositionX: "100%",
  }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
  La Bottega Italiana
</motion.h1>

        </Link>

        {/* LINKS */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `relative px-2 py-1 font-medium transition-all duration-300 group ${
                  isActive
                    ? "text-green-700"
                    : "text-neutral-700 hover:text-red-600"
                }`
              }
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-green-600 via-white to-red-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink>
          ))}
        </nav>

        {/* MENIU MOBIL (pentru viitor) */}
        <div className="md:hidden">
          <span className="text-2xl text-neutral-800">☰</span>
        </div>
      </motion.div>
    </motion.header>
  );
}
