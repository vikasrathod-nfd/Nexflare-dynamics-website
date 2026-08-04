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
  IconSearch,
  IconLayoutGrid,
  IconPalette,
  IconRocket,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);
const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business objectives, target audience, brand identity, and project requirements to establish a strategic foundation for a successful digital experience.",
    icon: IconSearch,
  },
  {
    number: "02",
    title: "Wireframing & Prototyping",
    description:
      "Our team creates intuitive wireframes and interactive prototypes to define user journeys, information architecture, and functionality before moving into visual design.",
    icon: IconLayoutGrid,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We craft visually engaging, user-centric interfaces with modern design principles, ensuring consistency, accessibility, and an exceptional experience across all devices.",
    icon: IconPalette,
  },
  {
    number: "04",
    title: "Development Handoff & Delivery",
    description:
      "Once the design is finalized, we provide complete design assets, specifications, and documentation for seamless development—or deliver a fully developed solution managed by our team.",
    icon: IconRocket,
  },
];

const ACCENT = "#14b8a6";
const ACCENT2 = "#0d9488";

const WebsiteDesignProcessSection = () => {
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
            "radial-gradient(circle, rgba(20,184,166,.14), transparent 70%)",
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
          How It Works
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
          Our{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: ACCENT2, to: ACCENT }}
          >
            Design Process
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
          From concept to completion, our structured design workflow ensures every project is delivered with creativity, consistency, and attention to detail. We focus on building intuitive, high-performing designs that elevate your brand and create meaningful user experiences.
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
                      ? "repeating-linear-gradient(90deg, rgba(20,184,166,.4) 0, rgba(20,184,166,.4) 6px, transparent 6px, transparent 12px)"
                      : "repeating-linear-gradient(90deg, rgba(20,184,166,.55) 0, rgba(20,184,166,.55) 6px, transparent 6px, transparent 12px)",
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
                    ? "0 22px 50px rgba(20,184,166,.18)"
                    : "0 18px 36px rgba(20,184,166,.18)";
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
                      boxShadow: "0 10px 22px rgba(20,184,166,.35)",
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
                        ? "rgba(20,184,166,0.18)"
                        : "rgba(13,148,136,0.3)",
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

export default WebsiteDesignProcessSection;