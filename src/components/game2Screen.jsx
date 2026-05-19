import { useEffect, useRef, useState } from "react";
import { movingImages } from "../data/images";

const TYPES = movingImages;

function createObjects() {
    const arr = [];
  
    let id = 0;
  
    // 전체 속도
    const speed = -10;
  
    // 최소 속도 보장 랜덤
    const randomVelocity = () => {
      const dir =
        Math.random() > 0.5 ? 1 : -1;
  
      return (
        dir * (Math.random() * speed + 6)
      );
    };
  
    // 랜덤 사이즈
    const randomSize = () => {
      return 55 + Math.random() * 20;
    };
  
    // ===== 정답 A 3개 =====
    for (let i = 0; i < 3; i++) {
      const size = randomSize();
  
      arr.push({
        id: id++,
        type: "a",
  
        x:
          Math.random() *
          (window.innerWidth - size),
  
        y:
          Math.random() *
          (window.innerHeight - size),
  
        vx: randomVelocity(),
        vy: randomVelocity(),
  
        size,
      });
    }
  
    // ===== B 많이 =====
    for (let i = 0; i < 10; i++) {
      const size = randomSize();
  
      arr.push({
        id: id++,
        type: "b",
  
        x:
          Math.random() *
          (window.innerWidth - size),
  
        y:
          Math.random() *
          (window.innerHeight - size),
  
        vx: randomVelocity(),
        vy: randomVelocity(),
  
        size,
      });
    }
  
    // ===== C 많이 =====
    for (let i = 0; i < 20; i++) {
      const size = randomSize();
  
      arr.push({
        id: id++,
        type: "c",
  
        x:
          Math.random() *
          (window.innerWidth - size),
  
        y:
          Math.random() *
          (window.innerHeight - size),
  
        vx: randomVelocity(),
        vy: randomVelocity(),
  
        size,
      });
    }
  
    return arr;
}

export default function Game2Screen({
  onSuccess,
  onFail,
  gameTime,
}) {
  const [gameStarted, setGameStarted] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(gameTime);

  const [objects, setObjects] =
    useState([]);

  const [foundCount, setFoundCount] =
    useState(0);

  const [wrongCount, setWrongCount] =
    useState(0);

  const animationRef = useRef();

  // ===== 게임 시작 시 오브젝트 생성 =====
  useEffect(() => {
    if (!gameStarted) return;

    setObjects(createObjects());
  }, [gameStarted]);

  // ===== 타이머 =====
  useEffect(() => {
    if (!gameStarted) return;

    if (timeLeft <= 0) {
      onFail();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted]);

  // ===== 이동 애니메이션 =====
  useEffect(() => {
    if (!gameStarted) return;

    const animate = () => {
      setObjects((prev) =>
        prev.map((obj) => {
          let nx = obj.x + obj.vx;
          let ny = obj.y + obj.vy;

          let nvx = obj.vx;
          let nvy = obj.vy;

          if (
            nx <= 0 ||
            nx >= window.innerWidth - obj.size
          ) {
            nvx *= -1;
          }

          if (
            ny <= 0 ||
            ny >= window.innerHeight - obj.size
          ) {
            nvy *= -1;
          }

          return {
            ...obj,
            x: nx,
            y: ny,
            vx: nvx,
            vy: nvy,
          };
        })
      );

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(
        animationRef.current
      );
  }, [gameStarted]);

  // ===== 클릭 처리 =====
  const handleObjectClick = (obj) => {
    navigator.vibrate?.(50);

    // 정답
    if (obj.type === "a") {
      const next = foundCount + 1;

      setFoundCount(next);

      // 클릭한 정답 제거
      setObjects((prev) =>
        prev.filter((v) => v.id !== obj.id)
      );

      if (next >= 3) {
        onSuccess();
      }
    }

    // 오답
    else {
      const next = wrongCount + 1;

      setWrongCount(next);

      if (next >= 3) {
        onFail();
      }
    }
  };

  return (
    <div
      className="screen galaxy"
    >
      {/* ===== 시작 오버레이 ===== */}
      {!gameStarted && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: 34,
              marginBottom: 24,
            }}
          >
            구냥이를 3마리 잡으세요 !
          </h1>

          <img
            src={TYPES.a}
            alt=""
            style={{
              width: 240,
              height: 240,
              objectFit: "contain",
              marginBottom: 40,
            }}
          />

          <button
          className="start-btn"
            onClick={() =>
              setGameStarted(true)
            }
          >
            START
          </button>
        </div>
      )}

      {/* ===== 상단 UI ===== */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 999,
          color: "#fff",
          background:"rgba(0,0,0,0.5)",
          padding: "12px 18px",
          borderRadius: "14px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2>Time {timeLeft}</h2>

        <h3>{foundCount}/3</h3>
      </div>

      {/* ===== 움직이는 PNG ===== */}
      {objects.map((obj) => (
        <img
          key={obj.id}
          src={TYPES[obj.type]}
          alt=""
          draggable={false}
          onClick={() =>
            handleObjectClick(obj)
          }
          style={{
            position: "absolute",

            left: obj.x,
            top: obj.y,

            width: obj.size,
            height: obj.size,

            objectFit: "contain",

            userSelect: "none",

            cursor: "pointer",

            transition:
              "transform 0.1s linear",
          }}
        />
      ))}
    </div>
  );
}