import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-neutral-200 py-12  font-['Playfair_Display']">
      {/* ======== STRIPĂ TRICOLORĂ ======== */}
      <motion.div
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="h-1 w-full bg-[linear-gradient(90deg,green,white,red,green)] bg-[length:200%_100%] mb-8"
      ></motion.div>

      {/* ======== CONȚINUT FOOTER ======== */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* LOGO + DESCRIERE */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            La Bottega Italiana 🇮🇹
          </h2>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Băcănie italiană autentică, unde pasiunea pentru gustul tradițional
            se împletește cu eleganța și rafinamentul Italiei.
          </p>
        </div>

        {/* LINK-URI RAPIDE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigare</h3>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Acasă
              </Link>
            </li>
            <li>
              <Link to="/produse" className="hover:text-white transition">
                Produse
              </Link>
            </li>
            <li>
              <Link to="/despre" className="hover:text-white transition">
                Despre noi
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Urmărește-ne</h3>
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-green-600/30 transition-all shadow-lg"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-green-600/30 transition-all shadow-lg"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/40745123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-green-600/30 transition-all shadow-lg"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* ======== LINIE FINALĂ ======== */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} La Bottega Italiana — Toate drepturile rezervate.
      </div>
    </footer>
  );
}

