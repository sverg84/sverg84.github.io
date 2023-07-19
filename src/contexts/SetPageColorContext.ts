import { createContext } from "react";

import type { PageColorName } from "../types/PageColor";

export default createContext<React.Dispatch<React.SetStateAction<PageColorName>>>(
  () => {}
);
