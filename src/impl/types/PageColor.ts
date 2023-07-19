export const PAGE_COLORS = {
	'Obsidian': '#2e3134',
	'Baby pink': '#ffc2e2',
	'Royal blue': '#0504aa',
	'Phoenix scarlet': '#ea0a13',
	'Grape jelly': '#8034eb',
	'Ogre green': '#c4d300',
} as const;

export type PageColorName = keyof typeof PAGE_COLORS;

export type PageColorHex = typeof PAGE_COLORS[PageColorName];

export function isPageColor(
	value: string | null | undefined,
): value is PageColorName {
	return value != null && value in PAGE_COLORS;
}
