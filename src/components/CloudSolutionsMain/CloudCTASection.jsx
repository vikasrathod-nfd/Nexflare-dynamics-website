import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const CloudCTASection = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent     = isDark ? "#00D4C8"                : "#0891B2";
  const accentDim  = isDark ? "rgba(0,212,200,0.12)"   : "rgba(8,145,178,0.10)";
  const border     = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.12)";
  const textMain   = isDark ? "#ffffff"                : "#0f172a";
  const textSub    = isDark ? "rgba(255,255,255,0.75)" : "#334155";
  const btnPrimCol = isDark ? "#0a0f1e"                : "#ffffff";

  return (
    <Container size="xl" pb={{ base: 60, md: 90 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box style={{
          borderRadius: 20, padding: "52px 32px", textAlign: "center",
          background: `linear-gradient(135deg, ${accent}22, ${accentDim})`,
          border: `1px solid ${border}`, position: "relative", overflow: "hidden",
        }}>
          <Stack gap={14} align="center">
            <Title order={2} style={{
              color: textMain, fontWeight: 900,
              fontSize: "clamp(1.6rem,3vw,2.2rem)", maxWidth: 580,
            }}>
              Have a Project in Mind?
            </Title>
            <Text size="sm" style={{ color: textSub, maxWidth: 500 }}>
              Tell us what you're building. We'll help you plan the
              development, choose the right cloud platform, and set up
              ongoing support all under one roof.
            </Text>
            <Button
              size="md" radius="xl" mt={8}
              rightSection={<IconArrowRight size={16} />}
              style={{ background: accent, color: btnPrimCol, fontWeight: 700, border: "none" }}
              className="itsv-btn"
              onClick={() => navigate("/contact")}
            >
              Talk to Our Team
            </Button>
          </Stack>
        </Box>
      </motion.div>

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
    </Container>
  );
};

export default CloudCTASection;