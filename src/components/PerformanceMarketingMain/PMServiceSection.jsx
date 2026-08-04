import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";
import {
  IconBrandGoogle,
  IconBrandMeta,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandAmazon,
  IconDeviceMobile,
} from "@tabler/icons-react";

const PLATFORMS = [
  {
    icon: IconBrandGoogle,
    title: "Google Ads",
    description: "Search, Shopping, and Performance Max campaigns that capture high-intent buyers",
    color: "#4285F4",
    gradient: "linear-gradient(135deg, #4285F4 0%, #34A853 33%, #FBBC05 66%, #EA4335 100%)",
  },
  {
    icon: IconBrandMeta,
    title: "Meta Ads",
    description: "Facebook & Instagram campaigns built for reach and conversion",
    color: "#0866FF",
    gradient: "linear-gradient(135deg, #0866FF 0%, #0047B3 100%)",
  },
  {
    icon: IconBrandLinkedin,
    title: "LinkedIn Ads",
    description: "B2B lead generation that targets decision-makers directly",
    color: "#0A66C2",
    gradient: "linear-gradient(135deg, #0A66C2 0%, #084E96 100%)",
  },
  {
    icon: IconBrandYoutube,
    title: "YouTube Ads",
    description: "Video and discovery campaigns that build awareness at scale",
    color: "#FF0000",
    gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
  },
  {
    icon: IconBrandAmazon,
    title: "Amazon Ads",
    description: "Sponsored Products & Brands that drive marketplace sales",
    color: "#FF9900",
    gradient: "linear-gradient(135deg, #FF9900 0%, #232F3E 100%)",
  },
  {
    icon: IconDeviceMobile,
    title: "App Campaigns",
    description: "UAC and mobile install growth that scales your user base",
    color: "#14b8a6",
    gradient: "linear-gradient(135deg, #2DD4BF 0%, #14b8a6 100%)",
  },
];

const PMServiceSection = () => {
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
    cardShadowHover: isDark
      ? "0 16px 40px rgba(0,0,0,0.5)"
      : "0 16px 40px rgba(15,23,42,0.12)",
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
            Platforms We Manage
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
            Every Channel,{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Optimised
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
            We run and scale paid campaigns across the platforms where your
            customers are already searching, scrolling, and buying.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing={20}>
          {PLATFORMS.map((platform) => {
            const Icon = platform.icon;
            return (
              <Box
                key={platform.title}
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 16,
                  padding: "32px 20px",
                  boxShadow: colors.cardShadow,
                  textAlign: "center",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = colors.cardShadowHover;
                  e.currentTarget.style.borderColor = platform.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = colors.cardShadow;
                  e.currentTarget.style.borderColor = colors.cardBorder;
                }}
              >
                <Box
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: platform.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    boxShadow: `0 8px 20px ${platform.color}33`,
                  }}
                >
                  <Icon size={28} color="#ffffff" stroke={1.8} />
                </Box>

                <Text
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: colors.cardTitle,
                    marginBottom: 8,
                  }}
                >
                  {platform.title}
                </Text>

                <Text
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    color: colors.cardText,
                  }}
                >
                  {platform.description}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PMServiceSection;