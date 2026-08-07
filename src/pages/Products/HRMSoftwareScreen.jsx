import React from "react";
import {
  Box,
  Badge,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconUsers,
  IconCurrencyRupee,
  IconCalendarCheck,
  IconChartBar,
  IconArrowRight,
  IconPointFilled,
  IconSparkles,
  IconShieldCheck,
  IconStarFilled,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

/* ── static data (no colors here) ─────────────────── */
const features = [
  { icon: IconUsers,         title: "Recruitment & Onboarding", desc: "End-to-end hiring pipeline with automated offer letters and digital onboarding", color: "#6366F1" },
  { icon: IconCurrencyRupee, title: "Payroll & Compliance",     desc: "Auto-calculate salary and all statutory with one-click payslip", color: "#F59E0B" },
  { icon: IconCalendarCheck, title: "Attendance & Leave",       desc: "Application-based attendance, geo-fencing, and smart leave management with real-time tracking", color: "#10B981" },
  { icon: IconChartBar,      title: "Performance Management",   desc: "360° appraisals, KPI tracking, and goal-setting to drive employee growth", color: "#EC4899" },
];

const bullets = [
  "PF, ESI & all statutory compliance built-in for Indian businesses",
  "Employee self-service portal on mobile & web",
];

/* Hero image — fresh Indian office/team photo (Unsplash) */
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1400&q=85";

/* ── component ─────────────────────────────────────── */
const HRMSoftwareScreen = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  /* ── semantic token system derived from isDark ── */
  const accent     = isDark ? "#00D4C8"                : "#0891B2";
  const accent2    = isDark ? "#6366F1"                : "#2563EB";
  const accentDim  = isDark ? "rgba(0,212,200,0.12)"   : "rgba(8,145,178,0.10)";
  const surface    = isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)";
  const border     = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.12)";
  const textMain   = isDark ? "#ffffff"                : "#0f172a";
  const textSub    = isDark ? "rgba(255,255,255,0.75)" : "#334155";
  const textDim    = isDark ? "rgba(255,255,255,0.45)" : "#64748b";
  const btnPrimCol = isDark ? "#0a0f1e"                : "#ffffff";
  const cardBg     = isDark ? "#0f1729"                : "#ffffff";

  return (
    <Box style={{ position: "relative", overflow: "hidden" }}>
      {/* ── decorative background glows ── */}
      <Box style={{
        position: "absolute", top: -120, left: -120, width: 380, height: 380,
        borderRadius: "50%", background: accent, opacity: isDark ? 0.10 : 0.12,
        filter: "blur(100px)", pointerEvents: "none",
      }}/>
      <Box style={{
        position: "absolute", bottom: -140, right: -140, width: 420, height: 420,
        borderRadius: "50%", background: accent2, opacity: isDark ? 0.10 : 0.10,
        filter: "blur(110px)", pointerEvents: "none",
      }}/>

      <Container size="xl" py={{ base:50, md:80 }} style={{ position:"relative", zIndex:1 }}>
        <Grid gutter={{ base:40, md:60 }} align="stretch">

          {/* ══════════════ LEFT ══════════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:-30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7 }}
              style={{ height: "100%" }}
            >
              <Stack gap={20} style={{ height: "100%" }}>

                {/* eyebrow pill */}
                <Group gap={8} align="center">
                  <Badge
                    size="lg"
                    radius="xl"
                    variant="light"
                    leftSection={<IconSparkles size={13} />}
                    style={{
                      background: accentDim,
                      color: accent,
                      fontWeight: 700,
                      letterSpacing: 1,
                      border: `1px solid ${accent}33`,
                    }}
                  >
                    HRM SOFTWARE
                  </Badge>
                  <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                    NEX HRM
                  </Text>
                </Group>

                {/* headline with gradient highlight */}
                <Title
                  order={1}
                  style={{
                    color: textMain,
                    fontWeight: 900,
                    fontSize: "clamp(1.9rem,3.5vw,2.9rem)",
                    lineHeight: 1.14,
                    letterSpacing: -0.5,
                  }}
                >
                  Complete{" "}
                  <span style={{
                    background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    HR Management
                  </span>
                  <br />for Modern Businesses
                </Title>

                {/* description */}
                <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                  NEX HRM is a comprehensive Human Resource Management software
                  designed to streamline every aspect of your HR operations from
                  Hiring and onboarding to payroll, attendance, and performance
                  management. Built specifically for Indian businesses, it ensures PF,
                  ESI, and all statutory compliance while empowering HR teams to
                  focus on people, not paperwork.
                </Text>

                {/* feature 2×2 grid */}
                <SimpleGrid cols={2} spacing={12} mt={4}>
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ delay:0.15 + i*0.08, duration:0.5 }}
                        style={{ height:"100%" }}
                      >
                        <Box
                          className="hrm-feat-card"
                          style={{
                            background: surface,
                            border: `1px solid ${border}`,
                            borderRadius: 14,
                            padding: "16px 14px",
                            height: "100%",
                            backdropFilter: "blur(12px)",
                            transition: "transform .25s, border-color .25s, box-shadow .25s",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Group gap={8} mb={8} wrap="nowrap">
                            <Box style={{
                              width:30, height:30, borderRadius:9,
                              background: `${f.color}1F`,
                              display:"flex", alignItems:"center", justifyContent:"center",
                              flexShrink:0,
                            }}>
                              <Icon size={16} color={f.color} />
                            </Box>
                            <Text size="xs" fw={700} style={{ color:textMain, lineHeight:1.3 }}>
                              {f.title}
                            </Text>
                          </Group>
                          <Text size="xs" lh={1.7} style={{ color:textDim }}>
                            {f.desc}
                          </Text>
                        </Box>
                      </motion.div>
                    );
                  })}
                </SimpleGrid>

                {/* bullet list */}
                <Stack gap={8} mt={4}>
                  {bullets.map((b, i) => (
                    <Group key={i} gap={8} wrap="nowrap" align="flex-start">
                      <Box style={{
                        width:18, height:18, borderRadius:"50%",
                        background: accentDim, display:"flex", alignItems:"center",
                        justifyContent:"center", flexShrink:0, marginTop:1,
                      }}>
                        <IconPointFilled size={9} color={accent} />
                      </Box>
                      <Text size="sm" style={{ color:textSub }}>{b}</Text>
                    </Group>
                  ))}
                </Stack>

                {/* CTAs */}
                <Group gap={12} mt={10}>
                  <Button
                    size="md"
                    radius="xl"
                    rightSection={<IconArrowRight size={16}/>}
                    style={{
                      background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                      color: btnPrimCol,
                      fontWeight: 700,
                      border: "none",
                      boxShadow: `0 10px 26px ${accentDim}`,
                    }}
                    className="hrm-btn"
                    onClick={()=> navigate("/contact")}
                  >
                    Get Free Consultation
                  </Button>
                </Group>

              </Stack>
            </motion.div>
          </Grid.Col>

          {/* ══════════════ RIGHT — bigger hero image ══════════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:30, scale:0.97 }}
              animate={{ opacity:1, x:0, scale:1 }}
              transition={{ duration:0.7, delay:0.1 }}
              style={{ height:"100%" }}
            >
              <Box style={{
                position:"relative",
                height:"90%",
                minHeight: 560,
                borderRadius:28,
                padding:3,
                background: `linear-gradient(145deg, ${accent}55, transparent 40%, ${accent2}45)`,
              }}>
                <Box style={{
                  borderRadius:26, overflow:"hidden", position:"relative",
                  height:"100%", minHeight: 554,
                  border:`1px solid ${border}`,
                  boxShadow: isDark
                    ? "0 30px 70px rgba(0,0,0,0.55)"
                    : "0 30px 70px rgba(37,99,235,0.20)",
                }}>
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Indian HR team collaborating in a modern office"
                    style={{
                      position:"absolute", inset:0,
                      width:"100%", height:"100%",
                      objectFit:"cover",
                      filter: isDark ? "brightness(0.78) saturate(1.08)" : "brightness(0.98) saturate(1.05)",
                    }}
                    loading="lazy"
                  />

                  {/* gradient overlay for legibility */}
                  <Box style={{
                    position:"absolute", inset:0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.68) 100%)",
                  }}/>

                

                  {/* bottom labels */}
                  <Box style={{
                    position:"absolute", bottom:0, left:0, right:0,
                    display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                    padding:"18px 20px",
                  }}>
                    <Stack gap={2}>
                      <Text fw={800} size="lg" c="white">NEX HRM</Text>
                      <Text size="xs" c="rgba(255,255,255,0.75)">Trusted by growing Indian companies</Text>
                    </Stack>
                    <Badge
                      size="md"
                      style={{
                        border: `1px solid ${accent}55`,
                        background: `${accent}33`,
                        color: "#fff",
                        fontWeight: 700,
                        letterSpacing: 1,
                      }}
                    >
                      HUMAN RESOURCES
                    </Badge>
                  </Box>
                </Box>
                
              </Box>
            </motion.div>
          </Grid.Col>

        </Grid>

        <style>{`
          .hrm-feat-card:hover {
            transform: translateY(-4px);
            border-color: ${accent}55 !important;
            box-shadow: 0 10px 30px ${accentDim} !important;
          }
          .hrm-btn {
            transition: transform .22s ease, box-shadow .22s ease !important;
          }
          .hrm-btn:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 14px 32px ${accentDim} !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .hrm-feat-card, .hrm-btn { transition: none !important; }
          }
        `}</style>
      </Container>
    </Box>
  );
};

export default HRMSoftwareScreen;