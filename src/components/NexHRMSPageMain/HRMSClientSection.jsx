import { Box, Card, Divider, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconBuildingSkyscraper, IconQuote } from "@tabler/icons-react";
import { motion } from "framer-motion";

// 👉 Apne real client feedback se replace karna
const testimonials = [
  {
    quote: "NexHRMS cut our monthly payroll processing time from days to hours.",
    name: "HR Manager",
    company: "Manufacturing Company",
  },
  {
    quote: "Attendance and leave tracking finally feels effortless for our team.",
    name: "Operations Head",
    company: "Retail Business",
  },
  {
    quote: "Setup was quick and the support team was there at every step.",
    name: "Founder",
    company: "IT Services Startup",
  },
];

const HRMSClientSection = () => {
  return (
    <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
        <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          What our clients say
        </Title>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{ height: "100%" }}
          >
            <Card radius="lg" p="lg" withBorder shadow="sm" style={{ height: "100%" }}>
              <IconQuote size={26} color="#2563EB" />
              <Text size="sm" mt="md" style={{ lineHeight: 1.7 }}>
                {t.quote}
              </Text>
              <Divider my="md" />
              <Group gap="sm">
                <ThemeIcon size={36} radius="xl" color="blue" variant="light">
                  <IconBuildingSkyscraper size={18} />
                </ThemeIcon>
                <Box>
                  <Text size="sm" fw={700}>
                    {t.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {t.company}
                  </Text>
                </Box>
              </Group>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HRMSClientSection;
