type ReturnType = Readonly<{
    isActive: boolean;
    onBlur: () => void;
    onFocus: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}>;
export default function useHover(): ReturnType;
export {};
