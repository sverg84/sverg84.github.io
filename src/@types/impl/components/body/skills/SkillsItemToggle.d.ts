import * as React from 'react';
type Props = Readonly<{
    callback?: (eventKey: string) => void;
    eventKey: string;
    label: string;
}>;
export default function SkillsItemToggle({ callback, eventKey, label, }: Props): React.JSX.Element;
export {};
