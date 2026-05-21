import { useState } from "react";
import { motion } from "framer-motion";

import TarotResult from "./tarotResult";

import {
  tarotCards,
  tarotBack,
} from "../data/images";

export default function TarotScreen() {
  const [selected, setSelected] =
    useState(null);

  const [revealed, setRevealed] =
    useState(false);

  const pickCard = () => {
    const random =
      tarotCards[
        Math.floor(
          Math.random() *
            tarotCards.length
        )
      ];

    const reversed =
      Math.random() > 0.5;

    setSelected({
      ...random,
      reversed,
    });

    setTimeout(() => {
      setRevealed(true);
    }, 800);
  };

  const reset = () => {
    setSelected(null);
    setRevealed(false);
  };

  return (
    <div className="tarot-wrap">
      <h1>CAT TAROT</h1>

      {!selected ? (
        <div className="deck">
  {Array.from({ length: 12 }).map(
    (_, i) => (
      <motion.img
        key={i}
        src={tarotBack}
        className="deck-card"

        onClick={pickCard}

        initial={{
          opacity: 0,
          y: 100,
        }}

        animate={{
          opacity: 1,
          y: 0,

          x: i * 20,
          rotate: i * 1.5,
        }}

        transition={{
          duration: 0.4,
          delay: i * 0.03,
        }}

        whileHover={{
          y: -20,
          scale: 1.03,
        }}
      />
    )
  )}
</div>
      ) : (
        <TarotResult
          selected={selected}
          revealed={revealed}
          onRetry={reset}
        />
      )}
    </div>
  );
}