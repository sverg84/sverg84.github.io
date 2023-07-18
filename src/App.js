import * as React from "react";
import SetPageColorContext from "./contexts/SetPageColorContext";
import PageColorContext from "./contexts/PageColorContext";
import PageNavBar from "./nav/PageNavBar";
import ResumeButton from "./ResumeButton";
import { useState } from "react";
export default function App() {
    const [color, setColor] = useState("black");
    return (React.createElement(PageColorContext.Provider, { value: color },
        React.createElement(SetPageColorContext.Provider, { value: setColor },
            React.createElement(PageNavBar, null),
            React.createElement("h2", null, "Heylo there"),
            React.createElement(ResumeButton, null))));
}
