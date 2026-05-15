import {
  doc,
  updateDoc,
  getDoc,
  setDoc
} from "firebase/firestore";

import { db } from "../firebase";

export default function StartScreen({
  onStart,
  gameTime,
  setGameTime,
  alreadyPlayed
}) {
  const handleAdminMode = async () => {
    const password =
      prompt("관리자 비밀번호");
  
    // 취소 누른 경우
    if (password === null) {
      return;
    }
  
    if (password !== "0712") {
      alert("비밀번호 오류");
      return;
    }
  
    const value =
      prompt("제한시간 입력");
  
    // 취소 누른 경우
    if (value === null) {
      return;
    }
  
    if (!value) return;
  
    const parsed = Number(value);
  
    if (
      isNaN(parsed) ||
      parsed <= 0
    ) {
      alert("숫자만 입력");
      return;
    }
  
    await updateDoc(
      doc(db, "settings", "game"),
      {
        gameTime: parsed,
      }
    );
  
    setGameTime(parsed);
  };

  return (
    <div className="screen start">
      <h1 className="title">Catch the Koonyang!</h1>

      <p>
        POW 현빈의 생일을 맞아 오늘 하루 05/29 특별 이벤트를 진행합니다.<br/>
        <span className="sub-txt">
          A special event is being held to celebrate<br/>POW Hyunbin’s birthday (Today only, 05/29).
        </span>
      </p>

      <p
        onClick={handleAdminMode}
        style={{
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        제한시간 {gameTime}초<br/>
        <span className="sub-txt">Time Limit {gameTime}s</span>
      </p>

      <p>
        지구인들 사이에 숨은 <span className="txt-og">구냥이 3마리</span>를 모두 찾아 보세요 !<br/>
        <span className="sub-txt">Find all 3 hidden koonyang !</span>
      </p>

      <p>오답 3번이면 실패<br />
        <span className="sub-txt">Fail after 3 wrong taps</span>
      </p>

      <button
        onClick={onStart}
        className="start-btn"
      >
        START
      </button>
    </div>
  );
}