import { motion } from "framer-motion";

export default function TarotCard({
  onClick,
  backImage,
}) {
  return (
    <motion.div
      className="tarot-card"
      whileHover={{
        scale: 1.05,
        y: -10,
        rotate: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
    >
      <img
        src={backImage}
        alt="tarot back"
      />
    </motion.div>
  );
}