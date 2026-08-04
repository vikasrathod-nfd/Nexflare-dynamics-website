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

const ACCENT = "#14b8a6";
const ACCENT2 = "#0d9488";

const checklist = [
  "Expert development team focused on delivering secure, scalable, and future-ready applications.",
  "Agile project execution with transparent workflows and consistent milestone reporting.",
  "Rigorous testing and quality assurance to guarantee optimal performance and reliability.",
  "Continuous post-deployment support, monitoring, and maintenance for long-term success.",
];

const WebsiteDevelopmentWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleStartYourBuild = () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <Box component="section" py={100} style={{ position: "relative", overflow: "hidden" }}>
      <Box
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          top: -160,
          left: -200,
          background:
            "radial-gradient(circle, rgba(20,184,166,.12), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={{ base: 40, md: 60 }} align="stretch">
          {/* Image - matches right content height */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Box
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  height: "100%",
                  minHeight: 480,
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(15,23,42,0.08)",
                  boxShadow: isDark
                    ? "0 20px 50px rgba(0,0,0,0.4)"
                    : "0 20px 50px rgba(15,23,42,0.1)",
                }}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T1Uqxhl9UPKKUH7i6jAPT1wvN1fMNoHmFySg7zMkhRqLRmNChM4196gd&s=10"
                  alt="Developer writing code on laptop"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
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
                size="sm"
                style={{
                  letterSpacing: 3,
                  color: ACCENT,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Why Choose Us
              </Text>

              <Title
                order={2}
                fw={800}
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  color: isDark ? "#f8fafc" : "#0f172a",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Code That <span style={{ color: ACCENT }}>Never Breaks</span>
              </Title>

              <Text
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.75)"
                    : "rgba(15,23,42,0.65)",
                  marginBottom: 28,
                }}
              >
                Our development process focuses on delivering secure,
                efficient, and high-quality code that stands the test of
                time. With structured architecture, comprehensive
                documentation, and rigorous quality standards, we ensure
                your software remains reliable and easy to scale.
              </Text>

              <Box style={{ marginBottom: 32 }}>
                {checklist.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <Group gap={12} wrap="nowrap" align="flex-start" mb={12}>
                      <Box
                        style={{
                          minWidth: 22,
                          height: 22,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 2,
                        }}
                      >
                        <IconCheck size={18} color={ACCENT} stroke={2.5} />
                      </Box>
                      <Text
                        style={{
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          color: isDark
                            ? "rgba(226,232,240,0.85)"
                            : "rgba(15,23,42,0.75)",
                        }}
                      >
                        {item}
                      </Text>
                    </Group>
                  </MotionBox>
                ))}
              </Box>

              <Button
                size="md"
                radius="xl"
                rightSection={<IconArrowRight size={18} stroke={2.2} />}
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%)`,
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "0 30px",
                  height: 48,
                  border: "none",
                }}
                onClick={handleStartYourBuild}
              >
                Start Your Build
              </Button>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebsiteDevelopmentWhyChooseUs;