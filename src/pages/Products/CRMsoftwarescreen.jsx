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
  IconDatabase,
  IconChartLine,
  IconUsersGroup,
  IconMailForward,
  IconArrowRight,
  IconPointFilled,
  IconSparkles,
  IconShieldCheck,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

/* ── static data ───────────────────────────────────── */
const features = [
  { icon: IconDatabase,    title: "Unified Customer Database",      desc: "360-degree view of contact details, purchase history, and all interactions", color: "#6366F1" },
  { icon: IconChartLine,   title: "Sales Pipeline Optimization",    desc: "Monitor progress, identify bottlenecks, and forecast revenue accurately", color: "#F59E0B" },
  { icon: IconUsersGroup,  title: "Lead Management",                desc: "Track, nurture, and convert leads with automated workflows and real-time updates", color: "#10B981" },
  { icon: IconMailForward, title: "Marketing Automation",           desc: "Targeted campaigns with segmentation, email marketing, and performance analytics", color: "#EC4899" },
];

const bullets = [
  "Enhanced productivity via automated repetitive tasks",
  "Real-time data sharing for improved team collaboration",
  "Personalized customer experience with deep insights",
  "Scalable — adapts as your business grows",
];



/* Hero image - replace this URL with your own asset anytime */
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

/* ── component ─────────────────────────────────────── */
const CRMSoftwareScreen = () => {

  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  /* ── same semantic token pattern ── */
  const accent      = isDark ? "#00D4C8"                    : "#0891B2";
  const accent2     = isDark ? "#6366F1"                    : "#2563EB";
  const accentDim   = isDark ? "rgba(0,212,200,0.12)"       : "rgba(8,145,178,0.10)";
  const surface     = isDark ? "rgba(255,255,255,0.04)"      : "rgba(255,255,255,0.85)";
  const surface2    = isDark ? "rgba(255,255,255,0.06)"      : "rgba(255,255,255,0.95)";
  const border      = isDark ? "rgba(255,255,255,0.08)"      : "rgba(37,99,235,0.12)";
  const textMain    = isDark ? "#ffffff"                    : "#0f172a";
  const textSub     = isDark ? "rgba(255,255,255,0.75)"      : "#334155";
  const textDim     = isDark ? "rgba(255,255,255,0.45)"      : "#64748b";
  const statGood    = isDark ? "#00D4C8"                    : "#0891B2";
  const statNeutral = isDark ? "rgba(255,255,255,0.75)"      : "#475569";
  const barEmpty    = isDark ? "rgba(255,255,255,0.10)"      : "rgba(37,99,235,0.10)";
  const btnPrimCol  = isDark ? "#0a0f1e"                    : "#ffffff";

  const dashStats = [
    { label: "Active Leads",          value: "1,284",  color: statGood    },
    { label: "Deals Closed (Month)",  value: "₹42L",   color: statGood    },
    { label: "Email Open Rate",       value: "68.2%",  color: statNeutral },
    { label: "Customer Retention",    value: "94%",    color: statGood    },
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

          {/* ══════════════ LEFT — content ══════════════ */}
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
                    CRM SOFTWARE
                  </Badge>
                  <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                    NEX CRM
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
                  Elevate{" "}
                  <span style={{
                    background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Customer Relationships
                  </span>
                  <br />with NEX CRM
                </Title>

                <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                  In the digital era, where customer expectations are at an all-time
                  high, building and maintaining strong relationships is critical for
                  business success. NEX CRM is a robust and intuitive platform that
                  centralizes all aspects of customer management — from lead generation
                  and sales tracking to personalized engagement and after-sales support.
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
                          className="crm-feat-card"
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

                {/* bullets */}
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
                    size="md" radius="xl"
                    rightSection={<IconArrowRight size={16}/>}
                    style={{
                      background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                      color: btnPrimCol,
                      fontWeight: 700,
                      border: "none",
                      boxShadow: `0 10px 26px ${accentDim}`,
                    }}
                    className="crm-btn"
                    onClick={()=> navigate("/contact")}
                  >
                    Request a Demo
                  </Button>
                </Group>

                {/* trust strip */}
                <Group gap={20} mt={14}>
                  <Group gap={6}>
                    <IconShieldCheck size={16} color={accent} />
                    <Text size="xs" fw={600} style={{ color:textDim }}>Secure & Reliable</Text>
                  </Group>
                  <Group gap={6}>
                    <IconTrendingUp size={16} color={accent} />
                    <Text size="xs" fw={600} style={{ color:textDim }}>94% customer retention</Text>
                  </Group>
                </Group>

              </Stack>
            </motion.div>
          </Grid.Col>

          {/* ══════════════ RIGHT — visuals ══════════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7, delay:0.1 }}
            >
              <Stack gap={16}>

                {/* Hero image card — real photo with floating stat pills */}
                <Box style={{ borderRadius:20, overflow:"visible", position:"relative" }}>
                  <Box style={{
                    borderRadius:20, overflow:"hidden", position:"relative",
                    border:`1px solid ${border}`, height:260,
                    boxShadow: isDark
                      ? "0 20px 50px rgba(0,0,0,0.45)"
                      : "0 20px 50px rgba(37,99,235,0.15)",
                  }}>
                    <img
                      src={HERO_IMAGE_URL}
                      alt="Sales team reviewing CRM dashboard"
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
                      <Text fw={700} size="sm" c="white">NEX CRM</Text>
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
                        CUSTOMER RELATIONS
                      </Badge>
                    </Box>
                  </Box>

                  {/* floating stat pill overlapping the image */}
                  <motion.div
                    initial={{ opacity:0, y:14 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ delay:0.5, duration:0.5 }}
                    style={{ position:"absolute", left:16, top:-20 }}
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
                    <Box style={{
                      position:"absolute", top:0, left:0, right:0, height:3,
                      background:`linear-gradient(90deg,${accent},${accent2})`,
                    }}/>

                    <Group justify="space-between" mb={18} align="center">
                      <Group gap={6}>
                        {["#ef4444","#f59e0b","#22c55e"].map((c,i)=>(
                          <Box key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }}/>
                        ))}
                      </Group>
                      <Group gap={5}>
                        <Box style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e" }}/>
                        <Text fz={11} style={{ color:textDim, letterSpacing:1 }}>
                          CRM Pipeline — Live
                        </Text>
                      </Group>
                    </Group>

                    <Stack gap={10}>
                      {dashStats.map(({ label, value, color }, i) => (
                        <Group key={i} justify="space-between" align="center">
                          <Text size="xs" style={{ color:textDim }}>{label}</Text>
                          <Text size="xs" fw={700} style={{ color }}>{value}</Text>
                        </Group>
                      ))}
                    </Stack>

                    <Group gap={8} mt={18} wrap="nowrap">
                      {[false,true,false,true,true].map((fill, i) => (
                        <Box key={i} style={{
                          flex:`${[28,22,20,18,12][i]}%`, height:8, borderRadius:4, minWidth:8,
                          background: fill
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
          .crm-feat-card:hover {
            transform: translateY(-4px);
            border-color: ${accent}55 !important;
            box-shadow: 0 10px 30px ${accentDim} !important;
          }
          .crm-btn {
            transition: transform .22s ease, box-shadow .22s ease !important;
          }
          .crm-btn:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 14px 32px ${accentDim} !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .crm-feat-card, .crm-btn { transition: none !important; }
          }
        `}</style>
      </Container>
    </Box>
  );
};

export default CRMSoftwareScreen;