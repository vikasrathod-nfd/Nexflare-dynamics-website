import {
  Box,
  Container,
  Title,
  Text,
  Group,
  SimpleGrid,
  Stack,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";

const STATS = [
  { value: "4.5x", label: "AVG. ROAS" },
  { value: "₹50Cr+", label: "AD SPEND MANAGED" },
  { value: "120+", label: "CAMPAIGNS LAUNCHED" },
];

const PMHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const colors = {
    imageOpacity: isDark ? 0.9 : 0.85,
    overlay: isDark
      ? "linear-gradient(90deg, rgba(6,8,8,0.94) 0%, rgba(6,8,8,0.88) 40%, rgba(6,8,8,0.65) 65%, rgba(6,8,8,0.45) 100%)"
      : "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.5) 100%)",
    badgeBg: isDark ? "rgba(20,184,166,0.14)" : "#E6FFFA",
    badgeText: isDark ? "#2dd4bf" : "#0F766E",
    badgeBorder: isDark ? "rgba(45,212,191,0.35)" : "#99F6E4",
    headingPrimary: isDark ? "#ffffff" : "#111827",
    headingAccent: "#14b8a6",
    paragraph: isDark ? "rgba(226,232,240,0.85)" : "#4B5563",
    btnPrimaryBg: "#14b8a6",
    btnPrimaryBgHover: "#0d9488",
    btnPrimaryText: "#ffffff",
    statValue: "#14b8a6",
    statLabel: isDark ? "rgba(226,232,240,0.75)" : "#6B7280",
  };

  const handleGetFreeAuditCall = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };

  return (
    <Box
      component="section"
      py={70}
      style={{
        position: "relative",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: isDark ? "#0a0a0a" : "#f8fafc",
      }}
    >
      {/* Background photo — analytics dashboard / ad performance */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://img.magnific.com/free-photo/dynamic-data-visualization-3d_23-2151904313.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: colors.imageOpacity,
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: colors.overlay,
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Stack gap="xl" py={80} maw={720}>
          <Box
            component="span"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
              backgroundColor: colors.badgeBg,
              color: colors.badgeText,
              border: `1px solid ${colors.badgeBorder}`,
              borderRadius: 999,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 0.6,
              padding: "10px 18px",
              lineHeight: 1,
            }}
          >
            <Box
              component="span"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#14b8a6",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Performance Marketing
          </Box>

          <Box>
            <Title
              order={1}
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: colors.headingPrimary,
                letterSpacing: -1,
                margin: 0,
              }}
            >
              Performance
            </Title>

            <Title
              order={1}
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: colors.headingAccent,
                letterSpacing: -1,
                margin: 0,
              }}
            >
              Marketing
            </Title>
          </Box>

          <Text
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: colors.paragraph,
              maxWidth: 560,
            }}
          >
            Data-driven paid campaigns across Google, Meta, and LinkedIn that
            turn ad spend into measurable revenue — built on testing,
            targeting, and relentless optimisation.
          </Text>

          <Group gap="md">
            <UnstyledButton
              style={{
                backgroundColor: colors.btnPrimaryBg,
                color: colors.btnPrimaryText,
                fontWeight: 700,
                fontSize: 15,
                paddingLeft: 28,
                paddingRight: 28,
                height: 52,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.btnPrimaryBgHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.btnPrimaryBg;
              }}
              onClick={handleGetFreeAuditCall}
            >
              Get Free Ad Audit
            </UnstyledButton>
          </Group>

          <SimpleGrid cols={3} spacing={40} pt="md" maw={620}>
            {STATS.map((stat) => (
              <Stack key={stat.label} gap={4}>
                <Text
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 800,
                    color: colors.statValue,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 0.4,
                    color: colors.statLabel,
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default PMHero;