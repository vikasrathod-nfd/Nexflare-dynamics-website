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
  IconTrendingUp,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

/* ── static data (no colors here) ─────────────────── */
const features = [
  { icon: IconUsers,         title: "Recruitment & Onboarding", desc: "End-to-end hiring pipeline with automated offer letters and digital onboarding", color: "#6366F1" },
  { icon: IconCurrencyRupee, title: "Payroll & Compliance",     desc: "Auto-calculate salary, PF, ESI, TDS with one-click payslip generation", color: "#F59E0B" },
  { icon: IconCalendarCheck, title: "Attendance & Leave",       desc: "Biometric integration, geo-fencing, and smart leave management with real-time tracking", color: "#10B981" },
  { icon: IconChartBar,      title: "Performance Management",   desc: "360° appraisals, KPI tracking, and goal-setting to drive employee growth", color: "#EC4899" },
];

const bullets = [
  "PF, ESI & TDS compliance built-in for Indian businesses",
  "Employee self-service portal on mobile & web",
  "Integrates seamlessly with NEX ERP & Accounting",
  "Configurable for any industry — manufacturing to IT",
];



/* Hero image - replace this URL with your own asset anytime */
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";

/* ── component ─────────────────────────────────────── */
const HRMSoftwareScreen = () => {

  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  /* ── semantic token system derived from isDark ── */
  const accent     = isDark ? "#00D4C8"                      : "#0891B2";
  const accent2    = isDark ? "#6366F1"                      : "#2563EB";
  const accentDim  = isDark ? "rgba(0,212,200,0.12)"         : "rgba(8,145,178,0.10)";
  const surface    = isDark ? "rgba(255,255,255,0.04)"        : "rgba(255,255,255,0.85)";
  const surface2   = isDark ? "rgba(255,255,255,0.06)"        : "rgba(255,255,255,0.95)";
  const border     = isDark ? "rgba(255,255,255,0.08)"        : "rgba(37,99,235,0.12)";
  const textMain   = isDark ? "#ffffff"                      : "#0f172a";
  const textSub    = isDark ? "rgba(255,255,255,0.75)"        : "#334155";
  const textDim    = isDark ? "rgba(255,255,255,0.45)"        : "#64748b";
  const statGood   = isDark ? "#00D4C8"                      : "#0891B2";
  const statNeutral= isDark ? "rgba(255,255,255,0.75)"        : "#475569";
  const statWarn   = isDark ? "#f87171"                      : "#ef4444";
  const barEmpty   = isDark ? "rgba(255,255,255,0.10)"        : "rgba(37,99,235,0.10)";
  const btnPrimCol = isDark ? "#0a0f1e"                      : "#ffffff";

  /* dashboard stats use tokens */
  const dashStats = [
    { label: "Total Employees",     value: "342 Active", color: statGood    },
    { label: "Payroll Compliance",  value: "100% ✓",     color: statGood    },
    { label: "Attendance Accuracy", value: "99.1%",      color: statNeutral },
    { label: "Appraisals Pending",  value: "12 Due",     color: statWarn    },
  ];

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
        <Grid gutter={{ base:40, md:60 }} align="flex-start">

          {/* ══════════════ LEFT ══════════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:-30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7 }}
            >
              <Stack gap={20}>

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
                  designed to streamline every aspect of your HR operations — from
                  recruitment and onboarding to payroll, attendance, and performance
                  management. Built specifically for Indian businesses, it ensures PF,
                  ESI, and TDS compliance while empowering HR teams to focus on people,
                  not paperwork.
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

          {/* ══════════════ RIGHT ══════════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7, delay:0.1 }}
            >
              <Stack gap={16}>

                {/* Hero image card — real photo with floating stat pills */}
                <Box style={{
                  borderRadius:20, overflow:"visible", position:"relative",
                }}>
                  <Box style={{
                    borderRadius:20, overflow:"hidden", position:"relative",
                    border:`1px solid ${border}`, height:260,
                    boxShadow: isDark
                      ? "0 20px 50px rgba(0,0,0,0.45)"
                      : "0 20px 50px rgba(37,99,235,0.15)",
                  }}>
                    <img
                      src={HERO_IMAGE_URL}
                      alt="HR team collaborating"
                      style={{
                        position:"absolute", inset:0,
                        width:"100%", height:"100%",
                        objectFit:"cover",
                        filter: isDark ? "brightness(0.75) saturate(1.05)" : "brightness(0.98)",
                      }}
                      loading="lazy"
                    />

                    {/* subtle overlay for text legibility */}
                    <Box style={{
                      position:"absolute", inset:0,
                      background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.60) 100%)",
                    }}/>

                    {/* bottom labels */}
                    <Box style={{
                      position:"absolute", bottom:0, left:0, right:0,
                      display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                      padding:"14px 18px",
                    }}>
                      <Text fw={700} size="sm" c="white">NEX HRM</Text>
                      <Badge
                        size="sm"
                        style={{
                          border: `1px solid ${accent}55`,
                          background: `${accent}22`,
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: 1,
                        }}
                      >
                        HUMAN RESOURCES
                      </Badge>
                    </Box>
                  </Box>

                  {/* floating stat pill overlapping the image */}
                  <motion.div
                    initial={{ opacity:0, y:14 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ delay:0.5, duration:0.5 }}
                    style={{
                      position:"absolute", left:16, top:-20,
                      display:"flex", gap:0,
                    }}
                  >
                    
                  </motion.div>
                </Box>

                {/* Dashboard card */}
                <motion.div
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.4, duration:0.55 }}
                >
                  <Box style={{
                    background: surface2,
                    border: `1px solid ${border}`,
                    borderRadius: 18,
                    padding: "20px 20px 16px",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(12px)",
                    boxShadow: isDark
                      ? "0 14px 34px rgba(0,0,0,0.35)"
                      : "0 14px 34px rgba(37,99,235,0.10)",
                  }}>
                    {/* top accent line */}
                    <Box style={{
                      position:"absolute", top:0, left:0, right:0, height:3,
                      background:`linear-gradient(90deg,${accent},${accent2})`,
                    }}/>

                    {/* header */}
                    <Group justify="space-between" mb={18} align="center">
                      <Group gap={6}>
                        {["#ef4444","#f59e0b","#22c55e"].map((c,i)=>(
                          <Box key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }}/>
                        ))}
                      </Group>
                      <Group gap={5}>
                        <Box style={{
                          width:6, height:6, borderRadius:"50%", background:"#22c55e",
                        }}/>
                        <Text fz={11} style={{ color:textDim, letterSpacing:1 }}>
                          HRM Dashboard — Live
                        </Text>
                      </Group>
                    </Group>

                    {/* stat rows */}
                    <Stack gap={10}>
                      {dashStats.map(({ label, value, color }, i) => (
                        <Group key={i} justify="space-between" align="center">
                          <Text size="xs" style={{ color:textDim }}>{label}</Text>
                          <Text size="xs" fw={700} style={{ color }}>{value}</Text>
                        </Group>
                      ))}
                    </Stack>

                    {/* progress bars */}
                    <Group gap={8} mt={18} wrap="nowrap">
                      {[
                        { flex:"28%", fill:false },
                        { flex:"22%", fill:true  },
                        { flex:"20%", fill:false },
                        { flex:"18%", fill:true  },
                        { flex:"12%", fill:true  },
                      ].map((bar, i) => (
                        <Box key={i} style={{
                          flex: bar.flex, height:8, borderRadius:4, minWidth:8,
                          background: bar.fill
                            ? `linear-gradient(90deg, ${accent}, ${accent2})`
                            : barEmpty,
                        }}/>
                      ))}
                    </Group>
                  </Box>
                </motion.div>

              </Stack>
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
