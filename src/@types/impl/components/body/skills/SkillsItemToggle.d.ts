import * as React from 'react';
type Props = Readonly<{
    callback?: (eventKey: string) => void;
    eventKey: string;
}>;
export default function SkillsItemToggle({ callback, eventKey, }: Props): React.JSX.Element;
export {};
