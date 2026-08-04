import { Box, Container, SimpleGrid, Stack, Text, useComputedColorScheme } from "@mantine/core";
const features = [
  "Dedicated email marketing specialist delivering strategy, content, and campaign management",
  "End-to-end email marketing platform implementation, migration, and configuration",
  "Privacy-compliant email campaigns built to meet international industry standards",
  "Proactive email deliverability optimization for maximum inbox placement and engagement",
  "Comprehensive campaign performance and revenue attribution with transparent reporting",
  "Ongoing collaboration and refinements to ensure every campaign achieves your business objectives",
];
const EmailWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // ==================== ONLY ADDED THIS ====================
  const handleStartEmailMarketing = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };
  // ========================================================
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 60 }}>
          {/* Left content */}
          <Box>
            {/* Label */}
            <Text
              fw={700}
              size="sm"
              mb={8}
              style={{
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#14b8a6",
              }}
            >
              Why Nexflare
            </Text>
            {/* Heading */}
            <Text
              fw={800}
              mb={20}
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.2,
                color: isDark ? "#ffffff" : "#0b1326",
              }}
            >
              Email Marketing That{" "}
              <Text
                component="span"
                inherit
                style={{
                  background: "linear-gradient(90deg, #0d9488, #14b8a6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pays for Itself
              </Text>
            </Text>
            {/* Subtitle */}
            <Text
              mb={28}
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
              }}
            >
             Email marketing remains one of the most effective digital marketing channels when executed strategically. We design personalized campaigns, intelligent automation, and data-driven optimization strategies that strengthen customer relationships, increase conversions, and deliver measurable business growth.
            </Text>
            {/* Feature list */}
            <Stack gap={16} mb={36}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <Text
                    fw={700}
                    style={{
                      color: "#14b8a6",
                      fontSize: 15,
                      lineHeight: 1.6,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </Text>
                  <Text
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.6,
                      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
                    }}
                  >
                    {feature}
                  </Text>
                </Box>
              ))}
            </Stack>
            {/* Button */}
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
              onClick={handleStartEmailMarketing}
            >
              Start Email Marketing
            </Box>
          </Box>
          {/* Right image */}
          <Box
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(11,19,38,0.08)",
              minHeight: 320,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Team collaborating in an office meeting"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default EmailWhyChooseUs;