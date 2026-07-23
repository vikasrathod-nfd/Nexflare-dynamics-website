import React from 'react';
import {
  Badge,
  Box,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const services = [
  {
    icon: "⚙️",
    title: "DevOps",
    description:
      "Streamline your development lifecycle by integrating development and operations for faster delivery. We leverage CI/CD pipelines, infrastructure as code (IaC), and automated monitoring for seamless, scalable deployments.",
  },
  {
    icon: "🌐",
    title: "Software Outsourcing",
    description:
      "End-to-end development solutions tailored to your business needs — from custom application development to maintenance and support. Access a global talent pool, the latest technologies, and streamlined processes.",
  },
  {
    icon: "📋",
    title: "Project & Resource Consulting",
    description:
      "Expert guidance and skilled professionals tailored to your project. We specialise in resource planning, team augmentation, and project management to ensure efficient execution and optimal outcomes.",
  },
  {
    icon: "💻",
    title: "Custom Software Development",
    description:
      "Tailored solutions that align perfectly with your goals, ensuring scalability, efficiency, and seamless integration — whether you need web, mobile, or enterprise software.",
  },
  {
    icon: "📊",
    title: "ERP & CRM Software",
    description:
      "Robust ERP and CRM solutions combining powerful functionality with user-friendly design — featuring automated workflows, real-time analytics, inventory management, and a centralised customer database.",
  },
  {
    icon: "📱",
    title: "Mobile Application Development",
    description:
      "Android and iOS apps with intuitive interfaces, cross-platform compatibility, real-time notifications, and offline mode — built to keep your audience connected and engaged on the go.",
  },
];

const ServiceSection = () => {
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
            OUR SERVICES
          </Badge>

          <Title
            order={2}
            ta="center"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
              lineHeight: 1.1,
              color: isDark ? "#ffffff" : "#0a1428",
            }}
          >
            High-Quality{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#14b8a6", to: "#0f766e" }}
            >
              Software Services
            </Text>
          </Title>

          <Text
            size="lg"
            ta="center"
            maw={720}
            style={{
              color: isDark ? "rgba(255,255,255,0.75)" : "rgba(10,20,40,0.75)",
            }}
          >
            Dedicated to delivering excellence through advanced technologies and
            expert craftsmanship — across the full software development lifecycle.
          </Text>
        </Stack>

        <Grid gutter={24}>
          {services.map((service, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: isDark
                        ? "0 20px 25px -5px rgba(0, 0, 0, 0.5)"
                        : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    mb={24}
                    w={56}
                    h={56}
                    style={{
                      background: isDark ? "#1f2937" : "#f1f5f9",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Title
                    order={3}
                    mb={12}
                    style={{
                      color: isDark ? "#ffffff" : "#0a1428",
                      fontSize: "1.35rem",
                    }}
                  >
                    {service.title}
                  </Title>

                  <Text
                    style={{
                      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(10,20,40,0.8)",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
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

export default ServiceSection;