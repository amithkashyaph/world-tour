import React from "react";
import styles from "./CityItem.module.css";
import { formatDate } from "./City";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const CityItem = ({ city }) => {
  const { emoji, cityName, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <Link
      className={`${styles.cityItem} ${
        id === currentCity.id ? styles["cityItem--active"] : ""
      }`}
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
    >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        &times;
      </button>
    </Link>
  );
};

export default CityItem;
