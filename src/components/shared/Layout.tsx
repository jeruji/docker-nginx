import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }: any) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
