import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import {
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSemrush,
  SiLooker,
  SiHubspot,
} from "react-icons/si";
import { IconTarget, IconTrendingUp, IconFlask } from "@tabler/icons-react";

const MotionBox = motion.create(Box);

// Real brand icons where available (react-icons/simple-icons).
// Hyros, Triple Whale, and Optimizely don't have a Simple Icons entry, so
// those use a close-fit Tabler icon instead, each tinted with that brand's
// actual color so it still reads as intentional, not generic.
const tools = [
  { name: "Google Ads Manager", Icon: SiGoogleads, color: "#4285F4" },
  { name: "Meta Ads Manager", Icon: SiMeta, color: "#0081FB" },
  { name: "Google Analytics 4", Icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Google Tag Manager", Icon: SiGoogletagmanager, color: "#4285F4" },
  { name: "SEMrush", Icon: SiSemrush, color: "#FF642D" },
  { name: "Hyros", Icon: IconTarget, color: "#22C55E" },
  { name: "Triple Whale", Icon: IconTrendingUp, color: "#0EA5E9" },
  { name: "Looker Studio", Icon: SiLooker, color: "#4285F4" },
  { name: "Optimizely", Icon: IconFlask, color: "#0037FF" },
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
];

const PMTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      component="section"
      py={{ base: 60, md: 90 }}
      style={{ position: "relative", overflow: "hidden" }}
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
          background: isDark
            ? "radial-gradient(circle, rgba(6,182,212,0.14), transparent 70%)"
            : "radial-gradient(circle, rgba(37,99,235,0.10), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Label */}
        <Text
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#06b6d4",
          }}
        >
          Tools We Use
        </Text>

        {/* Heading */}
        <Text
          fw={800}
          mb={16}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Powered By{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #2563eb, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Best-in-Class Tools
          </Text>
        </Text>

        {/* Subtitle */}
        <Text
          mb={48}
          maw={650}
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          Enterprise-grade platforms to plan, track, attribute, and scale
          every campaign we run.
        </Text>

        {/* Tool Cards */}
        <SimpleGrid
          cols={{ base: 2, xs: 3, sm: 4, md: 5 }}
          spacing={16}
          verticalSpacing={16}
        >
          {tools.map(({ name, Icon, color }, index) => (
            <MotionBox
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "26px 14px",
                borderRadius: 16,
                textAlign: "center",
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(37,99,235,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid rgba(37,99,235,0.12)",
                cursor: "default",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 14px 28px ${color}26`;
                e.currentTarget.style.borderColor = `${color}66`;
                e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255,255,255,0.10)"
                  : "rgba(37,99,235,0.12)";
                e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(37,99,235,0.03)";
              }}
            >
              <Box
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${color}17`,
                }}
              >
                <Icon size={24} color={color} />
              </Box>
              <Text
                size="sm"
                fw={600}
                style={{
                  color: isDark ? "rgba(255,255,255,0.85)" : "rgba(11,19,38,0.8)",
                  lineHeight: 1.3,
                }}
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

export default PMTools;