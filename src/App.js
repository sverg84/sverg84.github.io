import * as React from 'react';
import ResumeButton from './ResumeButton';
import { useState } from 'react';
import PageColorContext from './contexts/PageColorContext';
import SetPageColorContext from './contexts/SetPageColorContext';
export default function App() {
    const [color, setColor] = useState('black');
    return (React.createElement(PageColorContext.Provider, { value: color },
        React.createElement(SetPageColorContext.Provider, { value: setColor },
            React.createElement("div", { style: { color } },
                React.createElement("h1", null, "sverg84"),
                React.createElement("h2", null, "Heylo there"),
                React.createElement(ResumeButton, null)))));
}
