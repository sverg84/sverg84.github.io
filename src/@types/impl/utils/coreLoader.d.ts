import type { WeatherData } from "impl/components/AppWeather";
type PageNavLatestPushTimestampType = typeof import("impl/components/nav/PageNavLatestPushTimestamp");
export type CoreLoaderData = Readonly<{
    weather: WeatherData & Readonly<{
        className: string;
    }>;
    PageNavLatestPushTimestamp: PageNavLatestPushTimestampType["default"];
    lastUpdatedTime: Date;
}>;
export declare function coreLoader(): Promise<CoreLoaderData>;
export {};
