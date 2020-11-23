const signupFlow = [
    {
        url: "welcome",
        heading: "Welcome",
        subheading: "Enter your deets",
        questions: [
            {
                name: "first_name",
                text: "Your first name",
                placeholder: "eg. Joe",
                type: "text",
            },
            {
                name: "last_name",
                text: "Your last name",
                placeholder: "eg. Bloggs",
                type: "text"
            },
            {
                name: "email",
                text: "Your email address",
                placeholder: "eg. joe@bloggs.com",
                type: "text"
            },
            {
                name: "password",
                text: "Your password",
                placeholder: "*******",
                type: "text"
            },
        ]
    },
    {
        url: "country",
        heading: "Where are you?",
        subheading: "What country are you living in",
        questions: [
            {
                name: "country",
                text: "Country of Residence",
                placeholder: "eg. Joe",
                type: "select",
                options: [
                    {
                      "code": "AU",
                      "display_name": "Australia"
                    },
                    {
                      "code": "IN",
                      "display_name": "India"
                    },
                    {
                      "code": "MY",
                      "display_name": "Malaytsia"
                    },
                    {
                      "code": "SG",
                      "display_name": "Singapore"
                    },
                    {
                      "code": "SA",
                      "display_name": "South Africa"
                    },
                    {
                      "code": "TH",
                      "display_name": "Thailand"
                    },
                    {
                      "code": "UK",
                      "display_name": "United Kingdom"
                    },
                    {
                      "code": "USA",
                      "display_name": "United States of America"
                    },
                ]

            },
        ]
    },
    {
        url: "address",
        heading: "Your address",
        subheading: "Whats your postal address",
        questions: [
            {
                name: "addr_1",
                text: "First line of your address",
                placeholder: "eg. 1 Manor Park",
                type: "text",
            },
            {
                name: "addr_2",
                text: "Second line of your address",
                placeholder: "eg. Manor Gardens",
                type: "text"
            },
            {
                name: "city",
                text: "Your town/city",
                placeholder: "eg. Newcastle",
                type: "text"
            },
            {
                name: "postcode",
                text: "Your ZIP/Postcode",
                placeholder: "eg NW1 8TQ",
                type: "text"
            },
        ]
    },
    {
        url: "terms",
        heading: "Terms & Conditions",
        subheading: "Please accept the following T&Cs relating to marketing and data",
        questions: [
            {
                name: "terms_1",
                text: "I am very enthusiastic about handing over my data to weird and wonderful people who will no doubt sell it on.",
                type: "checkbox"
            },
            {
                name: "terms_2",
                text: "I am very enthusiastic about handing over my data to weird and wonderful people who will no doubt sell it on.",
                type: "checkbox"
            },
            {
                name: "terms_3",
                text: "I am very enthusiastic about handing over my data to weird and wonderful people who will no doubt sell it on.",
                type: "checkbox"
            }
        ]

    },
    {
        url: "confirmation",
        heading: "All done!",
        subheading: "You're good to go",
    }
];

export default signupFlow;