import * as React from "react";
import { useState } from "react";

import PageColorContext from "./contexts/PageColorContext";
import SetPageColorContext from "./contexts/SetPageColorContext";
import PageNavBar from "./nav/PageNavBar";
import ResumeButton from "./ResumeButton";
import { PAGE_COLORS, type PageColorName } from "./types/PageColor";

export default function App(): React.JSX.Element {
  const [color, setColor] = useState<PageColorName>('Obsidian');

  return (
    <PageColorContext.Provider value={PAGE_COLORS[color]}>
      <SetPageColorContext.Provider value={setColor}>
            <PageNavBar />
            <h2>Heylo there</h2>
            <ResumeButton />
      </SetPageColorContext.Provider>
    </PageColorContext.Provider>
  );
}
