"use client";

import { useRef } from "react";
import styles from "./Slider.module.scss";
import SliderButtonArrowLeft from "../icons/SliderButtonArrowLeft";
import SliderButtonArrowRight from "../icons/SliderButtonArrowRight";

type SliderProps = {
  cardWidth: string;
  children: React.ReactNode;
  withButtons?: boolean;
};

export default function Slider({
  cardWidth,
  children,
  withButtons = false,
}: SliderProps) {
  const sliderRef = useRef(null);

  const scroll = (direction: string) => {
    if (!sliderRef.current) return;

    const numericCardWidth =
      typeof cardWidth === "string"
        ? parseInt(cardWidth.replace("px", ""), 10)
        : cardWidth;

    const gap = 15;
    const scrollAmount =
      (numericCardWidth + gap) * (direction === "left" ? -1 : 1);

    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.sliderContainer}>
      {withButtons && (
        <button
          className={styles.scrollButton + " " + styles.left}
          onClick={() => scroll("left")}
        >
          <SliderButtonArrowLeft />
        </button>
      )}

      <div className={styles.sliderWrapper} ref={sliderRef}>
        {children}
      </div>

      {withButtons && (
        <button
          className={styles.scrollButton + " " + styles.right}
          onClick={() => scroll("right")}
        >
          <SliderButtonArrowRight />
        </button>
      )}
    </div>
  );
}
//  return (
//    <Slider data={data} cardWidth="143px">
//      {(item) => <AccessoryCard img={item.img} text={item.text} />}
//    </Slider>
//  );

// const [totalDataItems, setTotalDataItems] = useState(0);

// useEffect(() => {
//   if (!data) return;
//   setTotalDataItems(data.length);
// });
