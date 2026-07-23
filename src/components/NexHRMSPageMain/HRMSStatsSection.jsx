import { Box, Card, SimpleGrid, Stack, Text, useComputedColorScheme } from "@mantine/core";

// 👉 Apne real numbers se replace karna
const trustStats = [
  { value: "50+", label: "Companies Onboarded" },
  { value: "10,000+", label: "Employees Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "24×7", label: "Support" },
];

const HRMSStatsSection = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  return (
    <Box px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Card
        radius={24}
        p={{ base: "lg", sm: "xl" }}
        withBorder
        shadow="sm"
        style={{
          background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
        }}
      >
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing={{ base: 20, sm: 40 }}>
          {trustStats.map((stat) => (
            <Stack key={stat.label} gap={2} align="center">
              <Text
                fw={800}
                style={{
                  fontSize: "clamp(1.5rem,3vw,2.2rem)",
                  color: isDark ? "#38BDF8" : "#2563EB",
                }}
              >
                {stat.value}
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                {stat.label}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Card>
    </Box>
  );
};

export default HRMSStatsSection;
