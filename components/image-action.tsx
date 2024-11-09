import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./image-action.module.css";

export type ImageActionType = {
  className?: string;
};

const ImageAction: NextPage<ImageActionType> = ({ className = "" }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air7");
  }, [router]);

  const onAddToCartClick = useCallback(() => {
    router.push("/mac-book-air6");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  return (
    <section className={[styles.imageAction, className].join(" ")}>
      <div className={styles.imageIcon}>
        <Image
          className={styles.icon}
          loading="lazy"
          width={39}
          height={25}
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className={styles.actions}>
        <div className={styles.viewImage}>
          <div
            className={styles.viewImageChild}
            width={275}
            height={59}
            alt=""
            src="/rectangle-102.svg"
            onClick={onRectangleClick}
          />
          <div className={styles.viewImageIn}>View image in 3d</div>
        </div>
        <div className={styles.cartButton}>
          <div className={styles.addToCart} onClick={onAddToCartClick} />
          <div className={styles.tryANew}>Try a new Shade</div>
        </div>
        <div className={styles.cartButton1}>
          <div className={styles.addToCart} onClick={onRectangleClick1} />
          <div className={styles.tryANew1}>Try a new product</div>
        </div>
        <div className={styles.cartButton2}>
          <div className={styles.cartButtonItem} />
          <div className={styles.addToCart1}>Add to cart</div>
        </div>
      </div>
    </section>
  );
};

export default ImageAction;
