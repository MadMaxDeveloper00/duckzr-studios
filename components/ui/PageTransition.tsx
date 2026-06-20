"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageTransition() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-black text-4xl font-bold tracking-[0.3em]"
          >
            <Image
              src="/DSCompact.png"
              alt="Duckzr"
              width={160}
              height={40}
              className="object-contain"
            />
          </motion.div>

          {/* SUB LOGO FADE PULSE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-black/60 mt-2 text-sm"
          >
            loading...
          </motion.div>

          {/* BAR */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 1.2 }}
            className="h-[2px] bg-orange-500 mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}