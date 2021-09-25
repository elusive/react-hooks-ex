import React, { useRef } from "react";
import styles from "./useRefExample.module.css";

const UseRefExample = () => {
  const inputElement = useRef(null);
  const onButtonClick = () => {
    // 'current' points to the mounted text element
    inputElement.current.focus();
  };
  return (
    <div className={styles["use-ref-example-container"]}>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <p className={styles["use-ref-example-message"]}>
        clicking button will use reference to element to set focus
      </p>
    </div>
  );
};

export default UseRefExample;
