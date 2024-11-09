import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import styles from "./mac-book-air10.module.css";

const MacBookAir10: NextPage = () => {
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

  const onUnitClick = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  const onNameClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  return (
    <div className={styles.macbookAir18}>
      <div className={styles.macbookAir18Child} />
      <section className={styles.frameParent}>
        <FrameComponent4
          image11="/image-11@2x.png"
          longLastingFontFamily="Inter"
          doesntDryOutFontFamily="Inter"
          price500FontFamily="Inter"
        />
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
        <div className={styles.frameWrapper}>
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
        </div>
      </section>
      <div className={styles.macbookAir18Inner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.vectorParent}>
              <Image
                className={styles.frameChild}
                loading="lazy"
                width={234}
                height={59}
                alt=""
                src="/rectangle-101.svg"
                onClick={onRectangleClick}
              />
              <div className={styles.viewImageIn}>View image in 3d</div>
            </div>
            <div className={styles.unitParent}>
              <div className={styles.unit} onClick={onUnitClick} />
              <div className={styles.tryANew}>Try a new Shade</div>
            </div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name} onClick={onNameClick} />
            <div className={styles.tryANew1}>Try a new product</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.addToCart}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir10;
