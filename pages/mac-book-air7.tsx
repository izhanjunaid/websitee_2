import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductDisplay from "../components/product-display";
import FrameComponent6 from "../components/frame-component6";
import styles from "./mac-book-air7.module.css";

const MacBookAir7: NextPage = () => {
  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air5");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  return (
    <div className={styles.macbookAir5}>
      <div className={styles.macbookAir5Child} />
      <section className={styles.frameParent}>
        <header className={styles.frameGroup}>
          <div className={styles.arrowBackWrapper}>
            <Image
              className={styles.arrowBackIcon}
              loading="lazy"
              width={37}
              height={52}
              alt=""
              src="/arrow-back.svg"
              onClick={onArrowBackClick}
            />
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
            <div className={styles.shoppingCartWrapper}>
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
        </header>
        <div className={styles.productDisplayParent}>
          <ProductDisplay />
          <div className={styles.imageContainer}>
            <div
              className={styles.imageContainerChild}
              width={376}
              height={61}
              alt=""
            />
            <Image
              className={styles.image8Icon}
              loading="lazy"
              width={287}
              height={433}
              alt=""
              src="/image-8@2x.png"
            />
          </div>
          <Image
            className={styles.image10Icon}
            loading="lazy"
            width={287}
            height={433}
            alt=""
            src="/image-10@2x.png"
          />
        </div>
      </section>
      <FrameComponent6 />
    </div>
  );
};

export default MacBookAir7;
