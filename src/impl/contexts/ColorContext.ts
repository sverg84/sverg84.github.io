import { createContext } from "react";

type ContextType = Readonly<
  [string, React.Dispatch<React.SetStateAction<string>>]
>;

export default createContext<ContextType>(["#2e3134", () => {}]);
