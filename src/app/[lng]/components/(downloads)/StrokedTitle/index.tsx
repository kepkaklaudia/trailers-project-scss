import styles from "@/app/[lng]/components/(downloads)/StrokedTitle/strokedTitle.module.scss";
import { Stroke } from "@/app/[lng]/components/(common)/Stroke";
import { MotionShuffle } from "@/app/[lng]/components/(common)/Motion/MotionShuffle";
import { MotionOpacity } from "@/app/[lng]/components/(common)/Motion/MotionOpacity";

interface StrokedTitleProps {
  title: string;
}

export const StrokedTitle: React.FC<StrokedTitleProps> = ({ title }) => {
  return (
    <>
      <div className={styles.container}>
        <MotionShuffle x={-500}>
          <Stroke
            additionalClass={styles.stroke}
            src={"/assets/strokes/strokeLeft.svg"}
          />
        </MotionShuffle>
        <MotionOpacity>
          <h2 className={styles.heading}>{title}</h2>
        </MotionOpacity>
        <MotionShuffle x={500}>
          <Stroke
            additionalClass={styles.stroke}
            src={"/assets/strokes/strokeRight.svg"}
          />
        </MotionShuffle>
      </div>
    </>
  );
};
