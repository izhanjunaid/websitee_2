import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;

  /** Style props */
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivFlex?: CSSProperties["flex"];
  longLastingFontFamily?: CSSProperties["fontFamily"];
  price700FontFamily?: CSSProperties["fontFamily"];
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  className = "",
  frameDivAlignSelf,
  frameDivFlex,
  longLastingFontFamily,
  price700FontFamily,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivAlignSelf, frameDivFlex]);

  const longLasting2Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: longLastingFontFamily,
    };
  }, [longLastingFontFamily]);

  const price7001Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: price700FontFamily,
    };
  }, [price700FontFamily]);

  return (
    <div
      className={[styles.shadeStawberryShotcakeParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.shadeStawberryShotcakeContainer}>
        <span className={styles.shade}>{`Shade: `}</span>
        <i className={styles.stawberryShotcake}>{`Stawberry Shotcake `}</i>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.productDetailsCreamFinishWrapper}>
          <div className={styles.productDetailsCreamContainer}>
            <p className={styles.productDetails}>Product Details:</p>
            <p className={styles.productDetails}>&nbsp;</p>
            <p className={styles.creamFinish}>
              <i className={styles.stawberryShotcake}>Cream Finish</i>
            </p>
            <p className={styles.creamFinish}>
              <i className={styles.stawberryShotcake} style={longLasting2Style}>
                LongLasting
              </i>
            </p>
            <p className={styles.creamFinish}>
              <i className={styles.stawberryShotcake} style={price7001Style}>
                Price: 700/-
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
