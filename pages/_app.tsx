import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider, Flex, Container, Box, Paper, px} from "@mantine/core";
import { theme } from "../theme";
import { HeaderSimple } from "./components/Header";
import { HeroBullets } from "./components/HeroBullets";
import { CardsCarousel } from "./components/CardsCarousel";
import classes from './Landing.module.css'

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <HeaderSimple />
      <Container size="xl" >
      <Box w="100%"bg={theme.other.gradient}>
        
          <Flex
            gap="md"
            justify="flex-start"
            align="center"
            direction="row"
            h={700}
        
          >
            <div className={classes.item}><HeroBullets/></div>
            <div>
              <CardsCarousel />
            </div>
          </Flex>
      </Box>
      </Container>
    </MantineProvider>
  );
}
