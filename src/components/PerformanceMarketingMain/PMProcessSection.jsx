import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

const FEATURES = [
  {
    icon: "🎯",
    title: "Campaign Strategy",
    description:
      "Audience research, funnel mapping, and channel selection built around your specific revenue goals and target CAC.",
  },
  {
    icon: "🧪",
    title: "Creative Testing",
    description:
      "Continuous A/B testing of ad copy, creatives, and landing pages to find winning combinations fast.",
  },
  {
    icon: "🎨",
    title: "Ad Creative Production",
    description:
      "Scroll-stopping static, video, and carousel ads designed and produced in-house for every platform.",
  },
  {
    icon: "📊",
    title: "Conversion Tracking",
    description:
      "Rock-solid pixel, GTM, and server-side tracking setup so every rupee of spend is attributed correctly.",
  },
  {
    icon: "⚙️",
    title: "Bid & Budget Optimisation",
    description:
      "Daily monitoring and reallocation of budget toward the campaigns, ad sets, and keywords driving results.",
  },
  {
    icon: "📈",
    title: "Reporting & Insights",
    description:
      "Transparent dashboards and monthly reviews covering ROAS, CPA, and revenue — no vanity metrics.",
  },
];

const PMProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    cardBg: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
    cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    cardShadow: isDark
      ? "0 1px 2px rgba(0,0,0,0.4)"
      : "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
    iconBg: isDark ? "rgba(255,255,255,0.05)" : "rgba(13,148,136,0.08)",
    iconBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(13,148,136,0.15)",
    cardTitle: isDark ? "#ffffff" : "#0f172a",
    cardText: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} maw={720} mb={56}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            What We Offer
          </Text>

          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
            }}
          >
            Full-Funnel Performance{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Marketing
            </Box>
          </Title>

          <Text
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: colors.subtitle,
              marginTop: 8,
            }}
          >
            From strategy to creative to optimisation — everything your
            brand needs to turn ad spend into growth.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={24}>
          {FEATURES.map((feature) => (
            <Box
              key={feature.title}
              style={{
                position: "relative",
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: 16,
                padding: "32px 28px",
                boxShadow: colors.cardShadow,
                overflow: "hidden",
              }}
            >
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: colors.iconBg,
                  border: `1px solid ${colors.iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </Box>

              <Text
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: colors.cardTitle,
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                {feature.title}
              </Text>

              <Text
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: colors.cardText,
                }}
              >
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PMProcessSection;