import classNames from "classnames";
import * as React from "react";

import styles from "../styles/weather.module.scss";
import AppTooltip from "./AppTooltip";
import { useLoaderData } from "react-router-dom";
import type { CoreLoaderData } from "impl/utils/coreLoader";

export type WeatherData = Readonly<{
  celsius: number;
  city: string;
  description: string;
  fahrenheit: number;
  icon: string;
  night: boolean;
}>;

export default function AppWeather(): React.JSX.Element | null {
  const {
    weather: { className, ...weather },
  } = useLoaderData() as CoreLoaderData;

  return (
    <article className={classNames(styles.weather, className)}>
      <article className={styles.content}>
        {weather.city}
        <AppTooltip
          placement="left"
          trigger={
            <img
              alt={weather.description}
              className={styles.img}
              src={weather.icon}
              width={64}
              height={64}
            />
          }
          content={weather.description}
        />
        {weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
      </article>
    </article>
  );
}
