import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className={styles.title}>{title}</h3>;
}
