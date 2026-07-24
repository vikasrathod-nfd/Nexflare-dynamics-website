// import {
//   Avatar,
//   Box,
//   Card,
//   Container,
//   Group,
//   rem,
//   SimpleGrid,
//   Stack,
//   Text,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";
// import { IconQuote } from "@tabler/icons-react";

// const testimonials = [
//   {
//     quote:
//       "Our Instagram engagement more than tripled in four months, and for the first time our social channels are actually driving booked calls.",
//     name: "Priya Nair",
//     role: "Founder, Lumen Skincare",
//   },
//   {
//     quote:
//       "They took over our TikTok from zero and turned it into our top-performing acquisition channel within a quarter.",
//     name: "Daniel Ortiz",
//     role: "Growth Lead, FitTrack",
//   },
//   {
//     quote:
//       "Response times to customer DMs went from days to hours. That alone changed how people talk about us online.",
//     name: "Meera Kapoor",
//     role: "COO, Northside Coffee Co.",
//   },
// ];

// const SMMClientSuccess = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";

//   return (
//     <Box py={rem(100)}>
//       <Container size="lg">
//         <Stack align="center" gap="xs" mb={rem(56)}>
//           <Text fw={600} c="cyan" tt="uppercase" size="sm">
//             Client Success
//           </Text>
//           <Title order={2} ta="center" style={{ fontSize: rem(38) }}>
//             Results our clients talk about
//           </Title>
//         </Stack>

//         <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
//           {testimonials.map(({ quote, name, role }) => (
//             <Card
//               key={name}
//               radius="lg"
//               padding="xl"
//               withBorder
//               style={{
//                 background: isDark
//                   ? "rgba(255,255,255,0.02)"
//                   : "rgba(255,255,255,0.7)",
//               }}
//             >
//               <IconQuote size={28} color="#06b6d4" style={{ marginBottom: rem(12) }} />
//               <Text size="sm" mb="lg">
//                 {quote}
//               </Text>
//               <Group gap="sm">
//                 <Avatar radius="xl" color="blue">
//                   {name.split(" ").map((n) => n[0]).join("")}
//                 </Avatar>
//                 <Stack gap={0}>
//                   <Text fw={600} size="sm">
//                     {name}
//                   </Text>
//                   <Text size="xs" c="dimmed">
//                     {role}
//                   </Text>
//                 </Stack>
//               </Group>
//             </Card>
//           ))}
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// };

// export default SMMClientSuccess;


import { Avatar, Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const testimonials = [
  {
    quote:
      "Handing over our daily posting and DMs freed up so much time. Our engagement actually went up because replies are now consistent and fast.",
    name: "Priya Nair",
    role: "Owner, GlowSkin Studio",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    quote:
      "We used to post whenever we remembered. Now every channel is active daily and our account manager catches issues before they become problems.",
    name: "Aditya Verma",
    role: "Director, UrbanFit Gyms",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    quote:
      "The monthly reports are genuinely useful, not just numbers. We know exactly what's working and what to change every month.",
    name: "Sana Sheikh",
    role: "Marketing Head, Cafe Bloom",
    avatar: "https://i.pravatar.cc/100?img=36",
  },
];
const MediaManagementClientSuccess = () => {
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
export default MediaManagementClientSuccess;