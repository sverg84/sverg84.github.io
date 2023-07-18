import * as React from "react";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

import { PAGE_COLORS } from "../types/PageColor";
import ColorIcon from "./ColorIcon";

const style = {
    alignItems: 'center',
    columnGap: 8,
    display: "inline-flex"
};
export default function PageNavColorPicker() {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavDropdown.Header, { style: { color: "black" } }, "Color Picker"),
        Object.entries(PAGE_COLORS).map(([colorCode, colorLabel]) => {
            return (React.createElement(NavDropdown.Item, { eventKey: colorCode, key: colorCode, style: style },
                React.createElement(ColorIcon, { color: colorCode }),
                colorLabel));
        })));
}
