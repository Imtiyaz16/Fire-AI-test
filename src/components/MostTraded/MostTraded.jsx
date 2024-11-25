import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./MostTraded.module.css";

const MostTraded = () => {
  // Hardcoded trade data
  const tradeData = [
    { name: "NZDUSD", color: "#1E88E5", count: 4 },
    { name: "GBPUSD", color: "#F4511E", count: 3 },
    { name: "AUDCHF", color: "#00ACC1", count: 2 },
    { name: "USDCHF", color: "#5E35B1", count: 3 },
    { name: "XAUUSD", color: "#FF8A65", count: 2 },
    { name: "AUDNZD", color: "#29B6F6", count: 2 },
  ];

  // Prepare chart data
  const series = tradeData.map((item) => item.count); // Data values
  const labels = tradeData.map((item) => item.name); // Labels
  const colors = tradeData.map((item) => item.color); // Colors

  // ApexCharts options
  const chartOptions = {
    chart: {
      type: "donut",
      height: 200,
    },
    colors: colors,
    labels: labels,
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        expandOnClick: false,
        donut: {
          size: "65%",
        },
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => `${value} Trades`,
      },
    },
  };

  // Calculate total trades
  const totalTrades = series.reduce((sum, count) => sum + count, 0);

  return (
    <div className={styles.container}>
      {/* Left Section: List of Trades */}
      <div className={styles.tradeList}>
        {tradeData.map((item, index) => (
          <div key={index} className={styles.tradeItem}>
            <span
              className={styles.tradeColor}
              style={{ backgroundColor: item.color }}
            ></span>
            <span className={styles.tradeName}>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Right Section: Semi-Circular Chart */}
      <div className={styles.chartContainer}>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="donut"
          height={200}
        />
        <div className={styles.totalCenter}>
          <span>Total</span>
          <span>{totalTrades}</span>
        </div>
      </div>
    </div>
  );
};

export default MostTraded;
