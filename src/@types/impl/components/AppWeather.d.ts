import * as React from "react";
export type WeatherData = Readonly<{
    celsius: number;
    city: string;
    description: string;
    fahrenheit: number;
    icon: string;
    night: boolean;
}>;
export default function AppWeather(): React.JSX.Element | null;
