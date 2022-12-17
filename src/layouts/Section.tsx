import React from "react";

type Props = {
  children?: React.ReactNode;
  padding?: "mobile" | "tablet" | "laptop" | "dekstop";
};

const Section = (props: Props) => {
  const setPadding = () => {
    if (props.padding === "mobile") {
      return "px-4";
    } else if (props.padding === "tablet") {
      return "px-8";
    } else if (props.padding === "laptop") {
      return "px-12";
    } else if (props.padding === "dekstop") {
      return "px-32";
    } else {
      return "px-4";
    }
  };
  return (
    <section className={`w-full px max-w-mobile h-auto ${setPadding()}`}>
      {props.children}
    </section>
  );
};

export default Section;
