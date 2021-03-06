import React, { forwardRef, useState, useEffect } from "react";
import { TimelineMax, Power3 } from "gsap";
import styles from "./signup-input.module.scss";

function SignupInput({ name, type, text, placeholder, options }, forwardedRef) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let inputTl: any = new TimelineMax();

    inputTl.fromTo(
      forwardedRef.current,
      0.2,
      { x: 40 },
      { x: 0, ease: Power3.easeIn }
    );
  }, []);
  switch (type) {
    case "text":
      return (
        <div className={`${styles.signupInput} fade-in`}>
          <h5>{text}</h5>
          <input
            name={name}
            className={`input__${name}`}
            type={type}
            placeholder={placeholder}
            ref={forwardedRef}
          />
        </div>
      );
    case "select":
      return (
        <div className={`${styles.signupInput} fade-in`}>
          <h5>{text}</h5>
          <select
            ref={forwardedRef}
            name={name}
            className={`signup__input input__${name}`}
          >
            {options &&
              options.map(({ code, display_name }, i) => (
                <option value={code} key={i}>
                  {display_name}
                </option>
              ))}
          </select>
        </div>
      );
    case "checkbox":
      return (
        <div className={`${styles.signupInput} fade-in flex-row`}>
          <input
            name={name}
            className={`input__${name} ${styles.inputCheckbox}`}
            type={type}
            ref={forwardedRef}
            //@ts-ignore
            value={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="vehicle1">{text}</label>
        </div>
      );
    default:
      return <div>an error has occurred</div>;
  }
}

export default forwardRef(SignupInput);
