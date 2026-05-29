export default function ResultScreen({
    success,
    onRestart,
  }) {
    return (
      <div className="screen result">
        <h1>
          {success ? "SUCCESS!" : "FAIL!"}
        </h1>
        <p>
        <span>{success ? "결과 화면을 점원 또는 스탭에게 보여준 후 커피 or 츄러스 1개 선택하여 주문해주세요!" : "POW 현빈의 생일을 축하해주시고, 참여해주셔서 감사합니다 !"}</span>
        </p>
        <p>
        <span className="sub-txt">  {success
          ? "Please show this result screen to a staff and choose either one coffee or one churro."
          : "Thank you for celebrating POW Hyunbin’s birthday and participating!"}</span>
        </p>
        <p><span>테이블위 생일축하메시지를 적은 후 우체통에 넣어주시면 구냥이가 아주 기뻐할거예요.</span></p>
        <p><span className="sub-txt">After writing a birthday message on the table, please place it in the mailbox — Koonyang will be very happy!</span></p>
      </div>
    );
  }