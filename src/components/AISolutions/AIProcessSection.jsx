import React from "react";
import { Box, Container, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import { IconBulb, IconCode, IconCloudUpload, IconActivity } from "@tabler/icons-react";

const steps = [
  { icon: IconBulb, number: "01", title: "Discover", desc: "We study your goals, data, and constraints to define what AI can realistically solve." },
  { icon: IconCode, number: "02", title: "Build", desc: "Our engineers design and train models with clean architecture and rigorous evaluation." },
  { icon: IconCloudUpload, number: "03", title: "Deploy", desc: "We ship your model to production best suited to its scale, latency, and compliance needs." },
  { icon: IconActivity, number: "04", title: "Sustain", desc: "We monitor, retrain, and optimize your live models so they keep performing as you grow." },
];

const AIProcessSection = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent     = isDark ? "#00D4C8" : "#0891B2";
  const accentSoft = isDark ? "rgba(0,212,200,0.18)" : "rgba(8,145,178,0.10)";
  const surface    = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const border     = isDark ? "rgba(255,255,255,0.08)" : "rgba(2,6,23,0.06)";
  const numberCol  = isDark ? "rgba(255,255,255,0.08)" : "rgba(2,6,23,0.08)";

  return (
    <Box component="section" py={{ base: 60, sm: 80, md: 110 }}>
      <Container size="lg">
        <Stack align="center" ta="center" mb={{ base: 40, md: 56 }} gap="xs">
          <Text
            fw={800}
            size="sm"
            style={{ color: accent, letterSpacing: 3, textTransform: "uppercase" }}
          >
            How We Work
          </Text>
          <Title
            order={2}
            fw={900}
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.15, maxWidth: 760 }}
          >
            Built, Deployed, and Supported by One Team
          </Title>
          <Text c={isDark ? "gray.5" : "gray.6"} maw={620} size="md">
             The same team that develops your AI solution also handles its deployment,
            integration, and ongoing support creating a seamless path from idea to production.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Stack
                p="lg"
                gap="sm"
                className="ai-process-card"
                style={{
                  borderRadius: 16,
                  height: "100%",
                  border: `1px solid ${border}`,
                  background: surface,
                  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                }}
              >
                <Box style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <Box
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: accentSoft,
                    }}
                  >
                    <step.icon size={22} color={accent} />
                  </Box>
                  <Text fw={800} style={{ fontSize: "2.2rem", lineHeight: 1, color: numberCol, userSelect: "none" }}>
                    {step.number}
                  </Text>
                </Box>

                <Text fw={700} size="lg" mt="xs">{step.title}</Text>
                <Text size="sm" c={isDark ? "gray.5" : "gray.6"}>{step.desc}</Text>
              </Stack>
            </motion.div>
          ))}
        </SimpleGrid>

        <style>{`
          .ai-process-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px ${accentSoft};
            border-color: ${accent}55 !important;
          }
        `}</style>
      </Container>
    </Box>
  );
};

export default AIProcessSection;