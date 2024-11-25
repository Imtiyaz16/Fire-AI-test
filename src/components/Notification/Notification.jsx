import React, { useState } from "react";
import styles from "./Notification.module.css";
import { FaBell } from "react-icons/fa";

const notificationsData = [
  { id: 1, time: "12 days ago", type: "RulesSoftBreach", message: "Closed trade not placed with a stop-loss" },
  { id: 2, time: "8 days ago", type: "RulesSoftBreach", message: "Days since a trade was placed, closed..." },
  { id: 3, time: "5 days ago", type: "RulesSoftBreach", message: "Trade exceeds allowed risk parameters." },
  { id: 4, time: "2 days ago", type: "RulesSoftBreach", message: "Trade duration extended beyond limits." },
];

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notificationsPerPage] = useState(2);

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = notificationsData.slice(indexOfFirstNotification, indexOfLastNotification);

  const totalPages = Math.ceil(notificationsData.length / notificationsPerPage);

  return (
    <div className={styles.notificationsContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <FaBell className={styles.icon} />
          <span>Notifications</span>
        </div>
        <select className={styles.dropdown}>
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last 1 Day</option>
        </select>
      </div>

      <table className={styles.notificationsTable}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {currentNotifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.time}</td>
              <td>
                <span className={styles.badge}>{notification.type}</span>
              </td>
              <td>{notification.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.active : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={styles.paginationButton}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Notifications;
