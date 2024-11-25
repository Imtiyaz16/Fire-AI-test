import React, { useEffect } from "react";
import AggregateInsightItem from "./AggregateInsightItem/AggregateInsightItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchAggregateData } from "../../redux/dataSlice"; // Assume we have a slice for this data
import styles from "./AggregateInsight.module.css";

const AggregateInsight = () => {
  const dispatch = useDispatch();
  const aggregateData = useSelector((state) => state.data.aggregateData);

  useEffect(() => {
    // Fetch the aggregate data once
    if (!aggregateData || aggregateData.length === 0) {
      dispatch(fetchAggregateData()); // Action to load data from the JSON or API
    }
  }, [dispatch, aggregateData]);

  return (
    <div className={styles.aggregateInsight}>
      <div className={styles.insightContainer}>
        {aggregateData.map((insight, index) => (
          <AggregateInsightItem
            key={index}
            typeHeading={insight.Title}
            value={insight.Value}
          />
        ))}
      </div>
    </div>
  );
};

export default AggregateInsight;
