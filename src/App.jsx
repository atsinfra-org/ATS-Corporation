import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RegistrationModal from "./components/RegistrationModal";
import Home from "./pages/Home";
import EngineeringConsultancy from "./pages/EngineeringConsultancy";
import MiningManpower from "./pages/MiningManpower";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [registration, setRegistration] = useState({ open: false, mode: "veteran" });

  const openRegistration = (mode) => setRegistration({ open: true, mode });
  const closeRegistration = () => setRegistration((r) => ({ ...r, open: false }));
  const setRegistrationMode = (mode) => setRegistration((r) => ({ ...r, mode }));

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <ScrollToTop />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home onOpenRegistration={openRegistration} />} />
              <Route
                path="/engineering"
                element={<EngineeringConsultancy onOpenRegistration={openRegistration} />}
              />
              <Route
                path="/mining-manpower"
                element={<MiningManpower onOpenRegistration={openRegistration} />}
              />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <RegistrationModal
        open={registration.open}
        mode={registration.mode}
        onClose={closeRegistration}
        onModeChange={setRegistrationMode}
      />
    </>
  );
}

export default App;
