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
  "Strategic performance marketing campaigns focused on measurable business growth",
  "Precision audience targeting to attract qualified leads with higher conversion potential",
  "Continuous optimization driven by real-time performance data and insights",
  "High-converting ad creatives tailored for every platform and audience",
  "Advanced analytics and conversion tracking for data-backed decision making",
  "Transparent reporting with clear ROI metrics and growth recommendations",
];

const techStack = [
  "Google Ads",
  "Meta Ads Manager",
  "GA4",
  "GTM",
  "Looker Studio",
  "Triple Whale",
  "Zapier",
  "HubSpot",
];

const PMWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleStartScalingToday = () => {
    window.location.href = "/contact"; // Change if your contact route is different
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
          {/* Image - now takes more width and full height */}
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
                  minHeight: 450,
                  border: `1px solid ${
                    isDark ? "rgba(45,212,191,0.35)" : "rgba(45,212,191,0.4)"
                  }`,
                  boxShadow: isDark
                    ? "0 25px 70px rgba(0,0,0,0.5)"
                    : "0 25px 70px rgba(15,23,42,0.14)",
                }}
              >
                <Image
                  src="https://creative-garage.in/wp-content/uploads/2025/12/digital-agency-1024x548-1.jpg"
                  alt="Ad performance dashboard on a laptop"
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
                ● Why Choose Us
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
                Drive Measurable Growth{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: ACCENT2, to: ACCENT }}
                >
                  with Performance Marketing
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
                Scale your business with data-driven advertising campaigns designed to generate qualified leads, increase conversions, and maximize ROI. From audience targeting and compelling creatives to continuous optimization, we ensure every marketing dollar delivers measurable results.
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
                onClick={handleStartScalingToday}
              >
                Start Scaling Today
              </Button>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default PMWhyChooseUs;