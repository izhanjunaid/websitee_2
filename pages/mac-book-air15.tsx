import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent5 from "../components/frame-component5";
import styles from "./mac-book-air15.module.css";

const MacBookAir15: NextPage = () => {
  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air14");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  const onRectangleClick2 = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.macbookAir10}>
      <div className={styles.macbookAir10Child} />
      <section className={styles.macbookAir10Inner}>
        <div className={styles.frameParent}>
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
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.itemSelectedBlushParent}>
                  <div className={styles.itemSelectedBlushContainer}>
                    <span
                      className={styles.itemSelected}
                    >{`Item Selected: `}</span>
                    <i className={styles.blush}>Blush</i>
                  </div>
                  <FrameComponent5 />
                </div>
              </div>
              <div
                className={styles.dimage1}
                width={301}
                height={433}
                alt=""
                src="/3dimage-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.vectorParent}>
                <div
                  className={styles.frameChild}
                  width={376}
                  height={61}
                  alt=""
                />
                <Image
                  className={styles.image15Icon}
                  loading="lazy"
                  width={277}
                  height={433}
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
            </div>
            <div className={styles.homeParent}>
              <Image
                className={styles.homeIcon}
                loading="lazy"
                width={60}
                height={46}
                alt=""
                src="/home.svg"
                onClick={onHomeClick}
              />
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
      <div className={styles.frameParent1}>
        <div className={styles.vectorGroup}>
          <div
            className={styles.frameItem}
            width={275}
            height={59}
            alt=""
            src="/rectangle-102.svg"
            onClick={onRectangleClick}
          />
          <div className={styles.viewImageIn}>View image in 3d</div>
        </div>
        <div className={styles.actionButtonIconsParent}>
          <div
            className={styles.actionButtonIcons}
            onClick={onArrowBackClick}
          />
          <div className={styles.tryANew}>Try a new Shade</div>
        </div>
        <div className={styles.rectangleParent}>
          <div
            className={styles.actionButtonIcons}
            onClick={onRectangleClick1}
          />
          <div className={styles.tryANew1}>Try a new product</div>
        </div>
        <div className={styles.rectangleParent}>
          <div
            className={styles.actionButtonIcons}
            onClick={onRectangleClick2}
          />
          <div className={styles.addToCart}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir15;
