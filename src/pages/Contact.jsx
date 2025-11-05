import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative min-h-screen font-['Playfair_Display'] text-neutral-900 overflow-hidden">
      {/* ======== FUNDAL ======== */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964091-7421e1b6fcce?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-white/20 to-red-600/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ======== CONȚINUT ======== */}
      <div className="relative z-10 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8 drop-shadow-lg"
          >
            Contactează-ne 🇮🇹
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg max-w-2xl mx-auto text-neutral-100 mb-16"
          >
            Suntem bucuroși să te ajutăm să descoperi gustul autentic al Italiei.
            Poți să ne scrii, să ne suni sau să ne vizitezi în magazinul nostru
            din inima orașului.
          </motion.p>

          {/* ======== INFORMAȚII DE CONTACT ======== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center"
            >
              <FaMapMarkerAlt size={32} className="text-red-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Adresa</h3>
              <p className="text-neutral-200 text-center">
                Strada Italia 12, Cluj-Napoca, România
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center"
            >
              <FaPhoneAlt size={32} className="text-green-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p className="text-neutral-200 text-center">+40 745 123 456</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center"
            >
              <FaEnvelope size={32} className="text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-neutral-200 text-center">
                contact@labottegaitaliana.ro
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center"
            >
              <FaClock size={32} className="text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Program</h3>
              <p className="text-neutral-200 text-center">
                Luni - Sâmbătă: 09:00 - 20:00
                <br />
                Duminică: Închis
              </p>
            </motion.div>
          </div>

          {/* ======== HARTA ======== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-white/30 max-w-4xl mx-auto mb-16"
          >
            <iframe
              title="Locație La Bottega Italiana"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.8349973437443!2d23.5949465767032!3d46.7712104791386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1e49d5730b%3A0x6a4d4dfe62ef7b60!2sPia%C8%9Ba%20Unirii%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1698601234567!5m2!1sro!2sro"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* ======== REȚELE SOCIALE ======== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center gap-8 mt-10"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-green-600/30 transition-all shadow-lg"
            >
              <FaFacebook size={28} className="text-white hover:text-blue-400 transition" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-green-600/30 transition-all shadow-lg"
            >
              <FaInstagram size={28} className="text-white hover:text-pink-400 transition" />
            </a>

            <a
              href="https://wa.me/40745123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-green-600/30 transition-all shadow-lg"
            >
              <FaWhatsapp size={28} className="text-white hover:text-green-400 transition" />
            </a>
          </motion.div>

          <p className="mt-8 text-neutral-300 text-sm">
            © {new Date().getFullYear()} La Bottega Italiana — Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </div>
  );
}
