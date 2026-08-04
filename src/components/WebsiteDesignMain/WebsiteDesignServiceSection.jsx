import {
  Box,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconPalette,
  IconDeviceMobile,
  IconLayoutGrid,
  IconRefresh,
  IconColorSwatch,
  IconTrendingUp,
  
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences through strategic interface design, interactive prototypes, and usability-focused solutions that enhance customer satisfaction.",
    icon: IconPalette,
  },
  {
    title: "Responsive Design",
    description:
      "Deliver seamless digital experiences with responsive layouts that provide consistent performance and usability across desktops, tablets, and mobile devices.",
    icon: IconDeviceMobile,
  },
  {
    title: "Landing Page Design",
    description:
      "Design high-impact landing pages that communicate your value proposition effectively, encourage user engagement, and support lead generation and business objectives.",
    icon: IconLayoutGrid,
  },
  {
    title: "Website Redesign",
    description:
      "Modernize your existing website with improved visual design, enhanced usability, and a refreshed digital experience that aligns with your evolving brand identity.",
    icon: IconRefresh,
  },
  {
    title: "Brand Identity Integration",
    description:
      "Ensure a consistent brand experience by integrating your visual identity, typography, color systems, and design elements throughout every digital touchpoint.",
    icon:   IconColorSwatch,
  },
  {
    title: "Conversion Rate Optimisation",
    description:
      "Optimize user journeys through data-driven design improvements, strategic content placement, and continuous testing to increase engagement and conversion performance.",
    icon: IconTrendingUp,
  },
];

const WebsiteDesignServiceSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === "dark";

  return (
    <Box
      py={120}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark ? "transparent" : theme.colors.gray[0],
      }}
    >
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.14), transparent 70%)",
            top: 80,
            left: -180,
            filter: "blur(80px)",
          }}
        />
      )}
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,.14), transparent 70%)",
            bottom: 0,
            right: -180,
            filter: "blur(90px)",
          }}
        />
      )}

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="md" mb={70}>
          <Text
            fw={700}
            c="cyan"
            tt="uppercase"
            style={{ letterSpacing: 3, fontSize: 15 }}
          >
            WHAT WE OFFER
          </Text>

          <Title
            style={{
              fontSize: "clamp(2rem,3vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Design Services That{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#2563eb", to: "#06b6d4" }}
            >
              Convert
            </Text>
          </Title>

          <Text
            maw={760}
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: isDark ? "rgba(255,255,255,.72)" : theme.colors.gray[7],
            }}
          >
            Every design is crafted with a clear understanding of your
            audience, combining modern visual design, intuitive navigation,
            and user-centered principles to create engaging and impactful
            digital experiences.
          </Text>
        </Stack>

        <Grid gutter={30}>
          {services.map((item, index) => (
            <Grid.Col key={item.title} span={{ base: 12, sm: 6, lg: 4 }}>
              <MotionCard
                p={0}
                radius={24}
                h="100%"
                withBorder
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: isDark ? "rgba(18, 26, 36, 0.92)" : theme.white,
                  border: isDark
                    ? "1px solid rgba(255,255,255,.08)"
                    : `1px solid ${theme.colors.gray[3]}`,
                  backdropFilter: isDark ? "blur(18px)" : "none",
                  boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,.35)"
                    : "0 10px 30px rgba(0,0,0,.06)",
                  cursor: "pointer",
                  transition: "all .35s ease",
                }}
              >
                {/* top gradient accent bar */}
                <Box
                  style={{
                    height: 5,
                    width: "100%",
                    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                  }}
                />

                <Box p={40} style={{ position: "relative" }}>
                  <Stack gap={20}>
                    {/* Icon + Heading in one row */}
                    <Group gap={16} wrap="nowrap" align="center">
                      <ThemeIcon
                        size={58}
                        radius={16}
                        variant="gradient"
                        gradient={{ from: "#2563eb", to: "#06b6d4", deg: 135 }}
                        style={{
                          boxShadow: "0 10px 24px rgba(6,182,212,.35)",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={30} stroke={1.8} color="#fff" />
                      </ThemeIcon>
                      <Title
                        order={3}
                        style={{
                          fontSize: 21,
                          fontWeight: 800,
                          lineHeight: 1.35,
                          color: isDark ? theme.white : theme.black,
                        }}
                      >
                        {item.title}
                      </Title>
                    </Group>

                    <Text
                      style={{
                        fontSize: 16.5,
                        lineHeight: 1.85,
                        color: isDark
                          ? "rgba(255,255,255,.68)"
                          : theme.colors.gray[7],
                      }}
                    >
                      {item.description}
                    </Text>
                  </Stack>
                </Box>
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WebsiteDesignServiceSection;