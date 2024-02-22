import { useContext } from "react";

import ColorContext from "../contexts/ColorContext";

export default function useBackgroundStyle(): React.CSSProperties {
  const [color] = useContext(ColorContext);
  return {
    backgroundImage: `linear-gradient(-60deg, ${color} 50%, white 50%)`,
  };
}
