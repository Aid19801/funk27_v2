import React, { useState, useEffect } from "react";

interface playgroundProps {
  name: string;
}

function Playground(props: playgroundProps) {
  const [greeting, setGreeting] = useState("");

  const takeNameCreateGreeting = (str: string) => {
    setGreeting(`Hi there, ${str}`);
  };

  useEffect(() => {
    takeNameCreateGreeting(props.name);
  }, []);
  return (
    <div className="playground__container">
      <h1>{greeting}</h1>
    </div>
  );
}

export default Playground;
