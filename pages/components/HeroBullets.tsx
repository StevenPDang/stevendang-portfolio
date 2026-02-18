import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
//import image from './image.svg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {/* <span className={classes.highlight}>Welcome</span> to <br /> my page! */}
            Welcome to <br /> my page!
          </Title>
          <Text c="dimmed" mt="md">
            University of Texas at Alrington - Computer Science
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Undergraduate Research Lead</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>OpenLedger - Open source POS</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>Koicha LLC</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        {/* <Image src={image.src} className={classes.image} alt="" /> */}
      </div>
    </Container>
  );
}