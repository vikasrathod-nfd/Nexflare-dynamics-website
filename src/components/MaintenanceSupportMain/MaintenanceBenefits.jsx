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
  "Engineers who built your product know it best — continuity guaranteed",
  "Proactive monitoring rather than reactive fire-fighting",
  "Transparent monthly reports on work done, uptime & performance",
  "Dedicated Slack or Teams channel for direct communication",
  "No lock-in — flexible retainers with 30-day notice to exit",
  "Full handover documentation if you ever move in-house",
];

const techStack = [
  "Datadog",
  "New Relic",
  "AWS CloudWatch",
  "PagerDuty",
  "Sentry",
  "GitHub Actions",
  "Jira",
  "Linear",
];

const MaintenanceBenefits = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleDiscussSupportPlan = () => {
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
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Support engineers collaborating"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(1)",
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
                ● Why NexFlare For Support
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
                Your Product Deserves{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: ACCENT2, to: ACCENT }}
                >
                  Ongoing Care
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
                Most agencies disappear after launch. We stay. Our support
                teams treat your product like it's their own — proactively
                catching issues, continuously improving performance, and
                shipping incremental value every month.
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
                Tools We Monitor & Support With
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
                onClick={handleDiscussSupportPlan}
              >
                Discuss a Support Plan
              </Button>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default MaintenanceBenefits;