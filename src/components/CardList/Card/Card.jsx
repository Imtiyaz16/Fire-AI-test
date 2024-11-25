import React from "react";
import styles from "./Card.module.css";
import { FaLock, FaDownload } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const Card = ({ type, amount, subtitle, footerText, footerLink, iconColor, linkColor, iconType }) => {
  // Render the appropriate icon based on `iconType`
  const renderIcon = () => {
    switch (iconType) {
      case "lock":
        return <FaLock className={styles.icon} />;
      case "download":
        return <FaDownload className={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconContainer} style={{ backgroundColor: iconColor }}>
          {renderIcon()}
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{type}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <FiMoreVertical className={styles.menuIcon} />
      </div>
      <div className={styles.main}>
        <div className={styles.amount}>{amount}</div>
      </div>
      <div className={styles.footer}>
        {footerText} <span className={styles.link} style={{ color: linkColor }}>{footerLink}</span>
      </div>
    </div>
  );
};

export default Card;
