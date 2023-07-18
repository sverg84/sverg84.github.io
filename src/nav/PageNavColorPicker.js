import * as React from "react";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

import { PAGE_COLORS } from "../types/PageColor";
import ColorIcon from "./ColorIcon";
const header = {
    color: "black",
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
};
const dropdown = {
    alignItems: 'center',
    columnGap: 8,
    display: "inline-flex"
};
export default function PageNavColorPicker() {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavDropdown.Header, { style: header }, "Color Picker"),
        Object.entries(PAGE_COLORS).map(([colorCode, colorLabel]) => {
            return (React.createElement(NavDropdown.Item, { eventKey: colorCode, key: colorCode, style: dropdown },
                React.createElement(ColorIcon, { color: colorCode }),
                colorLabel));
        })));
}
