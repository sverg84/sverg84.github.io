import * as React from 'react';
import ResumeButton from './ResumeButton';
import { useState } from 'react';
import type { PageColor } from './types/PageColor';
import PageColorContext from './contexts/PageColorContext';
import SetPageColorContext from './contexts/SetPageColorContext';

export default function App(): React.JSX.Element {
    const [color, setColor] = useState<PageColor>('black');

    return (
        <PageColorContext.Provider value={color}>
            <SetPageColorContext.Provider value={setColor}>
                <div style={{color}}>
                    <h1>sverg84</h1>
                    <h2>Heylo there</h2>
                    <ResumeButton />
                </div>
            </SetPageColorContext.Provider>
        </PageColorContext.Provider>
    );
}
