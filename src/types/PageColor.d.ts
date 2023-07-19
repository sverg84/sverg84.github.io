export declare const PAGE_COLORS: {
    readonly Obsidian: "#2e3134";
    readonly 'Baby pink': "#ffc2e2";
    readonly 'Royal blue': "#0504aa";
    readonly 'Phoenix scarlet': "#ea0a13";
    readonly 'Grape jelly': "#8034eb";
    readonly 'Ogre green': "#c4d300";
};
export type PageColorName = keyof typeof PAGE_COLORS;
export type PageColorHex = typeof PAGE_COLORS[PageColorName];
export declare function isPageColor(value: string | null | undefined): value is PageColorName;
