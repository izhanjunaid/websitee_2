import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./recommendation-bar.module.css";

export type RecommendationBarType = {
  className?: string;
};

const RecommendationBar: NextPage<RecommendationBarType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mac-book-air5");
  }, [router]);

  const onRecommendationTypeClick = useCallback(() => {
    router.push("/mac-book-air6");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/mac-book-air4");
  }, [router]);

  return (
    <div className={[styles.recommendationBar, className].join(" ")}>
      <div className={styles.imagePreview}>
        <Image
          className={styles.imagePreviewChild}
          loading="lazy"
          width={241}
          height={59}
          alt=""
          src="/rectangle-10.svg"
          onClick={onRectangleClick}
        />
        <div className={styles.viewImageIn}>View image in 2d</div>
      </div>
      <div className={styles.recommendationLabel}>
        <div
          className={styles.recommendationType}
          onClick={onRecommendationTypeClick}
        />
        <div className={styles.tryANew}>Try a new Shade</div>
      </div>
      <div className={styles.recommendationLabel1}>
        <div
          className={styles.recommendationLabelChild}
          onClick={onRectangleClick1}
        />
        <div className={styles.tryANew1}>Try a new product</div>
      </div>
    </div>
  );
};

export default RecommendationBar;
