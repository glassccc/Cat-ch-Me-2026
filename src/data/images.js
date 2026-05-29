import game1 from "../assets/t01.jpg";
import game2 from "../assets/t02.jpg";
import game3 from "../assets/t03.jpg";
import imgA from "../assets/a.png";
import imgB from "../assets/b.png";
import imgC from "../assets/c.png";
import fool from "../assets/fool.png";
import magician from "../assets/magician.png";
import tarotBack from "../assets/t-back.png";
import hier from "../assets/hier.png";
import high from "../assets/high.png";
import lovers from "../assets/lovers.png";
import man from "../assets/man.png";
import wheel from "../assets/wheel.png";
import emp from "../assets/emp.png";
import empr from "../assets/empr.png";
import devil from "../assets/devil.png";


export { tarotBack };

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
      { x: 71.2, y: 50 },
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
export const tarotCards = [
  {
    name: "The Fool",
    image: fool,

    meaningKo:
      "새로운 시작과 모험의 기운이 찾아옵니다.",
    meaningEn:
      "A new beginning and adventurous energy are coming your way.",

    reverseMeaningKo:
      "충동적으로 움직이기보다 한 번 더 생각해보세요.",
    reverseMeaningEn:
      "Take a moment to think before acting impulsively.",
  },

  {
    name: "The Magician",
    image: magician,

    meaningKo:
      "당신 안의 능력과 가능성이 깨어나는 순간입니다.",
    meaningEn:
      "Your abilities and potential are beginning to awaken.",

    reverseMeaningKo:
      "집중력이 흐트러지거나 자신감을 잃을 수 있어요.",
    reverseMeaningEn:
      "You may lose focus or confidence.",
  },

  {
    name: "The Hierophant",
    image: hier,

    meaningKo:
      "배움과 조언 속에서 답을 찾게 됩니다.",
    meaningEn:
      "You will find answers through learning and guidance.",

    reverseMeaningKo:
      "고정관념에 갇혀 답답함을 느낄 수 있어요.",
    reverseMeaningEn:
      "You may feel stuck in rigid ways of thinking.",
  },

  {
    name: "The High Priestess",
    image: high,

    meaningKo:
      "조용한 직감이 중요한 힌트를 줄 거예요.",
    meaningEn:
      "Your quiet intuition will offer an important clue.",

    reverseMeaningKo:
      "혼란스러운 감정 때문에 판단이 흐려질 수 있어요.",
    reverseMeaningEn:
      "Confusing emotions may cloud your judgment.",
  },

  {
    name: "The Lovers",
    image: lovers,

    meaningKo:
      "소중한 인연과 선택의 순간이 다가옵니다.",
    meaningEn:
      "An important relationship or meaningful choice is approaching.",

    reverseMeaningKo:
      "관계 속 오해나 갈등이 생기지 않도록 주의해보세요.",
    reverseMeaningEn:
      "Be careful of misunderstandings or conflicts in relationships.",
  },

  {
    name: "The Hanged Man",
    image: man,

    meaningKo:
      "잠시 멈춰 새로운 시각으로 바라볼 필요가 있어요.",
    meaningEn:
      "It may be time to pause and see things from a new perspective.",

    reverseMeaningKo:
      "답답한 상황에 갇혀 움직이지 못할 수 있어요.",
    reverseMeaningEn:
      "You may feel stuck and unable to move forward.",
  },

  {
    name: "Wheel of Fortune",
    image: wheel,

    meaningKo:
      "운명의 흐름이 당신 편으로 움직이고 있습니다.",
    meaningEn:
      "The flow of fate is beginning to move in your favor.",

    reverseMeaningKo:
      "생각지 못한 변수나 흐름의 변화가 생길 수 있어요.",
    reverseMeaningEn:
      "Unexpected changes or disruptions may arise.",
  },

  {
    name: "The Emperor",
    image: emp,

    meaningKo:
      "흔들리지 않는 의지와 리더십이 필요한 때입니다.",
    meaningEn:
      "This is a time for strong will and leadership.",

    reverseMeaningKo:
      "지나친 고집이나 통제욕을 조심해보세요.",
    reverseMeaningEn:
      "Be careful of stubbornness or a need to control everything.",
  },

  {
    name: "The Empress",
    image: empr,

    meaningKo:
      "풍요와 사랑, 따뜻한 에너지가 가득합니다.",
    meaningEn:
      "Abundance, love, and warm energy surround you.",

    reverseMeaningKo:
      "감정 소모가 커질 수 있으니 스스로를 돌봐주세요.",
    reverseMeaningEn:
      "Emotional exhaustion may build up, so take care of yourself.",
  },

  {
    name: "The Devil",
    image: devil,

    meaningKo:
      "집착하거나 얽매인 것이 없는지 돌아보세요.",
    meaningEn:
      "Take a look at what may be holding you back or controlling you.",

    reverseMeaningKo:
      "나를 힘들게 하던 것에서 벗어날 기회가 찾아옵니다.",
    reverseMeaningEn:
      "A chance to break free from what has been troubling you is coming.",
  },
];