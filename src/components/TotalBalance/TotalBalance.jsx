import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./TotalBalance.module.css";

const TotalBalance = () => {
  // Data for ApexCharts
  const chartOptions = {
    chart: {
      height: 200,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#1E88E5", "#F4511E"], // Colors for balance and equity lines
    xaxis: {
      categories: [0, 1, 2, 3, 4], // Time (x-axis labels)
      title: {
        text: "Time",
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${(value / 1000).toFixed(1)}k`, // Format values as $xxk
      },
    },
    grid: {
      strokeDashArray: 4,
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toFixed(2)}`, // Tooltip value formatting
      },
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = [
    {
      name: "Balance",
      data: [100000, 101000, 99500, 100500, 102000], // Balance values
    },
    {
      name: "Equity",
      data: [98000, 99000, 97500, 98000, 98500], // Equity values
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Total Balance</h2>
          <p className={styles.profit}>Profit: +0.8%</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.value}>$120,567.90</span>
            <span className={styles.label}>Balance</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.value}>$240,952.00</span>
            <span className={styles.label}>Equity</span>
          </div>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className={styles.chartContainer}>
        <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={200} />
      </div>
    </div>
  );
};

export default TotalBalance;
