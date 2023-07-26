type ReturnType = Readonly<{
    isHovering: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}>;
export default function useHover(): ReturnType;
export {};
