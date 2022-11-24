import React from "react";
import Articles from "../components/Articles";
import Accordion from "../components/AccordionComponent";
import Sponsoring from "../components/Sponsoring";

export const ShowcasePage = () => {
  return (
    <div>
      <Accordion />
      <Sponsoring />
      <Articles />
    </div>
  );
};
