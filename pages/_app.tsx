import React from "react";
import type { AppProps } from "next/app";

import type { CMPage } from "@/components/layouts/types";

import "@unocss/reset/tailwind.css";
import "@/styles/uno.css";
import "@/styles/custom.css";
import "@/styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: CMPage;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page: React.ReactElement) => page);

  return Layout(<Component {...pageProps} />);
}
