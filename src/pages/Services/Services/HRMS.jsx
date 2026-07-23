import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconUsers,
  IconClockHour4,
  IconCalendarEvent,
  IconWallet,
  IconClipboardCheck,
  IconDeviceAnalytics,
  IconShieldCheck,
  IconArrowRight,
  IconBuilding,
  IconChartBar,
  IconUserCheck,
} from "@tabler/icons-react";

const modules = [
  {
    title: "Employee Management",
    icon: IconUsers,
    desc: "Manage employee profiles, departments, designations and complete employee lifecycle.",
  },
  {
    title: "Attendance",
    icon: IconClockHour4,
    desc: "Track attendance, shifts, overtime, late arrivals and work hours in real time.",
  },
  {
    title: "Leave Management",
    icon: IconCalendarEvent,
    desc: "Simple leave requests, approvals, leave balance and holiday calendar.",
  },
  {
    title: "Payroll",
    icon: IconWallet,
    desc: "Generate salary slips, deductions, bonuses and payroll reports effortlessly.",
  },
  {
    title: "Task Management",
    icon: IconClipboardCheck,
    desc: "Assign projects, monitor task progress and improve team productivity.",
  },
  {
    title: "Reports & Analytics",
    icon: IconDeviceAnalytics,
    desc: "Powerful dashboards with attendance, payroll and employee performance reports.",
  },
];

const features = [
  "Cloud Based HRMS",
  "Role Based Access",
  "Employee Self Service",
  "Responsive Design",
  "Secure Authentication",
  "Attendance Tracking",
  "Leave Workflow",
  "Payroll Automation",
];

const HRMS = () => {
  const colorScheme = useComputedColorScheme("light");

  const cardBg =
    colorScheme === "dark"
      ? "rgba(255,255,255,.04)"
      : "rgba(255,255,255,.85)";

  return (
    <Box py={90}>
      <Container size="xl">
        <Grid align="center" gutter={60}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Badge
                variant="light"
                color="blue"
                size="lg"
                w="fit-content"
              >
                HR Management System
              </Badge>

              <Title order={1} fz={48}>
                Smart HRMS Software
                <Text component="span" c="blue">
                  {" "}
                  for Modern Businesses
                </Text>
              </Title>

              <Text size="lg" c="dimmed">
                Streamline your HR operations with our all-in-one Human Resource
                Management System. Manage employees, attendance, payroll,
                leaves, recruitment and performance from a single dashboard.
              </Text>

              <Group>
                <Button
                  size="md"
                  radius="xl"
                  rightSection={<IconArrowRight size={18} />}
                >
                  Request Demo
                </Button>

                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              radius="xl"
              p={35}
              bg={cardBg}
              style={{
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0,150,255,.15)",
              }}
            >
              <SimpleGrid cols={2}>
                <Card shadow="sm" radius="lg">
                  <Group>
                    <ThemeIcon color="blue" radius="xl" size={45}>
                      <IconBuilding size={22} />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>500+</Text>
                      <Text size="sm" c="dimmed">
                        Companies
                      </Text>
                    </div>
                  </Group>
                </Card>

                <Card shadow="sm" radius="lg">
                  <Group>
                    <ThemeIcon color="cyan" radius="xl" size={45}>
                      <IconUsers size={22} />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>25K+</Text>
                      <Text size="sm" c="dimmed">
                        Employees
                      </Text>
                    </div>
                  </Group>
                </Card>

                <Card shadow="sm" radius="lg">
                  <Group>
                    <ThemeIcon color="green" radius="xl" size={45}>
                      <IconChartBar size={22} />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>99.9%</Text>
                      <Text size="sm" c="dimmed">
                        Uptime
                      </Text>
                    </div>
                  </Group>
                </Card>

                <Card shadow="sm" radius="lg">
                  <Group>
                    <ThemeIcon color="orange" radius="xl" size={45}>
                      <IconUserCheck size={22} />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>24/7</Text>
                      <Text size="sm" c="dimmed">
                        Support
                      </Text>
                    </div>
                  </Group>
                </Card>
              </SimpleGrid>
            </Card>
          </Grid.Col>
        </Grid>

        <Stack mt={90} align="center" mb={40}>
          <Badge color="cyan" variant="light">
            HRMS Modules
          </Badge>

          <Title order={2}>
            Everything You Need To Manage Employees
          </Title>

          <Text maw={700} ta="center" c="dimmed">
            Powerful HR modules designed to simplify everyday HR operations and
            increase productivity.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {modules.map((item) => (
            <Card
              key={item.title}
              radius="xl"
              p="xl"
              bg={cardBg}
              style={{
                border: "1px solid rgba(0,150,255,.15)",
                transition: ".3s",
              }}
            >
              <ThemeIcon
                size={60}
                radius="xl"
                variant="light"
                color="blue"
                mb="md"
              >
                <item.icon size={28} />
              </ThemeIcon>

              <Title order={4}>{item.title}</Title>

              <Text mt="sm" c="dimmed">
                {item.desc}
              </Text>
            </Card>
          ))}
        </SimpleGrid>

        <Grid mt={90} gutter={60}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>
              Why Choose Our HRMS?
            </Title>

            <Text mt="md" c="dimmed">
              Our HRMS simplifies every HR process from employee onboarding to
              payroll and performance management. It helps organizations save
              time, improve transparency and increase productivity.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <SimpleGrid cols={2}>
              {features.map((feature) => (
                <Group key={feature}>
                  <ThemeIcon color="green" variant="light">
                    <IconShieldCheck size={16} />
                  </ThemeIcon>

                  <Text>{feature}</Text>
                </Group>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default HRMS;