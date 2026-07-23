import {
  Box,
  Container,
  Grid,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconClockHour4,
  IconPalette,
  IconTargetArrow,
  IconShieldCheck,
} from "@tabler/icons-react";

const reasons = [
  {
    icon: IconClockHour4,
    title: "Consistent, on-time posting",
    description:
      "No more gaps in your feed. Your calendar is planned and published on schedule, every week.",
  },
  {
    icon: IconPalette,
    title: "In-house creative team",
    description:
      "Designers, video editors, and copywriters who build content specifically for your brand — no templates.",
  },
  {
    icon: IconTargetArrow,
    title: "Strategy tied to real goals",
    description:
      "Every post ladders up to awareness, engagement, or conversion targets we agree on together.",
  },
  {
    icon: IconShieldCheck,
    title: "Full transparency",
    description:
      "You get a shared content calendar and monthly reporting — always know what's posted and how it performed.",
  },
];

const SMMWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      py={rem(100)}
      style={{
        background: isDark
          ? "rgba(37,99,235,0.04)"
          : "rgba(37,99,235,0.03)",
      }}
    >
      <Container size="lg">
        <Grid gutter={rem(48)} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Text fw={600} c="cyan" tt="uppercase" size="sm" mb="xs">
              Why Choose Us
            </Text>
            <Title order={2} style={{ fontSize: rem(38), lineHeight: 1.15 }}>
              Social media management that actually moves the business
            </Title>
            <Text c="dimmed" mt="md">
              We treat your channels like a growth channel, not a checkbox —
              with the strategy, creative, and accountability to prove it.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              {reasons.map(({ icon: Icon, title, description }) => (
                <Group key={title} align="flex-start" wrap="nowrap" gap="md">
                  <ThemeIcon
                    size={44}
                    radius="md"
                    variant="light"
                    color="blue"
                  >
                    <Icon size={22} stroke={1.6} />
                  </ThemeIcon>
                  <Stack gap={2}>
                    <Text fw={600}>{title}</Text>
                    <Text c="dimmed" size="sm">
                      {description}
                    </Text>
                  </Stack>
                </Group>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default SMMWhyChooseUs;
