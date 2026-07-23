import {
  Box,
  Card,
  Container,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

const tools = [
  "Meta Business Suite",
  "Hootsuite",
  "Buffer",
  "Sprout Social",
  "Later",
  "Canva",
  "Adobe Premiere",
  "TikTok Ads Manager",
  "LinkedIn Campaign Manager",
  "Google Analytics",
  "Brandwatch",
  "Notion",
];

const SMMTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box py={rem(100)}>
      <Container size="lg">
        <Stack align="center" gap="xs" mb={rem(48)}>
          <Text fw={600} c="cyan" tt="uppercase" size="sm">
            Our Stack
          </Text>
          <Title order={2} ta="center" style={{ fontSize: rem(38) }}>
            Tools we use to get it done
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="md">
          {tools.map((tool) => (
            <Card
              key={tool}
              radius="md"
              padding="lg"
              withBorder
              style={{
                textAlign: "center",
                background: isDark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              <Text fw={500} size="sm">
                {tool}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SMMTools;
