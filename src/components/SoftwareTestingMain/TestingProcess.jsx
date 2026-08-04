// import { Box, Container, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";

// const STEPS = [
//   {
//     number: "01",
//     title: "Requirements Analysis",
//     description:
//       "We analyze your business requirements, user stories, and project goals to identify testing needs and create a comprehensive quality assurance plan before testing begins.",
//   },
//   {
//     number: "02",
//     title: "Test Design & Strategy",
//     description:
//       "Our team prepares detailed test cases, automation strategies, and test scenarios across multiple devices, browsers, and environments to ensure complete application coverage.",
//   },
//   {
//     number: "03",
//     title: "Execution & Reporting",
//     description:
//       "We execute functional, performance, and compatibility tests while providing detailed bug reports, real-time progress updates, and actionable insights to help your team resolve issues quickly.",
//   },
//   {
//     number: "04",
//     title: "Regression & Sign-Off",
//     description:
//       "After fixes are implemented, we perform regression testing to verify stability, validate all functionalities, and provide final quality approval before your application is ready for release.",
//   },
// ];

// const TestingProcess = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";

//   // Every color is resolved here in JS and applied via inline `style`,
//   // so nothing depends on Mantine's built-in light/dark component CSS.
//   const colors = {
//     eyebrow: "#14b8a6",
//     heading: isDark ? "#ffffff" : "#0f172a",
//     headingAccent: "#14b8a6",
//     subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
//     numberFill: isDark ? "rgba(20,184,166,0.14)" : "rgba(20,184,166,0.12)",
//     connector: isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)",
//     stepTitle: isDark ? "#ffffff" : "#0f172a",
//     stepText: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
//   };

//   return (
//     <Box component="section" style={{ padding: "96px 0" }}>
//       <Container size="xl">
//         <Stack gap={6} maw={720} mb={64}>
//           <Text
//             style={{
//               color: colors.eyebrow,
//               textTransform: "uppercase",
//               fontWeight: 700,
//               fontSize: 13,
//               letterSpacing: 1.2,
//             }}
//           >
//             Our QA Process
//           </Text>

//           <Title
//             order={2}
//             style={{
//               fontSize: "clamp(2rem, 4vw, 2.75rem)",
//               fontWeight: 800,
//               lineHeight: 1.15,
//               margin: 0,
//               color: colors.heading,
//             }}
//           >
//             How We{" "}
//             <Box component="span" style={{ color: colors.headingAccent }}>
//               Ensure Quality
//             </Box>
//           </Title>

//           <Text
//             style={{
//               fontSize: "1.0625rem",
//               lineHeight: 1.7,
//               color: colors.subtitle,
//               marginTop: 8,
//             }}
//           >
//             Our structured QA process combines strategic planning, comprehensive testing, and continuous validation to identify issues early, ensure software reliability, and deliver high-quality releases without disrupting your development timeline.
//           </Text>
//         </Stack>

//         <Box
//           className="qa-process-grid"
//           style={{
//             display: "flex",
//             alignItems: "flex-start",
//           }}
//         >
//           {STEPS.map((step, index) => (
//             <Box key={step.number} className="qa-process-item" style={{ display: "flex", flex: 1, alignItems: "flex-start" }}>
//               <Stack gap={4} style={{ flex: 1 }}>
//                 <Text
//                   style={{
//                     fontSize: "3.25rem",
//                     fontWeight: 800,
//                     lineHeight: 1,
//                     color: colors.numberFill,
//                     marginBottom: 8,
//                   }}
//                 >
//                   {step.number}
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: "1.0625rem",
//                     fontWeight: 700,
//                     color: colors.stepTitle,
//                   }}
//                 >
//                   {step.title}
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: "0.9375rem",
//                     lineHeight: 1.65,
//                     color: colors.stepText,
//                   }}
//                 >
//                   {step.description}
//                 </Text>
//               </Stack>

//               {index < STEPS.length - 1 && (
//                 <Box
//                   className="qa-process-connector"
//                   style={{
//                     height: 1,
//                     flex: "0 0 32px",
//                     backgroundColor: colors.connector,
//                     marginTop: 26,
//                   }}
//                 />
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Container>

//       <style>{`
//         @media (max-width: 900px) {
//           .qa-process-grid {
//             flex-direction: column;
//             gap: 40px;
//           }
//           .qa-process-item {
//             flex-direction: column;
//           }
//           .qa-process-connector {
//             display: none;
//           }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default TestingProcess;



import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconClipboardList,
  IconListCheck,
  IconBug,
  IconShieldCheck,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

const steps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description:
      "We analyze your business requirements, user stories, and project goals to identify testing needs and create a comprehensive quality assurance plan before testing begins.",
    icon: IconClipboardList,
  },
  {
    number: "02",
    title: "Test Design & Strategy",
    description:
      "Our team prepares detailed test cases, automation strategies, and test scenarios across multiple devices, browsers, and environments to ensure complete application coverage.",
    icon: IconListCheck,
  },
  {
    number: "03",
    title: "Execution & Reporting",
    description:
      "We execute functional, performance, and compatibility tests while providing detailed bug reports, real-time progress updates, and actionable insights to help your team resolve issues quickly.",
    icon: IconBug,
  },
  {
    number: "04",
    title: "Regression & Sign-Off",
    description:
      "After fixes are implemented, we perform regression testing to verify stability, validate all functionalities, and provide final quality approval before your application is ready for release.",
    icon: IconShieldCheck,
  },
];

const ACCENT = "#2DD4BF";
const ACCENT2 = "#22D3EE";

const TestingProcess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      component="section"
      style={{
        position: "relative",
        padding: "110px 0",
        overflow: "hidden",
        background: isDark ? "transparent" : theme.colors.gray[0],
      }}
    >
      {/* Decorative glow */}
      <Box
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          top: -200,
          right: -150,
          background:
            "radial-gradient(circle, rgba(45,212,191,.14), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Text
          fw={700}
          size="sm"
          style={{
            color: ACCENT,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          ● Our QA Process
        </Text>

        <Title
          order={2}
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
            color: isDark ? "#F5F7FA" : "#0B1326",
          }}
        >
          How We{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: ACCENT2, to: ACCENT }}
          >
            Ensure Quality
          </Text>
        </Title>

        <Text
          style={{
            maxWidth: 620,
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)",
            marginBottom: 72,
          }}
        >
          Our structured QA process combines strategic planning,
          comprehensive testing, and continuous validation to identify
          issues early, ensure software reliability, and deliver
          high-quality releases without disrupting your development
          timeline.
        </Text>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 40, lg: 28 }}
          verticalSpacing={48}
        >
          {steps.map((step, index) => (
            <MotionBox
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              style={{ position: "relative" }}
            >
              {index !== steps.length - 1 && (
                <Box
                  visibleFrom="sm"
                  style={{
                    position: "absolute",
                    top: 34,
                    left: "calc(100% - 6px)",
                    width: "calc(100% - 40px)",
                    height: 2,
                    background: isDark
                      ? "repeating-linear-gradient(90deg, rgba(45,212,191,.4) 0, rgba(45,212,191,.4) 6px, transparent 6px, transparent 12px)"
                      : "repeating-linear-gradient(90deg, rgba(45,212,191,.55) 0, rgba(45,212,191,.55) 6px, transparent 6px, transparent 12px)",
                    zIndex: 0,
                  }}
                />
              )}

              <Box
                p={30}
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  borderRadius: 20,
                  background: isDark ? "rgba(18, 26, 36, 0.85)" : theme.white,
                  border: isDark
                    ? "1px solid rgba(255,255,255,.08)"
                    : `1px solid ${theme.colors.gray[3]}`,
                  boxShadow: isDark
                    ? "0 16px 40px rgba(0,0,0,.3)"
                    : "0 10px 26px rgba(0,0,0,.06)",
                  transition: "transform .35s ease, box-shadow .35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 22px 50px rgba(45,212,191,.18)"
                    : "0 18px 36px rgba(45,212,191,.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 16px 40px rgba(0,0,0,.3)"
                    : "0 10px 26px rgba(0,0,0,.06)";
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 22,
                  }}
                >
                  <Box
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
                      boxShadow: "0 10px 22px rgba(45,212,191,.35)",
                    }}
                  >
                    <step.icon size={28} stroke={1.8} color="#fff" />
                  </Box>
                  <Text
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 800,
                      lineHeight: 1,
                      color: isDark
                        ? "rgba(45,212,191,0.18)"
                        : "rgba(45,212,191,0.3)",
                      userSelect: "none",
                    }}
                  >
                    {step.number}
                  </Text>
                </Box>

                <Text
                  fw={700}
                  size="lg"
                  style={{
                    color: isDark ? "#F5F7FA" : "#0B1326",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </Text>

                <Text
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: isDark
                      ? "rgba(203,213,225,0.7)"
                      : "rgba(15,23,42,0.6)",
                  }}
                >
                  {step.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TestingProcess;