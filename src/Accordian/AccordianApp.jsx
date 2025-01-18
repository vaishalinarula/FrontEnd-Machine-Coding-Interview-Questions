import React from "react";
import "./Accordian.css";
import "./Accordian.jsx";
import Accordion from "./Accordian.jsx";

const items = [
  {
    title: "Section 1",
    content:
      "This is the content for section 1. You can put any text or elements here.",
  },
  {
    title: "Section 2",
    content:
      "This is the content for section 2. It can include text, images, or even other components.",
  },
  {
    title: "Section 3",
    content:
      "This is the content for section 3. Accordions are great for collapsing large chunks of content.",
  },
];

const AccordianApp = () => {
  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};
export default AccordianApp;
