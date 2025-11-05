import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Produse() {
  const [produse, setProduse] = useState([]);
  const [categorieSelectata, setCategorieSelectata] = useState("Toate");
  const [loading, setLoading] = useState(true);
  const [produsSelectat, setProdusSelectat] = useState(null); // ✅ pentru modal

  const location = useLocation();

  const categorii = [
    "Toate",
    "Brânzeturi",
    "Mezeluri",
    "Paste",
    "Vinuri",
    "Înghețată",
    "Risotto",
  ];

  // 👉 extragem categoria din URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categorieDinUrl = params.get("categorie");
    if (categorieDinUrl) {
      setCategorieSelectata(categorieDinUrl);
    }
  }, [location.search]);

  // 👉 fetch produse
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProduse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Eroare la preluarea produselor:", err);
        setLoading(false);
      });
  }, []);

  // 👉 filtrare produse
  const produseFiltrate =
    categorieSelectata === "Toate"
      ? produse
      : produse.filter((p) => (p.category || p.categorie) === categorieSelectata);

  return (
    <div className="relative min-h-screen font-['Playfair_Display'] text-neutral-900 overflow-hidden">
      {/* ======== FUNDAL ======== */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617196034796-73dfa3e7e1b6?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-white/20 to-red-600/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ======== CONȚINUT ======== */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Titlu */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-12 text-neutral-100 drop-shadow-lg"
          >
            Produsele Noastre 🇮🇹
          </motion.h1>

          {/* CATEGORII */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categorii.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategorieSelectata(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                  categorieSelectata === cat
                    ? "bg-gradient-to-r from-green-600 via-white to-red-600 text-neutral-900 font-semibold border border-neutral-300"
                    : "bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* LOADING */}
          {loading && (
            <p className="text-center text-white text-lg mt-10 animate-pulse">
              Se încarcă produsele...
            </p>
          )}

          {/* GRID PRODUSE */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {produseFiltrate.map((produs) => (
              <motion.div
                key={produs._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setProdusSelectat(produs)} // ✅ deschide modalul
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-neutral-200 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={
                      produs.imageUrl ||
                      produs.imagine ||
                      "https://via.placeholder.com/300x200?text=Produs"
                    }
                    alt={produs.name || produs.nume}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-1">
                    {produs.name || produs.nume}
                  </h2>
                  <p className="text-sm text-neutral-500 mb-2">
                    {produs.category || produs.categorie}
                  </p>
                  <p className="text-sm text-neutral-700 mb-3 line-clamp-2">
                    {produs.description || produs.descriere}
                  </p>
                  <p className="font-medium text-green-700">
                    {produs.price || produs.pret}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ======== MODAL DETALII PRODUS ======== */}
      <AnimatePresence>
        {produsSelectat && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setProdusSelectat(null)} // închide la click în afara ferestrei
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // oprește propagarea click-ului
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden"
            >
              <img
                src={
                  produsSelectat.imageUrl ||
                  produsSelectat.imagine ||
                  "https://via.placeholder.com/400x300?text=Produs"
                }
                alt={produsSelectat.name || produsSelectat.nume}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-neutral-800">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold">
                    {produsSelectat.name || produsSelectat.nume}
                  </h2>
                  <button
                    onClick={() => setProdusSelectat(null)}
                    className="text-neutral-500 hover:text-red-500 text-xl"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-neutral-500 mb-3">
                  {produsSelectat.category || produsSelectat.categorie}
                </p>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {produsSelectat.description || produsSelectat.descriere}
                </p>
                <p className="text-lg font-semibold text-green-700">
                  {produsSelectat.price || produsSelectat.pret}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
