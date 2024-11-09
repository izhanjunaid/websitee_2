import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductName from "../components/product-name";
import styles from "./mac-book-air14.module.css";

const MacBookAir14: NextPage = () => {
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

  const onRecommendationImagesClick = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air3");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air17");
  }, [router]);

  return (
    <div className={styles.macbookAir11}>
      <div className={styles.macbookAir11Child} />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
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
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.productInfoParent}>
            <ProductName
              productNameJustifyContent="flex-start"
              productNamePadding="39px 0px 0px"
              productNameWidth="260px"
              productTitleAlignSelf="stretch"
              lipstick="Blush"
              productDetailsMatteContainerWidth="unset"
              productDetailsMatteContainerDisplay="unset"
              productDetailsMatteContainerAlignSelf="stretch"
              longLastingFontFamily="Inter"
              price700FontFamily="Inter"
            />
            <div className={styles.image17Wrapper}>
              <Image
                className={styles.image17Icon}
                loading="lazy"
                width={247}
                height={443}
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <div className={styles.productSlider}>
              <div className={styles.productSliderImage}>
                <div
                  className={styles.productSliderImageChild}
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
        </div>
      </section>
      <div className={styles.imageZoomParent}>
        <div className={styles.imageZoom}>
          <Image
            className={styles.imageZoomChild}
            loading="lazy"
            width={241}
            height={59}
            alt=""
            src="/rectangle-10.svg"
            onClick={onArrowBackClick}
          />
          <div className={styles.viewImageIn}>View image in 2d</div>
        </div>
        <div className={styles.recommendationOptions}>
          <div
            className={styles.recommendationImages}
            onClick={onRecommendationImagesClick}
          />
          <div className={styles.tryANew}>Try a new Shade</div>
        </div>
        <div className={styles.recommendationOptions1}>
          <div
            className={styles.recommendationOptionsChild}
            onClick={onRectangleClick}
          />
          <div className={styles.tryANew1}>Try a new product</div>
        </div>
        <div className={styles.recommendationOptions2}>
          <div
            className={styles.recommendationOptionsItem}
            onClick={onRectangleClick1}
          />
          <div className={styles.addToCart}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir14;
