import { Box, Card, Grid, Group, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { IconPlugConnected } from "@tabler/icons-react";

// 👉 Apne actual supported tools se replace karna
const integrations = [
  "Google Calendar",
  "Slack",
  "Biometric Devices",
  "Tally",
  "Zoom",
  "Microsoft Teams",
];

const HRMSTools = () => {
  return (
    <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Card radius={24} p={{ base: "lg", sm: "xl" }} withBorder shadow="sm">
        <Grid align="center" gutter={{ base: 24, md: 40 }}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group gap="sm" mb="xs">
              <ThemeIcon size={44} radius="xl" color="blue" variant="light">
                <IconPlugConnected size={22} />
              </ThemeIcon>
            </Group>
            <Title order={3} fw={800} style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>
              Works with your existing tools
            </Title>
            <Text c="dimmed" size="sm" mt={6}>
              NexHRMS connects with the tools your team already uses.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="md">
              {integrations.map((tool) => (
                <Card key={tool} radius="lg" withBorder p="md" ta="center">
                  <Text size="sm" fw={600}>
                    {tool}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Card>
    </Box>
  );
};

export default HRMSTools;
