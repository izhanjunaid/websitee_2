import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air5");
  }, [router]);

  const onButtonShapesClick = useCallback(() => {
    router.push("/mac-book-air6");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onRectangleClick2 = useCallback(() => {
    router.push("/mac-book-air19");
  }, [router]);

  return (
    <div className={[styles.actionContainerWrapper, className].join(" ")}>
      <div className={styles.actionContainer}>
        <div className={styles.vectorParent}>
          <Image
            className={styles.frameChild}
            loading="lazy"
            width={241}
            height={59}
            alt=""
            src="/rectangle-10.svg"
            onClick={onRectangleClick}
          />
          <div className={styles.viewImageIn}>View image in 2d</div>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.buttonShapes} onClick={onButtonShapesClick} />
          <div className={styles.tryANew}>Try a new Shade</div>
        </div>
        <div className={styles.actionButtons1}>
          <div
            className={styles.actionButtonsChild}
            onClick={onRectangleClick1}
          />
          <div className={styles.tryANew1}>Try a new product</div>
        </div>
        <div className={styles.actionButtons2}>
          <div
            className={styles.actionButtonsItem}
            onClick={onRectangleClick2}
          />
          <div className={styles.addToCart}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
