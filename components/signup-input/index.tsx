import { toNamespacedPath } from "path";
import React, { ReactElement, forwardRef, useState } from "react";
import styles from "./input.module.scss";

interface Props {
  name: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SignupInput(
  { name, placeholder, type, onChange }: Props,
  forwardedRef: any
): ReactElement {
  return (
    <div className={styles.inputContainer}>
      <div className={`${styles.input__LabelAndInputContainer} field`}>
        <label className="label">{name}</label>
        <div className="control has-icons-right">
          <input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className="input is-warning"
            type={type}
            ref={forwardedRef}
          />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(SignupInput);
