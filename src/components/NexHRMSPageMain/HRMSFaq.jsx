import { Accordion, Box, Stack, Text, Title } from "@mantine/core";

// 👉 Apne actual policies/process ke hisaab se update karna
const faqs = [
  {
    question: "How long does it take to set up NexHRMS?",
    answer:
      "Most teams are up and running within a few days, depending on the size of your organisation and how much existing data needs to be migrated.",
  },
  {
    question: "Can NexHRMS handle payroll for multiple locations?",
    answer:
      "Yes, NexHRMS supports multi-location payroll with location-specific policies and compliance rules.",
  },
  {
    question: "Is our employee data secure?",
    answer:
      "Yes, we use role-based access control, encryption, and regular backups to keep your organisation's data safe.",
  },
  {
    question: "Do employees need to install anything?",
    answer:
      "No installation is required. NexHRMS works on any browser and is also accessible on mobile devices.",
  },
  {
    question: "Can I migrate data from our existing HR system?",
    answer:
      "Yes, our team helps you migrate employee records, attendance history, and payroll data during onboarding.",
  },
];

const HRMSFaq = () => {
  return (
    <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
        <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          Frequently asked questions
        </Title>
      </Stack>

      <Box maw={800} mx="auto">
        <Accordion variant="separated" radius="lg">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`faq-${index}`}>
              <Accordion.Control>
                <Text fw={600} size="sm">
                  {faq.question}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default HRMSFaq;
