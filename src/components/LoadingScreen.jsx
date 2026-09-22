import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete, duration = 2600 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">
                ATS Corporation
              </h1>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <p className="text-sm md:text-base tracking-[0.15em] uppercase text-white/50">
              Empowering Veterans. Building Opportunities.
            </p>
          </motion.div>

          <div className="mt-12 h-px w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: duration / 1000 - 0.3, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-gold via-primary to-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
