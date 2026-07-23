import {
    Badge,
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Group,
    Stack,
    Text,
    ThemeIcon,
    Title,
    useComputedColorScheme,
} from "@mantine/core";

import {
    IconArrowRight,
    IconArrowLeft,
    IconBrandWindows,
    IconCircleCheck,
    IconUsers,
    IconCalendarCheck,
    IconCash,
    IconChartBar,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 👉 In highlights ko apne actual selling points se replace karna
const highlights = [
    {
        text: "Reduce manual HR paperwork by automating routine tasks",
        icon: IconCircleCheck,
        color: "indigo",
    },
    {
        text: "Single source of truth for every employee record",
        icon: IconUsers,
        color: "teal",
    },
    {
        text: "Payroll that stays compliant as policies change",
        icon: IconCash,
        color: "orange",
    },
    {
        text: "Real-time visibility for managers and leadership",
        icon: IconChartBar,
        color: "pink",
    },
];

const chartBars = [38, 62, 45, 78, 55, 90, 68];

// Free Unsplash photo — "Team collaborating around a computer in an office" by Vitaly Gariev
// Free to use under the Unsplash License, no attribution required.
const HERO_BG_IMAGE =
    "https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?fm=jpg&q=80&w=2400&auto=format&fit=crop";

const HRMSHero = () => {
    const navigate = useNavigate();
    const colorScheme = useComputedColorScheme("light");
    const isDark = colorScheme === "dark";

    return (
        <Box
            py={{ base: 60, sm: 80, md: 100 }}
            pos="relative"
            style={{ overflow: "hidden" }}
            
        >
            {/* ================= BG IMAGE ================= */}
            <Box
                pos="absolute"
                inset={0}
                style={{
                    backgroundImage: `url("${HERO_BG_IMAGE}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    pointerEvents: "none",
                }}
            />
            {/* overlay so text stays readable over the photo, theme-aware */}
            <Box
                pos="absolute"
                inset={0}
                style={{
                    background: isDark
                        ? "linear-gradient(120deg, rgba(11,17,32,0.94) 0%, rgba(11,17,32,0.88) 45%, rgba(11,17,32,0.72) 100%)"
                        : "linear-gradient(120deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0.75) 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* ================= BACKGROUND ACCENTS ================= */}
            <Box
                pos="absolute"
                top={-120}
                left={-100}
                w={420}
                h={420}
                style={{
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(79,70,229,0.18) 0%, rgba(79,70,229,0) 70%)",
                    filter: "blur(10px)",
                    pointerEvents: "none",
                }}
            />
            <Box
                pos="absolute"
                bottom={-140}
                right={-80}
                w={480}
                h={480}
                style={{
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(20,184,166,0.16) 0%, rgba(20,184,166,0) 70%)",
                    filter: "blur(10px)",
                    pointerEvents: "none",
                }}
            />

            <Box
                style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}
                py={100}
                px={{ base: 16, sm: 24, md: 32 }}
            >
                {/* ================= BACK LINK ================= */}

                <Button
                    variant="subtle"
                    color="indigo"
                    radius="xl"
                    leftSection={<IconArrowLeft size={16} />}
                    onClick={() => navigate("/products")}
                    mb={{ base: 24, sm: 40 }}
                >
                    Back to Products
                </Button>

                <Grid align="center" gutter={{ base: 40, md: 70 }}>
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Stack gap="xl">
                                <Group gap="sm">
                                    <ThemeIcon
                                        size={54}
                                        radius="xl"
                                        variant="gradient"
                                        gradient={{ from: "indigo", to: "teal" }}
                                    >
                                        <IconBrandWindows size={28} />
                                    </ThemeIcon>

                                    <Badge size="lg" radius="xl" color="teal" variant="light">
                                        Live
                                    </Badge>
                                </Group>

                                <Text
                                    fw={700}
                                    size="sm"
                                    c="indigo"
                                    style={{ letterSpacing: 2, textTransform: "uppercase" }}
                                >
                                    People · Payroll · Compliance
                                </Text>

                                <Title
                                    order={1}
                                    style={{
                                        fontSize: "clamp(2.2rem,4.5vw,3.6rem)",
                                        lineHeight: 1.12,
                                        fontWeight: 900,
                                        color: isDark ? "#fff" : "#0F172A",
                                    }}
                                >
                                    NexHRMS
                                </Title>

                                <Text
                                    size="lg"
                                    c={isDark ? "gray.3" : "dimmed"}
                                    style={{ lineHeight: 1.9, maxWidth: 600 }}
                                >
                                    A complete Human Resource Management System that brings
                                    employee records, attendance, leave, and payroll together
                                    in one modern platform — built to remove manual work from
                                    everyday HR operations.
                                </Text>

                                <Group mt="sm">
                                    <Button
                                        size="lg"
                                        radius="xl"
                                        variant="gradient"
                                        gradient={{ from: "indigo", to: "teal" }}
                                        rightSection={<IconArrowRight size={18} />}
                                        styles={{
                                            root: { paddingInline: 28, height: 52, fontWeight: 600 },
                                        }}
                                        onClick={() => navigate("/contact")}
                                    >
                                        Request Demo
                                    </Button>

                                    <Button
                                        size="lg"
                                        radius="xl"
                                        variant="outline"
                                        color="indigo"
                                        styles={{
                                            root: { paddingInline: 28, height: 52, fontWeight: 600 },
                                        }}
                                        onClick={() =>
                                            document
                                                .getElementById("hrms-highlights")
                                                ?.scrollIntoView({ behavior: "smooth" })
                                        }
                                    >
                                        See what's included
                                    </Button>
                                </Group>
                            </Stack>
                        </motion.div>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ position: "relative" }}
                        >
                            {/* ================= DASHBOARD MOCKUP ================= */}
                            <Card
                                radius={24}
                                p={0}
                                shadow="xl"
                                withBorder
                                style={{
                                    overflow: "visible",
                                    background: isDark
                                        ? "rgba(255,255,255,0.04)"
                                        : "rgba(255,255,255,0.9)",
                                    backdropFilter: "blur(14px)",
                                }}
                            >
                                {/* window chrome bar */}
                                <Group
                                    px="md"
                                    py="sm"
                                    gap={6}
                                    style={{
                                        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.06)"
                                            }`,
                                    }}
                                >
                                    <Box w={10} h={10} style={{ borderRadius: "50%", background: "#FB7185" }} />
                                    <Box w={10} h={10} style={{ borderRadius: "50%", background: "#F59E0B" }} />
                                    <Box w={10} h={10} style={{ borderRadius: "50%", background: "#14B8A6" }} />
                                    <Text size="xs" c="dimmed" ml="xs">
                                        NexHRMS · Overview
                                    </Text>
                                </Group>

                                <Box p="lg">
                                    <Group justify="space-between" mb="md">
                                        <Text size="sm" fw={600} c={isDark ? "gray.2" : "dark"}>
                                            Payroll accuracy
                                        </Text>
                                        <Badge color="teal" variant="light" size="sm">
                                            99.9%
                                        </Badge>
                                    </Group>

                                    {/* animated bar chart */}
                                    <Group align="flex-end" gap={8} h={90}>
                                        {chartBars.map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 0.7, delay: 0.3 + i * 0.08 }}
                                                style={{
                                                    flex: 1,
                                                    borderRadius: 6,
                                                    background:
                                                        i === chartBars.length - 2
                                                            ? "linear-gradient(180deg,#4F46E5,#14B8A6)"
                                                            : isDark
                                                                ? "rgba(255,255,255,0.12)"
                                                                : "rgba(79,70,229,0.14)",
                                                }}
                                            />
                                        ))}
                                    </Group>

                                    <Divider my="lg" />

                                    <Stack gap="md" id="hrms-highlights">
                                        {highlights.map(({ text, icon: Icon, color }) => (
                                            <Group key={text} gap="sm" align="flex-start" wrap="nowrap">
                                                <ThemeIcon size={26} radius="xl" color={color} variant="light">
                                                    <Icon size={15} />
                                                </ThemeIcon>
                                                <Text size="sm" c={isDark ? "gray.2" : "dark"}>
                                                    {text}
                                                </Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </Box>
                            </Card>

                            {/* floating badge 1 */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ position: "absolute", top: -18, right: -18 }}
                            >
                                <Card radius="xl" shadow="md" p="sm" withBorder>
                                    <Group gap={8}>
                                        <ThemeIcon size={28} radius="xl" color="indigo" variant="light">
                                            <IconCalendarCheck size={16} />
                                        </ThemeIcon>
                                        <Box>
                                            <Text size="xs" fw={700}>
                                                Leave approved
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                2 sec ago
                                            </Text>
                                        </Box>
                                    </Group>
                                </Card>
                            </motion.div>

                            {/* floating badge 2 */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                style={{ position: "absolute", bottom: -16, left: -22 }}
                            >
                                <Card radius="xl" shadow="md" p="sm" withBorder>
                                    <Group gap={8}>
                                        <ThemeIcon size={28} radius="xl" color="teal" variant="light">
                                            <IconUsers size={16} />
                                        </ThemeIcon>
                                        <Box>
                                            <Text size="xs" fw={700}>
                                                500+ employees
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                managed live
                                            </Text>
                                        </Box>
                                    </Group>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </Grid.Col>
                </Grid>
            </Box>
        </Box>
    );
};

export default HRMSHero;