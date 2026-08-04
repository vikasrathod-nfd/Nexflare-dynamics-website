// import {
//   Box,
//   Container,
//   Text,
//   Title,
//   Stack,
//   Group,
//   Button,
//   Badge,
//   SimpleGrid,
//   useComputedColorScheme,
// } from "@mantine/core";
// const stats = [
//   { value: "500M+", label: "API CALLS HANDLED" },
//   { value: "99.9%", label: "UPTIME GUARANTEED" },
//   { value: "<80ms", label: "AVG. RESPONSE TIME" },
// ];
// const ApiHeroSection = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";
//   // Added this function
//   const handleFreeConsultation = () => {
//     const contactForm = document.getElementById("contact-form");
    
//     if (contactForm) {
//       contactForm.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     } else {
//       window.location.href = "/contact"; // Change this if your contact page route is different
//     }
//   };
//   return (
//     <Box
//       component="section"
//       py={140}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background image - FIXED & RESTORED */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "url('https://media.istockphoto.com/id/2148123501/photo/big-data-structure-blocks-concept.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "right center",
//           opacity: isDark ? 0.35 : 0.35,
//           pointerEvents: "none",
//         }}
//       />
//       {/* Fade overlay so text stays readable */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: isDark
//             ? "linear-gradient(90deg, #060d18 0%, #060d18 35%, rgba(6,13,24,0.4) 70%, transparent 100%)"
//             : "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.5) 70%, transparent 100%)",
//           pointerEvents: "none",
//         }}
//       />
//       <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
//         <Stack gap={24} maw={650}>
//           {/* Badge */}
//           <Badge
//             radius="xl"
//             size="lg"
//             variant="light"
//             style={{
//               alignSelf: "flex-start",
//               backgroundColor: isDark
//                 ? "rgba(20,184,166,0.12)"
//                 : "rgba(20,184,166,0.1)",
//               color: "#14b8a6",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//               fontWeight: 700,
//               padding: "14px 18px",
//             }}
//           >
//             • Software Development
//           </Badge>
//           {/* Title */}
//           <Title
//             fw={800}
//             style={{
//               fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
//               lineHeight: 1.1,
//             }}
//           >
//             <Text
//               component="span"
//               fw={800}
//               style={{
//                 display: "block",
//                 fontSize: "inherit",
//                 color: isDark ? "#f8fafc" : "#0f172a",
//               }}
//             >
//               API
//             </Text>
//             <Text
//               component="span"
//               fw={800}
//               style={{
//                 display: "block",
//                 fontSize: "inherit",
//                 color: "#14b8a6",
//               }}
//             >
//               Development
//             </Text>
//           </Title>
//           {/* Description */}
//           <Text
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: 1.7,
//               color: isDark
//                 ? "rgba(226,232,240,0.75)"
//                 : "rgba(15,23,42,0.65)",
//             }}
//           >
//             We design and build robust, secure, and well-documented APIs
//             that power your products, connect your platforms, and enable
//             seamless third-party integrations — built to scale from day
//             one.
//           </Text>
//           {/* Buttons */}
//           <Group gap="md" mt={8}>
//             <Button
//               radius="xl"
//               size="md"
//               style={{
//                 backgroundColor: "#14b8a6",
//                 color: "#ffffff",
//                 fontWeight: 700,
//                 padding: "0 32px",
//                 height: 50,
//               }}
//               styles={{
//                 root: {
//                   "&:hover": {
//                     backgroundColor: "#0d9488",
//                   },
//                 },
//               }}
//               onClick={handleFreeConsultation}
//             >
//               Start Your Project
//             </Button>
           
//           </Group>
//           {/* Stats */}
        
//         </Stack>
//       </Container>
//     </Box>
//   );
// };
// export default ApiHeroSection;


import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  Button,
  Badge,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";

const ApiHeroSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const handleFreeConsultation = () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact";
    }
  };
  return (
    <Box
      component="section"
      py={160}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image - kept bright/visible, darkened via overlay instead */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://lumenalta.com/_next/image?url=https%3A%2F%2Fassets.lumenalta.com%2Ff%2F1019928%2F1920x728%2F7b0afc3b56%2Fwhat-is-generative-ai.png%2Fm%2F&w=3840&q=75')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          filter: "brightness(1)",
          pointerEvents: "none",
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
          pointerEvents: "none",
        }}
      />
      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Stack gap={24} maw={650}>
          <Badge
            radius="xl"
            size="lg"
            variant="light"
            style={{
              alignSelf: "flex-start",
              backgroundColor: isDark
                ? "rgba(20,184,166,0.12)"
                : "rgba(20,184,166,0.1)",
              color: "#14b8a6",
              textTransform: "uppercase",
              letterSpacing: 1,
              fontWeight: 700,
              padding: "14px 18px",
            }}
          >
            • Software Development
          </Badge>
          <Title
            fw={800}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              lineHeight: 1.1,
            }}
          >
            <Text
              component="span"
              fw={800}
              style={{
                display: "block",
                fontSize: "inherit",
                color: "#f8fafc",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              API
            </Text>
            <Text
              component="span"
              fw={800}
              style={{
                display: "block",
                fontSize: "inherit",
                color: "#14b8a6",
              }}
            >
              Development
            </Text>
          </Title>
          <Text
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,.9)",
              textShadow: "0 1px 12px rgba(0,0,0,0.5)",
            }}
          >
            We design and build robust, secure, and well-documented APIs
            that power your products, connect your platforms, and enable
            seamless third-party integrations built to scale from day
            one.
          </Text>
          <Group gap="md" mt={8}>
            <Button
              radius="xl"
              size="md"
              style={{
                backgroundColor: "#14b8a6",
                color: "#ffffff",
                fontWeight: 700,
                padding: "0 32px",
                height: 50,
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor: "#0d9488",
                  },
                },
              }}
              onClick={handleFreeConsultation}
            >
              Start Your Project
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};
export default ApiHeroSection;