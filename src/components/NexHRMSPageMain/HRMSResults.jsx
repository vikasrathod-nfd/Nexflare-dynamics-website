// import { Box, Card, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
// import { IconPhoto } from "@tabler/icons-react";
// import { motion } from "framer-motion";

// // 👉 Screenshot placeholders - inhe apni actual product screenshots se replace karna
// const screenshots = [
//   { label: "Dashboard Overview" },
//   { label: "Attendance & Leave" },
//   { label: "Payroll Summary" },
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
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: isDark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
//                 }}
//               >
//                 {/* Replace this Box with: <img src="/path-to-screenshot.png" alt={shot.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
//                 <IconPhoto size={40} color={isDark ? "#475569" : "#94a3b8"} />
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


import { Box, Card, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";

const screenshots = [
  { 
    label: "Dashboard Overview",
    image: "/dashboard-overview.png" 
  },
  { 
    label: "Attendance & Leave",
    image: "/attendance-leave.png" 
  },
  { 
    label: "Payroll Summary",
    image: "/payroll-summary.png" 
  },
];

const HRMSResults = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  return (
    <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
        <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          See NexHRMS in action
        </Title>
        <Text ta="center" maw={650} c="dimmed" px="sm">
          A quick look at the dashboards your team will use every day.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {screenshots.map((shot, index) => (
          <motion.div
            key={shot.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card radius="lg" withBorder shadow="sm" p={0} style={{ overflow: "hidden" }}>
              <Box
                style={{
                  height: 200,
                  background: isDark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
                  position: "relative",
                }}
              >
                <img
                  src={shot.image}
                  alt={shot.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    // Agar image na mile toh placeholder dikhega
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16V4a2 2 0 01-2-2H6a2 2 0 01-2 2v12z" />
                        </svg>
                      </div>`;
                    }
                  }}
                />
              </Box>
              <Box p="md">
                <Text fw={600} size="sm">
                  {shot.label}
                </Text>
              </Box>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HRMSResults;