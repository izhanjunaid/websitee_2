import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ImageAction from "../components/image-action";
import styles from "./mac-book-air20.module.css";

const MacBookAir20: NextPage = () => {
  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  return (
    <div className={styles.macbookAir16}>
      <div className={styles.macbookAir16Child} />
      <div className={styles.macbookAir16Item} width={376} height={61} alt="" />
      <Image
        className={styles.image8Icon}
        loading="lazy"
        width={287}
        height={433}
        alt=""
        src="/image-8@2x.png"
      />
      <div
        className={styles.dimage1}
        width={301}
        height={433}
        alt=""
        src="/3dimage-11@2x.png"
      />
      <div className={styles.shadePinkpie}>
        <span className={styles.shade}>{`Shade: `}</span>
        <i className={styles.pinkpie}>{` Pinkpie `}</i>
      </div>
      <div className={styles.macbookAir16Inner} />
      <div className={styles.itemSelectedLipstickContainer}>
        <span className={styles.shade}>{`Item Selected: `}</span>
        <i className={styles.pinkpie}>Lipstick</i>
      </div>
      <div className={styles.productDetailsMatteContainer}>
        <p className={styles.productDetails}>Product Details:</p>
        <p className={styles.productDetails}>&nbsp;</p>
        <p className={styles.matteFinish}>
          <i className={styles.pinkpie}>Matte Finish</i>
        </p>
        <p className={styles.matteFinish}>
          <i className={styles.pinkpie}>LongLasting</i>
        </p>
        <p className={styles.matteFinish}>
          <i className={styles.pinkpie}>Doesn’t Dry out</i>
        </p>
        <p className={styles.matteFinish}>
          <i className={styles.pinkpie}>Price: 500/-</i>
        </p>
      </div>
      <header className={styles.navigation}>
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
        <div className={styles.homeCartNav}>
          <Image
            className={styles.homeIcon}
            loading="lazy"
            width={60}
            height={46}
            alt=""
            src="/home.svg"
            onClick={onHomeClick}
          />
          <div className={styles.shoppingCartNav}>
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
      <ImageAction />
    </div>
  );
};

export default MacBookAir20;
