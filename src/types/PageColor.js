export const PAGE_COLORS = { "black": "Black", "#ffc2e2": "Baby pink", "#0504aa": "Royal blue" };
export function isPageColor(value) {
    return value != null && value in PAGE_COLORS;
}
