//["welcome", "address-details", "skills", "interests"];
const signupQuestions = [
  {
    uid: "welcome",
    questions: [
      {
        name: "name",
        placeholder: "John Doe",
        type: "text",
      },
      {
        name: "email",
        placeholder: "john@gmail.com",
        type: "text",
      },
      {
        name: "password",
        placeholder: "********",
        type: "text",
      },
    ],
  },
  {
    uid: "address-details",
    questions: [
      {
        name: "address_1",
        placeholder: "1 George Street",
        type: "text",
      },
      {
        name: "address_2",
        placeholder: "Little Test Court",
        type: "text",
      },
      {
        name: "town",
        placeholder: "Los Angeles",
        type: "text",
      },
      {
        name: "county",
        placeholder: "California",
        type: "text",
      },
      {
        name: "postcode",
        placeholder: "27853",
        type: "text",
      },
    ],
  },
  {
    uid: "skills",
    questions: [
      {
        name: "skills_1",
        placeholder: "React",
        type: "select",
        options: [
          "React",
          "Redux",
          "GraphQL",
          "Rest API",
          "Kubernetes",
          "Docker",
        ],
      },
      {
        name: "skills_2",
        placeholder: "",
        type: "select",
        options: [
          "React",
          "Redux",
          "GraphQL",
          "Rest API",
          "Kubernetes",
          "Docker",
        ],
      },
    ],
  },
  {
    uid: "interests",
    questions: [
      {
        name: "interests_1",
        placeholder: "Front End",
        type: "select",
        options: [
          "React",
          "Redux",
          "GraphQL",
          "Rest API",
          "Kubernetes",
          "Docker",
        ],
      },
      {
        name: "interests_2",
        placeholder: "Cloud Computing",
        type: "select",
        options: [
          "React",
          "Redux",
          "GraphQL",
          "Rest API",
          "Kubernetes",
          "Docker",
        ],
      },
    ],
  },
  {
    uid: "payments",
    questions: [
      {
        name: "card-type",
        placeholder: "Visa",
        type: "select",
        options: [
          "Visa",
          "Mastercard",
          "Amex",
          "Diners Card",
        ],
      },
      {
        name: "card-number",
        placeholder: "Cloud Computing",
        type: "text",
      },
      {
        name: "card-fullname",
        placeholder: "Cloud Computing",
        type: "text",
      },
      {
        name: "card-code",
        placeholder: "Cloud Computing",
        type: "text",
      },
    ],
  },
];

export default signupQuestions;
