import React, { useRef } from "react";
import styles from "./useRefExample.module.css";

const UseRefExample = () => {
  const inputElement = useRef(null);
  const onFocusButtonClick = () => {
    // 'current' points to the mounted text element
    inputElement.current.focus();
  };
  const onBlurButtonClick = () => {
    // use 'current' to blur the text element
    inputElement.current.blur();
  };
  return (
    <div className={styles["use-ref-example-container"]}>
      <input ref={inputElement} type="text" />
      <button onClick={onFocusButtonClick}>Focus</button>
      <button onClick={onBlurButtonClick}>Blur</button>
      <p className={styles["use-ref-example-message"]}>
        clicking buttons will use the stored reference to the text input element
        to focus or blur the text input
      </p>
    </div>
  );
};

export default UseRefExample;
