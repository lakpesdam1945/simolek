import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="max-w-tablet w-full min-h-screen mx-auto bg-light-neutral dark:bg-dark-primary text-dark-primary dark:text-dark-neutral">
      {props.children}
    </div>
  );
};

export default Layout;
