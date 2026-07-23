import { Box, Container, Group, Text, useComputedColorScheme } from "@mantine/core";

const PMCTASection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleBookFreeAuditCall = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };

  return (
    <Box
      component="section"
      py={{ base: 70, md: 100 }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? `
            radial-gradient(circle at 50% 30%, rgba(6,182,212,.22), transparent 55%),
            linear-gradient(180deg, #041a17 0%, #061512 50%, #050c0c 100%)
          `
          : `
            radial-gradient(circle at 50% 30%, rgba(6,182,212,.14), transparent 55%),
            linear-gradient(180deg, #e8fbf6 0%, #f2fbf9 50%, #ffffff 100%)
          `,
      }}
    >
      <Container size="md">
        <Text
          ta="center"
          fw={800}
          mb={20}
          style={{
            fontSize: "clamp(30px, 4.5vw, 46px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Ready to{" "}
          <Text component="span" inherit fs="italic" style={{ color: "#14b8a6" }}>
            Scale
          </Text>
          ?
        </Text>

        <Text
          ta="center"
          mb={40}
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          Let's turn your ad spend into a predictable growth channel.
          <br />
          Free ad account audit — no strings attached.
        </Text>

        <Group justify="center" gap={16}>
          <Box
            component="button"
            style={{
              padding: "16px 32px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(20,184,166,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={handleBookFreeAuditCall}
          >
            Book Free Ad Audit
          </Box>

          <Box
            component="button"
            style={{
              padding: "16px 32px",
              borderRadius: 999,
              background: "transparent",
              border: isDark
                ? "1px solid rgba(255,255,255,0.3)"
                : "1px solid rgba(11,19,38,0.25)",
              color: isDark ? "#ffffff" : "#0b1326",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "#14b8a6";
              e.currentTarget.style.background = isDark
                ? "rgba(20,184,166,0.08)"
                : "rgba(20,184,166,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = isDark
                ? "rgba(255,255,255,0.3)"
                : "rgba(11,19,38,0.25)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Call Us Now
          </Box>
        </Group>
      </Container>
    </Box>
  );
};

export default PMCTASection;