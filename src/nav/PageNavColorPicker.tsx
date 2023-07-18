import * as React from "react";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { PAGE_COLORS, PageColor } from "../types/PageColor";
import ColorIcon from "./ColorIcon";

const style: React.CSSProperties = {
    alignItems: 'center',
    columnGap: 8,
    display: "inline-flex"
};

export default function PageNavColorPicker(): React.JSX.Element {
  return (
    <>
      <NavDropdown.Header style={{ color: "black" }}>
        Color Picker
      </NavDropdown.Header>
      {Object.entries(PAGE_COLORS).map(([colorCode, colorLabel]) => {
        return (
          <NavDropdown.Item eventKey={colorCode} key={colorCode} style={style}>
            <ColorIcon color={colorCode as PageColor} />
            {colorLabel}
          </NavDropdown.Item>
        );
      })}
    </>
  );
}
