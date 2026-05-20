import game1 from "../assets/t01.jpg";
import game2 from "../assets/t02.jpg";
import game3 from "../assets/t03.jpg";
import imgA from "../assets/a.png";
import imgB from "../assets/b.png";
import imgC from "../assets/c.png";

export const movingImages = {
  a: imgA,
  b: imgB,
  c: imgC,
};

export const gameImages = [
  {
    id: 1,
    src: game1,
    answers: [
      { x: 37, y: 57 },
      { x: 52.6, y: 96.8 },
      { x: 85, y: 17 },
    ],
  },
  {
    id: 2,
    src: game2,
    answers: [
      { x: 43.6, y: 51 },
      { x: 36.5, y: 57 },
      { x: 4, y: 86 },
    ],
  },
  {
    id: 3,
    src: game3,
    answers: [
      { x: 92, y: 89 },
      { x: 41, y: 25 },
      { x: 89, y: 62 },
    ],
  }
];