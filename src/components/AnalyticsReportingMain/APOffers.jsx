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
  IconLayoutDashboard,
  IconTags,
  IconSpeakerphone,
  IconShoppingCart,
  IconLink,
  IconBrain,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const features = [
  {
    title: "Custom Dashboard Setup",
    description:
      "Transform your marketing data into actionable insights with fully customized dashboards built using Google Looker Studio, Tableau, or other leading BI tools. We consolidate data from multiple platforms into a single, real-time dashboard, allowing you to monitor KPIs, campaign performance, conversions, and business growth with complete transparency.",
    icon: IconLayoutDashboard,
  },
  {
    title: "GA4 & Tag Manager Setup",
    description:
      "Ensure accurate data collection with a professionally configured Google Analytics 4 and Google Tag Manager setup. We implement event tracking, conversion goals, custom dimensions, audience segmentation, eCommerce tracking, and advanced tag management to provide reliable insights that support smarter marketing decisions.",
    icon: IconTags,
  },
  {
    title: "Campaign Performance Reporting",
    description:
      "Receive comprehensive reports that measure the success of your SEO, PPC, social media, email marketing, and other digital campaigns. Our detailed analysis highlights key performance metrics, audience behavior, conversion trends, and actionable recommendations to continuously improve campaign effectiveness and maximize ROI.",
    icon: IconSpeakerphone,
  },
  {
    title: "Conversion Tracking",
    description:
      "Track every customer interaction with precision through advanced conversion tracking across Google Ads, Meta Ads, LinkedIn Ads, and eCommerce platforms. We implement pixels, Conversion APIs, enhanced eCommerce tracking, and event measurement to accurately attribute leads, sales, and overall campaign performance.",
    icon: IconShoppingCart,
  },
  {
    title: "Multi-Channel Attribution",
    description:
      "Understand how every marketing channel contributes to your business growth with advanced attribution analysis. We evaluate customer journeys across search, social media, email, paid advertising, and direct traffic, helping you identify the most effective touchpoints and allocate your marketing budget more efficiently.",
    icon: IconLink,
  },
  {
    title: "Competitor Benchmarking",
    description:
      "Stay ahead of the competition with detailed competitor benchmarking and market intelligence reports. We analyze competitor strategies, traffic trends, keyword performance, advertising efforts, and digital presence to uncover opportunities, identify gaps, and help your business build a stronger competitive advantage.",
    icon: IconBrain,
  },
];

const APOffers = () => {
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
            Complete Analytics{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              Solutions
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
            Transform your marketing data into actionable insights with
            end-to-end analytics solutions. From accurate tracking and
            custom dashboards to multi-channel attribution and performance
            reporting, we help you make smarter, data-driven decisions that
            accelerate business growth.
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

export default APOffers;