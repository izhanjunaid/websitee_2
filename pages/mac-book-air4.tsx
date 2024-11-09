import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import styles from "./mac-book-air4.module.css";

const MacBookAir4: NextPage = () => {
  const router = useRouter();

  const onNextButtonBackgroundClick = useCallback(() => {
    router.push("/mac-book-air15");
  }, [router]);

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air8");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  return (
    <div className={styles.macbookAir9}>
      <div className={styles.macbookAir9Child} />
      <Image
        className={styles.arrowBackIcon}
        loading="lazy"
        width={37}
        height={52}
        alt=""
        src="/arrow-back.svg"
        onClick={onArrowBackClick}
      />
      <section className={styles.productOptions}>
        <div className={styles.productOptionContainer}>
          <div className={styles.productOptionContainerInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <FrameComponent1
                  frameDivPadding="15px 0px 0px"
                  makeupTypeIconBackgroundColor="#482d5d"
                  ellipseDivBackgroundColor="#8e77a0"
                  rectangle5="pending_8:301"
                  optionDivider="pending_8:319"
                />
                <div className={styles.navigationBar}>
                  <div className={styles.navigationItems}>
                    <div className={styles.homeAndCart}>
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
                    <div className={styles.foundationIconParent}>
                      <div className={styles.foundationIcon} />
                      <a className={styles.foundation}>Foundation</a>
                    </div>
                  </div>
                  <div className={styles.matteCreamOptionsWrapper}>
                    <div className={styles.matteCreamOptions}>
                      <div className={styles.matteRow}>
                        <div className={styles.matteCircle} />
                        <div className={styles.matteContainer}>
                          <div className={styles.matteIndicator} />
                        </div>
                      </div>
                      <div className={styles.creamRow}>
                        <div className={styles.creamIndicators}>
                          <div className={styles.creamSelection} />
                          <div className={styles.creamSelection} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent2
                matteLargeIconBackgroundColor="#8e77a0"
                sheerLargeIconBackgroundColor="#482d5d"
                sheer="Cream"
                sheerWidth="76px"
                sheerMinWidth="76px"
                onNextButtonBackgroundClick={onNextButtonBackgroundClick}
              />
            </div>
          </div>
          <div className={styles.uploadConfirmation}>
            <Image
              className={styles.dimage1Icon}
              loading="lazy"
              width={362}
              height={548}
              alt=""
              src="/3dimage-1@2x.png"
            />
            <i className={styles.imageUploadedSuccessfully}>
              Image uploaded successfully!
            </i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir4;
