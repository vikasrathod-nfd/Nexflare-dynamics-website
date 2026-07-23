import {
  Box,
  Card,
  Container,
  rem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconCalendarEvent,
  IconMessage2,
  IconAd2,
  IconUsersGroup,
  IconChartInfographic,
  IconApps,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconCalendarEvent,
    title: "Content Strategy & Creation",
    description:
      "Custom content calendars, on-brand graphics, short-form video, and copy built around what your audience actually engages with.",
  },
  {
    icon: IconMessage2,
    title: "Community Management",
    description:
      "Timely replies to comments and DMs, proactive engagement, and a consistent brand voice across every conversation.",
  },
  {
    icon: IconAd2,
    title: "Paid Social Advertising",
    description:
      "Full-funnel campaigns on Meta, TikTok, and LinkedIn — audience targeting, creative testing, and budget optimization.",
  },
  {
    icon: IconUsersGroup,
    title: "Influencer Partnerships",
    description:
      "Creator sourcing, outreach, and campaign management that fits your budget and puts your product in front of the right people.",
  },
  {
    icon: IconChartInfographic,
    title: "Analytics & Reporting",
    description:
      "Monthly reporting on reach, engagement, and conversions, with clear takeaways on what to double down on next.",
  },
  {
    icon: IconApps,
    title: "Platform-Specific Strategy",
    description:
      "Tailored playbooks for Instagram, Facebook, LinkedIn, TikTok, X, and YouTube — because a one-size approach doesn't work.",
  },
];

const SMMServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box py={rem(100)}>
      <Container size="lg">
        <Stack align="center" gap="xs" mb={rem(56)}>
          <Text fw={600} c="cyan" tt="uppercase" size="sm">
            What We Do
          </Text>
          <Title order={2} ta="center" style={{ fontSize: rem(38) }}>
            Everything your social presence needs
          </Title>
          <Text ta="center" c="dimmed" maw={rem(560)}>
            One team, every platform — strategy, creative, community, and paid
            media working together instead of in silos.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              radius="lg"
              padding="xl"
              withBorder
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(255,255,255,0.7)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
              }}
              className="smm-service-card"
            >
              <ThemeIcon
                size={48}
                radius="md"
                variant="gradient"
                gradient={{ from: "#2563eb", to: "#06b6d4", deg: 90 }}
                mb="md"
              >
                <Icon size={24} stroke={1.6} />
              </ThemeIcon>
              <Text fw={600} size="lg" mb={4}>
                {title}
              </Text>
              <Text c="dimmed" size="sm">
                {description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <style>{`
        .smm-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(6,182,212,0.12);
        }
      `}</style>
    </Box>
  );
};

export default SMMServiceSection;
