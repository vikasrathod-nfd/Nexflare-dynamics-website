import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  List,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const benefits = [
  "Highly skilled team with deep technical expertise",
  "Customer-centric — every solution tailored to your vision",
  "Agile development with regular demos and milestones",
  "Rigorous quality assurance and testing at every stage",
  "Dedicated maintenance and support after launch",
  "Transparent communication from day one to delivery",
];

const WhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box py={100} style={{ background: isDark ? "#0a0f1c" : "#f8f9fa" }}>
      <Container size="xl">
        <Grid gutter={60} align="center">
          {/* Left Side - Image */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: isDark
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team working on laptops"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </MotionBox>
          </Grid.Col>

          {/* Right Side - Content */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Stack gap={24}>
                <Badge
                  size="lg"
                  color="teal"
                  variant="light"
                  radius="xl"
                  px={20}
                  py={10}
                >
                  WHY NEXFLARE DYNAMICS
                </Badge>

                <Title
                  style={{
                    fontSize: "clamp(2.6rem, 6vw, 3.8rem)",
                    lineHeight: 1.1,
                    color: isDark ? "#ffffff" : "#0a1428",
                  }}
                >
                  Your Strategic{" "}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "#14b8a6", to: "#0f766e" }}
                  >
                    Technology Partner
                  </Text>
                </Title>

                <Text
                  size="lg"
                  style={{
                    color: isDark ? "rgba(255,255,255,0.8)" : "rgba(10,20,40,0.8)",
                    lineHeight: 1.75,
                  }}
                >
                  We don&apos;t just build software — we build possibilities. Our
                  mission is to empower businesses globally with cutting-edge
                  solutions that simplify operations, enhance productivity, and
                  foster growth.
                </Text>

                {/* Benefits List */}
                <List
                  spacing="md"
                  size="lg"
                  icon={
                    <Box
                      style={{
                        color: "#14b8a6",
                        fontSize: "20px",
                        marginTop: "4px",
                      }}
                    >
                      ✓
                    </Box>
                  }
                >
                  {benefits.map((item, index) => (
                    <List.Item
                      key={index}
                      style={{
                        color: isDark ? "rgba(255,255,255,0.85)" : "rgba(10,20,40,0.85)",
                      }}
                    >
                      {item}
                    </List.Item>
                  ))}
                </List>

                {/* CTA Button */}
                <Button
                  size="lg"
                  radius="xl"
                  color="teal"
                  h={50}
                  px={30}
                  mt={20}
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                  }}
                >
                  Schedule a Quick Call
                </Button>
              </Stack>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;