import {
  Box,
  Container,
  Group,
  rem,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

const steps = [
  {
    number: "01",
    title: "Audit & Discovery",
    description:
      "We review your current channels, competitors, and audience to find the gaps and opportunities worth acting on.",
  },
  {
    number: "02",
    title: "Strategy & Content Calendar",
    description:
      "A platform-by-platform plan with themes, posting cadence, and campaign tentpoles mapped out a month at a time.",
  },
  {
    number: "03",
    title: "Content Creation & Publishing",
    description:
      "Design, copy, and video get produced, approved, and scheduled — nothing goes live without your sign-off.",
  },
  {
    number: "04",
    title: "Community Engagement",
    description:
      "We monitor and respond to comments and messages daily, keeping your brand voice consistent and present.",
  },
  {
    number: "05",
    title: "Measure & Optimize",
    description:
      "Monthly reporting shows what's working, and we adjust targeting, formats, and spend based on real performance data.",
  },
];

const SMMProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box py={rem(100)}>
      <Container size="md">
        <Stack align="center" gap="xs" mb={rem(64)}>
          <Text fw={600} c="cyan" tt="uppercase" size="sm">
            How It Works
          </Text>
          <Title order={2} ta="center" style={{ fontSize: rem(38) }}>
            A repeatable process, not guesswork
          </Title>
        </Stack>

        <Stack gap={0}>
          {steps.map((step, idx) => (
            <Group
              key={step.number}
              align="flex-start"
              wrap="nowrap"
              gap="lg"
              py="lg"
              style={{
                borderLeft: `2px solid ${
                  isDark ? "rgba(6,182,212,0.25)" : "rgba(37,99,235,0.15)"
                }`,
                paddingLeft: rem(32),
                marginLeft: rem(20),
                position: "relative",
              }}
            >
              <Box
                style={{
                  position: "absolute",
                  left: rem(-21),
                  top: rem(20),
                  width: rem(40),
                  height: rem(40),
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: rem(13),
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #2563eb, #06b6d4)",
                }}
              >
                {step.number}
              </Box>
              <Stack gap={4}>
                <Text fw={600} size="lg">
                  {step.title}
                </Text>
                <Text c="dimmed" size="sm" maw={rem(520)}>
                  {step.description}
                </Text>
              </Stack>
            </Group>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SMMProcessSection;
