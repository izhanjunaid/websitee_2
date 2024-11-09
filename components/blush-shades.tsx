import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent5 from "./frame-component5";
import styles from "./blush-shades.module.css";

export type BlushShadesType = {
  className?: string;
};

const BlushShades: NextPage<BlushShadesType> = ({ className = "" }) => {
  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air14");
  }, [router]);

  return (
    <div className={[styles.blushShades, className].join(" ")}>
      <div className={styles.shadeDetailWrapper}>
        <div className={styles.shadeDetail}>
          <Image
            className={styles.arrowBackIcon}
            loading="lazy"
            width={37}
            height={52}
            alt=""
            src="/arrow-back.svg"
            onClick={onArrowBackClick}
          />
          <div className={styles.itemSelectedBlushContainer}>
            <span className={styles.itemSelected}>{`Item Selected: `}</span>
            <i className={styles.blush}>Blush</i>
          </div>
        </div>
      </div>
      <div className={styles.productInfo}>
        <FrameComponent5
          frameDivAlignSelf="unset"
          frameDivFlex="1"
          longLastingFontFamily="Inter"
          price700FontFamily="Inter"
        />
      </div>
      <div className={styles.imageLink}>
        <div
          className={styles.imageLinkChild}
          width={275}
          height={59}
          alt=""
          src="/rectangle-102.svg"
          onClick={onRectangleClick}
        />
        <div className={styles.viewImageIn}>View image in 3d</div>
      </div>
    </div>
  );
};

export default BlushShades;
