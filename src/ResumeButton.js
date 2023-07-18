import * as React from 'react';
const styles = {
    columnGap: 8,
    display: 'flex',
};
export default function ResumeButton() {
    return (React.createElement("button", { style: styles },
        React.createElement("a", { href: '/sverg_resume.pdf', target: '_blank' }, "Download Resume"),
        React.createElement("i", { className: "fa-solid fa-download" })));
}
