import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  const router = useRouter();

  const onArrowBackClick = useCallback(() => {
    router.push("/mac-book-air11");
  }, [router]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.arrowBackParent}>
        <Image
          className={styles.arrowBackIcon}
          loading="lazy"
          width={37}
          height={52}
          alt=""
          src="/arrow-back.svg"
          onClick={onArrowBackClick}
        />
        <div className={styles.personalInformationWrapper}>
          <h1 className={styles.personalInformation}>Personal Information</h1>
        </div>
      </div>
      <div className={styles.nameAyraKhanAddressHouseWrapper}>
        <i className={styles.nameAyraKhanContainer}>
          <p className={styles.nameAyraKhan}>Name: Ayra Khan</p>
          <p className={styles.nameAyraKhan}>
            Address: House no: 34, Block: G5, Gulberg, Lahore
          </p>
          <p className={styles.nameAyraKhan}>Cell: (+92) 3214567890</p>
          <p className={styles.nameAyraKhan}>Postel Code: 54000</p>
          <p className={styles.nameAyraKhan}>Email: ayrakhan@gmail.com</p>
        </i>
      </div>
      <div className={styles.yourSubtotal1700Wrapper}>
        <i className={styles.yourSubtotal1700}>Your Subtotal: 1700/-</i>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.selectAPaymentMethodWrapper}>
            <i className={styles.selectAPayment}>Select a Payment Method</i>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.codWrapper}>
              <i className={styles.selectAPayment}>COD</i>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <Image
                  className={styles.icon}
                  loading="lazy"
                  width={39}
                  height={25}
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className={styles.creditdebitCardWrapper}>
              <i className={styles.selectAPayment}>Credit/Debit card</i>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
