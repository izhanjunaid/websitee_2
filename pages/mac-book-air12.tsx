import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import styles from "./mac-book-air12.module.css";

const MacBookAir12: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air13");
  }, [router]);

  return (
    <div className={styles.macbookAir13}>
      <div className={styles.macbookAir13Child} />
      <section className={styles.macbookAir13Inner}>
        <div className={styles.frameParent}>
          <FrameComponent7 />
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <div
                className={styles.frameChild}
                width={376}
                height={61}
                alt=""
              />
              <Image
                className={styles.image18Icon}
                loading="lazy"
                width={570}
                height={401}
                alt=""
                src="/image-18@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent8
        onRectangleClick={onRectangleClick}
        viewCart=" View Cart"
        onRectangleClick1={onRectangleClick1}
        clickHereToConfirm="Click here to confirm"
      />
    </div>
  );
};

export default MacBookAir12;
