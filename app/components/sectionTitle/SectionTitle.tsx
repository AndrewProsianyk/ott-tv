import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className={styles.title}>{title}</h2>;
}
