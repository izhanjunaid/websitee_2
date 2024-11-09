import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductName from "../components/product-name";
import styles from "./mac-book-air17.module.css";

const MacBookAir17: NextPage = () => {
  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air15");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  const onButtonLabelsClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  return (
    <div className={styles.macbookAir21}>
      <div className={styles.macbookAir21Child} />
      <div className={styles.topNavigation}>
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
      </div>
      <section className={styles.content}>
        <div className={styles.productDetails}>
          <div className={styles.productInformation}>
            <ProductName lipstick="Lipstick" />
            <Image
              className={styles.image17Icon}
              loading="lazy"
              width={247}
              height={443}
              alt=""
              src="/image-17@2x.png"
            />
          </div>
          <div className={styles.productPreview}>
            <div className={styles.previewContainer}>
              <div
                className={styles.previewContainerChild}
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
          <Image
            className={styles.image16Icon}
            loading="lazy"
            width={260}
            height={433}
            alt=""
            src="/image-16@2x.png"
          />
        </div>
      </section>
      <section className={styles.actionPanel}>
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
        <div className={styles.actions}>
          <div className={styles.imageAction}>
            <Image
              className={styles.imageActionChild}
              loading="lazy"
              width={241}
              height={59}
              alt=""
              src="/rectangle-10.svg"
              onClick={onArrowBackClick}
            />
            <div className={styles.viewImageIn}>View image in 2d</div>
          </div>
          <div className={styles.actionButtons}>
            <div
              className={styles.buttonLabels}
              onClick={onButtonLabelsClick}
            />
            <div className={styles.tryANew}>Try a new Shade</div>
          </div>
          <div className={styles.actionButtons1}>
            <div
              className={styles.actionButtonsChild}
              onClick={onRectangleClick}
            />
            <div className={styles.tryANew1}>Try a new product</div>
          </div>
          <div className={styles.actionButtons2}>
            <div className={styles.actionButtonsItem} />
            <div className={styles.addToCart}>Add to cart</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir17;
