import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  rectangle5?: string;
  optionDivider?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  makeupTypeIconBackgroundColor?: CSSProperties["backgroundColor"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameDivPadding,
  makeupTypeIconBackgroundColor,
  ellipseDivBackgroundColor,
  rectangle5,
  optionDivider,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const makeupTypeIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: makeupTypeIconBackgroundColor,
    };
  }, [makeupTypeIconBackgroundColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.selectABeautyProductsParent}>
          <div className={styles.selectABeauty}>Select a Beauty Products</div>
          <div className={styles.frameGroup}>
            <div className={styles.makeupTypeIconParent}>
              <div
                className={styles.makeupTypeIcon}
                style={makeupTypeIconStyle}
              />
              <a className={styles.blush}>Blush</a>
            </div>
            <div className={styles.makeupTypeIconParent}>
              <div className={styles.frameChild} style={ellipseDivStyle} />
              <a className={styles.lipstick}>Lipstick</a>
            </div>
          </div>
        </div>
        <div className={styles.shadeSelectionPrompt}>
          <div className={styles.vectorParent}>
            <Image
              className={styles.frameItem}
              loading="lazy"
              width={376}
              height={61}
              alt=""
              src={rectangle5}
            />
            <div className={styles.selectAShade}>Select a shade</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.matteIconParent}>
                      <div className={styles.matteIcon} />
                      <Image
                        className={styles.optionDividerIcon}
                        loading="lazy"
                        width={41}
                        height={25}
                        alt=""
                        src={optionDivider}
                      />
                    </div>
                    <div className={styles.sheerIconWrapper}>
                      <div className={styles.sheerIcon} />
                    </div>
                    <div className={styles.finishOptionIcon} />
                    <div className={styles.finishOptionIcon1} />
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.matteCheckboxContainerParent}>
                      <div className={styles.matteCheckboxContainer}>
                        <div className={styles.matteCheckboxInner}>
                          <div className={styles.matteCheckbox} />
                          <Image
                            className={styles.checkIcon}
                            loading="lazy"
                            width={49}
                            height={23}
                            alt=""
                            src="/check.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.sheerCheckboxWrapper}>
                        <div className={styles.sheerCheckbox} />
                      </div>
                      <div className={styles.frameInner} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.selectFinish}>Select finish</div>
            </div>
            <div className={styles.addButtonParent}>
              <div className={styles.addButton} />
              <div className={styles.addButtonBackground}>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
