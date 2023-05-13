import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [textColor, setTextColor] = useState("red");
  useEffect(() => {
    setTimeout(() => {
      setTextColor("green");
    }, 1000);
  });

  return <h1 style={{ color: textColor }}>This text is {textColor}</h1>;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

