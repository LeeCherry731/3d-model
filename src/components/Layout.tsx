import React, { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
