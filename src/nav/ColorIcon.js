import * as React from "react";
const style = {
    borderRadius: 8,
    height: 24,
    width: 24,
};
export default function ColorIcon({ color }) {
    return React.createElement("div", { style: { ...style, backgroundColor: color } });
}
