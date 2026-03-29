import SplitAndGrow from "../components/SplitAndGrow";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function SplitAndGrowPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SplitAndGrow />
      <Footer />
    </motion.div>
  );
}
