import * as React from 'react';
import PageColorContext from './contexts/PageColorContext';
import { Link } from 'react-router-dom';

const anchor: React.CSSProperties = {
    display: 'block',
    textDecoration: 'none',
    width: 'max-content'
};

const button: React.CSSProperties = {
    backgroundColor: 'transparent',
    borderRadius: 8,
    columnGap: 8,
    cursor: 'pointer',
    display: 'flex',
};

export default function ResumeButton(): React.JSX.Element {
    const color = React.useContext(PageColorContext);

    return (
        <Link to='/sverg_resume.pdf' style={{color: color ?? undefined, ...anchor}} target='_blank'>
            <button style={{boxShadow: `2px 2px ${color}`, ...button}}>
                <span>Download Resume</span>
                <i className="fa-solid fa-download" />
            </button>
        </Link>
    );
}