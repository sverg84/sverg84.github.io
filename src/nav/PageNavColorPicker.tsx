import * as React from "react";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

import { PAGE_COLORS, PageColorHex } from "../types/PageColor";
import ColorIcon from "./ColorIcon";

const header: React.CSSProperties = {
    color: "black",
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
};

const dropdown: React.CSSProperties = {
    alignItems: 'center',
    columnGap: 8,
    display: "inline-flex"
};

export default function PageNavColorPicker(): React.JSX.Element {
  return (
    <>
      <NavDropdown.Header style={header}>
        Color Picker
      </NavDropdown.Header>
      {Object.entries(PAGE_COLORS).map(([colorLabel, colorCode]) => {
        return (
          <NavDropdown.Item eventKey={colorLabel} key={colorCode} style={dropdown}>
            <ColorIcon color={colorCode as PageColorHex} />
            {colorLabel}
          </NavDropdown.Item>
        );
      })}
    </>
  );
}
