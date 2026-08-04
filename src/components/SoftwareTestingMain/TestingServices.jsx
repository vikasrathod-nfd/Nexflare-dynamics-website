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
  IconSearch,
  IconRobot,
  IconBolt,
  IconLock,
  IconDeviceMobile,
  IconLink,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const features = [
  {
    title: "Manual & Exploratory Testing",
    description:
      "Deliver a flawless user experience through comprehensive manual and exploratory testing. Our QA experts identify functional issues, usability gaps, and hidden defects to ensure your application performs reliably across every user journey.",
    icon: IconSearch,
  },
  {
    title: "Test Automation",
    description:
      "Accelerate your software development lifecycle with intelligent test automation. We build scalable automation frameworks that improve testing accuracy, reduce release cycles, and ensure consistent quality with every deployment.",
    icon: IconRobot,
  },
  {
    title: "Performance & Load Testing",
    description:
      "Ensure your application performs reliably under real-world traffic and demanding workloads. We identify performance bottlenecks, optimize response times, and validate scalability to deliver a seamless user experience.",
    icon: IconBolt,
  },
  {
    title: "Security & Penetration Testing",
    description:
      "Protect your applications with comprehensive security assessments that identify vulnerabilities before they become risks. Our testing strengthens data protection, enhances compliance, and builds confidence in your software.",
    icon: IconLock,
  },
  {
    title: "Mobile App Testing",
    description:
      "Deliver exceptional mobile experiences with comprehensive testing across Android and iOS devices. We validate functionality, compatibility, performance, and usability to ensure consistent quality on every screen.",
    icon: IconDeviceMobile,
  },
  {
    title: "API & Integration Testing",
    description:
      "Ensure reliable communication between applications with thorough API and integration testing. We verify data accuracy, system compatibility, and seamless third-party integrations for a stable and connected digital ecosystem.",
    icon: IconLink,
  },
];

const TestingServices = () => {
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
              "radial-gradient(circle, rgba(20,184,166,.14), transparent 70%)",
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
              "radial-gradient(circle, rgba(37,99,235,.14), transparent 70%)",
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
            c="teal"
            tt="uppercase"
            style={{ letterSpacing: 3, fontSize: 15 }}
          >
            WHAT WE TEST
          </Text>
          <Title
            style={{
              fontSize: "clamp(2rem,2.5vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Comprehensive{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              QA & Testing Services
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
            We help businesses deliver high-quality software by combining functional, performance, security, and compatibility testing. Our rigorous QA process minimizes risks, accelerates releases, and ensures every product meets the highest standards of reliability.
          </Text>
        </Stack>

        <Grid gutter={30}>
          {features.map((item, index) => (
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
                    background: "linear-gradient(90deg, #22d3ee, #14b8a6)",
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
                        gradient={{ from: "#22d3ee", to: "#14b8a6", deg: 135 }}
                        style={{
                          boxShadow: "0 10px 24px rgba(20,184,166,.35)",
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

export default TestingServices;
