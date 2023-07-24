type ReturnType = Readonly<{
    isHovering: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}>;
export default function useHoverStyle(): ReturnType;
export {};
