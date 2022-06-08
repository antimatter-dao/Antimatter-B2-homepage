import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";

export const WithScrollFreezing = ({ children, isChainBlock }) => {
  const [wrapHeight, setWrapHeight] = useState("auto");
  const [floatingWrapClass, setFloatingWrapClass] = useState({
    position: "relative",
    zIndex: 2,
    transition: "transform 0.2s, filter 0.2s",
  });

  const wrapRef = useRef(null);
  const floatingWrapRef = useRef(null);

  const getWrapHeight = useCallback(() => {
    if (floatingWrapRef.current) {
      const floatingWrap = floatingWrapRef.current;
      const height = floatingWrap?.offsetHeight;
      setWrapHeight(height ?? "auto");
    }
  }, [floatingWrapRef]);

  const toggleFreezing = useCallback(() => {
    const wrap = wrapRef.current;
    const wrapBottom = wrap?.offsetHeight + wrap?.offsetTop;
    const scrollTop = window.scrollY + window.innerHeight;
    const wrapBottomFallBack = wrap?.offsetHeight * 2 + wrap?.offsetTop;
    if (isChainBlock) {
      if (wrapBottom <= scrollTop && scrollTop < wrapBottomFallBack) {
        setFloatingWrapClass({
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 233,
          zIndex: 1,
        });
      } else {
        setFloatingWrapClass({
          position: "relative",
          zIndex: 2,
          transition: "transform 0.2s, filter 0.2s",
        });
      }
    } else {
      const scrollTopForEffect = window.scrollY - 200 + window.innerHeight / 2;
      if (scrollTop > wrapBottom && scrollTop < wrapBottomFallBack) {
        if (scrollTopForEffect > wrapBottom) {
          {
            setFloatingWrapClass({
              ...{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                "& #backed-by": {
                  borderRadius: "0 0 30px 30px",
                  transform: "translateY(-60px)",
                  height: "calc(auto + 60px)",
                },
              },

              ...{
                filter: "grayscale(0.3)",
                pointerEvents: "none",
                "& *": {
                  pointerEvents: "none !important",
                },
              },
            });
          }
        } else {
          setFloatingWrapClass({
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            "& #backed-by": {
              borderRadius: "0 0 30px 30px",
              transform: "translateY(-60px)",
              height: "calc(auto + 60px)",
            },
          });
        }
      } else {
        setFloatingWrapClass({
          position: "relative",
          zIndex: 2,
          transition: "transform 0.2s, filter 0.2s",
        });
      }
    }
  }, [floatingWrapRef]);

  useEffect(() => {
    getWrapHeight();
  }, [getWrapHeight, floatingWrapRef?.current?.offsetHeight]);

  useEffect(() => {
    getWrapHeight();
    toggleFreezing();
    window.addEventListener("ready", getWrapHeight);
    window.addEventListener("resize", getWrapHeight);
    window.addEventListener("scroll", toggleFreezing);
    return () => {
      window.removeEventListener("ready", getWrapHeight);
      window.removeEventListener("resize", getWrapHeight);
      window.removeEventListener("scroll", toggleFreezing);
    };
  }, []);
  return (
    <div ref={wrapRef} style={{ height: wrapHeight }}>
      <div
        ref={floatingWrapRef}
        style={{
          paddingTop: 200,
          transition: "transform 0.5s, filter 0.5s",
          willChange: "transform, filter",
          ...floatingWrapClass,
        }}
      >
        {children}
      </div>
    </div>
  );
};
