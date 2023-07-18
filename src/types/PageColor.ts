export const PAGE_COLORS = {"black": "Black", "#ffc2e2": "Baby pink", "#0504aa": "Royal blue"} as const;

export type PageColor = keyof typeof PAGE_COLORS;

export function isPageColor(value: string | null | undefined): value is PageColor {
  return value != null && value in PAGE_COLORS;
}