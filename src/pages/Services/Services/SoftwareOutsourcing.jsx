// import React from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Text,
//   Title,
//   Button,
//   Group,
//   Badge,
//   Paper,
//   SimpleGrid,
//   Tooltip,
//   useComputedColorScheme,
// } from "@mantine/core";

// import { motion } from "framer-motion";

// import {
//   IconRocket,
//   IconUsers,
//   IconAdjustmentsHorizontal,
//   IconRefresh,
//   IconMessageCircle,
//   IconShieldCheck,
//   IconHeadset,
//   IconDeviceDesktop,
//   IconServer2,
//   IconTestPipe,
//   IconSettingsCog,
//   IconUserCog,
//   IconBriefcase,
//   IconBolt,
//   IconWorld,
// } from "@tabler/icons-react";

// const capabilities = [
//   { icon: IconUsers, label: "Dedicated Development Teams" },
//   { icon: IconAdjustmentsHorizontal, label: "Flexible Hiring Models" },
//   { icon: IconRefresh, label: "Daily Agile Collaboration" },
//   { icon: IconMessageCircle, label: "Transparent Communication" },
//   { icon: IconShieldCheck, label: "Enterprise Security" },
//   { icon: IconHeadset, label: "Long-Term Technical Support" },
// ];

// const techStack = [
//   "React",
//   "Java",
//   "Spring Boot",
//   "Node.js",
//   "Docker",
//   "AWS",
//   "Kubernetes",
// ];

// // blue-themed satellites
// const satellites = [
//   {
//     icon: IconDeviceDesktop,
//     role: "Frontend",
//     color: "#3b82f6",
//     x: 0,
//     y: -130,
//   },
//   { icon: IconServer2, role: "Backend", color: "#6366f1", x: 123.6, y: -40.2 },
//   { icon: IconTestPipe, role: "QA", color: "#06b6d4", x: 76.4, y: 105.2 },
//   {
//     icon: IconSettingsCog,
//     role: "DevOps",
//     color: "#2563eb",
//     x: -76.4,
//     y: 105.2,
//   },
//   {
//     icon: IconUserCog,
//     role: "Project Manager",
//     color: "#4f46e5",
//     x: -123.6,
//     y: -40.2,
//   },
// ];

// const SoftwareOutsourcing = () => {
//   const colorScheme = useComputedColorScheme("light");
//   const isDark = colorScheme === "dark";

//   const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
//   const textSecondary = isDark ? "#94a3b8" : "#64748b";

//   return (
//     <Container size="xl" py={40}>
//       <Paper
//         radius="xl"
//         shadow="xl"
//         withBorder
//         p={0}
//         style={{
//           overflow: "hidden",
//           background: isDark ? "#0f172a" : "#ffffff",
//         }}
//       >
//         <Grid gutter={0}>
//           {/* LEFT SIDE */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box p={{ base: 32, sm: 48, lg: 60 }}>

//               <Group gap={8}>
//                 <Text
//                   tt="uppercase"
//                   fw={700}
//                   size="xs"
//                   c="cyan"
//                   style={{
//                     letterSpacing: 2,
//                   }}
//                   mb={14}
//                 >
//                   Software Outsourcing
//                 </Text>
//               </Group>
//               <Title
//                 order={2}
//                 style={{
//                   fontSize: "38px",
//                   fontWeight: 800,
//                   lineHeight: 1.2,
//                   color: textPrimary,
//                 }}
//               >
//                 Scale Your Team With World-Class Software Engineers
//               </Title>

//               <Text
//                 mt="md"
//                 size="md"
//                 maw={480}
//                 style={{ color: textSecondary }}
//               >
//                 Extend your in-house team with experienced engineers, QA
//                 specialists, DevOps experts, and project managers — delivered
//                 with speed and transparency.
//               </Text>

//               <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" mt={32}>
//                 {capabilities.map((c, i) => {
//                   const Icon = c.icon;
//                   return (
//                     <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
//                       <Box
//                         style={{
//                           width: 28,
//                           height: 28,
//                           borderRadius: 8,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           background: isDark
//                             ? "rgba(59,130,246,.15)"
//                             : "rgba(59,130,246,.1)",
//                         }}
//                       >
//                         <Icon size={15} color="#3b82f6" />
//                       </Box>
//                       <Text size="sm" mt={3} style={{ color: textSecondary }}>
//                         {c.label}
//                       </Text>
//                     </Group>
//                   );
//                 })}
//               </SimpleGrid>

//               <Box mt={32}>
//                 <Text fw={600} mb="xs" size="sm" style={{ color: textPrimary }}>
//                   Tech Stack We Use
//                 </Text>
//                 <Group gap={8}>
//                   {techStack.map((tech, index) => (
//                     <Badge key={index} variant="light" color="blue" radius="sm">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </Group>
//               </Box>

//               <Button
//                 mt={36}
//                 size="md"
//                 radius="md"
//                 rightSection={<IconRocket size={18} />}
//                 style={{
//                   background: "linear-gradient(135deg, #3b82f6, #6366f1)",
//                 }}
//               >
//                 Hire Dedicated Developers
//               </Button>
//             </Box>
//           </Grid.Col>

//           {/* RIGHT SIDE */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box
//               style={{
//                 position: "relative",
//                 minHeight: 560,
//                 background: isDark
//                   ? "radial-gradient(circle at 50% 42%, rgba(59,130,246,.35), transparent 60%), linear-gradient(160deg, #0b1220, #111827)"
//                   : "radial-gradient(circle at 50% 42%, rgba(59,130,246,.18), transparent 60%), linear-gradient(160deg, #eef2ff, #f5f7ff)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "56px 32px",
//                 overflow: "hidden",
//                 flexDirection: "column",
//               }}
//             >
//               {/* dot grid */}
//               <Box
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   backgroundImage: `radial-gradient(rgba(59,130,246,.08) 1px, transparent 1px)`,
//                   backgroundSize: "22px 22px",
//                 }}
//               />

//               <Text
//                 size="xs"
//                 fw={700}
//                 mb={28}
//                 style={{
//                   letterSpacing: 2,
//                   textTransform: "uppercase",
//                   color: isDark ? "rgba(203,213,225,.6)" : "rgba(71,85,105,.7)",
//                 }}
//               >
//                 Cross-Functional Delivery Team
//               </Text>

//               {/* orbit */}
//               <Box style={{ position: "relative", width: 300, height: 300 }}>
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 50,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     borderRadius: "50%",
//                     border: "1.5px dashed rgba(59,130,246,.35)",
//                   }}
//                 />

//                 {/* center */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: 110,
//                     height: 110,
//                     borderRadius: "50%",
//                     background: "linear-gradient(135deg,#3b82f6,#6366f1)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                     color: "#fff",
//                     fontWeight: 700,
//                   }}
//                 >
//                   <IconBriefcase size={24} />
//                   <Text size="xs" c="#fff">
//                     Our Team
//                   </Text>
//                 </div>

//                 {/* satellites */}
//                 {satellites.map((sat, i) => {
//                   const Icon = sat.icon;
//                   return (
//                     <motion.div
//                       key={i}
//                       style={{
//                         position: "absolute",
//                         left: `calc(50% + ${sat.x}px - 27px)`,
//                         top: `calc(50% + ${sat.y}px - 27px)`,
//                       }}
//                       animate={{ y: [0, -6, 0] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                       }}
//                     >
//                       <Tooltip label={sat.role}>
//                         <div
//                           style={{
//                             width: 54,
//                             height: 54,
//                             borderRadius: "50%",
//                             background: sat.color,
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <Icon size={22} color="#fff" />
//                         </div>
//                       </Tooltip>
//                     </motion.div>
//                   );
//                 })}
//               </Box>
//             </Box>
//           </Grid.Col>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default SoftwareOutsourcing;



// import React from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Text,
//   Title,
//   Button,
//   Group,
//   Badge,
//   Paper,
//   SimpleGrid,
//   Tooltip,
//   useComputedColorScheme,
// } from "@mantine/core";

// import { motion } from "framer-motion";

// import {
//   IconRocket,
//   IconUsers,
//   IconAdjustmentsHorizontal,
//   IconRefresh,
//   IconMessageCircle,
//   IconShieldCheck,
//   IconHeadset,
//   IconDeviceDesktop,
//   IconServer2,
//   IconTestPipe,
//   IconSettingsCog,
//   IconUserCog,
//   IconBriefcase,
//   IconBolt,
//   IconWorld,
// } from "@tabler/icons-react";

// const capabilities = [
//   { icon: IconUsers, label: "Dedicated Development Teams" },
//   { icon: IconAdjustmentsHorizontal, label: "Flexible Hiring Models" },
//   { icon: IconRefresh, label: "Daily Agile Collaboration" },
//   { icon: IconMessageCircle, label: "Transparent Communication" },
//   { icon: IconShieldCheck, label: "Enterprise Security" },
//   { icon: IconHeadset, label: "Long-Term Technical Support" },
// ];

// const techStack = [
//   "React",
//   "Java",
//   "Spring Boot",
//   "Node.js",
//   "Docker",
//   "AWS",
//   "Kubernetes",
// ];

// // blue-themed satellites
// const satellites = [
//   {
//     icon: IconDeviceDesktop,
//     role: "Frontend",
//     color: "#3b82f6",
//     x: 0,
//     y: -130,
//   },
//   { icon: IconServer2, role: "Backend", color: "#6366f1", x: 123.6, y: -40.2 },
//   { icon: IconTestPipe, role: "QA", color: "#06b6d4", x: 76.4, y: 105.2 },
//   {
//     icon: IconSettingsCog,
//     role: "DevOps",
//     color: "#2563eb",
//     x: -76.4,
//     y: 105.2,
//   },
//   {
//     icon: IconUserCog,
//     role: "Project Manager",
//     color: "#4f46e5",
//     x: -123.6,
//     y: -40.2,
//   },
// ];

// const SoftwareOutsourcing = () => {
//   const colorScheme = useComputedColorScheme("light");
//   const isDark = colorScheme === "dark";

//   const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
//   const textSecondary = isDark ? "#94a3b8" : "#64748b";
//   const arrowColor = isDark ? "rgba(148,163,184,.55)" : "rgba(59,130,246,.55)";

//   // radius of the center hub (half of 110) and satellite (half of 54),
//   // used to trim the line so it starts/ends at each circle's edge instead of its center
//   const CENTER_R = 55;
//   const SAT_R = 27;

//   return (
//     <Container size="xl" py={40}>
//       <Paper
//         radius="xl"
//         shadow="xl"
//         withBorder
//         p={0}
//         style={{
//           overflow: "hidden",
//           background: isDark ? "#0f172a" : "#ffffff",
//         }}
//       >
//         <Grid gutter={0}>
//           {/* LEFT SIDE */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box p={{ base: 32, sm: 48, lg: 60 }}>

//               <Group gap={8}>
//                 <Text
//                   tt="uppercase"
//                   fw={700}
//                   size="xs"
//                   c="cyan"
//                   style={{
//                     letterSpacing: 2,
//                   }}
//                   mb={14}
//                 >
//                   Software Outsourcing
//                 </Text>
//               </Group>
//               <Title
//                 order={2}
//                 style={{
//                   fontSize: "38px",
//                   fontWeight: 800,
//                   lineHeight: 1.2,
//                   color: textPrimary,
//                 }}
//               >
//                 Scale Your Team With World-Class Software Engineers
//               </Title>

//               <Text
//                 mt="md"
//                 size="md"
//                 maw={480}
//                 style={{ color: textSecondary }}
//               >
//                 Extend your in-house team with experienced engineers, QA
//                 specialists, DevOps experts, and project managers — delivered
//                 with speed and transparency.
//               </Text>

//               <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" mt={32}>
//                 {capabilities.map((c, i) => {
//                   const Icon = c.icon;
//                   return (
//                     <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
//                       <Box
//                         style={{
//                           width: 28,
//                           height: 28,
//                           borderRadius: 8,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           background: isDark
//                             ? "rgba(59,130,246,.15)"
//                             : "rgba(59,130,246,.1)",
//                         }}
//                       >
//                         <Icon size={15} color="#3b82f6" />
//                       </Box>
//                       <Text size="sm" mt={3} style={{ color: textSecondary }}>
//                         {c.label}
//                       </Text>
//                     </Group>
//                   );
//                 })}
//               </SimpleGrid>

//               <Box mt={32}>
//                 <Text fw={600} mb="xs" size="sm" style={{ color: textPrimary }}>
//                   Tech Stack We Use
//                 </Text>
//                 <Group gap={8}>
//                   {techStack.map((tech, index) => (
//                     <Badge key={index} variant="light" color="blue" radius="sm">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </Group>
//               </Box>

//               <Button
//                 mt={36}
//                 size="md"
//                 radius="md"
//                 rightSection={<IconRocket size={18} />}
//                 style={{
//                   background: "linear-gradient(135deg, #3b82f6, #6366f1)",
//                 }}
//               >
//                 Hire Dedicated Developers
//               </Button>
//             </Box>
//           </Grid.Col>

//           {/* RIGHT SIDE */}
//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <Box
//               style={{
//                 position: "relative",
//                 minHeight: 560,
//                 background: isDark
//                   ? "radial-gradient(circle at 50% 42%, rgba(59,130,246,.35), transparent 60%), linear-gradient(160deg, #0b1220, #111827)"
//                   : "radial-gradient(circle at 50% 42%, rgba(59,130,246,.18), transparent 60%), linear-gradient(160deg, #eef2ff, #f5f7ff)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "56px 32px",
//                 overflow: "hidden",
//                 flexDirection: "column",
//               }}
//             >
//               {/* dot grid */}
//               <Box
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   backgroundImage: `radial-gradient(rgba(59,130,246,.08) 1px, transparent 1px)`,
//                   backgroundSize: "22px 22px",
//                 }}
//               />

//               <Text
//                 size="xs"
//                 fw={700}
//                 mb={28}
//                 style={{
//                   letterSpacing: 2,
//                   textTransform: "uppercase",
//                   color: isDark ? "rgba(203,213,225,.6)" : "rgba(71,85,105,.7)",
//                 }}
//               >
//                 Cross-Functional Delivery Team
//               </Text>

//               {/* orbit */}
//               <Box style={{ position: "relative", width: 300, height: 300 }}>
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 50,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     borderRadius: "50%",
//                     border: "1.5px dashed rgba(59,130,246,.35)",
//                   }}
//                 />

//                 {/* arrows: center -> each satellite */}
//                 <svg
//                   width="300"
//                   height="300"
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     pointerEvents: "none",
//                     overflow: "visible",
//                   }}
//                 >
//                   <defs>
//                     <marker
//                       id="arrowhead"
//                       markerWidth="8"
//                       markerHeight="8"
//                       refX="6"
//                       refY="4"
//                       orient="auto"
//                       markerUnits="userSpaceOnUse"
//                     >
//                       <path d="M0,0 L8,4 L0,8 Z" fill={arrowColor} />
//                     </marker>
//                   </defs>
//                   {satellites.map((sat, i) => {
//                     const cx = 150;
//                     const cy = 150;
//                     const tx = 150 + sat.x;
//                     const ty = 150 + sat.y;
//                     const dx = tx - cx;
//                     const dy = ty - cy;
//                     const dist = Math.sqrt(dx * dx + dy * dy);
//                     const ux = dx / dist;
//                     const uy = dy / dist;
//                     // trim line so it starts at hub edge and stops just before satellite edge
//                     const x1 = cx + ux * CENTER_R;
//                     const y1 = cy + uy * CENTER_R;
//                     const x2 = tx - ux * (SAT_R + 6);
//                     const y2 = ty - uy * (SAT_R + 6);
//                     return (
//                       <line
//                         key={i}
//                         x1={x1}
//                         y1={y1}
//                         x2={x2}
//                         y2={y2}
//                         stroke={arrowColor}
//                         strokeWidth="1.75"
//                         markerEnd="url(#arrowhead)"
//                       />
//                     );
//                   })}
//                 </svg>

//                 {/* center */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: 110,
//                     height: 110,
//                     borderRadius: "50%",
//                     background: "linear-gradient(135deg,#3b82f6,#6366f1)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                     color: "#fff",
//                     fontWeight: 700,
//                   }}
//                 >
//                   <IconBriefcase size={24} />
//                   <Text size="xs" c="#fff">
//                     Our Team
//                   </Text>
//                 </div>

//                 {/* satellites */}
//                 {satellites.map((sat, i) => {
//                   const Icon = sat.icon;
//                   return (
//                     <motion.div
//                       key={i}
//                       style={{
//                         position: "absolute",
//                         left: `calc(50% + ${sat.x}px - 27px)`,
//                         top: `calc(50% + ${sat.y}px - 27px)`,
//                       }}
//                       animate={{ y: [0, -6, 0] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                       }}
//                     >
//                       <Tooltip label={sat.role}>
//                         <div
//                           style={{
//                             width: 54,
//                             height: 54,
//                             borderRadius: "50%",
//                             background: sat.color,
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <Icon size={22} color="#fff" />
//                         </div>
//                       </Tooltip>
//                     </motion.div>
//                   );
//                 })}
//               </Box>
//             </Box>
//           </Grid.Col>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default SoftwareOutsourcing;


import React from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Button,
  Group,
  Badge,
  Paper,
  SimpleGrid,
  Tooltip,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  IconRocket,
  IconUsers,
  IconAdjustmentsHorizontal,
  IconRefresh,
  IconMessageCircle,
  IconShieldCheck,
  IconHeadset,
  IconDeviceDesktop,
  IconServer2,
  IconTestPipe,
  IconSettingsCog,
  IconUserCog,
  IconBriefcase,
  IconBolt,
  IconWorld,
} from "@tabler/icons-react";

const capabilities = [
  { icon: IconUsers, label: "Dedicated Development Teams" },
  { icon: IconAdjustmentsHorizontal, label: "Flexible Hiring Models" },
  { icon: IconRefresh, label: "Daily Agile Collaboration" },
  { icon: IconMessageCircle, label: "Transparent Communication" },
  { icon: IconShieldCheck, label: "Enterprise Security" },
  { icon: IconHeadset, label: "Long-Term Technical Support" },
];

const techStack = [
  "React",
  "Java",
  "Spring Boot",
  "Node.js",
  "Docker",
  "AWS",
  "Kubernetes",
];

// blue-themed satellites
const satellites = [
  {
    icon: IconDeviceDesktop,
    role: "Frontend",
    color: "#3b82f6",
    x: 0,
    y: -130,
  },
  { icon: IconServer2, role: "Backend", color: "#6366f1", x: 123.6, y: -40.2 },
  { icon: IconTestPipe, role: "QA", color: "#06b6d4", x: 76.4, y: 105.2 },
  {
    icon: IconSettingsCog,
    role: "DevOps",
    color: "#2563eb",
    x: -76.4,
    y: 105.2,
  },
  {
    icon: IconUserCog,
    role: "Project Manager",
    color: "#4f46e5",
    x: -123.6,
    y: -40.2,
  },
];

const SoftwareOutsourcing = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const arrowColor = isDark ? "rgba(148,163,184,.55)" : "rgba(59,130,246,.55)";

  // radius of the center hub (half of 110) and satellite (half of 54),
  // used to trim the line so it starts/ends at each circle's edge instead of its center
  const CENTER_R = 55;
  const SAT_R = 27;

  return (
    <Container size="xl" py={40}>
      <Paper
        radius="xl"
        shadow="xl"
        withBorder
        p={0}
        style={{
          overflow: "hidden",
          background: isDark ? "#0f172a" : "#ffffff",
        }}
      >
        <Grid gutter={0}>
          {/* LEFT SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box p={{ base: 32, sm: 48, lg: 60 }}>

              <Group gap={8}>
                <Text
                  tt="uppercase"
                  fw={700}
                  size="xs"
                  c="cyan"
                  style={{
                    letterSpacing: 2,
                  }}
                  mb={14}
                >
                  Software Outsourcing
                </Text>
              </Group>
              <Title
                order={2}
                style={{
                  fontSize: "38px",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: textPrimary,
                }}
              >
                Scale Your Team With World-Class Software Engineers
              </Title>

              <Text
                mt="md"
                size="md"
                maw={480}
                style={{ color: textSecondary }}
              >
                Extend your in-house team with experienced engineers, QA
                specialists, DevOps experts, and project managers — delivered
                with speed and transparency.
              </Text>

              <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" mt={32}>
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
                      <Box
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isDark
                            ? "rgba(59,130,246,.15)"
                            : "rgba(59,130,246,.1)",
                        }}
                      >
                        <Icon size={15} color="#3b82f6" />
                      </Box>
                      <Text size="sm" mt={3} style={{ color: textSecondary }}>
                        {c.label}
                      </Text>
                    </Group>
                  );
                })}
              </SimpleGrid>

              <Box mt={32}>
                <Text fw={600} mb="xs" size="sm" style={{ color: textPrimary }}>
                  Tech Stack We Use
                </Text>
                <Group gap={8}>
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="light" color="blue" radius="sm">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Box>

              <Button
                mt={36}
                size="md"
                radius="md"
                rightSection={<IconRocket size={18} />}
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                }}
              >
                Hire Dedicated Developers
              </Button>
            </Box>
          </Grid.Col>

          {/* RIGHT SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: "relative",
                minHeight: 560,
                background: isDark
                  ? "radial-gradient(circle at 50% 42%, rgba(59,130,246,.35), transparent 60%), linear-gradient(160deg, #0b1220, #111827)"
                  : "radial-gradient(circle at 50% 42%, rgba(59,130,246,.18), transparent 60%), linear-gradient(160deg, #eef2ff, #f5f7ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "56px 32px",
                overflow: "hidden",
                flexDirection: "column",
              }}
            >
              {/* dot grid */}
              <Box
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `radial-gradient(rgba(59,130,246,.08) 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />

              <Text
                size="xs"
                fw={700}
                mb={28}
                style={{
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: isDark ? "rgba(203,213,225,.6)" : "rgba(71,85,105,.7)",
                }}
              >
                Cross-Functional Delivery Team
              </Text>

              {/* orbit */}
              <Box style={{ position: "relative", width: 300, height: 300 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "1.5px dashed rgba(59,130,246,.35)",
                  }}
                />

                {/* curved loop arrows following the orbit: Frontend -> Backend -> QA -> DevOps -> PM -> Frontend */}
                <svg
                  width="300"
                  height="300"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    overflow: "visible",
                  }}
                >
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="7"
                      refY="5"
                      orient="auto"
                      markerUnits="userSpaceOnUse"
                    >
                      <path d="M0,0 L10,5 L0,10 Z" fill={arrowColor} />
                    </marker>
                  </defs>
                  {satellites.map((sat, i) => {
                    const next = satellites[(i + 1) % satellites.length];
                    const cx = 150;
                    const cy = 150;

                    // orbit radius (all satellites sit on the same circle)
                    const R = Math.sqrt(sat.x * sat.x + sat.y * sat.y);

                    const startAngle = Math.atan2(sat.y, sat.x);
                    let endAngle = Math.atan2(next.y, next.x);
                    if (endAngle <= startAngle) endAngle += Math.PI * 2;

                    // leave a gap near each satellite circle so the arc
                    // doesn't run under the icons
                    const gap = 0.28; // radians (~16deg)
                    const a1 = startAngle + gap;
                    const a2 = endAngle - gap;

                    const x1 = cx + R * Math.cos(a1);
                    const y1 = cy + R * Math.sin(a1);
                    const x2 = cx + R * Math.cos(a2);
                    const y2 = cy + R * Math.sin(a2);

                    const path = `M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`;

                    return (
                      <path
                        key={i}
                        d={path}
                        fill="none"
                        stroke={arrowColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        markerEnd="url(#arrowhead)"
                      />
                    );
                  })}
                </svg>

                {/* center */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  <IconBriefcase size={24} />
                  <Text size="xs" c="#fff">
                    Our Team
                  </Text>
                </div>

                {/* satellites */}
                {satellites.map((sat, i) => {
                  const Icon = sat.icon;
                  return (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${sat.x}px - 27px)`,
                        top: `calc(50% + ${sat.y}px - 27px)`,
                      }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <Tooltip label={sat.role}>
                        <div
                          style={{
                            width: 54,
                            height: 54,
                            borderRadius: "50%",
                            background: sat.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={22} color="#fff" />
                        </div>
                      </Tooltip>
                    </motion.div>
                  );
                })}
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SoftwareOutsourcing;
