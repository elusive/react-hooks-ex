import React from "react";
import styles from "./exampleBox.module.css";

const ExampleBox = (props) => {
  return (
    <div className={styles["example-box-container"]}>
      <div className={styles["example-box-inner"]}>{props.children}</div>
    </div>
  );
};

export default ExampleBox;
