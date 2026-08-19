// // import { Box, Card, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
// // import { IconPhoto } from "@tabler/icons-react";
// // import { motion } from "framer-motion";

// // // 👉 Screenshot placeholders - inhe apni actual product screenshots se replace karna
// // const screenshots = [
// //   { label: "Dashboard Overview" },
// //   { label: "Attendance & Leave" },
// //   { label: "Payroll Summary" },
// // ];

// // const HRMSResults = () => {
// //   const colorScheme = useComputedColorScheme("light");
// //   const isDark = colorScheme === "dark";

// //   return (
// //     <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
// //       <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
// //         <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
// //           See NexHRMS in action
// //         </Title>
// //         <Text ta="center" maw={650} c="dimmed" px="sm">
// //           A quick look at the dashboards your team will use every day.
// //         </Text>
// //       </Stack>

// //       <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
// //         {screenshots.map((shot, index) => (
// //           <motion.div
// //             key={shot.label}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.4, delay: index * 0.05 }}
// //           >
// //             <Card radius="lg" withBorder shadow="sm" p={0} style={{ overflow: "hidden" }}>
// //               <Box
// //                 style={{
// //                   height: 200,
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   background: isDark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
// //                 }}
// //               >
// //                 {/* Replace this Box with: <img src="/path-to-screenshot.png" alt={shot.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
// //                 <IconPhoto size={40} color={isDark ? "#475569" : "#94a3b8"} />
// //               </Box>
// //               <Box p="md">
// //                 <Text fw={600} size="sm">
// //                   {shot.label}
// //                 </Text>
// //               </Box>
// //             </Card>
// //           </motion.div>
// //         ))}
// //       </SimpleGrid>
// //     </Box>
// //   );
// // };

// // export default HRMSResults;

// import { Box, Card, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
// import { motion } from "framer-motion";

// const screenshots = [
//   { 
//     label: "Dashboard Overview",
//     image: "/Images/dashboard-overview.png" 
//   },
//   { 
//     label: "Attendance & Leave",
//     image: "/Images/attendance-leave.png" 
//   },
//   { 
//     label: "Payroll Summary",
//     image: "/Images/payroll-summary.png" 
//   },
// ];

// const HRMSResults = () => {
//   const colorScheme = useComputedColorScheme("light");
//   const isDark = colorScheme === "dark";

//   return (
//     <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
//       <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
//         <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
//           See NexHRMS in action
//         </Title>
//         <Text ta="center" maw={650} c="dimmed" px="sm">
//           A quick look at the dashboards your team will use every day.
//         </Text>
//       </Stack>

//       <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
//         {screenshots.map((shot, index) => (
//           <motion.div
//             key={shot.label}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//           >
//             <Card radius="lg" withBorder shadow="sm" p={0} style={{ overflow: "hidden" }}>
//               <Box
//                 style={{
//                   height: 200,
//                   background: isDark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
//                   position: "relative",
//                 }}
//               >
//                 <img
//                   src={shot.image}
//                   alt={shot.label}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                   onError={(e) => {
//                     // Agar image na mile toh placeholder dikhega
//                     e.currentTarget.style.display = "none";
//                     const parent = e.currentTarget.parentElement;
//                     if (parent) {
//                       parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16V4a2 2 0 01-2-2H6a2 2 0 01-2 2v12z" />
//                         </svg>
//                       </div>`;
//                     }
//                   }}
//                 />
//               </Box>
//               <Box p="md">
//                 <Text fw={600} size="sm">
//                   {shot.label}
//                 </Text>
//               </Box>
//             </Card>
//           </motion.div>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default HRMSResults;

import { Box, Container, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
import { IconLayoutDashboard, IconCalendarStats, IconReceipt2 } from "@tabler/icons-react";
import { motion } from "framer-motion";

const screenshots = [
  {
    label: "Dashboard Overview",
    caption: "Everything your HR team checks first, in one screen.",
    image: "/Images/dashboard-overview.png",
    icon: IconLayoutDashboard,
  },
  {
    label: "Attendance & Leave",
    caption: "Clock-ins, approvals, and balances tracked in real time.",
    image: "/Images/attendance-leave.png",
    icon: IconCalendarStats,
  },
  {
    label: "Payroll Summary",
    caption: "Payroll runs, payslips, and deductions, fully reconciled.",
    image: "/Images/payroll-summary.png",
    icon: IconReceipt2,
  },
];

const HRMSResults = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";
  const accent = "#14b8a6";

  return (
    <Box
      component="section"
      py={{ base: 60, md: 90 }}
      style={{
        position: "relative",
        background: isDark
          ? "radial-gradient(60% 50% at 50% 0%, rgba(20,184,166,0.09), transparent)"
          : "radial-gradient(60% 50% at 50% 0%, rgba(20,184,166,0.06), transparent)",
      }}
    >
      <Container size="lg" px={{ base: 16, sm: 24, md: 32 }}>
        <Stack gap={10} mb={{ base: 40, md: 56 }} align="center">
          <Text
            style={{
              color: accent,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 2,
            }}
          >
            Product tour
          </Text>
          <Title
            order={2}
            ta="center"
            fw={800}
            style={{ fontSize: "clamp(1.7rem,3.4vw,2.4rem)", letterSpacing: -0.5 }}
          >
            See NexHRMS in action
          </Title>
          <Text ta="center" maw={560} c="dimmed" px="sm">
            Real screens from the product — the dashboards your team will open every day.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={28}>
          {screenshots.map((shot, index) => {
            const Icon = shot.icon;
            return (
              <motion.div
                key={shot.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="hrms-card"
              >
                {/* Gradient border wrapper — lights up on hover */}
                <Box
                  className="hrms-card-border"
                  style={{
                    borderRadius: 20,
                    padding: 1,
                    background: isDark
                      ? "linear-gradient(155deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))"
                      : "linear-gradient(155deg, rgba(15,23,42,0.08), rgba(15,23,42,0.02))",
                  }}
                >
                  <Box
                    style={{
                      borderRadius: 19,
                      overflow: "hidden",
                      background: isDark ? "#0d1420" : "#ffffff",
                      boxShadow: isDark
                        ? "0 1px 0 rgba(255,255,255,0.04) inset"
                        : "0 1px 0 rgba(255,255,255,0.6) inset",
                    }}
                  >
                    {/* Browser-style chrome bar */}
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "12px 14px",
                        borderBottom: isDark
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "1px solid rgba(15,23,42,0.06)",
                      }}
                    >
                      <Box style={{ width: 9, height: 9, borderRadius: "50%", background: "#f87171" }} />
                      <Box style={{ width: 9, height: 9, borderRadius: "50%", background: "#fbbf24" }} />
                      <Box style={{ width: 9, height: 9, borderRadius: "50%", background: "#34d399" }} />
                      <Text
                        size="xs"
                        fw={600}
                        c="dimmed"
                        style={{ marginLeft: 8, letterSpacing: 0.2 }}
                      >
                        nexhrms
                      </Text>
                    </Box>

                    {/* Screenshot area — full image, never cropped */}
                    <Box
                      style={{
                        position: "relative",
                        padding: 16,
                        background: isDark
                          ? "linear-gradient(180deg, rgba(20,184,166,0.07), transparent 40%)"
                          : "linear-gradient(180deg, rgba(20,184,166,0.05), transparent 40%)",
                      }}
                    >
                      <Box
                        style={{
                          height: 210,
                          borderRadius: 12,
                          overflow: "hidden",
                          background: isDark ? "#0a0f1a" : "#f1f5f9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={shot.image}
                          alt={shot.label}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                            display: "block",
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:${isDark ? "#475569" : "#94a3b8"};">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16V4a2 2 0 01-2-2H6a2 2 0 01-2 2v12z" />
                                </svg>
                              </div>`;
                            }
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Label + caption footer */}
                    <Box
                      p="lg"
                      pt="md"
                      style={{
                        borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(15,23,42,0.05)",
                      }}
                    >
                      <Box style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <Box
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 9,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            background: isDark ? "rgba(20,184,166,0.14)" : "rgba(20,184,166,0.10)",
                          }}
                        >
                          <Icon size={16} color={accent} stroke={2} />
                        </Box>
                        <Text fw={700} size="sm">
                          {shot.label}
                        </Text>
                      </Box>
                      <Text size="xs" c="dimmed" style={{ lineHeight: 1.6 }}>
                        {shot.caption}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>

      <style>{`
        .hrms-card { cursor: pointer; }
        .hrms-card-border {
          transition: background 300ms ease;
        }
        .hrms-card:hover .hrms-card-border {
          background: linear-gradient(155deg, ${accent}, rgba(20,184,166,0.15)) !important;
        }
        .hrms-card:hover img {
          transform: scale(1.02);
        }
        .hrms-card img {
          transition: transform 350ms ease;
        }
      `}</style>
    </Box>
  );
};

export default HRMSResults;