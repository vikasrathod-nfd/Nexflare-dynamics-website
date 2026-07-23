import {
  Avatar,
  Box,
  Card,
  Container,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "Our Instagram engagement more than tripled in four months, and for the first time our social channels are actually driving booked calls.",
    name: "Priya Nair",
    role: "Founder, Lumen Skincare",
  },
  {
    quote:
      "They took over our TikTok from zero and turned it into our top-performing acquisition channel within a quarter.",
    name: "Daniel Ortiz",
    role: "Growth Lead, FitTrack",
  },
  {
    quote:
      "Response times to customer DMs went from days to hours. That alone changed how people talk about us online.",
    name: "Meera Kapoor",
    role: "COO, Northside Coffee Co.",
  },
];

const SMMClientSuccess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box py={rem(100)}>
      <Container size="lg">
        <Stack align="center" gap="xs" mb={rem(56)}>
          <Text fw={600} c="cyan" tt="uppercase" size="sm">
            Client Success
          </Text>
          <Title order={2} ta="center" style={{ fontSize: rem(38) }}>
            Results our clients talk about
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {testimonials.map(({ quote, name, role }) => (
            <Card
              key={name}
              radius="lg"
              padding="xl"
              withBorder
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              <IconQuote size={28} color="#06b6d4" style={{ marginBottom: rem(12) }} />
              <Text size="sm" mb="lg">
                {quote}
              </Text>
              <Group gap="sm">
                <Avatar radius="xl" color="blue">
                  {name.split(" ").map((n) => n[0]).join("")}
                </Avatar>
                <Stack gap={0}>
                  <Text fw={600} size="sm">
                    {name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {role}
                  </Text>
                </Stack>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SMMClientSuccess;
