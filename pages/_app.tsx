import { FC } from "react";

import "../styles/globals.css";

interface Props {
  Component: any;
  pageProps: Props;
}

const MyApp: FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
