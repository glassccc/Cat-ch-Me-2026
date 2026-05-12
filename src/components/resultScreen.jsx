export default function ResultScreen({
    success,
    onRestart,
  }) {
    return (
      <div className="screen">
        <h1>
          {success ? "SUCCESS!" : "FAIL!"}
        </h1>
        <span>{success ? "결과 화면을 점원 또는 스탭에게 보여준 후 커피 or 츄러스 1개 선택하여 주문해주세요." : "츄러스 구매시 증정해드리는 특전이 있으니 받아가세요! 참여해주셔서 감사합니다!"}</span>
      </div>
    );
  }