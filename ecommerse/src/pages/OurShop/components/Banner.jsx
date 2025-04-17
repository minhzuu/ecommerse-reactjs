import CountDownTimer from "@components/CountDownTimer/CountDownTimer";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";
function Banner() {
  const { containerBanner, contentBox, title, countdownBox } = styles;
  const targetDate = "2025-12-31T00:00:00";
  return (
    <div className={containerBanner}>
      <div className={contentBox}>
        <div className={countdownBox}>
          <CountDownTimer targetDate={targetDate} />
        </div>
        <div className={title}>The Classic Make A Comeback</div>
        <Button content={"Buy Now"} />
      </div>
    </div>
  );
}

export default Banner;
