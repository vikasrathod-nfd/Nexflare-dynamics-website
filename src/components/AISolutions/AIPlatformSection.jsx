import React from "react";
import { Box, Container, SimpleGrid, Group, Paper, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconMessageChatbot, IconChartInfographic, IconEye,
  IconMicrophone, IconRobotFace, IconShieldCheck,
} from "@tabler/icons-react";

const capabilities = [
  { icon: IconMessageChatbot, title: "LLM & Chatbots", desc: "Custom copilots, support bots, and internal knowledge assistants." },
  { icon: IconChartInfographic, title: "Predictive Analytics", desc: "Forecasting, churn prediction, and demand modeling." },
  { icon: IconEye, title: "Computer Vision", desc: "Object detection, OCR, and quality inspection pipelines." },
  { icon: IconMicrophone, title: "Speech & NLP", desc: "Transcription, sentiment analysis, and text classification." },
  { icon: IconRobotFace, title: "Process Automation", desc: "Agentic workflows that automate repetitive business tasks." },
  { icon: IconShieldCheck, title: "AI Governance", desc: "Bias checks, guardrails, and compliance-ready model audits." },
];

const AICapabilitiesSection = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent     = isDark ? "#00D4C8" : "#0891B2";
  const accentSoft = isDark ? "rgba(0,212,200,0.18)" : "rgba(8,145,178,0.10)";
  const surface    = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const border     = isDark ? "rgba(255,255,255,0.08)" : "rgba(2,6,23,0.06)";

  return (
    <Box
      component="section"
      py={{ base: 60, sm: 80, md: 110 }}
      style={{ background: isDark ? "rgba(255,255,255,.02)" : "rgba(8,145,178,.02)" }}
    >
      <Container size="lg">
        <Stack align="center" ta="center" mb={{ base: 40, md: 56 }} gap="xs">
          <Text fw={800} size="sm" style={{ color: accent, letterSpacing: 3, textTransform: "uppercase" }}>
            Capabilities
          </Text>
          <Title order={2} fw={900} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", lineHeight: 1.15 }}>
            What We Can Build For You
          </Title>
          <Text c={isDark ? "gray.5" : "gray.6"} maw={560} size="md">
            End-to-end AI capabilities across the stack
             from data to
            deployed, monitored models.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Paper
                p="lg"
                radius="lg"
                withBorder
                className="ai-cap-card"
                style={{
                  height: "100%",
                  background: surface,
                  borderColor: border,
                  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                }}
              >
                <Group mb="sm">
                  <Box
                    style={{
                      width: 48, height: 48, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: accentSoft,
                    }}
                  >
                    <cap.icon size={24} color={accent} />
                  </Box>
                </Group>
                <Text fw={700} size="lg" mb={4}>{cap.title}</Text>
                <Text size="sm" c={isDark ? "gray.5" : "gray.6"}>{cap.desc}</Text>
              </Paper>
            </motion.div>
          ))}
        </SimpleGrid>

        <style>{`
          .ai-cap-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px ${accentSoft};
            border-color: ${accent}55 !important;
          }
        `}</style>
      </Container>
    </Box>
  );
};

export default AICapabilitiesSection;