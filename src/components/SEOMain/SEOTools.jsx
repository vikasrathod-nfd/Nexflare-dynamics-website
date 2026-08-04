import { Box, Container, SimpleGrid, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import {
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiSemrush,
  SiPagespeedinsights,
  SiHotjar,
} from "react-icons/si";
import {
  IconLink,
  IconSpider,
  IconChartLine,
  IconFileAnalytics,
  IconWorldSearch,
  IconCrown,
  IconMapPin,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

// Real brand icons where available (react-icons/simple-icons).
// Ahrefs, Screaming Frog, Moz Pro, Surfer SEO, Search Atlas, Majestic, and
// BrightLocal don't have a Simple Icons entry, so those use a close-fit
// Tabler icon instead, each tinted with that brand's actual color so it
// still reads as intentional, not generic.
const TOOLS = [
  { name: "Google Search Console", Icon: SiGooglesearchconsole, color: "#458CF5" },
  { name: "Google Analytics 4", Icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Ahrefs", Icon: IconLink, color: "#FF5B00" },
  { name: "SEMrush", Icon: SiSemrush, color: "#FF642D" },
  { name: "Screaming Frog", Icon: IconSpider, color: "#8BC63E" },
  { name: "Moz Pro", Icon: IconChartLine, color: "#1E90CE" },
  { name: "Surfer SEO", Icon: IconFileAnalytics, color: "#7B61FF" },
  { name: "PageSpeed Insights", Icon: SiPagespeedinsights, color: "#4285F4" },
  { name: "Search Atlas", Icon: IconWorldSearch, color: "#2563EB" },
  { name: "Majestic", Icon: IconCrown, color: "#E4A700" },
  { name: "BrightLocal", Icon: IconMapPin, color: "#00B67A" },
  { name: "Hotjar", Icon: SiHotjar, color: "#FF3C00" },
];

const SEOTools = () => {
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
            Our Tech Stack
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
            Industry-Leading{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              SEO Tools
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
            We use the same tools the world's best SEO agencies rely on to
            deliver precision results.
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

export default SEOTools;