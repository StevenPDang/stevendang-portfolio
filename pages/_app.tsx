import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { HeaderSimple } from "./components/Header";
import { HeroBullets } from "./components/HeroBullets";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <HeaderSimple />
      <HeroBullets />
    </MantineProvider>
  );
}
