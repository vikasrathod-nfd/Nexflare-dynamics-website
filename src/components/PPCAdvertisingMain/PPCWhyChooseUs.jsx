import { Box, Container, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";

const STEPS = [
  {
    number: "01",
    title: "Account Audit",
    description:
      "We evaluate your existing campaigns, conversion tracking, audience targeting, and overall account performance to identify improvement opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Setup",
    description:
      "Our team develops a customized campaign strategy with audience research, keyword planning, and a structured account setup aligned with your business goals.",
  },
  {
    number: "03",
    title: "Creative & Copy",
    description:
      "We create compelling advertisements, engaging visuals, and optimized landing page experiences designed to maximize clicks and conversions.",
  },
  {
    number: "04",
    title: "Launch & Monitor",
    description:
      "Campaigns are launched with continuous performance monitoring, budget optimization, and audience refinement to ensure consistent results.",
  },
  {
    number: "05",
    title: "Optimize & Scale",
    description:
      "Using performance insights and ongoing testing, we refine successful campaigns, expand high-performing audiences, and scale your advertising investment.",
  },
];

const PPCWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    numberFill: isDark ? "rgba(20,184,166,0.14)" : "rgba(20,184,166,0.12)",
    connector: isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)",
    stepTitle: isDark ? "#ffffff" : "#0f172a",
    stepText: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} maw={720} mb={64}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            Our Process
          </Text>

          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
            }}
          >
            How We{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Run Your Campaigns
            </Box>
          </Title>

          <Text
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: colors.subtitle,
              marginTop: 8,
            }}
          >
            From audience research and campaign setup to ongoing optimization and transparent reporting, our data-driven process ensures your advertising budget is invested efficiently to generate qualified leads and sustainable business growth.
          </Text>
        </Stack>

        <Box
          className="ppc-process-grid"
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {STEPS.map((step, index) => (
            <Box key={step.number} className="ppc-process-item" style={{ display: "flex", flex: 1, alignItems: "flex-start" }}>
              <Stack gap={4} style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: "3.25rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: colors.numberFill,
                    marginBottom: 8,
                  }}
                >
                  {step.number}
                </Text>
                <Text
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: colors.stepTitle,
                  }}
                >
                  {step.title}
                </Text>
                <Text
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: colors.stepText,
                  }}
                >
                  {step.description}
                </Text>
              </Stack>

              {index < STEPS.length - 1 && (
                <Box
                  className="ppc-process-connector"
                  style={{
                    height: 1,
                    flex: "0 0 24px",
                    backgroundColor: colors.connector,
                    marginTop: 26,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>

      <style>{`
        @media (max-width: 1100px) {
          .ppc-process-grid {
            flex-direction: column;
            gap: 40px;
          }
          .ppc-process-item {
            flex-direction: column;
          }
          .ppc-process-connector {
            display: none;
          }
        }
      `}</style>
    </Box>
  );
};

export default PPCWhyChooseUs;
