import styles from "@/app/[lng]/components/(layout)/Header/Background/background.module.scss";

export const Background = () => (
  <div className={styles.wrapper}>
    <video className={styles.container} autoPlay playsInline loop muted>
      <source src="assets/layout/balhanger.mp4" type="video/mp4" />
    </video>
  </div>
);
