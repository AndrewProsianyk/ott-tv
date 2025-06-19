"use client";

import { useMemo, useState } from "react";
import styles from "./DescriptionBlock.module.scss";

type DescriptionBlockProps = {
  text: string;
};

export default function DescriptionBlock({ text }: DescriptionBlockProps) {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = useMemo(() => {
    return text.length > 600 || text.split(" ").length > 100;
  }, [text]);

  const displayText = useMemo(() => {
    if (!shouldTruncate || expanded) return text;
    return text.slice(0, 600).trim() + "...";
  }, [text, expanded, shouldTruncate]);
  return (
    <div className={`${styles.description} ${expanded ? styles.expanded : ""}`}>
      <p>{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className={styles.toggle}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
