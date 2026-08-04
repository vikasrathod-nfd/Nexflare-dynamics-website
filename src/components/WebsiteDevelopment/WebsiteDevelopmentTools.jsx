import { Box, Container, SimpleGrid, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBrandWordpress,
  IconBrandReact,
  IconCircleLetterN,
  IconFlame,
  IconBrandNodejs,
  IconBrandHtml5,
  IconBrandJavascript,
  IconDatabase,
  IconCloud,
  IconBrandGit,
  IconWorldWww,
  IconBuildingStore,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

// Note: some brand libraries (react-icons/si) frequently drop or rename
// trademarked logos (Adobe, InVision, etc.), causing import crashes. To keep
// this section reliable, every icon here is a confirmed Tabler icon —
// exact brand logos where Tabler has them (WordPress, React, Node.js,
// HTML5, JavaScript, Git), and a close-fit generic icon tinted with the
// brand's official color for tools without a native Tabler logo
// (Next.js, Laravel, MySQL/PostgreSQL, AWS/Cloudflare, Webflow, Shopify).
const TOOLS = [
  { name: "WordPress", Icon: IconBrandWordpress, color: "#21759B" },
  { name: "React.js", Icon: IconBrandReact, color: "#61DAFB" },
  { name: "Next.js", Icon: IconCircleLetterN, color: "#000000" },
  { name: "Node.js", Icon: IconBrandNodejs, color: "#5FA04E" },
  { name: "HTML5 / CSS3", Icon: IconBrandHtml5, color: "#E34F26" },
  { name: "JavaScript / TypeScript", Icon: IconBrandJavascript, color: "#F7DF1E" },
  { name: "MySQL / PostgreSQL", Icon: IconDatabase, color: "#4169E1" },
  { name: "AWS / Cloudflare", Icon: IconCloud, color: "#FF9900" },
  { name: "Git / GitHub", Icon: IconBrandGit, color: "#F05032" },
  { name: "Webflow", Icon: IconWorldWww, color: "#4353FF" },
];

const WebsiteDevelopmentTools = () => {
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
            Tech Stack
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
            Technologies We{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Master
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
            We utilize enterprise-grade technologies and industry best practices to develop secure, scalable, and high-performing web solutions. Every technology we choose is carefully selected to ensure reliability, flexibility, and sustainable business growth.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5 }} spacing={16} verticalSpacing={16}>
          {TOOLS.map(({ name, Icon, color }, index) => (
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

export default WebsiteDevelopmentTools;