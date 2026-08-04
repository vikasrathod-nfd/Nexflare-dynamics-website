// import { Box, Container, Title, Text, Stack, Group, SimpleGrid, UnstyledButton, useComputedColorScheme } from "@mantine/core";

// const CHECKLIST = [
//   "Dedicated QA engineers who understand your product domain",
//   "Shift-left testing integrated into your CI/CD pipeline",
//   "Reusable automated test suites that grow with your codebase",
//   "Clear, actionable bug reports with reproduction steps & severity",
//   "Cross-browser, cross-device, and cross-environment coverage",
//   "Full test documentation and handover on every engagement",
// ];

// const TECH_STACK = [
//   "Selenium",
//   "Playwright",
//   "Cypress",
//   "Appium",
//   "JMeter",
//   "Postman",
//   "k6",
//   "OWASP ZAP",
// ];

// const WhyChooseTesting = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";

//   const colors = {
//     eyebrow: "#14b8a6",
//     heading: isDark ? "#ffffff" : "#0f172a",
//     headingAccent: "#14b8a6",
//     paragraph: isDark ? "rgba(226,232,240,0.72)" : "#475569",
//     checkIcon: "#14b8a6",
//     checkText: isDark ? "rgba(226,232,240,0.85)" : "#334155",
//     pillBg: isDark ? "rgba(20,184,166,0.08)" : "rgba(20,184,166,0.06)",
//     pillBorder: isDark ? "rgba(20,184,166,0.35)" : "rgba(20,184,166,0.3)",
//     pillText: isDark ? "#5eead4" : "#0d9488",
//     imageBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
//     imageShadow: isDark
//       ? "0 20px 60px rgba(0,0,0,0.5)"
//       : "0 20px 45px rgba(15,23,42,0.12)",
//   };

//   const handleGetQAAssessment = () => {
//     window.location.href = "/contact";
//   };

//   return (
//     <Box component="section" style={{ padding: "96px 0" }}>
//       <Container size="xl">
//         <SimpleGrid cols={{ base: 1, md: 2 }} spacing={64} verticalSpacing={40}>
//           {/* Image column — height "100%" matches the right column's natural
//               height exactly, i.e. down to the "Get a QA Assessment" button.
//               No minHeight here, so it never stretches beyond that. */}
//           <Box
//             style={{
//               borderRadius: 16,
//               overflow: "hidden",
//               border: `1px solid ${colors.imageBorder}`,
//               boxShadow: colors.imageShadow,
//               height: "100%",
//             }}
//           >
//             <img
//               src="https://www.dawnitservice.com/wp-content/uploads/2021/11/software-testing-services.jpg"
//               alt="QA engineer"
//               style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
//             />
//           </Box>

//           <Stack gap={20}>
//             <Stack gap={6}>
//               <Text
//                 style={{
//                   color: colors.eyebrow,
//                   textTransform: "uppercase",
//                   fontWeight: 700,
//                   fontSize: 13,
//                   letterSpacing: 1.2,
//                 }}
//               >
//                 Why Nexflare For QA
//               </Text>

//               <Title
//                 order={2}
//                 style={{
//                   fontSize: "clamp(2rem, 4vw, 2.75rem)",
//                   fontWeight: 800,
//                   lineHeight: 1.15,
//                   margin: 0,
//                   color: colors.heading,
//                 }}
//               >
//                 Quality is{" "}
//                 <Box component="span" style={{ color: colors.headingAccent }}>
//                   Not an Afterthought
//                 </Box>
//               </Title>

//               <Text
//                 style={{
//                   fontSize: "1.0625rem",
//                   lineHeight: 1.7,
//                   color: colors.paragraph,
//                   marginTop: 8,
//                 }}
//               >
//                 Quality is integrated into every stage of our development process. Through continuous testing, proactive issue detection, and rigorous validation, we ensure your software remains reliable, secure, and ready for release without compromising development speed.
//               </Text>
//             </Stack>

//             <Stack gap={14}>
//               {CHECKLIST.map((item) => (
//                 <Group key={item} gap={12} wrap="nowrap" align="flex-start">
//                   <Box
//                     component="span"
//                     style={{
//                       color: colors.checkIcon,
//                       fontWeight: 700,
//                       fontSize: 15,
//                       lineHeight: 1.6,
//                       flexShrink: 0,
//                     }}
//                   >
//                     ✓
//                   </Box>
//                   <Text
//                     style={{
//                       fontSize: "1rem",
//                       lineHeight: 1.6,
//                       color: colors.checkText,
//                     }}
//                   >
//                     {item}
//                   </Text>
//                 </Group>
//               ))}
//             </Stack>

//             <Group gap={10} mt={8}>
//               {TECH_STACK.map((tech) => (
//                 <Box
//                   key={tech}
//                   component="span"
//                   style={{
//                     backgroundColor: colors.pillBg,
//                     border: `1px solid ${colors.pillBorder}`,
//                     color: colors.pillText,
//                     borderRadius: 999,
//                     padding: "8px 18px",
//                     fontSize: 13.5,
//                     fontWeight: 600,
//                   }}
//                 >
//                   {tech}
//                 </Box>
//               ))}
//             </Group>

//             <UnstyledButton
//               type="button"
//               style={{
//                 backgroundColor: "#14b8a6",
//                 color: "#04201c",
//                 fontWeight: 700,
//                 fontSize: 15,
//                 paddingLeft: 28,
//                 paddingRight: 28,
//                 height: 52,
//                 display: "inline-flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 999,
//                 width: "fit-content",
//                 marginTop: 12,
//                 transition: "background-color 150ms ease",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#14b8a6")}
//               onClick={handleGetQAAssessment}
//             >
//               Get a QA Assessment
//             </UnstyledButton>
//           </Stack>
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseTesting;




import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Grid,
  Group,
  Button,
  Image,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ACCENT = "#2DD4BF";
const ACCENT2 = "#22D3EE";

const features = [
  "Dedicated QA engineers who understand your product domain",
  "Shift-left testing integrated into your CI/CD pipeline",
  "Reusable automated test suites that grow with your codebase",
  "Clear, actionable bug reports with reproduction steps & severity",
  "Cross-browser, cross-device, and cross-environment coverage",
  "Full test documentation and handover on every engagement",
];

const techStack = [
  "Selenium",
  "Playwright",
  "Cypress",
  "Appium",
  "JMeter",
  "Postman",
  "k6",
  "OWASP ZAP",
];

const WhyChooseTesting = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleGetQAAssessment = () => {
    window.location.href = "/contact";
  };

  return (
    <Box
      component="section"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          top: -160,
          left: -200,
          background:
            "radial-gradient(circle, rgba(45,212,191,.12), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={{ base: 40, md: 56 }} align="stretch">
          {/* Image - takes half width and stretches to full column height */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative", height: "100%" }}
            >
              <Box
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  height: "100%",
                  minHeight: 640,
                  border: `1px solid ${
                    isDark ? "rgba(45,212,191,0.35)" : "rgba(45,212,191,0.4)"
                  }`,
                  boxShadow: isDark
                    ? "0 25px 70px rgba(0,0,0,0.5)"
                    : "0 25px 70px rgba(15,23,42,0.14)",
                }}
              >
                <Image
                  src="https://www.dawnitservice.com/wp-content/uploads/2021/11/software-testing-services.jpg"
                  alt="QA engineer testing software"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              {/* Floating gradient accent behind image */}
              <Box
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: 26,
                  opacity: 0.18,
                  zIndex: -1,
                  filter: "blur(6px)",
                }}
              />
            </MotionBox>
          </Grid.Col>

          {/* Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fw={700}
                style={{
                  fontSize: 13,
                  color: ACCENT,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                ● Why NexFlare For QA
              </Text>

              <Title
                order={2}
                style={{
                  fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: 16,
                  color: isDark ? "#F5F7FA" : "#0B1326",
                }}
              >
                Quality is{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: ACCENT2, to: ACCENT }}
                >
                  Not an Afterthought
                </Text>
              </Title>

              <Text
                style={{
                  maxWidth: 560,
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.75)"
                    : "rgba(15,23,42,0.65)",
                  marginBottom: 28,
                }}
              >
                Quality is integrated into every stage of our development
                process. Through continuous testing, proactive issue
                detection, and rigorous validation, we ensure your software
                remains reliable, secure, and ready for release without
                compromising development speed.
              </Text>

              <Box style={{ marginBottom: 32 }}>
                {features.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      marginBottom: 12,
                    }}
                  >
                    <Box
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                        background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
                      }}
                    >
                      <IconCheck size={12} stroke={3} color="#fff" />
                    </Box>
                    <Text
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.55,
                        color: isDark
                          ? "rgba(226,232,240,0.85)"
                          : "rgba(15,23,42,0.75)",
                      }}
                    >
                      {feature}
                    </Text>
                  </MotionBox>
                ))}
              </Box>

              <Text
                fw={700}
                tt="uppercase"
                style={{
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: isDark
                    ? "rgba(226,232,240,0.5)"
                    : "rgba(15,23,42,0.45)",
                  marginBottom: 12,
                }}
              >
                Tools We Test With
              </Text>
              <Group gap={10} style={{ marginBottom: 32 }}>
                {techStack.map((tech) => (
                  <Box
                    key={tech}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 999,
                      border: `1px solid ${
                        isDark
                          ? "rgba(45,212,191,0.35)"
                          : "rgba(45,212,191,0.4)"
                      }`,
                      background: isDark
                        ? "rgba(45,212,191,0.06)"
                        : "rgba(45,212,191,0.08)",
                      transition: "all .25s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      const txt = e.currentTarget.querySelector("p");
                      if (txt) txt.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isDark
                        ? "rgba(45,212,191,0.06)"
                        : "rgba(45,212,191,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                      const txt = e.currentTarget.querySelector("p");
                      if (txt) txt.style.color = ACCENT;
                    }}
                  >
                    <Text
                      size="xs"
                      fw={500}
                      style={{
                        color: ACCENT,
                        whiteSpace: "nowrap",
                        transition: "color .25s ease",
                      }}
                    >
                      {tech}
                    </Text>
                  </Box>
                ))}
              </Group>

              <Button
                size="md"
                radius="xl"
                rightSection={<IconArrowRight size={18} stroke={2.2} />}
                style={{
                  background:
                    "linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "0 30px",
                  height: 48,
                  border: "none",
                }}
                onClick={handleGetQAAssessment}
              >
                Get a QA Assessment
              </Button>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseTesting;