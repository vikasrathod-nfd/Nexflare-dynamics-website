import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBulb,
  IconCode,
  IconCloudUpload,
  IconActivity,
} from "@tabler/icons-react";

const lifecycle = [
  { icon: IconBulb,        step: "01", title: "Discover", desc: "We study your goals, users, and constraints to define what actually needs to be built." },
  { icon: IconCode,        step: "02", title: "Build",    desc: "Our engineers design and develop the product with clean architecture and rigorous testing." },
  { icon: IconCloudUpload, step: "03", title: "Deploy",   desc: "We ship your application to the cloud platform best suited to its scale, budget, and compliance needs." },
  { icon: IconActivity,    step: "04", title: "Sustain",  desc: "We monitor, patch, and optimize your live environment so it keeps performing as you grow." },
];

const ItProcessSection = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent    = isDark ? "#00D4C8"                : "#0891B2";
  const accentDim = isDark ? "rgba(0,212,200,0.12)"   : "rgba(8,145,178,0.10)";
  const surface2  = isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.95)";
  const border    = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.12)";
  const textMain  = isDark ? "#ffffff"                : "#0f172a";
  const textDim   = isDark ? "rgba(255,255,255,0.45)" : "#64748b";

  return (
    <Container size="xl" py={{ base: 60, md: 90 }}>
      <Stack gap={10} align="center" mb={44}>
        <Text fz={11} fw={700} style={{ color: accent, letterSpacing: 2.5, textTransform: "uppercase" }}>
          How We Work
        </Text>
        <Title order={2} ta="center" style={{
          color: textMain, fontWeight: 900,
          fontSize: "clamp(1.7rem,3vw,2.4rem)", maxWidth: 640,
        }}>
          One Team, From First Sketch to Production
        </Title>
        <Text size="sm" ta="center" style={{ color: textDim, maxWidth: 580 }}>
          We don't hand your project off between teams. The people who build
          your software are the same people who deploy and support it.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
        {lifecycle.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Box style={{
                background: surface2, border: `1px solid ${border}`,
                borderRadius: 14, padding: "24px 20px", height: "100%",
                position: "relative", backdropFilter: "blur(12px)",
              }}>
                <Text fw={900} style={{
                  color: accentDim, fontSize: "2.4rem", lineHeight: 1,
                  position: "absolute", top: 12, right: 16,
                }}>
                  {p.step}
                </Text>
                <Box style={{
                  width: 40, height: 40, borderRadius: 10, background: accentDim,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                }}>
                  <Icon size={20} color={accent} />
                </Box>
                <Text size="sm" fw={700} mb={6} style={{ color: textMain }}>
                  {p.title}
                </Text>
                <Text size="xs" lh={1.7} style={{ color: textDim }}>{p.desc}</Text>
              </Box>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default ItProcessSection;