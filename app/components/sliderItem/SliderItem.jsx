import styles from "./SliderItem.module.scss";

export default function SliderItem({ children, cardWidth }) {
  return (
    <div className={styles.sliderCard} style={{ width: cardWidth }}>
      {children}
    </div>
  );
}
