
import { motion } from "framer-motion";
import carryImg from "../assets/carryminati.jpg"; // ✅ Step 1: Image import karo

const Home = () => {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center flex-col">
      
        className="text-5xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to CarryMinati's World
      </motion.h1>

      
      <motion.img
        src={carryImg}
        alt="CarryMinati"
        className="w-60 rounded-full mt-8 shadow-lg border-4 border-yellow-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.p 
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Roast, Gaming, Entertainment – All in One Place!
      </motion.p>
    </section>
  );
};

export default Home;
