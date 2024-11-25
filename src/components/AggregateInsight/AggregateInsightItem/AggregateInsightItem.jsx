import React from "react";
import styles from "./AggregateInsightItem.module.css";

const AggregateInsightItem = ({ typeHeading, value }) => {
  return (
    <div className={styles.insightItem}>
      <h4 className={styles.insightTitle}>{typeHeading}</h4>
      <p className={styles.insightValue}>{value}</p>
    </div>
  );
};

export default AggregateInsightItem;
