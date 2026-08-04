import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  Button,
  Badge,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const stats = [
  { value: "300+", label: "WEBSITES LAUNCHED" },
  { value: "<2s", label: "AVG. LOAD TIME" },
  { value: "99.9%", label: "UPTIME GUARANTEED" },
];

const WebsiteDevelopmentHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Added this function
  const handleGetFreeQuote = () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Redirect if contact form is on another page
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };

  return (
    <Box
      component="section"
      py={180}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        alignItems: "center",
      }}
    >
      {/* Background image - kept bright/visible, not washed out */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://monaqo.in/wp-content/uploads/2025/07/web-development-company-in-bangalore.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1)",
        }}
      />

      {/* Text-side overlay only - fades quickly so most of the image stays visible */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `
              linear-gradient(90deg, rgba(4,10,18,0.92) 0%, rgba(4,10,18,0.78) 32%, rgba(4,10,18,0.35) 55%, rgba(4,10,18,0) 72%),
              linear-gradient(0deg, rgba(4,10,18,0.55) 0%, rgba(4,10,18,0) 30%)
            `
            : `
              linear-gradient(90deg, rgba(6,12,24,0.85) 0%, rgba(6,12,24,0.68) 32%, rgba(6,12,24,0.28) 55%, rgba(6,12,24,0) 72%),
              linear-gradient(0deg, rgba(6,12,24,0.45) 0%, rgba(6,12,24,0) 30%)
            `,
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          maw={650}
        >
          <Stack gap={24}>
            {/* Badge */}
            <Badge
              radius="xl"
              size="lg"
              variant="filled"
              color="teal"
              style={{
                alignSelf: "flex-start",
                textTransform: "uppercase",
                letterSpacing: 1,
                fontWeight: 700,
                padding: "14px 18px",
              }}
            >
              • Web Dev &amp; Design
            </Badge>

            {/* Title */}
            <Title
              fw={800}
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                lineHeight: 1.1,
                color: "#ffffff",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Website
              <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#22d3ee", to: "#14b8a6" }}
              >
                Development
              </Text>
            </Title>

            {/* Description */}
            <Text
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 1px 12px rgba(0,0,0,0.55)",
              }}
            >
              Our website development services focus on creating secure, responsive, and high performing digital solutions that enhance user experience, improve operational efficiency, and support your long-term business objectives.
            </Text>

            {/* Buttons */}
            <Group gap="md" mt={8}>
              <Button
                radius="xl"
                size="md"
                style={{
                  backgroundColor: "#14b8a6",
                  color: "#ffffff",
                  fontWeight: 700,
                  padding: "0 32px",
                  height: 50,
                }}
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "#0d9488",
                    },
                  },
                }}
                onClick={handleGetFreeQuote}
              >
                Start Your Project
              </Button>
            </Group>

            
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default WebsiteDevelopmentHero;