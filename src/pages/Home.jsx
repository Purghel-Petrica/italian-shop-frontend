import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  GiCheeseWedge,
  GiHotMeal,
  GiNoodles,
  GiHamShank,
  GiWineBottle,
  GiIceCreamCone,
} from "react-icons/gi";

export default function Home() {
  const navigate = useNavigate();

  const categorii = [
    {
      icon: <GiCheeseWedge size={60} className="text-amber-600" />,
      title: "Brânzeturi fine",
      desc: "Parmigiano, Pecorino, Mozzarella di Bufala — gust autentic.",
      categorie: "Brânzeturi",
    },
    {
      icon: <GiHamShank size={60} className="text-rose-700" />,
      title: "Mezeluri",
      desc: "Prosciutto, Salami, Mortadella — specialități italiene rafinate.",
      categorie: "Mezeluri",
    },
    {
      icon: <GiNoodles size={60} className="text-amber-500" />,
      title: "Paste",
      desc: "Tagliatelle, Penne, Arborio — artizanale, pline de savoare.",
      categorie: "Paste",
    },
    {
          icon: <GiHotMeal size={60} className="text-amber-500" />,
          title: "Risotto",
          desc: "Arborio, Carnaroli — bază perfectă pentru rețete autentice.",
          categorie: "Risotto",
        },
    {
      icon: <GiIceCreamCone size={60} className="text-pink-500" />,
      title: "Gelato",
      desc: " Înghețată artizanală — deserturi autentice.",
      categorie: "Înghețată",
    },
    {
      icon: <GiWineBottle size={60} className="text-purple-700" />,
      title: "Vinuri",
      desc: "Chianti, Barolo, uleiuri de măsline, sosuri și condimente fine.",
      categorie: "Vinuri",
    },
  ];

  return (
    <div className="relative min-h-screen font-['Playfair_Display'] text-neutral-900 overflow-hidden">
      {/* HERO SECTION — neschimbat */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617196034796-73dfa3e7e1b6?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-white/20 to-red-600/30"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
            alt="Siglă temporară"
            className="w-20 h-20 rounded-full shadow-md border-2 border-white mb-4 object-cover"
          />
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
            La Bottega Italiana
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200"
        >
          Băcănie italiană autentică — brânzeturi, paste, mezeluri, risotto,
          dulciuri și gelato artizanal. Gustul Italiei, aproape de tine 🇮🇹.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            to="/produse"
            className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-green-600 via-white to-red-600 text-neutral-900 text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Vezi produsele
          </Link>
        </motion.div>
      </div>

      {/* ================= SPECIALITĂȚI ITALIENE ================= */}
      <section className="relative bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-serif mb-12"
          >
            Specialitățile noastre italiene 🇮🇹
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {categorii.map((item, i) => (
              <motion.div
                key={i}
                onClick={() =>
                  navigate(`/produse?categorie=${encodeURIComponent(item.categorie)}`)
                }
                className="flex flex-col items-center text-center bg-neutral-50 rounded-2xl shadow p-6 hover:-translate-y-2 hover:shadow-lg transition-all cursor-pointer"
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="font-semibold text-lg mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= ABOUT SECTION ================= */}
      <section className="relative bg-neutral-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://millesime.ro/wp-content/uploads/2017/02/shutterstock_71898862.jpg"
            alt="Produse italiene"
            className="rounded-2xl shadow-lg object-cover h-[420px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-serif">
              Gust autentic, calitate italiană
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              În Băcănia noastră italiană găsești produse selecte, aduse direct
              din Italia: brânzeturi maturate, paste artizanale, uleiuri
              presate la rece, mezeluri fine și deserturi tradiționale.
            </p>
            <Link
              to="/despre"
              className="inline-block mt-6 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-all"
            >
              Află mai multe
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= STRIPĂ TRICOLORĂ ================= */}
      <motion.div
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: "100%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-3 w-full bg-[linear-gradient(90deg,green,white,red,green)] bg-[length:200%_100%]"
      ></motion.div>
    </div>
  );
}
