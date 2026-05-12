import { useState, useEffect,useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NoticeScreen from "./components/noticeScreen";
import StartScreen from "./components/startScreen";
import GameScreen from "./components/gameScreen";
import ResultScreen from "./components/resultScreen";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { gameImages } from "./data/images";

function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko");
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en");
  const [gameTime, setGameTime] = useState(0);
  const [success, setSuccess] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  useEffect(() => {
    const isNotice = location.pathname === "/notice";
  
    if (!isNotice) {
      document.documentElement.classList.add("theme");
    } else {
      document.documentElement.classList.remove("theme");
    }
  
    // cleanup (안전장치)
    return () => {
      document.documentElement.classList.remove("theme");
    };
  }, [location.pathname]);
  const getDeviceId = () => {
    let id = localStorage.getItem("device_id");

    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("device_id", id);
    }

    return id;
  };

  const checkAlreadyPlayed = async () => {
    const deviceId = getDeviceId();
    const ref = doc(db, "players", deviceId);
    const snap = await getDoc(ref);
    return snap.exists();
  };

  const startGame = async () => {
    const alreadyPlayed = await checkAlreadyPlayed();
  
    // 👇 관리자 모드 여부 체크
    let isAdminOverride = false;
  
    if (alreadyPlayed) {
      const password = prompt("재도전은 관리자 승인후 가능합니다.");
  
      if (password === "0712") {
        isAdminOverride = true;
      } else {
        alert("이미 참여하셨습니다");
        return;
      }
    }
  
    const randomGame =
      gameImages[Math.floor(Math.random() * gameImages.length)];
  
    setSelectedGame(randomGame);
  
    navigate("/game");
  };

  const handleSuccess = async () => {
    const deviceId = getDeviceId();

    await setDoc(doc(db, "players", deviceId), {
      played: true,
      success: true,
      createdAt: Date.now(),
    });

    setSuccess(true);
    navigate("/result");
  };

  const handleFail = async () => {
    const deviceId = getDeviceId();

    await setDoc(doc(db, "players", deviceId), {
      played: true,
      success: false,
      createdAt: Date.now(),
    });

    setSuccess(false);
    navigate("/result");
  };

  const restartGame = () => {
    navigate("/");
  };

  useEffect(() => {
    const loadSettings = async () => {
      const ref = doc(db, "settings", "game");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setGameTime(snap.data().gameTime);
      }

      setLoading(false);
    };

    loadSettings();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {location.pathname === "/notice" && (
        <div className="lang-switch">
          <button
            onClick={() => i18n.changeLanguage("ko")}
            className={i18n.language === "ko" ? "active" : ""}
          >
            KO
          </button>

          <button
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <StartScreen
              onStart={startGame}
              gameTime={gameTime}
              setGameTime={setGameTime}
            />
          }
        />

        <Route
          path="/game"
          element={
            <GameScreen
              gameData={selectedGame}
              onSuccess={handleSuccess}
              onFail={handleFail}
              gameTime={gameTime}
              deviceId={getDeviceId()}
            />
          }
        />

        <Route
          path="/result"
          element={
            <ResultScreen
              success={success}
              onRestart={restartGame}
            />
          }
        />

        <Route
          path="/notice"
          element={<NoticeScreen onRestart={restartGame} />}
        />
      </Routes>

      <p className="end-txt">kooCATbin x 쭈니네 츄러스</p>
    </>
  );
}

export default App;