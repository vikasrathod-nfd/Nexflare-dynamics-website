import React from 'react';
import {
  Badge,
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const stats = [
  {
    value: "100+",
    label: "Software Projects Delivered",
    color: "#14b8a6",
  },
  {
    value: "40+",
    label: "Industries Served",
    color: "#14b8a6",
  },
  {
    value: "98%",
    label: "On-Time Delivery Rate",
    color: "#14b8a6",
  },
  {
    value: "4.9★",
    label: "Average Client Satisfaction",
    color: "#14b8a6",
  },
];

const BlogStatsSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      py={100}
      style={{
        background: isDark ? "#0a0f1c" : "#f8f9fa",
      }}
    >
      <Container size="xl">
        <Stack align="center" gap={16} mb={60}>
          <Badge
            size="lg"
            color="teal"
            variant="light"
            radius="xl"
            px={20}
            py={10}
          >
            OUR TRACK RECORD
          </Badge>

          <Title
            ta="center"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
              lineHeight: 1.1,
              color: isDark ? "#ffffff" : "#0a1428",
            }}
          >
            Numbers That{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#14b8a6", to: "#0f766e" }}
            >
              Speak for Themselves
            </Text>
          </Title>
        </Stack>

        <Grid gutter={24}>
          {stats.map((stat, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                h="100%"
              >
                <Box
                  p={40}
                  h="100%"
                  style={{
                    background: isDark ? "#111827" : "#ffffff",
                    borderRadius: "16px",
                    border: `1px solid ${isDark ? "#1f2937" : "#e5e7eb"}`,
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Title
                    style={{
                      fontSize: "clamp(42px, 5vw, 56px)",
                      fontWeight: 900,
                      color: stat.color,
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    {stat.value}
                  </Title>

                  <Text
                    size="lg"
                    fw={500}
                    style={{
                      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(10,20,40,0.8)",
                    }}
                  >
                    {stat.label}
                  </Text>
                </Box>
              </MotionBox>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogStatsSection;