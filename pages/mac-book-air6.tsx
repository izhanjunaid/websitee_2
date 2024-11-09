import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent2 from "../components/frame-component2";
import styles from "./mac-book-air6.module.css";

const MacBookAir6: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air9");
  }, [router]);

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air7");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  const onShoppingCartIconClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  return (
    <div className={styles.macbookAir6}>
      <div className={styles.macbookAir6Child} />
      <Image
        className={styles.arrowBackIcon}
        loading="lazy"
        width={37}
        height={52}
        alt=""
        src="/arrow-back.svg"
        onClick={onArrowBackClick}
      />
      <section className={styles.navigationContainer}>
        <div className={styles.navigationColumn}>
          <div className={styles.navigationRow}>
            <div className={styles.navigationCell}>
              <div className={styles.navigationItem}>
                <div className={styles.navigationElement}>
                  <div className={styles.navigationPlaceholder}>
                    <div className={styles.navigationSpacer}>
                      <div className={styles.selectABeauty}>
                        Select a Beauty Products
                      </div>
                      <div className={styles.productIcons}>
                        <div className={styles.iconPair}>
                          <div className={styles.questionhelp} />
                          <a className={styles.blush}>Blush</a>
                        </div>
                        <div className={styles.iconPair}>
                          <div className={styles.iconPairChild} />
                          <a className={styles.lipstick}>Lipstick</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.shadeSelection}>
                      <div className={styles.shadeLabelContainer}>
                        <Image
                          className={styles.shadeLabelContainerChild}
                          loading="lazy"
                          width={376}
                          height={61}
                          alt=""
                        />
                        <div className={styles.selectAShade}>
                          Select a shade
                        </div>
                      </div>
                    </div>
                    <div className={styles.finishSelection}>
                      <div className={styles.finishOptions}>
                        <div className={styles.optionRow}>
                          <div className={styles.optionCell}>
                            <div className={styles.optionItem}>
                              <div className={styles.optionElement}>
                                <div className={styles.optionElementChild} />
                                <Image
                                  className={styles.filterIcon}
                                  loading="lazy"
                                  width={41}
                                  height={25}
                                  alt=""
                                />
                              </div>
                              <div className={styles.selectedOption}>
                                <div className={styles.myCoachingLog} />
                                <div className={styles.selectedMarker}>
                                  <div className={styles.selectionIndicator} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.selectFinish}>
                            Select finish
                          </div>
                        </div>
                        <div className={styles.finishSwatches}>
                          <div className={styles.swatchPair}>
                            <div className={styles.breadcrumbSeparator} />
                            <div className={styles.swatchContainer}>
                              <div className={styles.selectionIndicator} />
                            </div>
                          </div>
                          <div className={styles.swatchPair1}>
                            <div className={styles.swatchPairChild} />
                            <div className={styles.selectedMarker}>
                              <div className={styles.selectionIndicator} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.swatchPair}>
                          <div className={styles.selectedSwatchChild} />
                          <div className={styles.selectedSwatchMarker}>
                            <div className={styles.selectionIndicator} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  <div className={styles.footerNavigation}>
                    <div className={styles.footerIcons}>
                      <div className={styles.optionItem}>
                        <div className={styles.homeButton}>
                          <Image
                            className={styles.homeIcon}
                            loading="lazy"
                            width={60}
                            height={46}
                            alt=""
                            src="/home.svg"
                            onClick={onHomeClick}
                          />
                        </div>
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
                    <div className={styles.foundationIcon}>
                      <div className={styles.questionhelp} />
                      <a className={styles.foundation}>Foundation</a>
                    </div>
                  </div>
                  <div className={styles.matteSelection}>
                    <div className={styles.matteOptions}>
                      <div className={styles.matteRow}>
                        <div className={styles.optionItem}>
                          <div className={styles.myCoachingLog1} />
                          <div className={styles.matteCheckContainer}>
                            <div className={styles.matteCheckmark} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.sheerSelection}>
                        <div className={styles.sheerItem}>
                          <div className={styles.sheerItemChild} />
                          <Image
                            className={styles.checkIcon}
                            loading="lazy"
                            width={56}
                            height={25}
                            alt=""
                            src="/check1.svg"
                          />
                        </div>
                        <div className={styles.selectionIndicator} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent2
                matteLargeIconBackgroundColor="#482d5d"
                sheerLargeIconBackgroundColor="#8e77a0"
                sheer="Sheer"
                sheerWidth="68px"
                sheerMinWidth="68px"
                onNextButtonBackgroundClick={onRectangleClick}
              />
            </div>
          </div>
          <div className={styles.imageUploadStatus}>
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

export default MacBookAir6;
