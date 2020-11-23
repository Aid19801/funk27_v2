import React, {
  useRef,
  createRef,
  useState,
  ReactElement,
  useEffect,
} from "react";
import { SignupInput } from "../index";
import styles from "./signup-form.module.scss";

function SignupForm({
  url,
  heading,
  subheading,
  questions,
  buttonText,
  onSubmit: handleSubmitParent,
}): ReactElement {
  const allRefs = useRef(questions && questions.map(() => createRef()));

  const handleSubmitLocal = () => {
    let obj = {};
    allRefs.current.forEach(({ current }) => {
      if (current?.name) {
        obj = {
          ...obj,
          [current.name]: current.value,
        };
      }
    });
    handleSubmitParent(url, obj);
  };
  return (
    <div className={styles.signup__formSection}>
      <div className={styles.signup__headingsContainer}>
        <p className={styles.signup__formHeading}>{heading}</p>
        <p className={styles.signup__formSubheading}>{subheading}</p>
      </div>
      {questions &&
        questions.length &&
        questions.map((each, i) => {
          return <SignupInput ref={allRefs.current[i]} key={i} {...each} />;
        })}
      <div className={styles.signup__formBtn} onClick={handleSubmitLocal}>
        {buttonText}
      </div>
    </div>
  );
}

export default SignupForm;
