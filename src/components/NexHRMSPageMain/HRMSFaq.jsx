// import { Accordion, Box, Stack, Text, Title } from "@mantine/core";

// // 👉 Apne actual policies/process ke hisaab se update karna
// const faqs = [
//   {
//     question: "How long does it take to set up NexHRMS?",
//     answer:
//       "Most teams are up and running within a few days, depending on the size of your organisation and how much existing data needs to be migrated.",
//   },
//   {
//     question: "Can NexHRMS handle payroll for multiple locations?",
//     answer:
//       "Yes, NexHRMS supports multi-location payroll with location-specific policies and compliance rules.",
//   },
//   {
//     question: "Is our employee data secure?",
//     answer:
//       "Yes, we use role-based access control, encryption, and regular backups to keep your organisation's data safe.",
//   },
//   {
//     question: "Do employees need to install anything?",
//     answer:
//       "No installation is required. NexHRMS works on any browser and is also accessible on mobile devices.",
//   },
//   {
//     question: "Can I migrate data from our existing HR system?",
//     answer:
//       "Yes, our team helps you migrate employee records, attendance history, and payroll data during onboarding.",
//   },
// ];

// const HRMSFaq = () => {
//   return (
//     <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
//       <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
//         <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
//           Frequently asked questions
//         </Title>
//       </Stack>

//       <Box maw={800} mx="auto">
//         <Accordion variant="separated" radius="lg">
//           {faqs.map((faq, index) => (
//             <Accordion.Item key={index} value={`faq-${index}`}>
//               <Accordion.Control>
//                 <Text fw={600} size="sm">
//                   {faq.question}
//                 </Text>
//               </Accordion.Control>
//               <Accordion.Panel>
//                 <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
//                   {faq.answer}
//                 </Text>
//               </Accordion.Panel>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </Box>
//     </Box>
//   );
// };

// export default HRMSFaq;



import { useState } from "react";
import { Box, Container, Title, Text, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";

// 👉 Apne actual policies/process ke hisaab se update karna
const FAQS = [
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
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    question: isDark ? "#ffffff" : "#0f172a",
    questionHover: "#14b8a6",
    answer: isDark ? "rgba(226,232,240,0.7)" : "#475569",
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
            Frequently{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Asked Questions
            </Box>
          </Title>
        </Stack>

        <Stack gap={0}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            return (
              <Box key={faq.question} style={{ borderBottom: `1px solid ${colors.divider}` }}>
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

export default HRMSFaq;
