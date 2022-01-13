import React from "react";
import "./header.css";

function Header() {
  return (
    <div data-testid="header" className="page-header">
      <h1>Bitcoin Price Chart</h1>
      <h4>Select a period below to monitor price changes</h4>
    </div>
  );
}

export default Header;
