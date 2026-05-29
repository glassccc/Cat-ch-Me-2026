import { motion } from "framer-motion";

export default function TarotResult({
  selected,
  onRetry,
}) {
  return (
    <motion.div
      className="tarot-result"
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 100,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
      }}
    >
      <motion.img
        src={selected.image}
        animate={{
          rotate:
            selected.reversed
              ? 180
              : 0,
        }}
        transition={{
          duration: 1,
        }}
      />

        <h2>{selected.name}</h2>

        <p>
        {selected.reversed
            ? selected.reverseMeaningKo
            : selected.meaningKo}
        </p>

        <p>
        {selected.reversed
            ? selected.reverseMeaningEn
            : selected.meaningEn}
        </p>
    </motion.div>
  );
}