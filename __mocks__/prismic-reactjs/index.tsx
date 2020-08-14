import React, { ReactElement } from "react";

interface Props {
    render: [
        {
            text: string
        }
    ];
}

export const RichText = (props: Props): ReactElement => (
    <h1>{props.render[0].text}</h1>
);


export default RichText;