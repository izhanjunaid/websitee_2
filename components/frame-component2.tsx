import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
  sheer?: string;

  /** Style props */
  matteLargeIconBackgroundColor?: CSSProperties["backgroundColor"];
  sheerLargeIconBackgroundColor?: CSSProperties["backgroundColor"];
  sheerWidth?: CSSProperties["width"];
  sheerMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onNextButtonBackgroundClick?: () => void;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  matteLargeIconBackgroundColor,
  sheerLargeIconBackgroundColor,
  sheer,
  sheerWidth,
  sheerMinWidth,
  onNextButtonBackgroundClick,
}) => {
  const matteLargeIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: matteLargeIconBackgroundColor,
    };
  }, [matteLargeIconBackgroundColor]);

  const sheerLargeIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sheerLargeIconBackgroundColor,
    };
  }, [sheerLargeIconBackgroundColor]);

  const sheerStyle: CSSProperties = useMemo(() => {
    return {
      width: sheerWidth,
      minWidth: sheerMinWidth,
    };
  }, [sheerWidth, sheerMinWidth]);

  const router = useRouter();

  const onNextButtonBackgroundClick1 = useCallback(() => {
    router.push("/mac-book-air5");
  }, [router]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.matteLargeIconParent}>
        <div className={styles.matteLargeIcon} style={matteLargeIconStyle} />
        <div className={styles.matte}>Matte</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.sheerLargeIconParent}>
            <div
              className={styles.sheerLargeIcon}
              style={sheerLargeIconStyle}
            />
            <div className={styles.sheer} style={sheerStyle}>
              {sheer}
            </div>
          </div>
        </div>
        <div className={styles.nextButtonBackgroundParent}>
          <div
            className={styles.nextButtonBackground}
            onClick={onNextButtonBackgroundClick}
          />
          <div className={styles.nextWrapper}>
            <i className={styles.next}>Next</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
