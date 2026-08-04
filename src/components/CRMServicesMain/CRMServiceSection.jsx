// import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
// const services = [
//   {
//     icon: "👥",
//     title: "Lead & Contact Management",
//     description:
//       "Centralized database with custom fields, tagging, and segmentation to keep every lead and contact organised in one place.",
//   },
//   {
//     icon: "📊",
//     title: "Sales Pipeline & Deal Tracking",
//     description:
//       "Visual pipelines, stage automation, and forecasting so your team always knows what's closing and what needs attention.",
//   },
//   {
//     icon: "⚡",
//     title: "Workflow Automation",
//     description:
//       "Auto follow-ups, task assignment, and email triggers that eliminate manual busywork and keep deals moving forward.",
//   },
//   {
//     icon: "📈",
//     title: "Reporting & Analytics Dashboard",
//     description:
//       "Real-time sales performance, conversion rates, and team activity dashboards for data-driven decisions.",
//   },
//   {
//     icon: "🔗",
//     title: "Third-Party Integrations",
//     description:
//       "Seamless connections with email, WhatsApp, calling tools, and payment gateways your team already relies on.",
//   },
//   {
//     icon: "🔐",
//     title: "Role-Based Access Control",
//     description:
//       "Granular permissions for sales reps, managers, and admins to keep sensitive data secure and organised.",
//   },
// ];
// const CrmServiceSection = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";
//   return (
//     <Box component="section" py={{ base: 60, md: 90 }}>
//       <Container size="xl">
//         {/* Section Label */}
//         <Text
//           fw={700}
//           size="sm"
//           mb={8}
//           style={{
//             letterSpacing: 3,
//             textTransform: "uppercase",
//             color: "#14b8a6",
//           }}
//         >
//           What We Offer
//         </Text>
//         {/* Heading */}
//         <Text
//           fw={800}
//           mb={16}
//           style={{
//             fontSize: "clamp(28px, 4vw, 42px)",
//             lineHeight: 1.2,
//             color: isDark ? "#ffffff" : "#0b1326",
//           }}
//         >
//           Everything Your{" "}
//           <Text
//             component="span"
//             inherit
//             style={{
//               background: "linear-gradient(90deg, #0d9488, #14b8a6)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Sales Team Needs
//           </Text>
//         </Text>
//         {/* Subtitle */}
//         <Text
//           mb={{ base: 40, md: 60 }}
//           maw={650}
//           style={{
//             fontSize: 17,
//             lineHeight: 1.6,
//             color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
//           }}
//         >
//           A CRM built around how your team actually sells — not a rigid, one-size-fits-all template.
//         </Text>
//         {/* Service Cards */}
//         <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={24}>
//           {services.map((service, index) => (
//             <Box
//               key={index}
//               p={28}
//               style={{
//                 borderRadius: 16,
//                 background: isDark
//                   ? "rgba(255,255,255,0.03)"
//                   : "rgba(13,148,136,0.03)",
//                 border: isDark
//                   ? "1px solid rgba(255,255,255,0.08)"
//                   : "1px solid rgba(13,148,136,0.1)",
//                 backdropFilter: "blur(10px)",
//                 transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow = isDark
//                   ? "0 12px 30px rgba(20,184,166,0.15)"
//                   : "0 12px 30px rgba(13,148,136,0.12)";
//                 e.currentTarget.style.borderColor = isDark
//                   ? "rgba(20,184,166,0.35)"
//                   : "rgba(13,148,136,0.3)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//                 e.currentTarget.style.borderColor = isDark
//                   ? "rgba(255,255,255,0.08)"
//                   : "rgba(13,148,136,0.1)";
//               }}
//             >
//               {/* Icon */}
//               <Box
//                 mb={20}
//                 style={{
//                   width: 48,
//                   height: 48,
//                   borderRadius: 12,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 22,
//                   background: isDark
//                     ? "rgba(255,255,255,0.05)"
//                     : "rgba(13,148,136,0.06)",
//                   border: isDark
//                     ? "1px solid rgba(255,255,255,0.08)"
//                     : "1px solid rgba(13,148,136,0.1)",
//                 }}
//               >
//                 {service.icon}
//               </Box>
//               {/* Title */}
//               <Text
//                 fw={700}
//                 mb={10}
//                 style={{
//                   fontSize: 18,
//                   color: isDark ? "#ffffff" : "#0b1326",
//                 }}
//               >
//                 {service.title}
//               </Text>
//               {/* Description */}
//               <Text
//                 style={{
//                   fontSize: 14.5,
//                   lineHeight: 1.7,
//                   color: isDark ? "rgba(255,255,255,0.6)" : "rgba(11,19,38,0.6)",
//                 }}
//               >
//                 {service.description}
//               </Text>
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// };
// export default CrmServiceSection;


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
  IconUsers,
  IconChartBar,
  IconBolt,
  IconTrendingUp,
  IconLink,
  IconShieldLock,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "Lead & Contact Management",
    description:
      "Manage all your leads and customer information from a centralized platform. Organize contacts, track interactions, and maintain accurate records to build stronger relationships and improve sales efficiency. Stay connected with every opportunity through a unified view of your customer journey, ensuring no lead is ever overlooked.",
    icon: IconUsers,
  },
  {
    title: "Sales Pipeline & Deal Tracking",
    description:
      "Gain complete visibility into your sales process with an intuitive pipeline that tracks every opportunity. Monitor deal progress, identify bottlenecks, and close more sales with confidence. Real-time insights and customizable stages help your team prioritize the right opportunities and accelerate business growth.",
    icon: IconChartBar,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks, follow-ups, approvals, and notifications to streamline your sales operations. Our intelligent workflows save time, improve productivity, and allow your team to focus on closing deals. Reduce manual effort, eliminate errors, and ensure every process runs smoothly from lead generation to customer conversion.",
    icon: IconBolt,
  },
  {
    title: "Reporting & Analytics Dashboard",
    description:
      "Make informed business decisions with real-time dashboards and detailed reports. Track sales performance, customer engagement, team productivity, and key business metrics from a single platform. Gain actionable insights that help identify trends, measure success, and optimize your sales strategy for better results.",
    icon: IconTrendingUp,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect your CRM with the tools your business already uses, including email platforms, communication channels, payment gateways, and other essential business applications for a seamless workflow. Eliminate data silos and create a connected ecosystem that improves collaboration and operational efficiency.",
    icon: IconLink,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Protect sensitive business information with secure role-based access. Assign customized permissions to teams, managers, and administrators, ensuring the right people have access to the right data. Strengthen security, maintain compliance, and confidently manage user access as your organization grows.",
    icon: IconShieldLock,
  },
];

const CrmServiceSection = () => {
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
              fontSize: "clamp(2rem,2.5vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Everything Your{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              Sales Team Needs
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
            Every business has a unique sales process. Our custom CRM solutions are built to match your workflows, enabling your team to manage leads, nurture customer relationships, automate repetitive tasks, and make data-driven decisions with confidence.
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

export default CrmServiceSection;
