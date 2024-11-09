import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./mac-book-air5.module.css";

const MacBookAir5: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air7");
  }, [router]);

  const onActionButtonShapeClick = useCallback(() => {
    router.push("/mac-book-air6");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onRectangleClick2 = useCallback(() => {
    router.push("/mac-book-air20");
  }, [router]);

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
    <div className={styles.macbookAir4}>
      <div className={styles.macbookAir4Child} />
      <div className={styles.macbookAir4Item} width={376} height={61} alt="" />
      <div className={styles.actions}>
        <div className={styles.imageSwitcher}>
          <div
            className={styles.imageSwitcherChild}
            width={275}
            height={59}
            alt=""
            src="/rectangle-102.svg"
            onClick={onRectangleClick}
          />
          <div className={styles.viewImageIn}>View image in 3d</div>
        </div>
        <div className={styles.actionButtons}>
          <div
            className={styles.actionButtonShape}
            onClick={onActionButtonShapeClick}
          />
          <div className={styles.tryANew}>Try a new Shade</div>
        </div>
        <div className={styles.actionButtons1}>
          <div
            className={styles.actionButtonShape}
            onClick={onRectangleClick1}
          />
          <div className={styles.tryANew1}>Try a new product</div>
        </div>
        <div className={styles.actionButtons1}>
          <div
            className={styles.actionButtonShape}
            onClick={onRectangleClick2}
          />
          <div className={styles.addToCart}>Add to cart</div>
        </div>
      </div>
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
      <div className={styles.macbookAir4Inner} />
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
      <header className={styles.navbar}>
        <div className={styles.backNavigation}>
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
        <div className={styles.homeNavigation}>
          <Image
            className={styles.homeIcon}
            loading="lazy"
            width={60}
            height={46}
            alt=""
            src="/home.svg"
            onClick={onHomeClick}
          />
          <div className={styles.cartNavigation}>
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
    </div>
  );
};

export default MacBookAir5;
