import type { PageColor } from "./types/PageColor";

import * as React from "react";

import { useState } from "react";
import ResumeButton from "./ResumeButton";
import PageColorContext from "./contexts/PageColorContext";
import SetPageColorContext from "./contexts/SetPageColorContext";
import PageNavBar from "./nav/PageNavBar";

export default function App(): React.JSX.Element {
  const [color, setColor] = useState<PageColor>("black");

  return (
    <PageColorContext.Provider value={color}>
      <SetPageColorContext.Provider value={setColor}>
            <PageNavBar />
            <h2>Heylo there</h2>
            <ResumeButton />
      </SetPageColorContext.Provider>
    </PageColorContext.Provider>
  );
}
