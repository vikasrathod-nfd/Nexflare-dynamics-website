// import React from "react";
// import {
//   Box,
//   Container,
//   Text,
//   Title,
//   SimpleGrid,
//   Paper,
//   useComputedColorScheme,
// } from "@mantine/core";
// const SERVICES = [
//   {
//     icon: "🔌",
//     title: "REST API Development",
//     description:
//       "Build secure, scalable, and high-performance RESTful APIs that enable seamless communication between applications. Our APIs are designed with industry best practices, ensuring reliability, easy integration, and long-term maintainability.",
//   },
//   {
//     icon: "⚡",
//     title: "GraphQL API Development",
//     description:
//       "Deliver faster and more efficient data access with flexible GraphQL APIs. We develop modern API solutions that optimize performance, reduce unnecessary data transfers, and provide exceptional experiences across web and mobile applications.",
//   },
//   {
//     icon: "🏗️",
//     title: "Microservices Architecture",
//     description:
//       "Modernize your applications with scalable microservices architecture that improves flexibility, reliability, and performance. Our solutions enable independent deployments, seamless scalability, and faster development for growing businesses.",
//     highlight: true,
//   },
//   {
//     icon: "🔒",
//     title: "API Security & Authentication",
//     description:
//       "Protect your applications with enterprise-grade API security. We implement secure authentication, authorization, encryption, and access controls to safeguard sensitive data and ensure compliance with industry standards.",
//   },
//   {
//     icon: "🔗",
//     title: "Third-Party API Integration",
//     description:
//       "Extend your software capabilities by integrating trusted third-party services such as payment gateways, CRM platforms, ERP systems, cloud services, and communication tools for a seamless business ecosystem.",
//   },
//   {
//     icon: "📋",
//     title: "API Documentation & Testing",
//     description:
//       "Ensure smooth collaboration with comprehensive API documentation and rigorous testing. We provide well-documented, reliable APIs that simplify integration, accelerate development, and deliver consistent performance.",
//   },
// ];
// const ApiServicesSection = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";
//   return (
//     <Box
//       component="section"
//       py={80}
//       style={{ position: "relative" }}
//     >
//       <Container size="xl">
//         <Text
//           fw={700}
//           fz={13}
//           tt="uppercase"
//           style={{
//             letterSpacing: "1.5px",
//             color: "#14b8a6",
//           }}
//           mb={12}
//         >
//           What We Offer
//         </Text>
//         <Title
//           order={2}
//           fz={{ base: 32, sm: 42 }}
//           fw={800}
//           mb={20}
//           style={{ lineHeight: 1.15 }}
//         >
//           <Text
//             component="span"
//             inherit
//             style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
//           >
//             Complete{" "}
//           </Text>
//           <Text
//             component="span"
//             inherit
//             style={{
//               background: "linear-gradient(90deg, #14b8a6, #06b6d4)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             API Development Services
//           </Text>
//         </Title>
//         <Text
//           maw={720}
//           fz={17}
//           style={{
//             color: isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)",
//             lineHeight: 1.7,
//           }}
//           mb={48}
//         >
//           From RESTful APIs to GraphQL and microservices — we architect and
//           build APIs that are clean, secure, well-documented, and a pleasure
//           for developers to integrate with.
//         </Text>
//         <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={24}>
//           {SERVICES.map((service) => (
//             <Paper
//               key={service.title}
//               p={28}
//               radius={16}
//               style={{
//                 position: "relative",
//                 overflow: "hidden",
//                 background: isDark
//                   ? "rgba(255,255,255,0.03)"
//                   : "rgba(15,23,42,0.02)",
//                 border: `1px solid ${
//                   service.highlight
//                     ? "rgba(20,184,166,0.5)"
//                     : isDark
//                     ? "rgba(255,255,255,0.08)"
//                     : "rgba(15,23,42,0.08)"
//                 }`,
//                 transition: "transform 180ms ease, border-color 180ms ease",
//               }}
//               className="api-service-card"
//             >
//               {service.highlight && (
//                 <Box
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: 3,
//                     background: "linear-gradient(90deg, #14b8a6, #06b6d4)",
//                   }}
//                 />
//               )}
//               <Box
//                 mb={20}
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: 10,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 20,
//                   background: isDark
//                     ? "rgba(20,184,166,0.12)"
//                     : "rgba(20,184,166,0.1)",
//                 }}
//               >
//                 {service.icon}
//               </Box>
//               <Text
//                 fw={700}
//                 fz={18}
//                 mb={10}
//                 style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
//               >
//                 {service.title}
//               </Text>
//               <Text
//                 fz={14.5}
//                 style={{
//                   color: isDark
//                     ? "rgba(226,232,240,0.65)"
//                     : "rgba(15,23,42,0.6)",
//                   lineHeight: 1.65,
//                 }}
//               >
//                 {service.description}
//               </Text>
//             </Paper>
//           ))}
//         </SimpleGrid>
//       </Container>
//       <style>{`
//         .api-service-card:hover {
//           transform: translateY(-4px);
//           border-color: rgba(20,184,166,0.5) !important;
//         }
//       `}</style>
//     </Box>
//   );
// };
// export default ApiServicesSection;


import {
  Box,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconPlug,
  IconBolt,
  IconStack2,
  IconLock,
  IconLink,
  IconClipboardList,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "REST API Development",
    description:
      "Build secure, scalable, and high-performance RESTful APIs that enable seamless communication between applications. Our APIs are designed with industry best practices, ensuring reliability, easy integration, and long-term maintainability.",
    icon: IconPlug,
  },
  {
    title: "GraphQL API Development",
    description:
      "Deliver faster and more efficient data access with flexible GraphQL APIs. We develop modern API solutions that optimize performance, reduce unnecessary data transfers, and provide exceptional experiences across web and mobile applications.",
    icon: IconBolt,
  },
  {
    title: "Microservices Architecture",
    description:
      "Modernize your applications with scalable microservices architecture that improves flexibility, reliability, and performance. Our solutions enable independent deployments, seamless scalability, and faster development for growing businesses.",
    icon: IconStack2,
  },
  {
    title: "API Security & Authentication",
    description:
      "Protect your applications with enterprise-grade API security. We implement secure authentication, authorization, encryption, and access controls to safeguard sensitive data and ensure compliance with industry standards.",
    icon: IconLock,
  },
  {
    title: "Third-Party API Integration",
    description:
      "Extend your software capabilities by integrating trusted third-party services such as payment gateways, CRM platforms, ERP systems, cloud services, and communication tools for a seamless business ecosystem.",
    icon: IconLink,
  },
  {
    title: "API Documentation & Testing",
    description:
      "Ensure smooth collaboration with comprehensive API documentation and rigorous testing. We provide well-documented, reliable APIs that simplify integration, accelerate development, and deliver consistent performance.",
    icon: IconClipboardList,
  },
];

const ApiServicesSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === "dark";

  return (
    <Box
      py={120}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark ? "transparent" : theme.colors.gray[0],
      }}
    >
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,.14), transparent 70%)",
            top: 80,
            left: -180,
            filter: "blur(80px)",
          }}
        />
      )}
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.14), transparent 70%)",
            bottom: 0,
            right: -180,
            filter: "blur(90px)",
          }}
        />
      )}

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="md" mb={70}>
          <Text
            fw={700}
            c="teal"
            tt="uppercase"
            style={{ letterSpacing: 3, fontSize: 15 }}
          >
            WHAT WE OFFER
          </Text>
          <Title
            style={{
              fontSize: "clamp(2rem,3vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Complete{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              API Development Services
            </Text>
          </Title>
          <Text
            maw={760}
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: isDark ? "rgba(255,255,255,.72)" : theme.colors.gray[7],
            }}
          >
           Whether you're building a new application or modernizing an existing system, our API development services provide secure, scalable, and future-ready integrations. We create robust APIs that simplify connectivity, enhance performance, and accelerate your digital transformation.
          </Text>
        </Stack>

        <Grid gutter={30}>
          {services.map((item, index) => (
            <Grid.Col key={item.title} span={{ base: 12, sm: 6, lg: 4 }}>
              <MotionCard
                p={0}
                radius={24}
                h="100%"
                withBorder
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: isDark ? "rgba(18, 26, 36, 0.92)" : theme.white,
                  border: isDark
                    ? "1px solid rgba(255,255,255,.08)"
                    : `1px solid ${theme.colors.gray[3]}`,
                  backdropFilter: isDark ? "blur(18px)" : "none",
                  boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,.35)"
                    : "0 10px 30px rgba(0,0,0,.06)",
                  cursor: "pointer",
                  transition: "all .35s ease",
                }}
              >
                {/* top gradient accent bar */}
                <Box
                  style={{
                    height: 5,
                    width: "100%",
                    background: "linear-gradient(90deg, #22d3ee, #14b8a6)",
                  }}
                />

                <Box p={40} style={{ position: "relative" }}>
                  <Stack gap={20}>
                    {/* Icon + Heading in one row */}
                    <Group gap={16} wrap="nowrap" align="center">
                      <ThemeIcon
                        size={58}
                        radius={16}
                        variant="gradient"
                        gradient={{ from: "#22d3ee", to: "#14b8a6", deg: 135 }}
                        style={{
                          boxShadow: "0 10px 24px rgba(20,184,166,.35)",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={30} stroke={1.8} color="#fff" />
                      </ThemeIcon>
                      <Title
                        order={3}
                        style={{
                          fontSize: 21,
                          fontWeight: 800,
                          lineHeight: 1.35,
                          color: isDark ? theme.white : theme.black,
                        }}
                      >
                        {item.title}
                      </Title>
                    </Group>

                    <Text
                      style={{
                        fontSize: 16.5,
                        lineHeight: 1.85,
                        color: isDark
                          ? "rgba(255,255,255,.68)"
                          : theme.colors.gray[7],
                      }}
                    >
                      {item.description}
                    </Text>
                  </Stack>
                </Box>
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ApiServicesSection;
