import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
  image11?: string;

  /** Style props */
  longLastingFontFamily?: CSSProperties["fontFamily"];
  doesntDryOutFontFamily?: CSSProperties["fontFamily"];
  price500FontFamily?: CSSProperties["fontFamily"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  image11,
  longLastingFontFamily,
  doesntDryOutFontFamily,
  price500FontFamily,
}) => {
  const longLastingStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: longLastingFontFamily,
    };
  }, [longLastingFontFamily]);

  const doesntDryOutStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: doesntDryOutFontFamily,
    };
  }, [doesntDryOutFontFamily]);

  const price500Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: price500FontFamily,
    };
  }, [price500FontFamily]);

  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air6");
  }, [router]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.arrowBackParent}>
            <Image
              className={styles.arrowBackIcon}
              loading="lazy"
              width={37}
              height={52}
              alt=""
              src="/arrow-back.svg"
              onClick={onArrowBackClick}
            />
            <div className={styles.itemSelectedLipstickWrapper}>
              <div className={styles.itemSelectedLipstickContainer}>
                <span className={styles.itemSelected}>{`Item Selected: `}</span>
                <i className={styles.lipstick}>Lipstick</i>
              </div>
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.shadeInfo}>
              <div className={styles.shadeHoney}>
                <span className={styles.itemSelected}>Shade:</span>
                <i className={styles.lipstick}> Honey</i>
              </div>
              <div className={styles.color}>
                <div className={styles.colorChild} />
                <div className={styles.description}>
                  <div className={styles.productDetailsMatteContainer}>
                    <p className={styles.productDetails}>Product Details:</p>
                    <p className={styles.productDetails}>&nbsp;</p>
                    <p className={styles.matteFinish}>
                      <i className={styles.lipstick}>Matte Finish</i>
                    </p>
                    <p className={styles.matteFinish}>
                      <i className={styles.lipstick} style={longLastingStyle}>
                        LongLasting
                      </i>
                    </p>
                    <p className={styles.matteFinish}>
                      <i className={styles.lipstick} style={doesntDryOutStyle}>
                        Doesn’t Dry out
                      </i>
                    </p>
                    <p className={styles.matteFinish}>
                      <i className={styles.lipstick} style={price500Style}>
                        Price: 500/-
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productImage}>
        <div
          className={styles.productImageChild}
          width={376}
          height={61}
          alt=""
        />
        <div
          className={styles.dimage1}
          width={301}
          height={433}
          alt=""
          src="/3dimage-11@2x.png"
        />
        <Image
          className={styles.image11Icon}
          loading="lazy"
          width={292}
          height={433}
          alt=""
          src={image11}
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
