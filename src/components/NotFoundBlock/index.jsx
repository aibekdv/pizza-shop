import React from "react";
import styles from "./notfound.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.emptyPage}>
      <h2>😕</h2>
      <h3>Ничего не найдено</h3>
    </div>
  );
};

export default NotFoundBlock;
