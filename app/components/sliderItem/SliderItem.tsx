import styles from "./SliderItem.module.scss";

type SliderItemProps = {
  cardWidth: string;
  children: React.ReactNode;
};

export default function SliderItem({ children, cardWidth }: SliderItemProps) {
  return (
    <div className={styles.sliderCard} style={{ width: cardWidth }}>
      {children}
    </div>
  );
}
