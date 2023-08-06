import * as React from 'react';
import type { TimelineItemData } from './ExperienceTimeline';
type Props = Readonly<{
    data: TimelineItemData;
    isOdd: boolean;
}>;
export default function ExperienceTimelineItem({ data, isOdd, }: Props): React.JSX.Element;
export {};
