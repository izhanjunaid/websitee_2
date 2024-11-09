import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import styles from "./mac-book-air3.module.css";

const MacBookAir3: NextPage = () => {
  const router = useRouter();

  const onNextButtonBackgroundClick = useCallback(() => {
    router.push("/mac-book-air5");
  }, [router]);

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air1");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/mac-book-air");
  }, [router]);

  return (
    <div className={styles.macbookAir3}>
      <div className={styles.macbookAir3Child} />
      <Image
        className={styles.arrowBackIcon}
        loading="lazy"
        width={37}
        height={52}
        alt=""
        src="/arrow-back.svg"
        onClick={onArrowBackClick}
      />
      <section className={styles.macbookAir3Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <FrameComponent1
                  rectangle5="pending_1:81"
                  optionDivider="pending_6:73"
                />
                <div className={styles.navigationBar}>
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
                    <div className={styles.frameDiv}>
                      <div className={styles.foundationIconParent}>
                        <div className={styles.foundationIcon} />
                        <a className={styles.foundation}>Foundation</a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.navigationBarInner}>
                    <div className={styles.frameParent1}>
                      <div className={styles.matteSmallIconParent}>
                        <div className={styles.matteSmallIcon} />
                        <div className={styles.matteDividerWrapper}>
                          <div className={styles.matteDivider} />
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.sheerSmallIconParent}>
                          <div className={styles.sheerSmallIcon} />
                          <div className={styles.sheerSmallIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent2
                sheer="Sheer"
                onNextButtonBackgroundClick={onNextButtonBackgroundClick}
              />
            </div>
          </div>
          <div className={styles.imageConfirmation}>
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

export default MacBookAir3;
