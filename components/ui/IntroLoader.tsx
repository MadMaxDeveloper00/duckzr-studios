"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 2400);

    const end = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(end);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* FUNDO NÃO SÓLIDO (IMPORTANTE) */}
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{
              opacity: phase === 2 ? 0.4 : 1,
            }}
            transition={{ duration: 1 }}
          />

          {/* LOGO CENTRAL */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: phase >= 2 ? 0 : 1,
              scale: phase >= 2 ? 1.3 : 1,
              y: phase >= 2 ? -20 : 0,
            }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <img
              src="/WhiteLogo.png"
              className="w-[180px] md:w-[240px]"
            />
          </motion.div>

          {/* TEXTO INFERIOR */}
          <motion.div
            className="absolute bottom-10 w-full text-center text-sm tracking-wide text-white/70"
            animate={{
              opacity: phase >= 2 ? 0 : 1,
            }}
          >
            carregando informações da duckzr studios
            <br />
            se nao carregar, atualize a página!
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}