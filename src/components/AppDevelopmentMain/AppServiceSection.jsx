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
  IconBrandApple,
  IconBrandAndroid,
  IconDevices,
  IconWorldWww,
  IconPalette,
  IconTool,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "iOS App Development",
    description:
      "Build powerful and seamless iOS applications using Swift and SwiftUI. We create high-performance apps optimized for the Apple ecosystem, delivering exceptional user experiences across iPhone, iPad, and Apple Watch devices.",
    icon: IconBrandApple,
  },
  {
    title: "Android App Development",
    description:
      "Develop scalable and feature-rich Android applications using modern technologies like Kotlin and Jetpack Compose. Our solutions are designed for superior performance, security, and compatibility across diverse Android devices.",
    icon: IconBrandAndroid,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Accelerate your digital presence with cross-platform applications built using React Native and Flutter. We deliver cost-effective, scalable apps with native-like performance across both iOS and Android platforms.",
    icon: IconDevices,
  },
  {
    title: "Progressive Web App Development",
    description:
      "Create fast, reliable, and engaging Progressive Web Applications that combine the best of web and mobile experiences. Our PWAs offer offline functionality, faster loading, and seamless accessibility across devices.",
    icon: IconWorldWww,
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and visually engaging app experiences with user-focused UI/UX strategies. From wireframes and prototypes to final interfaces, we create designs that improve usability, engagement, and customer satisfaction.",
    icon: IconPalette,
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ensure your application stays secure, updated, and optimized with our ongoing maintenance and support services. We provide performance monitoring, bug fixes, enhancements, and updates to keep your app future-ready.",
    icon: IconTool,
  },
];

const AppServiceSection = () => {
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
              "radial-gradient(circle, rgba(34,211,238,.14), transparent 70%)",
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
            WHAT WE OFFER
          </Text>

          <Title
            style={{
              fontSize: "clamp(2rem,3vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Complete{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              App Development Solutions
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
            Build powerful mobile experiences with our end-to-end app
            development expertise. We combine strategic consulting, creative
            UI/UX design, advanced development frameworks, and continuous
            support to deliver secure, scalable, and user-centric
            applications that drive business transformation.
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

export default AppServiceSection;