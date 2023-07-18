import * as React from 'react';

const styles: React.CSSProperties = {
    columnGap: 8,
    display: 'flex',
};

export default function ResumeButton(): React.JSX.Element {
    return (
        <button style={styles}>
            <a href='/sverg_resume.pdf' target='_blank'>
                Download Resume
            </a>
            <i className="fa-solid fa-download" />
        </button>
    );
}