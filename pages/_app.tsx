import install from "@twind/with-next/app";
import { AppProps } from "next/app";
import { config } from "../twind.config";
import "public/styles/animateddiv.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default install(config, App);
