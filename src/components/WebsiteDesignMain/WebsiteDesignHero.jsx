import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const WebsiteDesignHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const colors = {
    badgeBg: isDark ? "rgba(20,184,166,0.14)" : "#E6FFFA",
    badgeText: isDark ? "#2dd4bf" : "#0F766E",
    badgeBorder: isDark ? "rgba(45,212,191,0.35)" : "#99F6E4",
    headingPrimary: "#ffffff",
    headingAccent: "#14b8a6",
    paragraph: "rgba(255,255,255,0.9)",
    btnPrimaryBg: "#14b8a6",
    btnPrimaryBgHover: "#0d9488",
    btnPrimaryText: "#ffffff",
  };

  // Added this function
  const handleFreeConsultation = () => {
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
      py={160}
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
            "url('https://t4.ftcdn.net/jpg/01/41/03/45/360_F_141034518_wXdy3QxcL9vA1H5VY6Jl5PTNul4YLsE7.jpg')",
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

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          maw={640}
        >
          <Stack gap={30}>
            {/* Badge */}
            <Box
              component="span"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: "fit-content",
                backgroundColor: colors.badgeBg,
                color: colors.badgeText,
                border: `1px solid ${colors.badgeBorder}`,
                borderRadius: 999,
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 0.6,
                padding: "10px 18px",
                lineHeight: 1,
              }}
            >
              <Box
                component="span"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#14b8a6",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Web Dev & Design
            </Box>

            {/* Heading */}
            <Title
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
                lineHeight: 1.05,
                fontWeight: 900,
                color: colors.headingPrimary,
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
                Design
              </Text>
            </Title>

            {/* Description */}
            <Text
              lh={1.8}
              style={{
                fontSize: 18,
                color: colors.paragraph,
                textShadow: "0 1px 12px rgba(0,0,0,0.55)",
                maxWidth: 560,
              }}
            >
              Build a powerful digital presence with professionally designed
              websites that combine exceptional user experience, modern
              design, and conversion-focused functionality.
            </Text>

            {/* Buttons */}
            <Group mt={10}>
              <UnstyledButton
                style={{
                  backgroundColor: colors.btnPrimaryBg,
                  color: colors.btnPrimaryText,
                  fontWeight: 700,
                  fontSize: 15,
                  paddingLeft: 34,
                  paddingRight: 34,
                  height: 54,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  transition: "background-color 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.btnPrimaryBgHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.btnPrimaryBg;
                }}
                onClick={handleFreeConsultation}
              >
                Start Your Project
              </UnstyledButton>
            </Group>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default WebsiteDesignHero;