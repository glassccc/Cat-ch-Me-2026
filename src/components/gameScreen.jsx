import { useEffect, useState } from "react";

export default function GameScreen({
  gameData,
  onSuccess,
  onFail,
  gameTime
}) {
  const [timeLeft, setTimeLeft] = useState(gameTime);
  const [imageLoaded, setImageLoaded] = useState(false);
  // 찾은 정답 저장
  const [found, setFound] = useState([]);

  const [wrongMarks, setWrongMarks] = useState([]);
  const [wrongCount, setWrongCount] =
    useState(0);
  useEffect(() => {
    const checkAccess = async () => {
      const deviceId = getDeviceId();
      const ref = doc(db, "players", deviceId);
      const snap = await getDoc(ref);
  
      // 이미 참여했으면 강제 리다이렉트
      if (snap.exists()) {
        navigate("/");
      }
    };
  
    checkAccess();

    const timer = setTimeout(() => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    }, 1500);
  
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!imageLoaded) return;
  
    if (timeLeft <= 0) {
      onFail();
      return;
    }
  
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [timeLeft, imageLoaded]);
  useEffect(() => {
    if (gameData?.src) {
      const img = new Image();
      img.src = gameData.src;
  
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [gameData]);
  const handleClick = (e) => {
    const rect =
      e.target.getBoundingClientRect();
    const x =
      ((e.clientX - rect.left) / rect.width) *
      100;

    const y =
      ((e.clientY - rect.top) / rect.height) *
      100;

    let matched = false;

    console.log({
      x: Number(x.toFixed(1)),
      y: Number(y.toFixed(1)),
    });

    gameData.answers.forEach((answer, idx) => {
      const alreadyFound =
        found.some((item) => item.idx === idx);

      if (alreadyFound) return;

      const isCorrect =
        Math.abs(answer.x - x) < 3 &&
        Math.abs(answer.y - y) < 3;

      if (isCorrect) {
        matched = true;

        const newFound = [
          ...found,
          {
            idx,
            x: answer.x,
            y: answer.y,
          },
        ];

        setFound(newFound);

        if (newFound.length === 3) {
          onSuccess();
        }
      }
    });

    if (!matched) {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
    
      // 클릭 위치 마킹 추가
      const mark = {
        x,
        y,
        id: Date.now(),
      };
    
      setWrongMarks((prev) => [...prev, mark]);
      navigator.vibrate?.(80);
      // 0.6초 후 제거
      setTimeout(() => {
        setWrongMarks((prev) =>
          prev.filter((m) => m.id !== mark.id)
        );
      }, 600);
    
      if (newWrong >= 3) {
        onFail();
      }
    }
  };
  if (!imageLoaded) {
    return <div className="loading"><div className="big-title">먕<span>.</span><span>.</span><span>.</span></div></div>;
  }
  return (
    <div className="screen">
      <h2>{timeLeft}</h2>

      <h3>{found.length}/3</h3>

        {/* 이미지 영역 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
        <img
          src={gameData.src}
          alt=""
          onClick={handleClick}
          onLoad={() => setImageLoaded(true)}
          style={{
            width: "100%",
            display: "block",
          }}
        />

        {/* 성공 위치 표시 */}
        {found.map((item) => (
          <div
            key={item.idx}
            style={{
              position: "absolute",
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: "40px",
              height: "40px",
              border: "4px solid lime",
              borderRadius: "50%",
              transform:
                "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        ))}
        {wrongMarks.map((m) => (
            <div
              key={m.id}
              style={{
                position: "absolute",
                left: `${m.x}%`,
                top: `${m.y}%`,
                transform: "translate(-50%, -50%)",
                fontSize: "32px",
                color: "white",
                fontWeight: "bold",
                pointerEvents: "none",
                animation: "fadeOut 0.6s ease",
              }}
            >
              ✕
            </div>
          ))}
      </div>
    </div>
  );
}