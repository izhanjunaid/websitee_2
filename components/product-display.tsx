import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./product-display.module.css";

export type ProductDisplayType = {
  className?: string;

  /** Style props */
  productDisplayPadding?: CSSProperties["padding"];
  productDisplayFlex?: CSSProperties["flex"];
  frameDivWidth?: CSSProperties["width"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  longLastingFontFamily?: CSSProperties["fontFamily"];
  doesntDryOutFontFamily?: CSSProperties["fontFamily"];
  price500FontFamily?: CSSProperties["fontFamily"];
};

const ProductDisplay: NextPage<ProductDisplayType> = ({
  className = "",
  productDisplayPadding,
  productDisplayFlex,
  frameDivWidth,
  frameDivMinWidth,
  longLastingFontFamily,
  doesntDryOutFontFamily,
  price500FontFamily,
}) => {
  const productDisplayStyle: CSSProperties = useMemo(() => {
    return {
      padding: productDisplayPadding,
      flex: productDisplayFlex,
    };
  }, [productDisplayPadding, productDisplayFlex]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivWidth, frameDivMinWidth]);

  const longLasting3Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: longLastingFontFamily,
    };
  }, [longLastingFontFamily]);

  const doesntDryOut1Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: doesntDryOutFontFamily,
    };
  }, [doesntDryOutFontFamily]);

  const price5001Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: price500FontFamily,
    };
  }, [price500FontFamily]);

  return (
    <div
      className={[styles.productDisplay, className].join(" ")}
      style={productDisplayStyle}
    >
      <div className={styles.itemDetailsWrapper} style={frameDiv2Style}>
        <div className={styles.itemDetails}>
          <div className={styles.itemSelectedLipstickContainer}>
            <span className={styles.itemSelected}>{`Item Selected: `}</span>
            <i className={styles.lipstick}>Lipstick</i>
          </div>
          <div className={styles.shadeInfo}>
            <div className={styles.shadeSelectionParent}>
              <div className={styles.shadeSelection}>
                <div className={styles.shadeName}>
                  <div className={styles.shade}>{`Shade: `}</div>
                  <i className={styles.pinkpie}>Pinkpie</i>
                </div>
                <div className={styles.colorPicker}>
                  <div className={styles.div} />
                </div>
              </div>
              <div className={styles.productDetailsMatteFinishWrapper}>
                <div className={styles.productDetailsMatteContainer}>
                  <p className={styles.productDetails}>Product Details:</p>
                  <p className={styles.productDetails}>&nbsp;</p>
                  <p className={styles.matteFinish}>
                    <i className={styles.lipstick}>Matte Finish</i>
                  </p>
                  <p className={styles.matteFinish}>
                    <i className={styles.lipstick} style={longLasting3Style}>
                      LongLasting
                    </i>
                  </p>
                  <p className={styles.matteFinish}>
                    <i className={styles.lipstick} style={doesntDryOut1Style}>
                      Doesn’t Dry out
                    </i>
                  </p>
                  <p className={styles.matteFinish}>
                    <i className={styles.lipstick} style={price5001Style}>
                      Price: 500/-
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.image9}
        width={285}
        height={433}
        alt=""
        src="/image-9@2x.png"
      />
    </div>
  );
};

export default ProductDisplay;
