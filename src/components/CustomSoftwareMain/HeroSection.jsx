
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

const HeroSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const handleStartProject = () => {
    window.location.href = "/contact";
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
            "url('https://images.openai.com/static-rsc-4/GxIPcQXCN0gCyxV1_J7lcZKXAqGXiBm3qF3udMgY9M7k1fXodgzEvPDOn5C7sU6LznslViBzdQYQbcrFeLLeeyAXrAN8OeDwrMHVxwMlpmnAaVn4ctV3KfcZ-iM7NAFWzU9V9u-7HFh3JroXjx8GCPcgjQ9oqGw5PAy2AxSlgmJgcn4YC1wC9zzrIlTEz90Z?purpose=fullsize')",
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
              Custom
              <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#22d3ee", to: "#14b8a6" }}
              >
                Software
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
              Your business deserves software that works the way you do. We
              develop intelligent, customized solutions that automate
              processes, enhance efficiency, and seamlessly integrate with
              your existing systems helping you reduce costs, accelerate
              growth, and deliver exceptional customer experiences.
            </Text>
            <Group mt={10}>
              <Button
                size="lg"
                radius="xl"
                color="teal"
                h={54}
                px={34}
                onClick={handleStartProject}
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
export default HeroSection;