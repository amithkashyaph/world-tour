import React from "react";
import styles from "./CityItem.module.css";
import { formatDate } from "./City";
import { Link } from "react-router-dom";

const CityItem = ({ city }) => {
  const { emoji, cityName, date, id, position } = city;
  return (
    <Link
      className={styles.cityItem}
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
    >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </Link>
  );
};

export default CityItem;