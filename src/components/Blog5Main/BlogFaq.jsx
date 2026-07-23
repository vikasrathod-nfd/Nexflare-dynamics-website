import { useState } from "react";
import { Box, Container, Title, Text, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";

const FAQS = [
  {
    question: "What industries do you specialise in?",
    answer:
      "We work across multiple industries including Healthcare, Finance, Education, E-commerce, Logistics, Manufacturing, and more. Our solutions are tailored to meet the unique requirements of each sector.",
  },
  {
    question: "How do you ensure security in the software you build?",
    answer:
      "Security is our top priority. We follow industry best practices including data encryption, secure authentication, regular security audits, compliance with GDPR & ISO standards, and continuous vulnerability testing.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes! We provide comprehensive post-launch support including bug fixes, performance optimization, feature enhancements, and dedicated maintenance packages to ensure your software runs smoothly.",
  },
  {
    question: "Can you handle large-scale enterprise cloud migrations?",
    answer:
      "Absolutely. We have extensive experience in migrating large-scale systems to cloud platforms like AWS, Azure, and Google Cloud with zero downtime strategies and robust data integrity measures.",
  },
  {
    question: "Can you handle end-to-end IT product development?",
    answer:
      "Yes. From initial ideation and UI/UX design to development, testing, deployment, and scaling — we provide full-cycle product development services.",
  },
  {
    question: "How do I reach you for a project enquiry?",
    answer:
      "You can reach us via the contact form on our website, email us at hello@nexflaredynamics.com, or schedule a quick call using the button above. We usually respond within 24 hours.",
  },
];

const BlogFaq = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    question: isDark ? "#ffffff" : "#0f172a",
    questionHover: "#14b8a6",
    answer: isDark ? "rgba(226,232,240,0.8)" : "#475569",
    divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    icon: "#14b8a6",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="md">
        <Stack gap={6} align="center" mb={56}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.6,
              textAlign: "center",
            }}
          >
            FAQ
          </Text>
          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
              textAlign: "center",
            }}
          >
            Common{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Questions
            </Box>
          </Title>
        </Stack>

        <Stack gap={0}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <Box
                key={faq.question}
                style={{ borderBottom: `1px solid ${colors.divider}` }}
              >
                <UnstyledButton
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: "26px 4px",
                    textAlign: "left",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: isHovered ? colors.questionHover : colors.question,
                      transition: "color 150ms ease",
                    }}
                  >
                    {faq.question}
                  </Text>
                  <Box
                    component="span"
                    style={{
                      color: colors.icon,
                      fontSize: 20,
                      fontWeight: 500,
                      lineHeight: 1,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    +
                  </Box>
                </UnstyledButton>

                <Box
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 220ms ease",
                  }}
                >
                  <Box style={{ overflow: "hidden" }}>
                    <Text
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: colors.answer,
                        padding: "0 4px 26px",
                        maxWidth: 760,
                      }}
                    >
                      {faq.answer}
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogFaq;