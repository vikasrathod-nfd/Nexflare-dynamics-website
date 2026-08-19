import React from "react";
import {
  Box, Container, SimpleGrid, List, Paper, Stack,
  Text, Title, ThemeIcon, useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";

const points = [
  "Continuous model monitoring & drift detection",
  "Regular retraining on fresh data",
  "24/7 uptime monitoring for AI endpoints",
  "Cost optimization for inference & compute",
  "Security patches and compliance updates",
];

const AISupportSection = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent  = isDark ? "#00D4C8" : "#0891B2";
  const surface = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const border  = isDark ? "rgba(255,255,255,0.08)" : "rgba(2,6,23,0.06)";

  return (
    <Box component="section" py={{ base: 60, sm: 80, md: 110 }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 60 }} verticalSpacing={40}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Stack gap="md" justify="center" h="100%">
              <Text fw={800} size="sm" style={{ color: accent, letterSpacing: 3, textTransform: "uppercase" }}>
                Ongoing Care
              </Text>
              <Title order={2} fw={900} style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}>
                AI That Keeps Getting Better
              </Title>
              <Text c={isDark ? "gray.5" : "gray.6"} size="md">
                Models degrade over time as real-world data shifts. We
                provide ongoing maintenance so your AI stays accurate,
                secure, and cost-efficient long after launch.
              </Text>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              p={{ base: "lg", md: "xl" }}
              radius="lg"
              withBorder
              style={{ background: surface, borderColor: border }}
            >
              <List spacing="md" size="md">
                {points.map((point) => (
                  <List.Item
                    key={point}
                    icon={
                      <ThemeIcon radius="xl" size={26} style={{ background: `${accent}22`, color: accent }}>
                        <IconCheck size={15} />
                      </ThemeIcon>
                    }
                  >
                    <Text c={isDark ? "gray.3" : "gray.7"}>{point}</Text>
                  </List.Item>
                ))}
              </List>
            </Paper>
          </motion.div>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AISupportSection;