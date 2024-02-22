import * as React from "react";
export type TimelineItemData = Readonly<{
    description: React.JSX.Element;
    id: string;
    skillsList: ReadonlyArray<string>;
    src: string;
    tag: string;
    timeframe: string;
    title: string;
}>;
export default function ExperienceTimeline(): React.JSX.Element;
