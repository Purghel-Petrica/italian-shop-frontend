import { motion } from "framer-motion";

export default function Despre() {
  return (
    <div className="relative min-h-screen font-['Playfair_Display'] text-neutral-900 overflow-hidden">
      {/* ======== FUNDAL ======== */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1292301452/photo/charcuterie-board.jpg?s=612x612&w=0&k=20&c=LPSunUSE8s9Pg8YKwRIEuniJBQQlB9zMGl9wF7N-vRQ=')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-white/20 to-red-600/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ======== CONȚINUT ======== */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Despre Noi 🇮🇹
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-neutral-100 leading-relaxed max-w-3xl mx-auto"
          >
            <strong>La Bottega Italiana</strong> este mai mult decât o băcănie —
            este o poveste despre pasiunea pentru gustul autentic al Italiei.
            Am adus în România spiritul gastronomiei italiene: brânzeturi
            maturate, paste artizanale, mezeluri fine, risotto cremos, vinuri
            nobile și deserturi tradiționale. Fiecare produs din rafturile
            noastre spune o poveste despre tradiție, familie și bucuria de a
            trăi simplu, dar cu gust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              🇮🇹 Valorile noastre
            </h2>
            <ul className="text-left text-neutral-100 space-y-3 list-disc list-inside">
              <li>
                <strong>Autenticitate:</strong> colaborăm cu producători locali
                din regiunile italiene, pentru a oferi produse originale.
              </li>
              <li>
                <strong>Calitate:</strong> selectăm cu grijă fiecare ingredient
                — fără compromisuri, doar gust adevărat.
              </li>
              <li>
                <strong>Tradiție:</strong> respectăm rețetele italiene transmise
                din generație în generație.
              </li>
              <li>
                <strong>Ospitalitate:</strong> vrem ca fiecare client să se simtă
                ca într-o piață mică din Toscana.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <img /*
              src="https://images.unsplash.com/photo-1625231334168-3504b4c00b80?q=80&w=1600&auto=format&fit=crop"
              alt="Interior La Bottega Italiana"
              className="rounded-2xl shadow-lg border-4 border-white/30"
           */ />
            <p className="mt-6 text-neutral-200">
              Fie că ne vizitezi pentru o bucată de Parmigiano sau o cutie de
              paste artizanale, te invităm să descoperi gustul Italiei —
              autentic, elegant și mereu cu suflet. ❤️
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

