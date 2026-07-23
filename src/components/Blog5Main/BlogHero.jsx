import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const stats = [
  { value: "100+", label: "PROJECTS DELIVERED" },
  { value: "40+", label: "INDUSTRIES SERVED" },
  { value: "4.9★", label: "CLIENT RATING" },
];

const technologies = [
  { name: "Angular", color: "#dd0031", icon: "A" },
  { name: "JavaScript", color: "#f7df1e", icon: "JS" },
  { name: "Python", color: "#3776ab", icon: "Py" },
  { name: "React Native", color: "#61dafb", icon: "RN" },
  { name: "SQL", color: "#336791", icon: "SQL" },
  { name: "PHP", color: "#777bb4", icon: "PHP" },
  { name: "MongoDB", color: "#47a248", icon: "MDB" },
  { name: "Node.js", color: "#339933", icon: "Node" },
];

const SoftwareDevHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      component="section"
      py={160}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Image */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isDark ? "brightness(0.45) contrast(1.1)" : "brightness(0.75)",
        }}
      />

      {/* Overlay */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(90deg, rgba(4,10,18,0.95) 0%, rgba(4,10,18,0.88) 40%, rgba(4,10,18,0.65) 70%, rgba(4,10,18,0.4) 100%)"
            : "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,0.45) 100%)",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          maw={720}
        >
          <Stack gap={32}>
            {/* Badge */}
            <Badge
              radius="xl"
              size="xl"
              color="teal"
              variant={isDark ? "filled" : "outline"}
              px={24}
              py={12}
              style={{
                width: "fit-content",
                letterSpacing: "1.5px",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              ● SOFTWARE DEVELOPMENT
            </Badge>

            {/* Main Heading */}
            <Title
              style={{
                fontSize: "clamp(3rem, 7vw, 5.2rem)",
                lineHeight: 1.05,
                fontWeight: 900,
                color: isDark ? "#ffffff" : "#0a1428",
              }}
            >
              Software{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#14b8a6", to: "#0f766e" }}
              >
                Development
              </Text>
              <br />
              Company
            </Title>

            {/* Description */}
            <Text
              size="lg"
              lh={1.75}
              style={{
                fontSize: "18px",
                maxWidth: "580px",
                color: isDark ? "rgba(255,255,255,0.8)" : "rgba(10,20,40,0.8)",
              }}
            >
              Revolutionising software solutions with innovative digital
              technologies to maximise productivity, ease business operations,
              and deliver seamless, engaging user experiences — from ERP and
              CRM to mobile apps and DevOps.
            </Text>

            {/* Buttons */}
            <Group mt={10}>
              <Button
                size="lg"
                radius="xl"
                color="teal"
                h={56}
                px={36}
                fw={600}
              >
                Get a Quote
              </Button>

            </Group>

            {/* Stats */}
            <Group mt={40} gap={50}>
              {stats.map((stat, index) => (
                <Box key={index}>
                  <Title
                    order={2}
                    c="teal"
                    fw={900}
                    style={{
                      fontSize: "clamp(28px, 4vw, 36px)",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Title>
                  <Text
                    tt="uppercase"
                    size="xs"
                    fw={600}
                    style={{
                      letterSpacing: "1.2px",
                      color: isDark ? "rgba(255,255,255,0.65)" : "rgba(10,20,40,0.65)",
                    }}
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Group>
          </Stack>
        </MotionBox>

        {/* === NEW TECHNOLOGIES SECTION === */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          mt={80}
        >
          <Stack align="center" gap={24}>
            <Text
              size="sm"
              fw={600}
              c="teal"
              tt="uppercase"
              style={{ letterSpacing: "2px" }}
            >
              TECHNOLOGIES WE'VE MASTERED
            </Text>

            <Title
              order={2}
              style={{
                fontSize: "clamp(2rem, 5vw, 2.8rem)",
                color: isDark ? "#ffffff" : "#0a1428",
                textAlign: "center",
              }}
            >
              Built With the{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#14b8a6", to: "#0f766e" }}
              >
                Best Stack
              </Text>
            </Title>

            <Group gap={16} mt={20} wrap="wrap" justify="center">
              {technologies.map((tech, index) => (
                <Box
                  key={index}
                  style={{
                    background: isDark ? "#1a1f2e" : "#f8f9fa",
                    border: `1px solid ${isDark ? "#2a2f3e" : "#e9ecef"}`,
                    borderRadius: "12px",
                    padding: "18px 14px",
                    width: "110px",
                    textAlign: "center",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    style={{
                      width: 48,
                      height: 48,
                      margin: "0 auto 12px",
                      backgroundColor: tech.color,
                      color: "#fff",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 700,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    }}
                  >
                    {tech.icon}
                  </Box>
                  <Text size="sm" fw={500} c={isDark ? "white" : "dark"}>
                    {tech.name}
                  </Text>
                </Box>
              ))}
            </Group>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default SoftwareDevHero;