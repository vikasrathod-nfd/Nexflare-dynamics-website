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
  IconBulb,
  IconLayoutGrid,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

const steps = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "We understand your business goals, target users, market needs, and product vision to define the right features, technology approach, and roadmap before development begins.",
    icon: IconBulb,
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We create a scalable product architecture with database planning, cloud infrastructure, UI/UX designs, and API structures to ensure a strong foundation for your SaaS product.",
    icon: IconLayoutGrid,
  },
  {
    number: "03",
    title: "Agile MVP Build",
    description:
      "Using an agile development approach, we build and deliver essential features through focused sprints, allowing you to test, validate, and launch your MVP faster.",
    icon: IconCode,
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We deploy your SaaS product with performance optimization, monitoring, and user-focused improvements while continuously enhancing features to support business growth and increasing user demand.",
    icon: IconRocket,
  },
];

const ACCENT = "#2DD4BF";
const ACCENT2 = "#22D3EE";

const SaasDevelopmentProcess = () => {
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
          ● Our SaaS Process
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
            Launch Your SaaS
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
          From initial planning and product strategy to development,
          testing, and launch, we follow a proven SaaS development process
          that transforms your idea into a scalable, market-ready product
          built for real users and long-term success.
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

export default SaasDevelopmentProcess;