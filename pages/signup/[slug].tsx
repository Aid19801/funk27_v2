import React, { useRef, useState, ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { cache } from "../../lib/utils";
import signupFlow from "../../api/signup-flow";
import { SignupForm } from "../../components";

function SignupStepsPage(): ReactElement {
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    //@ts-ignore
    cache.clearForm();
    setPageIndex(0);
  }, []);

  const handleSubmit = (page, values) => {
    //@ts-ignore
    const before = cache.getForm();
    let after = {
      ...before,
      [page]: {
        ...values,
      },
    };
    //@ts-ignore
    cache.saveForm(after);
    router.push("/signup/[slug]", `/signup/${signupFlow[pageIndex + 1].url}`);
    return setPageIndex(pageIndex + 1);
  };
  const handleBackButton = () => {
    console.log("back button fired!");
    router.push("/signup/[slug]", `/signup/${signupFlow[pageIndex - 1].url}`);
    return setPageIndex(pageIndex - 1);
  };
  const bounceToLogin = () => {
    return router.push("/");
  };

  return (
    <div className="blog__home container">
      <main>
        <SignupForm
          url={signupFlow[pageIndex].url}
          heading={signupFlow[pageIndex].heading}
          subheading={signupFlow[pageIndex].subheading}
          questions={signupFlow[pageIndex].questions}
          onSubmit={pageIndex < 4 ? handleSubmit : bounceToLogin}
          buttonText={pageIndex < 4 ? "Submit" : "Login"}
        />

        <div
          className="signup-form_signup__formBtn button is-danger mb-50"
          onClick={() => router.push("/products")}
        >
          Back to Products
        </div>
      </main>
    </div>
  );
}

export default SignupStepsPage;
