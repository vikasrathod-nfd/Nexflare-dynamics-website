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
  IconKey,
  IconFileText,
  IconLink,
  IconMapPin,
  IconChartBar,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const features = [
  {
    title: "Technical SEO Audit",
    description:
      "Our comprehensive technical SEO audit identifies and resolves issues that impact your website's search performance. We analyze crawlability, indexation, site architecture, Core Web Vitals, page speed, mobile responsiveness, structured data, broken links, and overall technical health to build a strong foundation for higher search engine rankings.",
    icon: IconSearch,
  },
  {
    title: "Keyword Research & Strategy",
    description:
      "We perform in-depth keyword research to uncover high-value search opportunities based on user intent, competition, and industry trends. Our strategic keyword planning helps you target the right audience, improve search visibility, and create content that attracts qualified traffic and drives meaningful business growth.",
    icon: IconKey,
  },
  {
    title: "On-Page Optimization",
    description:
      "Enhance your website's search engine performance with comprehensive on-page optimization. We optimize title tags, meta descriptions, headings, content structure, internal linking, image optimization, URL structure, and schema markup to improve relevance, user experience, and organic rankings across search engines.",
    icon: IconFileText,
  },
  {
    title: "Link Building",
    description:
      "Strengthen your website's authority through ethical, high-quality link-building strategies. We acquire relevant backlinks from trusted websites using content marketing, digital PR, guest posting, and strategic outreach to improve domain authority, increase credibility, and support sustainable organic growth.",
    icon: IconLink,
  },
  {
    title: "Local SEO",
    description:
      "Increase your visibility in local search results and attract customers in your target locations with our Local SEO services. We optimize your Google Business Profile, build consistent local citations, manage reviews, and implement location-specific strategies that help your business rank higher in Google Maps and local searches.",
    icon: IconMapPin,
  },
  {
    title: "SEO Analytics & Reporting",
    description:
      "Stay informed with detailed SEO reports that provide valuable insights into your website's performance. We track keyword rankings, organic traffic, user behavior, conversions, backlink growth, and overall SEO progress, delivering actionable recommendations to continuously improve your search visibility and return on investment.",
    icon: IconChartBar,
  },
];

const SEOServicesSection = () => {
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
            Complete{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              SEO Solutions
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
            From technical audits to content strategy, we handle every
            aspect of your SEO to deliver sustainable, long-term growth.
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

export default SEOServicesSection;