import * as React from "react";
import Button from "react-bootstrap/Button";

import PageColorContext from "./contexts/PageColorContext";

const button: React.CSSProperties = {
  alignItems: "center",
  columnGap: 8,
  cursor: "pointer",
  display: "inline-flex",
  textDecoration: "none",
} as const;

export default function ResumeButton(): React.JSX.Element {
  const color = React.useContext(PageColorContext);

  const buttonStyle: React.CSSProperties = {
    borderColor: color,
    boxShadow: `4px 4px ${color}`,
    color,
    ...button,
  } as const;

  return (
    <Button
      href="/sverg_resume.pdf"
      style={buttonStyle}
      target="_blank"
      variant="outline-light"
    >
      <span>Download Resume</span>
      <i className="fa-solid fa-download" />
    </Button>
  );
}
