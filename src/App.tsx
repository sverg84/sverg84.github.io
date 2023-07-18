import type { PageColor } from './types/PageColor';

import * as React from 'react';

import SetPageColorContext from './contexts/SetPageColorContext';
import PageColorContext from './contexts/PageColorContext';
import PageNavBar from './PageNavBar';
import ResumeButton from './ResumeButton';
import { useState } from 'react';

export default function App(): React.JSX.Element {
    const [color, setColor] = useState<PageColor>('black');

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
