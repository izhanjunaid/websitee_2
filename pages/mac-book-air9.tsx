import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import styles from "./mac-book-air9.module.css";

const MacBookAir9: NextPage = () => {
  const router = useRouter();

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air8");
  }, [router]);

  const onTryShadeBackgroundClick = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  const onTryProductBackgroundClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onAddCartBackgroundClick = useCallback(() => {
    router.push("/mac-book-air10");
  }, [router]);

  return (
    <div className={styles.macbookAir7}>
      <div className={styles.macbookAir7Child} />
      <section className={styles.frameParent}>
        <FrameComponent4 image11="/image-11@2x.png" />
        <div className={styles.navigation}>
          <div className={styles.homeCart}>
            <Image
              className={styles.homeIcon}
              loading="lazy"
              width={60}
              height={46}
              alt=""
              src="/home.svg"
              onClick={onHomeClick}
            />
            <div className={styles.cart}>
              <Image
                className={styles.shoppingCartIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/shopping-cart.svg"
                onClick={onShoppingCartIconClick}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.actions}>
        <div className={styles.actionButtons}>
          <div className={styles.imageAction}>
            <div className={styles.viewImage}>
              <Image
                className={styles.viewImageChild}
                loading="lazy"
                width={234}
                height={59}
                alt=""
                src="/rectangle-101.svg"
                onClick={onRectangleClick}
              />
              <div className={styles.viewImageIn}>View image in 3d</div>
            </div>
            <div className={styles.tryShade}>
              <div
                className={styles.tryShadeBackground}
                onClick={onTryShadeBackgroundClick}
              />
              <div className={styles.tryANew}>Try a new Shade</div>
            </div>
          </div>
          <div className={styles.tryProduct}>
            <div
              className={styles.tryProductBackground}
              onClick={onTryProductBackgroundClick}
            />
            <div className={styles.tryANew1}>Try a new product</div>
          </div>
          <div className={styles.addToCart}>
            <div className={styles.addCartButton}>
              <div
                className={styles.tryShadeBackground}
                onClick={onAddCartBackgroundClick}
              />
              <div className={styles.addToCart1}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir9;
