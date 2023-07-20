import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Button from "react-bootstrap/Button";

import PageColorContext from "../../contexts/PageColorContext";

const button: React.CSSProperties = {
  alignItems: "center",
  columnGap: 8,
  cursor: "pointer",
  display: "inline-flex",
  fontWeight: "bold",
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
      <text>Download Resume</text>
      <FontAwesomeIcon icon={solid("download")} />
    </Button>
  );
}
