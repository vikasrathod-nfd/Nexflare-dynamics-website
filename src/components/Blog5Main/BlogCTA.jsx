import React from 'react';
import { Box, Container, Group, Text, useComputedColorScheme } from "@mantine/core";

const BlogCTA = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Handle button click (you can change the route)
  const handleScheduleCall = () => {
    window.location.href = "/contact"; // Change if needed
  };

  const handleCallNow = () => {
    window.location.href = "tel:+918237525097";
  };

  return (
    <Box
      component="section"
      py={{ base: 80, md: 110 }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? `
            radial-gradient(circle at 50% 30%, rgba(20,184,166,.22), transparent 55%),
            linear-gradient(180deg, #041a17 0%, #061512 50%, #050c0c 100%)
          `
          : `
            radial-gradient(circle at 50% 30%, rgba(20,184,166,.14), transparent 55%),
            linear-gradient(180deg, #e8fbf6 0%, #f2fbf9 50%, #ffffff 100%)
          `,
      }}
    >
      <Container size="md">
        {/* Heading */}
        <Text
          ta="center"
          fw={800}
          mb={20}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.15,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Elevate Your Digital{" "}
          <Text component="span" inherit fs="italic" style={{ color: "#14b8a6" }}>
            Potential Today
          </Text>
        </Text>

        {/* Subtitle */}
        <Text
          ta="center"
          mb={40}
          style={{
            fontSize: 17,
            maxWidth: 680,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
            color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
          }}
        >
          From intuitive platforms to seamless integrations — let's create
          software that accelerates your business success.
        </Text>

        {/* Buttons */}
        <Group justify="center" gap={18}>
          {/* Primary Button */}
          <Box
            component="button"
            onClick={handleScheduleCall}
            style={{
              padding: "16px 36px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(20,184,166,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Schedule a Quick Call
          </Box>

          {/* Secondary Button */}
          <Box
            component="button"
            onClick={handleCallNow}
            style={{
              padding: "16px 36px",
              borderRadius: 999,
              background: "transparent",
              border: isDark
                ? "1px solid rgba(255,255,255,0.35)"
                : "1px solid rgba(11,19,38,0.3)",
              color: isDark ? "#ffffff" : "#0b1326",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "#14b8a6";
              e.currentTarget.style.background = isDark
                ? "rgba(20,184,166,0.1)"
                : "rgba(20,184,166,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = isDark
                ? "rgba(255,255,255,0.35)"
                : "rgba(11,19,38,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Call +91-8237525097
          </Box>
        </Group>
      </Container>
    </Box>
  );
};

export default BlogCTA;