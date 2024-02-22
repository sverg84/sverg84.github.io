import * as React from "react";
type Props = Readonly<{
  background: React.JSX.Element;
  breadcrumbs?: React.JSX.Element;
  children: React.ReactNode;
}>;
export default function Page({
  background,
  breadcrumbs,
  children,
}: Props): React.JSX.Element;
export {};
