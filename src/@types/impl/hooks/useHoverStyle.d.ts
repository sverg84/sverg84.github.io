import { DataType } from 'csstype';
import * as React from 'react';
type ReturnType = Readonly<{
    isHovering: boolean;
    style: React.CSSProperties | undefined;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}>;
export default function useHoverStyle(color: DataType.Color | undefined): ReturnType;
export {};
