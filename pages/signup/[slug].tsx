import React, { useRef, ReactElement, useEffect } from "react";
import { FunkSpinner, SignupForm } from "../../components";
import { useRouter } from "next/router";
import signupQuestions from "../../api/signup-questions";

function SignupStepsPage(): ReactElement {
  const router = useRouter();
  let pageRef = useRef(null);

  useEffect(() => {
    // console.log("router is ", router.query.slug);
  }, [router.query.slug]);

  return (
    <div className="blog__home container">
      <main>
        <section className="signup__title-section">
          <h1>Signup Steps Page [WiP]</h1>
        </section>

        {(() => {
          switch (router.query.slug) {
            case "welcome": {
              return (
                <SignupForm
                  urlSlug={router.query.slug}
                  questions={signupQuestions}
                />
              );
            }
            default: {
              return <FunkSpinner />;
            }
          }
        })()}
      </main>
    </div>
  );
}

export default SignupStepsPage;
