import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import BlushShades from "../components/blush-shades";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const MacBookAir16: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  const onAddButtonClick = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  return (
    <div className={styles.macbookAir20}>
      <div className={styles.macbookAir20Child} />
      <BlushShades />
      <div className={styles.productImage}>
        <div className={styles.imageContainer}>
          <div
            className={styles.dimage1}
            width={301}
            height={433}
            alt=""
            src="/3dimage-11@2x.png"
          />
          <div className={styles.shadeTry}>
            <div className={styles.shadeTryChild} onClick={onRectangleClick} />
            <div className={styles.tryANew}>Try a new Shade</div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationContent}>
          <div className={styles.productThumb}>
            <div className={styles.thumbnail}>
              <div
                className={styles.thumbnailChild}
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
          <div className={styles.navButtons}>
            <div className={styles.homeButton}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={39}
                height={25}
                alt=""
                src="/icon.svg"
              />
            </div>
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
        <div className={styles.actionButtons}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonLabels}>
              <div
                className={styles.shadeTryChild}
                onClick={onAddButtonClick}
              />
              <div className={styles.tryANew1}>Try a new product</div>
            </div>
            <div className={styles.buttonLabels1}>
              <div className={styles.buttonLabelsChild} />
              <div className={styles.addToCart}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir16;
