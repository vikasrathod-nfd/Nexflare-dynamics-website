import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconSparkles,
  IconHeart,
  IconMessageCircle2,
} from "@tabler/icons-react";

// Placeholder hero photo — swap for real brand/campaign photography.
// Picsum is seeded so this exact image is stable across reloads.
const HERO_IMAGE = "https://picsum.photos/seed/smm-hero-01/900/1000";

const platformIcons = [
  { Icon: IconBrandInstagram, color: "#E1306C", top: "12%", left: "6%" },
  { Icon: IconBrandFacebook, color: "#1877F2", top: "68%", left: "10%" },
  { Icon: IconBrandLinkedin, color: "#0A66C2", top: "18%", left: "90%" },
  { Icon: IconBrandTiktok, color: "#25F4EE", top: "78%", left: "88%" },
  { Icon: IconBrandX, color: "#0f1419", top: "8%", left: "48%" },
  { Icon: IconBrandYoutube, color: "#FF0000", top: "82%", left: "50%" },
];

const SMMHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box style={{ position: "relative", overflow: "hidden" }}>
      {/* Floating platform icons */}
      {platformIcons.map(({ Icon, color, top, left }, idx) => (
        <Box
          key={idx}
          visibleFrom="sm"
          style={{
            position: "absolute",
            top,
            left,
            opacity: isDark ? 0.18 : 0.12,
            transform: "translate(-50%, -50%)",
            animation: `smmFloat${idx % 2} 6s ease-in-out infinite`,
          }}
        >
          <Icon size={38} color={color} stroke={1.5} />
        </Box>
      ))}

      <style>{`
        @keyframes smmFloat0 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-14px); }
        }
        @keyframes smmFloat1 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(14px); }
        }
      `}</style>

      <Container size="lg" py={rem(100)} style={{ position: "relative" }}>
        <Grid gutter={rem(56)} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Badge
                size="lg"
                radius="sm"
                variant="light"
                color="cyan"
                leftSection={<IconSparkles size={14} />}
              >
                Social Media Management
              </Badge>

              <Title
                order={1}
                style={{
                  fontSize: rem(52),
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                }}
              >
                Turn your feed into your{" "}
                <Text
                  span
                  inherit
                  variant="gradient"
                  gradient={{ from: "#2563eb", to: "#06b6d4", deg: 90 }}
                >
                  hardest-working
                </Text>{" "}
                sales channel
              </Title>

              <Text c="dimmed" size="xl" maw={rem(520)}>
                We plan, create, post, and optimize across every platform
                that matters to your audience — so your brand shows up
                consistently, engages authentically, and converts followers
                into customers.
              </Text>

              <Group mt="sm">
                <Button
                  size="lg"
                  radius="md"
                  variant="gradient"
                  gradient={{ from: "#2563eb", to: "#06b6d4", deg: 90 }}
                  rightSection={<IconArrowRight size={18} />}
                >
                  Get a Free Audit
                </Button>
                <Button size="lg" radius="md" variant="default">
                  See Our Work
                </Button>
              </Group>

              <Group mt={rem(24)} gap={rem(40)}>
                <Stack gap={0}>
                  <Text fw={700} size="xl">180+</Text>
                  <Text size="sm" c="dimmed">Brands Managed</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700} size="xl">3.4x</Text>
                  <Text size="sm" c="dimmed">Avg. Engagement Lift</Text>
                </Stack>
                <Stack gap={0}>
                  <Text fw={700} size="xl">24/7</Text>
                  <Text size="sm" c="dimmed">Community Coverage</Text>
                </Stack>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: "relative" }} visibleFrom="sm">
              <Card
                radius="xl"
                padding={0}
                withBorder
                style={{ overflow: "hidden" }}
              >
                <Image
                  src={HERO_IMAGE}
                  alt="Social media content being planned and reviewed"
                  h={rem(480)}
                  fit="cover"
                />
              </Card>

              {/* Floating engagement stat card */}
              <Card
                radius="lg"
                padding="md"
                withBorder
                shadow="md"
                style={{
                  position: "absolute",
                  bottom: rem(-24),
                  left: rem(-24),
                  width: rem(200),
                  background: isDark ? "#0b1326" : "#ffffff",
                }}
              >
                <Group gap="xs" mb={4}>
                  <IconHeart size={18} color="#E1306C" />
                  <Text fw={700} size="lg">12.4K</Text>
                </Group>
                <Group gap="xs">
                  <IconMessageCircle2 size={18} color="#06b6d4" />
                  <Text size="sm" c="dimmed">842 comments this week</Text>
                </Group>
              </Card>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default SMMHero;
