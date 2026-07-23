import { Box, Container, Group, Text, useComputedColorScheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const HRMSCTA = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    navigate("/contact");
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
            radial-gradient(circle at 50% 30%, rgba(37,99,235,.25), transparent 60%),
            linear-gradient(180deg, #0a1428 0%, #0f1c3a 50%, #050c1a 100%)
          `
          : `
            radial-gradient(circle at 50% 30%, rgba(37,99,235,.12), transparent 60%),
            linear-gradient(180deg, #f0f7ff 0%, #f8fbff 50%, #ffffff 100%)
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
          Ready to see{" "}
          <Text component="span" inherit fs="italic" style={{ color: "#3b82f6" }}>
            NexHRMS
          </Text>{" "}
          in action?
        </Text>

        <Text
          ta="center"
          mb={40}
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto",
            color: isDark ? "rgba(255,255,255,0.7)" : "rgba(11,19,38,0.7)",
          }}
        >
          Get a walkthrough tailored to your organisation's HR workflows
          <br />
          and see how much manual work you can remove.
        </Text>

        <Group justify="center" gap={16}>
          {/* Primary Button */}
          <Box
            component="button"
            style={{
              padding: "16px 36px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(90deg, #2563eb, #0891b2)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(37,99,235,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={handleRequestDemo}
          >
            Request Demo
          </Box>

          {/* Secondary Button */}
          <Box
            component="button"
            style={{
              padding: "16px 36px",
              borderRadius: 999,
              background: "transparent",
              border: isDark
                ? "1px solid rgba(255,255,255,0.35)"
                : "1px solid rgba(37,99,235,0.3)",
              color: isDark ? "#ffffff" : "#1e40af",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "#3b82f6";
              e.currentTarget.style.background = isDark
                ? "rgba(59,130,246,0.1)"
                : "rgba(59,130,246,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = isDark
                ? "rgba(255,255,255,0.35)"
                : "rgba(37,99,235,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Learn More
          </Box>
        </Group>
      </Container>
    </Box>
  );
};

export default HRMSCTA;