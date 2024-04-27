import React from "react";
import Header from "../Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <article className="px-4 lg:px-[130px]">{children}</article>
    </>
  );
};

export default MainLayout;
