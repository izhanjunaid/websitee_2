import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductDisplay from "../components/product-display";
import RecommendationBar from "../components/recommendation-bar";
import styles from "./mac-book-air19.module.css";

const MacBookAir19: NextPage = () => {
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
    <div className={styles.macbookAir17}>
      <div className={styles.macbookAir17Child} />
      <header className={styles.frameParent}>
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
        <div className={styles.menu}>
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
      <section className={styles.content}>
        <div className={styles.frameGroup}>
          <div className={styles.productDetailsParent}>
            <ProductDisplay
              productDisplayPadding="unset"
              productDisplayFlex="1"
              frameDivWidth="unset"
              frameDivMinWidth="266px"
              longLastingFontFamily="Inter"
              doesntDryOutFontFamily="Inter"
              price500FontFamily="Inter"
            />
            <div className={styles.vectorParent}>
              <div
                className={styles.frameChild}
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
          </div>
          <RecommendationBar />
        </div>
        <div className={styles.actionBar}>
          <div className={styles.actionButton}>
            <Image
              className={styles.image10Icon}
              loading="lazy"
              width={287}
              height={433}
              alt=""
              src="/image-10@2x.png"
            />
          </div>
          <div className={styles.cartButton}>
            <div className={styles.iconWrapper}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={39}
                height={25}
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.addToCart}>Add to cart</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir19;
