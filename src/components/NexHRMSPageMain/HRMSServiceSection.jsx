import { Box, Card, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import {
  IconUserPlus,
  IconClock,
  IconCalendarCheck,
  IconCash,
  IconChartBar,
  IconBriefcase,
  IconUsers,
  IconListCheck,
  IconMapPin,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

// 👉 Apne actual modules/features se replace karna
// Images: free-to-use Unsplash photos (no attribution required)
const coreModules = [
  {
    title: "Employee Onboarding",
    description:
      "NexHRMS simplifies employee onboarding with digital forms, document uploads, automated approvals, and instant employee profile creation.",
    icon: IconUserPlus,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80",
    learnMore: true,
    // highlighted: true,
  },
  {
    title: "Attendance Management",
    description:
      "NexHRMS provides real-time attendance tracking with mobile, web, biometric, and geo-based clock-in options.",
    icon: IconClock,
    color: "indigo",
    image:
      "https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Leave Management",
    description:
      "NexHRMS automates leave requests, approvals, leave balances, and policy configuration for smooth leave tracking.",
    icon: IconCalendarCheck,
    color: "grape",
    image:
      "https://akriviahcm.com/blog/wp-content/uploads/2023/12/The-Ultimate-Guide-to-Leave-Management.jpg",
  },
  {
    title: "Payroll Management",
    description:
      "NexHRMS enables automated payroll processing with salary structures, deductions, compliance, and payslip generation.",
    icon: IconCash,
    color: "green",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Reports & Analytics",
    description:
      "NexHRMS provides powerful HR reports, dashboards, and analytics to make data-driven business decisions.",
    icon: IconChartBar,
    color: "orange",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hiring & Onboarding",
    description:
      "NexHRMS manages hiring pipelines, candidate management, and seamless onboarding.",
    icon: IconBriefcase,
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "User Management",
    description:
      "NexHRMS allows role-based access, permission control, and centralized employee user management.",
    icon: IconUsers,
    color: "cyan",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80",
    learnMore: true,
    // highlighted: true,
  },
  {
    title: "Task Management",
    description:
      "NexHRMS helps assign, track, and monitor employee tasks with productivity and progress tracking.",
    icon: IconListCheck,
    color: "violet",
    image:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Geo Tracking",
    description:
      "NexHRMS enables GPS-based attendance, field employee tracking, and location-based monitoring.",
    icon: IconMapPin,
    color: "red",
    image:
      "https://images.unsplash.com/photo-1529775768124-fb874e73ac7e?auto=format&fit=crop&w=800&q=80",
  },
];

const HRMSServiceSection = () => {
  return (
    <Box py={{ base: 40, md: 60 }} px={{ base: 16, sm: 24, md: 32 }} style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Stack gap="md" mb={{ base: 30, md: 40 }} align="center">
        <Title order={2} ta="center" fw={800} style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          Everything HR needs, in one platform
        </Title>
        <Text ta="center" maw={650} c="dimmed" px="sm">
          NexHRMS covers the full employee lifecycle so your HR team can
          focus on people, not paperwork.
        </Text>
      </Stack>

      <Grid gutter="lg">
        {coreModules.map((mod, index) => {
          const Icon = mod.icon;
          return (
            <Grid.Col key={mod.title} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{ height: "100%" }}
              >
                <Card
                  radius="lg"
                  p={0}
                  withBorder
                  shadow="sm"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                    background: "#f3f3f4",
                    borderColor: mod.highlighted
                      ? "rgba(99,102,241,0.5)"
                      : "rgba(255,255,255,0.08)",
                    boxShadow: mod.highlighted
                      ? "0 0 0 1px rgba(99,102,241,0.35), 0 8px 24px rgba(99,102,241,0.18)"
                      : undefined,
                  }}
                >
                  {/* image */}
                  <Box
                    style={{
                      height: 170,
                      backgroundImage: `url("${mod.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* icon badge overlapping the image */}
                  <Box px="lg" style={{ marginTop: -22 }}>
                    <ThemeIcon
                      size={44}
                      radius="md"
                      color={mod.color}
                      variant="filled"
                      style={{ border: "3px solid #161B22" }}
                    >
                      <Icon size={22} />
                    </ThemeIcon>
                  </Box>

                  <Box px="lg" pb="lg" pt="md">
                    <Text fw={700} size="lg" c={mod.highlighted ? `${mod.color}.4` : "black.0"}>
                      {mod.title}
                    </Text>

                    <Text size="sm" c="black.5" mt={6} style={{ lineHeight: 1.6 }}>
                      {mod.description}
                    </Text>

                    
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HRMSServiceSection;