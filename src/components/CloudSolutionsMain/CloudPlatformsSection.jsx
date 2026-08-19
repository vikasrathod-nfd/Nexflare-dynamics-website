import React from "react";
import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBrandAzure,
  IconBrandGoogle,
  IconServer,
  IconCheck,
  IconX,
} from "@tabler/icons-react";

const providers = [
  {
    icon: IconBrandAzure,
    name: "Microsoft Azure",
    tagline: "Enterprise-grade reliability",
    pros: [
      "Deep compliance & identity tooling (Entra ID, SOC 2, ISO 27001)",
      "Best-in-class for .NET, SQL Server & hybrid on-prem setups",
      "Strong enterprise support & regional data residency options",
    ],
    cons: [
      "Higher cost at small scale vs. leaner providers",
      "Steeper learning curve for smaller teams",
    ],
  },
  {
    icon: IconBrandGoogle,
    name: "Google Cloud",
    tagline: "Built for scale & data",
    pros: [
      "Best-in-class for Kubernetes & containerized workloads",
      "Strong data, analytics & AI/ML-native tooling",
      "Excellent global network for low-latency delivery",
    ],
    cons: [
      "Smaller enterprise-support ecosystem than Azure/AWS",
      "Pricing can be complex to forecast at scale",
    ],
  },
  {
    icon: IconServer,
    name: "Digital Ocean",
    tagline: "Lean, fast, cost-efficient",
    pros: [
      "Simple, predictable pricing — easy to budget for",
      "Fast provisioning, ideal for MVPs & startups",
      "Minimal operational overhead, easy to manage",
    ],
    cons: [
      "Fewer advanced enterprise & compliance features",
      "Not built for very large, complex enterprise workloads",
    ],
  },
];

const CloudPlatformsSection = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent    = isDark ? "#00D4C8"                : "#0891B2";
  const accentDim = isDark ? "rgba(0,212,200,0.12)"   : "rgba(8,145,178,0.10)";
  const surface   = isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)";
  const border    = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.12)";
  const textMain  = isDark ? "#ffffff"                : "#0f172a";
  const textSub   = isDark ? "rgba(255,255,255,0.75)" : "#334155";
  const textDim   = isDark ? "rgba(255,255,255,0.45)" : "#64748b";
  const sectionBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(8,145,178,0.03)";

  return (
    <Box style={{ background: sectionBg, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <Container size="xl" py={{ base: 60, md: 90 }}>
        <Stack gap={10} align="center" mb={44}>
          <Text fz={11} fw={700} style={{ color: accent, letterSpacing: 2.5, textTransform: "uppercase" }}>
            Deployment Platforms
          </Text>
          <Title order={2} ta="center" style={{
            color: textMain, fontWeight: 900,
            fontSize: "clamp(1.7rem,3vw,2.4rem)", maxWidth: 640,
          }}>
            The Right Cloud for Your Project Not Just the One We Know
          </Title>
          <Text size="sm" ta="center" style={{ color: textDim, maxWidth: 580 }}>
            We aren't tied to a single provider. We evaluate your project's
            scale, budget, and compliance needs, then deploy it where it
            will genuinely perform best.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={20}>
          {providers.map((p, i) => {
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
                  background: surface, border: `1px solid ${border}`,
                  borderRadius: 16, padding: "26px 24px", height: "100%",
                  backdropFilter: "blur(12px)",
                }}>
                  <Group gap={12} mb={18} wrap="nowrap">
                    <Box style={{
                      width: 46, height: 46, borderRadius: 12, background: accentDim,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={23} color={accent} />
                    </Box>
                    <Box>
                      <Text size="sm" fw={800} style={{ color: textMain }}>{p.name}</Text>
                      <Text size="xs" style={{ color: accent, fontWeight: 600 }}>{p.tagline}</Text>
                    </Box>
                  </Group>

                  <Stack gap={16}>
                    <Box>
                      <Text fz={10} fw={800} mb={8} style={{ color: "#22c55e", letterSpacing: 1, textTransform: "uppercase" }}>
                        Pros
                      </Text>
                      <Stack gap={7}>
                        {p.pros.map((pt, j) => (
                          <Group key={j} gap={8} wrap="nowrap" align="flex-start">
                            <IconCheck size={13} color="#22c55e" style={{ flexShrink: 0, marginTop: 3 }} />
                            <Text size="xs" lh={1.6} style={{ color: textSub }}>{pt}</Text>
                          </Group>
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Text fz={10} fw={800} mb={8} style={{ color: "#f59e0b", letterSpacing: 1, textTransform: "uppercase" }}>
                        Cons
                      </Text>
                      <Stack gap={7}>
                        {p.cons.map((pt, j) => (
                          <Group key={j} gap={8} wrap="nowrap" align="flex-start">
                            <IconX size={13} color="#f59e0b" style={{ flexShrink: 0, marginTop: 3 }} />
                            <Text size="xs" lh={1.6} style={{ color: textSub }}>{pt}</Text>
                          </Group>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CloudPlatformsSection;