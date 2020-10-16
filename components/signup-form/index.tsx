import { useEffect, useRef, createRef, forwardRef } from "react";
import { Button } from "react-bulma-components/dist";
import SignupInput from "../signup-input";
import styles from "./signupform.module.scss";

function SignupForm({ urlSlug, questions }) {
  const elementsRef = useRef(questions.map(() => createRef()));

  const handleSubmit = () => {};
  return (
    <section className={styles.signupForm__section}>
      <h5 className={styles.signupForm_title}>Enter your creds here</h5>
      {questions
        .filter((eachPage: any) => eachPage.uid === urlSlug)[0]
        .questions.map((each, i) => {
          return <SignupInput key={i} ref={elementsRef.current[i]} {...each} />;
        })}

      <Button onClick={handleSubmit} color="warning">
        Submit
      </Button>
    </section>
  );
}

export default SignupForm;
