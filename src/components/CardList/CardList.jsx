import React from "react";
import Card from "./Card/Card";
import cardsData from "../../../public/card.json"; // JSON data import
import styles from "./CardList.module.css"; // Module CSS for layout

const CardList = () => {
  return (
    <div className={styles.cardList}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          type={card.type}
          amount={card.amount}
          subtitle={card.subtitle}
          footerText={card.footerText}
          footerLink={card.footerLink}
          iconColor={card.iconColor}
          linkColor={card.linkColor}
          iconType={card.iconType}
        />
      ))}
    </div>
  );
};

export default CardList;
