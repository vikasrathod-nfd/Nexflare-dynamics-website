import {
  Accordion,
  Box,
  Container,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const faqs = [
  {
    question: "Which platforms do you manage?",
    answer:
      "Instagram, Facebook, LinkedIn, TikTok, X, and YouTube. We'll recommend which platforms are worth your time based on where your audience actually is.",
  },
  {
    question: "Do you create the content, or do we?",
    answer:
      "We handle strategy, design, copy, and video production. You review and approve everything before it goes live through a shared content calendar.",
  },
  {
    question: "How is community management handled?",
    answer:
      "Our team monitors comments and direct messages daily and responds in your brand voice, with escalation to you for anything sensitive or sales-related.",
  },
  {
    question: "Do you run paid social ads too?",
    answer:
      "Yes. Paid social is available as an add-on, covering campaign setup, audience targeting, creative testing, and ongoing optimization on Meta, TikTok, and LinkedIn.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track reach, engagement, follower growth, and conversions against the goals we set together, and send a monthly report with clear next steps.",
  },
];

const SMMFaq = () => {
  return (
    <Box py={rem(100)}>
      <Container size="sm">
        <Stack align="center" gap="xs" mb={rem(48)}>
          <Text fw={600} c="cyan" tt="uppercase" size="sm">
            FAQ
          </Text>
          <Title order={2} ta="center" style={{ fontSize: rem(38) }}>
            Questions, answered
          </Title>
        </Stack>

        <Accordion variant="separated" radius="md">
          {faqs.map((faq) => (
            <Accordion.Item key={faq.question} value={faq.question}>
              <Accordion.Control>
                <Text fw={500}>{faq.question}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="dimmed" size="sm">
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default SMMFaq;
