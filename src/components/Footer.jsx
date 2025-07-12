import React from "react";
import { styled } from "@mui/material/styles";

// Wrapper for the entire footer
const FooterWrapper = styled("footer")`
  background-color: #fff;
  padding: 20px 60px;
  color: #000;
  border-top: 1px solid #ccc;
  text-align: center;
  position: relative;
`;

// Copyright text
const Copyright = styled("p")`
  font-size: 14px;
  margin: 0;
`;

// Floating language button
const LanguageButton = styled("button")`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: black;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #333;
  }
`;

export function Footer() {
  return (
    <>
      <FooterWrapper>
        <Copyright>© {new Date().getFullYear()} All rights reserved.</Copyright>
      </FooterWrapper>
    </>
  );
}
