import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
  viewCart?: string;
  clickHereToConfirm?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivFlex?: CSSProperties["flex"];
  viewCartWidth?: CSSProperties["width"];
  viewCartMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onRectangleClick?: () => void;
  onRectangleClick1?: () => void;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({
  className = "",
  frameDivWidth,
  frameDivFlex,
  onRectangleClick,
  viewCart,
  viewCartWidth,
  viewCartMinWidth,
  onRectangleClick1,
  clickHereToConfirm,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      flex: frameDivFlex,
    };
  }, [frameDivWidth, frameDivFlex]);

  const viewCartStyle: CSSProperties = useMemo(() => {
    return {
      width: viewCartWidth,
      minWidth: viewCartMinWidth,
    };
  }, [viewCartWidth, viewCartMinWidth]);

  const router = useRouter();

  const onRectangleClick2 = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  const onRectangleClick3 = useCallback(() => {
    router.push("/mac-book-air13");
  }, [router]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv3Style}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} onClick={onRectangleClick} />
        <div className={styles.viewCart} style={viewCartStyle}>
          {viewCart}
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} onClick={onRectangleClick1} />
          <div className={styles.clickHereTo}>{clickHereToConfirm}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
