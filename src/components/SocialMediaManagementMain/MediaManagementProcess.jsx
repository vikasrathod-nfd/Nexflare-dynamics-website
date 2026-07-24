import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";
const FEATURES = [
  {
    icon: "📅",
    title: "Daily Posting",
    description:
      "Consistent, on-brand posts scheduled and published across all your channels every single day — no gaps, no missed windows.",
  },
  {
    icon: "💬",
    title: "Community Management",
    description:
      "Real-time monitoring, comment replies, and DM management so no follower message ever goes unanswered.",
  },
  {
    icon: "🎨",
    title: "Content Calendar",
    description:
      "A monthly calendar planned around key dates, campaigns, and trends — approved by you before anything goes live.",
  },
  {
    icon: "🛡️",
    title: "Reputation Monitoring",
    description:
      "Ongoing tracking of mentions and sentiment so we can flag issues early and protect your brand's reputation.",
  },
  {
    icon: "📊",
    title: "Performance Reporting",
    description:
      "Monthly reports on reach, engagement, and follower growth, with clear takeaways and next steps — no jargon.",
  },
  {
    icon: "🤝",
    title: "Dedicated Account Manager",
    description:
      "One point of contact who knows your brand inside-out and is accountable for results across every platform.",
  },
];
const MediaManagementProcess = () => {
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
            Full-Service Social{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Management
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
            From daily posting to reputation monitoring — everything needed
            to keep your social presence active and on-brand.
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
export default MediaManagementProcess;