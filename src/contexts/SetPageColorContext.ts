import { createContext } from "react";
import { PageColor } from "../types/PageColor";

export default createContext<React.Dispatch<React.SetStateAction<PageColor>>>(() => {});