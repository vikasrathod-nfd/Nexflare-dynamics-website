import { Avatar, Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";

const testimonials = [
  {
    quote:
      "Our Google Ads CPA dropped by 40% in the first two months while conversion volume actually went up. The optimisation discipline is unmatched.",
    name: "Arjun Malhotra",
    role: "Founder, FitGear Nutrition",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    quote:
      "We went from guessing our ad spend to knowing exactly what each rupee returns. ROAS on our Meta campaigns doubled within a quarter.",
    name: "Neha Kapoor",
    role: "CMO, UrbanNest Furnishings",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    quote:
      "Their LinkedIn campaigns brought us qualified enterprise leads at half the cost per lead we were getting before. Genuinely transformed our pipeline.",
    name: "Rohit Sharma",
    role: "VP Sales, Cloudify Systems",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const PMClientsSuccess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="lg">
        <Text
          ta="center"
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#06b6d4",
          }}
        >
          Client Stories
        </Text>

        <Text
          ta="center"
          fw={800}
          mb={{ base: 40, md: 60 }}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          What Our{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #2563eb, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Clients Say
          </Text>
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
          {testimonials.map((item, index) => (
            <Box
              key={index}
              p={{ base: 24, md: 28 }}
              style={{
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                background: isDark ? "rgba(255,255,255,0.03)" : "rgba(37,99,235,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(37,99,235,0.1)",
                backdropFilter: "blur(10px)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 12px 30px rgba(6,182,212,0.15)"
                  : "0 12px 30px rgba(37,99,235,0.12)";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(6,182,212,0.35)"
                  : "rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(37,99,235,0.1)";
              }}
            >
              <Text fw={800} mb={12} style={{ fontSize: 32, lineHeight: 1, color: "#06b6d4" }}>
                "
              </Text>

              <Text
                fs="italic"
                mb={24}
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  flexGrow: 1,
                  color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
                }}
              >
                {item.quote}
              </Text>

              <Box style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar src={item.avatar} alt={item.name} radius="xl" size={44} />
                <Box>
                  <Text fw={700} size="sm" style={{ color: isDark ? "#ffffff" : "#0b1326" }}>
                    {item.name}
                  </Text>
                  <Text
                    size="sm"
                    style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(11,19,38,0.55)" }}
                  >
                    {item.role}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PMClientsSuccess;