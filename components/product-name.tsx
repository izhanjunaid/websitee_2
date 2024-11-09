import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./product-name.module.css";

export type ProductNameType = {
  className?: string;
  lipstick?: string;

  /** Style props */
  productNameJustifyContent?: CSSProperties["justifyContent"];
  productNamePadding?: CSSProperties["padding"];
  productNameWidth?: CSSProperties["width"];
  productTitleAlignSelf?: CSSProperties["alignSelf"];
  productDetailsMatteContainerWidth?: CSSProperties["width"];
  productDetailsMatteContainerDisplay?: CSSProperties["display"];
  productDetailsMatteContainerAlignSelf?: CSSProperties["alignSelf"];
  longLastingFontFamily?: CSSProperties["fontFamily"];
  price700FontFamily?: CSSProperties["fontFamily"];
};

const ProductName: NextPage<ProductNameType> = ({
  className = "",
  productNameJustifyContent,
  productNamePadding,
  productNameWidth,
  productTitleAlignSelf,
  lipstick,
  productDetailsMatteContainerWidth,
  productDetailsMatteContainerDisplay,
  productDetailsMatteContainerAlignSelf,
  longLastingFontFamily,
  price700FontFamily,
}) => {
  const productNameStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: productNameJustifyContent,
      padding: productNamePadding,
      width: productNameWidth,
    };
  }, [productNameJustifyContent, productNamePadding, productNameWidth]);

  const productTitleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: productTitleAlignSelf,
    };
  }, [productTitleAlignSelf]);

  const productDetailsMatteContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: productDetailsMatteContainerWidth,
      display: productDetailsMatteContainerDisplay,
      alignSelf: productDetailsMatteContainerAlignSelf,
    };
  }, [
    productDetailsMatteContainerWidth,
    productDetailsMatteContainerDisplay,
    productDetailsMatteContainerAlignSelf,
  ]);

  const longLasting1Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: longLastingFontFamily,
    };
  }, [longLastingFontFamily]);

  const price700Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: price700FontFamily,
    };
  }, [price700FontFamily]);

  const router = useRouter();

  const onProductDetailsMatteClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  return (
    <div
      className={[styles.productName, className].join(" ")}
      style={productNameStyle}
    >
      <div className={styles.productTitle} style={productTitleStyle}>
        <div className={styles.itemSelectedLipstickContainer}>
          <span className={styles.itemSelected}>{`Item Selected: `}</span>
          <i className={styles.lipstick}>{lipstick}</i>
        </div>
        <div className={styles.productShade}>
          <div className={styles.itemSelectedLipstickContainer}>
            <span className={styles.itemSelected}>{`Shade: `}</span>
            <i className={styles.lipstick}>{`Stawberry Shotcake `}</i>
          </div>
          <div className={styles.shadeSelector} />
        </div>
        <div
          className={styles.productDetailsMatteContainer}
          onClick={onProductDetailsMatteClick}
          style={productDetailsMatteContainerStyle}
        >
          <p className={styles.productDetails}>Product Details:</p>
          <p className={styles.productDetails}>&nbsp;</p>
          <p className={styles.matteFinish}>
            <i className={styles.lipstick}>Matte Finish</i>
          </p>
          <p className={styles.matteFinish}>
            <i className={styles.lipstick} style={longLasting1Style}>
              LongLasting
            </i>
          </p>
          <p className={styles.matteFinish}>
            <i className={styles.lipstick} style={price700Style}>
              Price: 700/-
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductName;
