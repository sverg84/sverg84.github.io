import * as React from 'react';
import PageColorContext from './contexts/PageColorContext';
import { Link } from 'react-router-dom';
const anchor = {
    display: 'block',
    textDecoration: 'none',
    width: 'max-content'
};
const button = {
    backgroundColor: 'transparent',
    borderRadius: 8,
    columnGap: 8,
    cursor: 'pointer',
    display: 'flex',
};
export default function ResumeButton() {
    const color = React.useContext(PageColorContext);
    return (React.createElement(Link, { to: '/sverg_resume.pdf', style: { color: color ?? undefined, ...anchor }, target: '_blank' },
        React.createElement("button", { style: { boxShadow: `2px 2px ${color}`, ...button } },
            React.createElement("span", null, "Download Resume"),
            React.createElement("i", { className: "fa-solid fa-download" }))));
}
