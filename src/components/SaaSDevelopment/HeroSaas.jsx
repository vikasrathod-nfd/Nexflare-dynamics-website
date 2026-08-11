import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  Button,
  Badge,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const HeroSaas = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleStartSaasProject = () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };

  return (
    <Box
      component="section"
      py={200}
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
            "url('https://bpckuwait.com/wp-content/uploads/2019/11/SAAS-1170x694.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
          filter: "brightness(1)",
        }}
      />

      {/* Text-side overlay only - much lighter now, image stays true to its original colors */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(90deg, rgba(6,12,24,0.55) 0%, rgba(6,12,24,0.4) 30%, rgba(6,12,24,0.12) 55%, rgba(6,12,24,0) 72%),
            linear-gradient(0deg, rgba(6,12,24,0.2) 0%, rgba(6,12,24,0) 30%)
          `,
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          maw={640}
        >
          <Stack gap={30}>
            <Badge
              radius="xl"
              size="xl"
              color="teal"
              variant="filled"
              px={22}
              py={14}
              style={{
                width: "fit-content",
                letterSpacing: 1,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ● Software Development
            </Badge>

            <Title
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
                lineHeight: 1.05,
                fontWeight: 900,
                color: "#ffffff",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              SaaS
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

            <Text
              lh={1.8}
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,.92)",
                textShadow: "0 1px 12px rgba(0,0,0,0.55)",
              }}
            >
              Transform your software idea into a powerful, revenue-generating
              SaaS platform. We design and develop secure, scalable,
              cloud-native solutions with multi-tenant architecture,
              subscription management, and seamless user experiences that
              support long-term business growth.
            </Text>

            <Group mt={10}>
              <Button
                size="lg"
                radius="xl"
                color="teal"
                h={54}
                px={34}
                onClick={handleStartSaasProject}
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

export default HeroSaas;