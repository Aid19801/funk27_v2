import React, { ReactElement, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./form.module.scss";

interface Props {
  toggleSending: any;
  setSendError: any;
  setSendSuccess: any;
  product: string;
}

export default function ContactForm({
  product,
  toggleSending,
  setSendError,
  setSendSuccess,
}: Props): ReactElement {
  const initialState = {
    name: "",
    email: "",
    subject: product || "n/a",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  console.log("product is ", product);
  // const [sendError, setSendError] = useState(null);

  const handleUpdateForm = (e) => {
    let updatedForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedForm);
  };

  const handleSubmit = () => {
    toggleSending(true);

    if (process.browser) {
      emailjs
        .send(
          "gmail",
          "template_bC7TSUM5",
          formData,
          "user_wwJOeGIoNKvBH0iRYcmif"
        )
        .then((response) => {
          toggleSending(false);
          console.log("success", response);
          setSendSuccess(
            "Thanks for getting in touch. I'll get back to you soon."
          );
        })
        .catch((err) => {
          toggleSending(false);
          console.log("emailjs-com error: ", err);
          setSendError(
            "Sorry, it looks like there was a problem. Please try twitter instead."
          );
        });
    }
  };

  // console.log('error back is now: ', sendError);

  return (
    <div className={styles.formContainer}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            onChange={handleUpdateForm}
            className="input"
            type="text"
            value={formData.name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-right">
          <input
            name="email"
            onChange={handleUpdateForm}
            className="input is-success"
            type="text"
            placeholder="jon@abc.com"
            value={formData.email}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select">
            <select
              name="subject"
              onChange={handleUpdateForm}
              value={product || formData.subject}
            >
              {product && <option>{product}</option>}
              <option>n/a</option>
              <option>Requesting a Blog</option>
              <option>Speaking Engagements</option>
              <option>I Need Some Work Doing!</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            onChange={handleUpdateForm}
            name="message"
            value={formData.message}
            className="textarea"
            placeholder={
              product
                ? `Hey i'd like to order ${product} please!`
                : "type your msg here..."
            }
          ></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button onClick={handleSubmit} className="button is-link">
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
}
