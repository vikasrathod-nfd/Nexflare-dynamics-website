import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandX,
  IconBrandPinterest,
} from "@tabler/icons-react";

const PLATFORMS = [
  {
    icon: IconBrandInstagram,
    title: "Instagram",
    description: "Reels, Stories, and shoppable content built for discovery",
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #405DE6 0%, #C13584 50%, #FD1D1D 100%)",
  },
  {
    icon: IconBrandFacebook,
    title: "Facebook",
    description: "Community management and page growth that builds trust",
    color: "#1877F2",
    gradient: "linear-gradient(135deg, #1877F2 0%, #0C63D4 100%)",
  },
  {
    icon: IconBrandLinkedin,
    title: "LinkedIn",
    description: "B2B thought leadership that positions you as the authority",
    color: "#0A66C2",
    gradient: "linear-gradient(135deg, #0A66C2 0%, #084E96 100%)",
  },
  {
    icon: IconBrandYoutube,
    title: "YouTube",
    description: "Video strategy and channel growth built for retention",
    color: "#FF0000",
    gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
  },
  {
    icon: IconBrandX,
    title: "Twitter / X",
    description: "Real-time engagement that keeps your brand in the conversation",
    color: "#000000",
    gradient: "linear-gradient(135deg, #000000 0%, #3a3a3a 100%)",
  },
  {
    icon: IconBrandPinterest,
    title: "Pinterest",
    description: "Visual discovery that drives qualified traffic long-term",
    color: "#E60023",
    gradient: "linear-gradient(135deg, #E60023 0%, #AD081B 100%)",
  },
];

const SMMServiceSection = () => {
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
            Every Platform,{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Mastered
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
            We craft platform-native content and strategies tailored to
            each channel's unique audience and algorithm.
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

export default SMMServiceSection;