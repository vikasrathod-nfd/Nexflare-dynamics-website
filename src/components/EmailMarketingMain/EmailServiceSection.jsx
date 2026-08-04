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
  IconMail,
  IconBolt,
  IconTarget,
  IconPencil,
  IconFlask,
  IconChartBar,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "Email Campaign Design",
    description:
      "Create visually engaging, mobile-responsive email campaigns that reflect your brand identity and capture your audience's attention. We design professional email templates with compelling layouts, personalized messaging, and clear calls-to-action that encourage higher engagement, improve click-through rates, and drive meaningful customer conversions.",
    icon: IconMail,
  },
  {
    title: "Marketing Automation",
    description:
      "Streamline your customer journey with intelligent email automation that works around the clock. We build customized workflows including welcome series, lead nurturing campaigns, abandoned cart recovery, post-purchase follow-ups, re-engagement sequences, and personalized automation designed to increase customer retention and maximize revenue.",
    icon: IconBolt,
  },
  {
    title: "List Segmentation",
    description:
      "Deliver highly relevant email campaigns through advanced audience segmentation based on demographics, purchase history, customer behavior, engagement levels, interests, and lifecycle stages. By sending personalized content to the right audience at the right time, we improve engagement, increase conversions, and reduce unsubscribe rates.",
    icon: IconTarget,
  },
  {
    title: "Copywriting & Strategy",
    description:
      "Our email marketing experts craft persuasive subject lines, engaging email copy, and conversion-focused calls-to-action that inspire readers to take action. Every campaign is strategically planned to align with your business objectives, strengthen customer relationships, and consistently improve campaign performance.",
    icon: IconPencil,
  },
  {
    title: "A/B Testing",
    description:
      "Optimize every campaign through continuous A/B testing of subject lines, email designs, content, CTAs, personalization, and send times. By analyzing user behavior and campaign performance, we identify the highest-performing variations to maximize open rates, click-through rates, and overall conversions.",
    icon: IconFlask,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Measure the success of your email marketing campaigns with detailed performance reports and actionable insights. We track key metrics including open rates, click-through rates, conversions, subscriber growth, engagement trends, and campaign ROI, helping you make informed decisions for continuous improvement.",
    icon: IconChartBar,
  },
];

const EmailServiceSection = () => {
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
            WHAT WE OFFER
          </Text>
          <Title
            style={{
              fontSize: "clamp(2rem,3vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Complete Email{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              Marketing Solutions
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
            From strategy to automation — every email touchpoint crafted to
            move your audience from interest to action.
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

export default EmailServiceSection;