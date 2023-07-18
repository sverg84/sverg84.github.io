import * as React from "react";
import Button from "react-bootstrap/Button";
import PageColorContext from "./contexts/PageColorContext";
const button = {
    alignItems: "center",
    columnGap: 8,
    cursor: "pointer",
    display: "inline-flex",
    textDecoration: "none",
};
export default function ResumeButton() {
    const color = React.useContext(PageColorContext);
    const buttonStyle = {
        borderColor: color,
        boxShadow: `4px 4px ${color}`,
        color,
        ...button,
    };
    return (React.createElement(Button, { href: "/sverg_resume.pdf", style: buttonStyle, target: "_blank", variant: "outline-light" },
        React.createElement("span", null, "Download Resume"),
        React.createElement("i", { className: "fa-solid fa-download" })));
}
