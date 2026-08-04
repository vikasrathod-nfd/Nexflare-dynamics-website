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
  IconRocket,
  IconBuildingBank,
  IconCreditCard,
  IconCloud,
  IconChartBar,
  IconLink,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const features = [
  {
    title: "SaaS MVP Development",
    description:
      "Transform your idea into a market-ready SaaS product with a streamlined MVP built for rapid validation. We focus on essential features, intuitive user experiences, and scalable architecture, helping you launch faster and gather valuable customer insights.",
    icon: IconRocket,
  },
  {
    title: "Multi-Tenant Architecture",
    description:
      "Build a scalable SaaS platform with secure multi-tenant architecture that supports multiple customers from a single codebase. Our solutions ensure data isolation, role-based access, and seamless scalability as your business grows.",
    icon: IconBuildingBank,
  },
  {
    title: "Subscription Billing & Payments",
    description:
      "Simplify recurring revenue with secure subscription management and payment gateway integrations. We implement flexible billing models, automated invoicing, trial management, and seamless payment experiences to support your business growth.",
    icon: IconCreditCard,
  },
  {
    title: "Cloud-Native Infrastructure",
    description:
      "Leverage the power of cloud-native technologies with secure, scalable, and high-performance infrastructure. Our solutions are designed for reliability, automatic scalability, and continuous deployment to ensure your SaaS platform is always ready for growth.",
    icon: IconCloud,
  },
  {
    title: "Admin Dashboard & Analytics",
    description:
      "Gain complete control over your SaaS platform with intuitive admin dashboards and real-time analytics. Monitor users, track performance, manage subscriptions, and make informed business decisions with powerful insights.",
    icon: IconChartBar,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Enhance your SaaS platform by integrating with leading business tools, payment gateways, CRM systems, communication platforms, and custom APIs—creating a connected ecosystem that improves efficiency and user experience.",
    icon: IconLink,
  },
];

const SaaSFeatures = () => {
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
            WHAT WE BUILD
          </Text>
          <Title
            style={{
              fontSize: "clamp(2rem,3vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            End-to-End{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              SaaS Development Services
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
            From MVP launch to enterprise-grade SaaS platform — we handle
            every layer of your product so you can focus on growing your
            customer base.
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

export default SaaSFeatures;
