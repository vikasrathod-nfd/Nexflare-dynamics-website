import { Box, Container, SimpleGrid, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiLooker,
  SiGooglesearchconsole,
  SiMeta,
  SiSemrush,
  SiHotjar,
  SiHubspot,
} from "react-icons/si";
import {
  IconBrandLinkedin,
  IconLink,
  IconStack2,
  IconChartInfographic,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

// Real brand icons where available (react-icons/simple-icons).
// LinkedIn has no entry in this Simple Icons build (dropped for trademark
// reasons), so LinkedIn Insight Tag uses its official Tabler brand icon
// instead (still a real logo, just from a different icon set). Ahrefs,
// Supermetrics, and Tableau have no brand icon in either library, so those
// use a close-fit generic icon tinted with the brand's actual color.
const TOOLS = [
  { name: "Google Analytics 4", Icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Google Tag Manager", Icon: SiGoogletagmanager, color: "#4285F4" },
  { name: "Looker Studio", Icon: SiLooker, color: "#4285F4" },
  { name: "Google Search Console", Icon: SiGooglesearchconsole, color: "#458CF5" },
  { name: "Meta Pixel & CAPI", Icon: SiMeta, color: "#0081FB" },
  { name: "LinkedIn Insight Tag", Icon: IconBrandLinkedin, color: "#0A66C2" },
  { name: "SEMrush", Icon: SiSemrush, color: "#FF642D" },
  { name: "Ahrefs", Icon: IconLink, color: "#FF5B00" },
  { name: "Hotjar", Icon: SiHotjar, color: "#FF3C00" },
  { name: "Supermetrics", Icon: IconStack2, color: "#FFC72C" },
  { name: "Tableau", Icon: IconChartInfographic, color: "#E97627" },
  { name: "HubSpot CRM", Icon: SiHubspot, color: "#FF7A59" },
];

const APTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    cardBg: isDark ? "rgba(255,255,255,0.03)" : "rgba(20,184,166,0.03)",
    cardBorder: isDark ? "rgba(255,255,255,0.10)" : "rgba(20,184,166,0.12)",
    cardText: isDark ? "rgba(226,232,240,0.85)" : "#334155",
    glow: isDark
      ? "radial-gradient(circle, rgba(20,184,166,0.14), transparent 70%)"
      : "radial-gradient(circle, rgba(20,184,166,0.10), transparent 70%)",
  };

  return (
    <Box
      component="section"
      style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* ambient glow */}
      <Box
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          top: -220,
          right: -180,
          background: colors.glow,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Stack gap={6} maw={720} mb={48}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            Tools We Use
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
            Powered By{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Best-in-Class Tools
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
            Industry-leading platforms to track, visualise, and optimise
            every aspect of your marketing performance.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 6 }} spacing={16} verticalSpacing={16}>
          {TOOLS.map(({ name, Icon, color }, index) => (
            <MotionBox
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "24px 12px",
                borderRadius: 16,
                textAlign: "center",
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                cursor: "default",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 14px 28px ${color}26`;
                e.currentTarget.style.borderColor = `${color}66`;
                e.currentTarget.style.backgroundColor = isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = colors.cardBorder;
                e.currentTarget.style.backgroundColor = colors.cardBg;
              }}
            >
              <Box
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${color}17`,
                }}
              >
                <Icon size={22} color={color} />
              </Box>
              <Text
                size="sm"
                fw={600}
                style={{ color: colors.cardText, lineHeight: 1.3 }}
              >
                {name}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default APTools;