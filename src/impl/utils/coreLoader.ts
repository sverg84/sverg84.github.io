import type { WeatherData } from "impl/components/AppWeather";
import styles from "../styles/coreLoader.module.scss";

type PageNavLatestPushTimestampType =
  typeof import("impl/components/nav/PageNavLatestPushTimestamp");

export type CoreLoaderData = Readonly<{
  weather: WeatherData & Readonly<{ className: string }>;
  PageNavLatestPushTimestamp: PageNavLatestPushTimestampType["default"];
  lastUpdatedTime: Date;
}>;

export async function coreLoader(): Promise<CoreLoaderData> {
  const [weatherResponse, updateResponse] = await Promise.all([
    fetch("https://vjkuarupgi.execute-api.us-east-2.amazonaws.com/default"),
    fetch("https://3a15ktad20.execute-api.us-east-2.amazonaws.com/Production/"),
  ]);

  const [weatherData, updateTime, { default: PageNavLatestPushTimestamp }]: [
    WeatherData,
    number,
    PageNavLatestPushTimestampType,
  ] = await Promise.all([
    weatherResponse.json(),
    updateResponse.json(),
    import("impl/components/nav/PageNavLatestPushTimestamp"),
  ]);

  const { sunrise, sunset } = weatherData;
  const currentTime = new Date().getTime();

  const className =
    currentTime < sunrise * 1000 || currentTime >= sunset * 1000
      ? styles.night
      : styles.day;

  return {
    weather: { ...weatherData, className },
    lastUpdatedTime: new Date(updateTime),
    PageNavLatestPushTimestamp,
  };
}
