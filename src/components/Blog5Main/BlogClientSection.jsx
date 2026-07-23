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

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "Switching to Nexflare Dynamics transformed our workflow. Their ERP system is intuitive and has streamlined our operations, saving us countless hours every week. Highly recommended!",
    name: "Michael P.",
    position: "Operations Manager, TechVista Inc.",
  },
  {
    stars: "★★★★★",
    quote:
      "Their project management software keeps my team on the same page. It's an excellent tool overall for project tracking and keeps everyone accountable and on schedule.",
    name: "Rajiv K.",
    position: "Project Manager, BuildSmart Ltd.",
  },
  {
    stars: "★★★★★",
    quote:
      "The CRM platform is incredibly user-friendly and customisable. It's helped us improve customer relationships and track interactions effortlessly. The Nexflare team is very supportive.",
    name: "Anna R.",
    position: "Sales Head, Zenith Traders",
  },
];

const BlogClientSection = () => {
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
            CLIENT STORIES
          </Badge>

          <Title
            ta="center"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 3.8rem)",
              lineHeight: 1.1,
              color: isDark ? "#ffffff" : "#0a1428",
            }}
          >
            Hear From Our{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#14b8a6", to: "#0f766e" }}
            >
              Happy Clients
            </Text>
          </Title>

          <Text
            size="lg"
            ta="center"
            maw={680}
            style={{
              color: isDark ? "rgba(255,255,255,0.75)" : "rgba(10,20,40,0.75)",
            }}
          >
            Success stories from businesses that transformed their operations
            with Nexflare Dynamics.
          </Text>
        </Stack>

        <Grid gutter={24}>
          {testimonials.map((testimonial, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                h="100%"
              >
                <Box
                  p={32}
                  h="100%"
                  style={{
                    background: isDark ? "#111827" : "#ffffff",
                    borderRadius: "16px",
                    border: `1px solid ${isDark ? "#1f2937" : "#e5e7eb"}`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text
                    size="xl"
                    style={{
                      color: "#14b8a6",
                      marginBottom: "20px",
                      fontSize: "28px",
                    }}
                  >
                    {testimonial.stars}
                  </Text>

                  <Text
                    size="lg"
                    style={{
                      flex: 1,
                      lineHeight: 1.75,
                      color: isDark ? "rgba(255,255,255,0.85)" : "rgba(10,20,40,0.85)",
                      marginBottom: "24px",
                    }}
                  >
                    "{testimonial.quote}"
                  </Text>

                  <Box>
                    <Text fw={600} style={{ color: isDark ? "#ffffff" : "#0a1428" }}>
                      {testimonial.name}
                    </Text>
                    <Text
                      size="sm"
                      style={{
                        color: isDark ? "rgba(255,255,255,0.6)" : "rgba(10,20,40,0.6)",
                      }}
                    >
                      {testimonial.position}
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogClientSection;