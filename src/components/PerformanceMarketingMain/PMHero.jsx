// import {
//   Box,
//   Container,
//   Title,
//   Text,
//   Group,
//   SimpleGrid,
//   Stack,
//   UnstyledButton,
//   useComputedColorScheme,
// } from "@mantine/core";

// const STATS = [
//   { value: "4.5x", label: "AVG. ROAS" },
//   { value: "₹50Cr+", label: "AD SPEND MANAGED" },
//   { value: "120+", label: "CAMPAIGNS LAUNCHED" },
// ];

// const PMHero = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";

//   const colors = {
//     imageOpacity: isDark ? 0.9 : 0.85,
//     overlay: isDark
//       ? "linear-gradient(90deg, rgba(6,8,8,0.94) 0%, rgba(6,8,8,0.88) 40%, rgba(6,8,8,0.65) 65%, rgba(6,8,8,0.45) 100%)"
//       : "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.5) 100%)",
//     badgeBg: isDark ? "rgba(20,184,166,0.14)" : "#E6FFFA",
//     badgeText: isDark ? "#2dd4bf" : "#0F766E",
//     badgeBorder: isDark ? "rgba(45,212,191,0.35)" : "#99F6E4",
//     headingPrimary: isDark ? "#ffffff" : "#111827",
//     headingAccent: "#14b8a6",
//     paragraph: isDark ? "rgba(226,232,240,0.85)" : "#4B5563",
//     btnPrimaryBg: "#14b8a6",
//     btnPrimaryBgHover: "#0d9488",
//     btnPrimaryText: "#ffffff",
//     statValue: "#14b8a6",
//     statLabel: isDark ? "rgba(226,232,240,0.75)" : "#6B7280",
//   };

//   const handleGetFreeAuditCall = () => {
//     window.location.href = "/contact"; // Change if your contact route is different
//   };

//   return (
//     <Box
//       component="section"
//       py={70}
//       style={{
//         position: "relative",
//         minHeight: 640,
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         backgroundColor: isDark ? "#0a0a0a" : "#f8fafc",
//       }}
//     >
//       {/* Background photo — analytics dashboard / ad performance */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "url('https://img.magnific.com/free-photo/dynamic-data-visualization-3d_23-2151904313.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: colors.imageOpacity,
//         }}
//       />

//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: colors.overlay,
//         }}
//       />

//       <Container size="xl" style={{ position: "relative", zIndex: 1, width: "100%" }}>
//         <Stack gap="xl" py={80} maw={720}>
//           <Box
//             component="span"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               width: "fit-content",
//               backgroundColor: colors.badgeBg,
//               color: colors.badgeText,
//               border: `1px solid ${colors.badgeBorder}`,
//               borderRadius: 999,
//               textTransform: "uppercase",
//               fontWeight: 700,
//               fontSize: 12,
//               letterSpacing: 0.6,
//               padding: "10px 18px",
//               lineHeight: 1,
//             }}
//           >
//             <Box
//               component="span"
//               style={{
//                 width: 6,
//                 height: 6,
//                 borderRadius: "50%",
//                 backgroundColor: "#14b8a6",
//                 display: "inline-block",
//                 flexShrink: 0,
//               }}
//             />
//             Performance Marketing
//           </Box>

//           <Box>
//             <Title
//               order={1}
//               style={{
//                 fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 color: colors.headingPrimary,
//                 letterSpacing: -1,
//                 margin: 0,
//               }}
//             >
//               Performance
//             </Title>

//             <Title
//               order={1}
//               style={{
//                 fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 color: colors.headingAccent,
//                 letterSpacing: -1,
//                 margin: 0,
//               }}
//             >
//               Marketing
//             </Title>
//           </Box>

//           <Text
//             style={{
//               fontSize: "1.125rem",
//               lineHeight: 1.7,
//               color: colors.paragraph,
//               maxWidth: 560,
//             }}
//           >
//             Drive measurable business results with performance marketing campaigns powered by strategic audience targeting, compelling creatives, and continuous optimization. Our experts leverage advanced analytics and real-time insights to maximize conversions, reduce acquisition costs, and scale your revenue with confidence.
//           </Text>

//           <Group gap="md">
//             <UnstyledButton
//               style={{
//                 backgroundColor: colors.btnPrimaryBg,
//                 color: colors.btnPrimaryText,
//                 fontWeight: 700,
//                 fontSize: 15,
//                 paddingLeft: 28,
//                 paddingRight: 28,
//                 height: 52,
//                 display: "inline-flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 999,
//                 transition: "background-color 150ms ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = colors.btnPrimaryBgHover;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = colors.btnPrimaryBg;
//               }}
//               onClick={handleGetFreeAuditCall}
//             >
//               Start Your Project
//             </UnstyledButton>
//           </Group>

        
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// export default PMHero;


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

const PMHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleGetFreeAuditCall = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };

  return (
    <Box
      component="section"
      py={140}
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
            "url('https://realize.com/wp-content/uploads/2025/01/performance_marketing-scaled.jpg')",
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
              ● Performance Marketing
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
              Performance
              <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#22d3ee", to: "#14b8a6" }}
              >
                Marketing
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
              Drive measurable business results with performance marketing
              campaigns powered by strategic audience targeting, compelling
              creatives, and continuous optimization. Our experts leverage
              advanced analytics and real-time insights to maximize
              conversions, reduce acquisition costs, and scale your revenue
              with confidence.
            </Text>
            <Group mt={10}>
              <Button
                size="lg"
                radius="xl"
                color="teal"
                h={54}
                px={34}
                onClick={handleGetFreeAuditCall}
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

export default PMHero;