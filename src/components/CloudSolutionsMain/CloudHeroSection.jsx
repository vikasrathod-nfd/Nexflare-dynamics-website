import React from "react";
import {
  Box,
  Badge,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";



const ItHeroSection = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent     = isDark ? "#00D4C8"                : "#0891B2";
  const accentDim  = isDark ? "rgba(0,212,200,0.12)"   : "rgba(8,145,178,0.10)";
  const surface2   = isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.12)";
  const border     = isDark ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.18)";
  const btnPrimCol = isDark ? "#0a0f1e"                : "#ffffff";

  return (
    <Box
      component="section"
      py={230}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image - kept bright/visible, darkened via overlay instead */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          filter: "brightness(1)",
          pointerEvents: "none",
        }}
      />
      {/* Text-side overlay only - fades quickly so most of the image stays visible */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `
              linear-gradient(90deg, rgba(4,10,18,0.92) 0%, rgba(4,10,18,0.78) 32%, rgba(4,10,18,0.35) 55%, rgba(4,10,18,0) 72%),
              linear-gradient(0deg, rgba(4,10,18,0.55) 0%, rgba(4,10,18,0) 30%)
            `
            : `
              linear-gradient(90deg, rgba(6,12,24,0.85) 0%, rgba(6,12,24,0.68) 32%, rgba(6,12,24,0.28) 55%, rgba(6,12,24,0) 72%),
              linear-gradient(0deg, rgba(6,12,24,0.45) 0%, rgba(6,12,24,0) 30%)
            `,
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Stack gap={24} maw={650}>
            <Badge
              size="lg"
              variant="outline"
              style={{
                borderColor: `${accent}55`, color: accent, fontWeight: 700,
                letterSpacing: 1, textTransform: "uppercase", alignSelf: "flex-start",
              }}
            >
              Software Development &amp; Cloud Deployment
            </Badge>

            <Title
              fw={900}
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                lineHeight: 1.1, letterSpacing: -0.5,
                color: "#f8fafc",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Elevate Your Software with Cloud Technology.
            </Title>

            <Text
              size="md"
              lh={1.85}
              style={{
                color: "rgba(255,255,255,.9)",
                textShadow: "0 1px 12px rgba(0,0,0,0.5)",
                maxWidth: 520,
              }}
            >
              Build, deploy, and manage your applications with secure, scalable, and reliable cloud solutions.
              From cloud architecture and application deployment to monitoring, optimization, and ongoing maintenance,
              we manage every stage of your cloud journey.
            </Text>

            <Group gap={12} mt={8}>
              <Button
                size="md" radius="xl"
                rightSection={<IconArrowRight size={16} />}
                style={{ background: accent, color: btnPrimCol, fontWeight: 700, border: "none" }}
                className="itsv-btn"
                onClick={() => navigate("/contact")}
              >
                Start Your Project
              </Button>
            </Group>

        
          </Stack>
        </motion.div>
      </Container>

      <style>{`
        .itsv-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .itsv-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .itsv-btn { transition: none !important; }
        }
      `}</style>
    </Box>
  );
};

export default ItHeroSection;