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
  IconCloudComputing,
  IconShieldLock,
  IconServer2,
  IconRocket,
  IconArrowRight,
  IconPointFilled,
  IconDatabase,
  IconRefresh,
  IconChartInfographic,
  IconHeadset,
  IconLock,
  IconWorld,
  IconCheck,
  IconSearch,
  IconAdjustments,
  IconCloudUpload,
  IconActivity,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

/* ---------------- DATA ---------------- */

const features = [
  { icon: IconCloudComputing,   title: "Cloud Migration",         desc: "Seamlessly move your infrastructure to the cloud with zero downtime" },
  { icon: IconShieldLock,       title: "Enterprise Security",      desc: "End-to-end encryption, compliance, and 24/7 threat monitoring" },
  { icon: IconServer2,          title: "Scalable Infrastructure",  desc: "Auto-scaling resources that grow with your business demand" },
  { icon: IconRocket,           title: "Faster Deployment",        desc: "CI/CD pipelines that ship features in minutes, not days" },
  { icon: IconDatabase,         title: "Managed Databases",        desc: "Automated backups, replication, and performance tuning" },
  { icon: IconRefresh,          title: "Disaster Recovery",        desc: "Automated failover and backup systems for business continuity" },
  { icon: IconChartInfographic, title: "Real-Time Analytics",      desc: "Live dashboards to monitor performance, cost, and usage" },
  { icon: IconHeadset,          title: "24/7 Expert Support",      desc: "Dedicated cloud architects available around the clock" },
];

const bullets = [
  "Reduces infrastructure costs by up to 40%",
  "99.99% uptime with global redundancy",
  "Multi-cloud support: AWS, Azure & GCP",
  "Dedicated cloud architects & 24/7 support",
  "SOC 2, ISO 27001 & GDPR compliant",
  "Zero-downtime migration guarantee",
];

const statsBar = [
  { value: "500+",  label: "Businesses Migrated" },
  { value: "99.99%", label: "Guaranteed Uptime" },
  { value: "40%",   label: "Avg Cost Savings" },
  { value: "24/7",  label: "Expert Monitoring" },
];

const process = [
  { icon: IconSearch,       step: "01", title: "Assess",   desc: "We audit your current infrastructure, workloads, and cost structure" },
  { icon: IconAdjustments,  step: "02", title: "Design",    desc: "Our architects build a tailored, secure, and scalable cloud blueprint" },
  { icon: IconCloudUpload,  step: "03", title: "Migrate",   desc: "Zero-downtime migration with rollback safety nets at every step" },
  { icon: IconActivity,     step: "04", title: "Optimize",  desc: "Continuous monitoring, cost tuning, and performance optimization" },
];

const whyUs = [
  { icon: IconLock,  title: "Bank-Grade Security", desc: "Data encrypted at rest and in transit, with continuous compliance audits" },
  { icon: IconWorld, title: "Global Infrastructure", desc: "Multi-region deployment for low latency, wherever your users are" },
  { icon: IconCheck, title: "Proven Track Record", desc: "500+ successful migrations across fintech, healthcare, and retail" },
];

const CloudSolutions = () => {

  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent      = isDark ? "#00D4C8"                    : "#0891B2";
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
  const btnOutline  = isDark ? "rgba(255,255,255,0.22)"      : "rgba(37,99,235,0.35)";
  const btnTextOut  = isDark ? "#ffffff"                    : "#1e40af";
  const btnPrimCol  = isDark ? "#0a0f1e"                    : "#ffffff";
  const sectionBg   = isDark ? "rgba(255,255,255,0.02)"      : "rgba(8,145,178,0.03)";

  const dashStats = [
    { label: "Server Uptime",     value: "99.99%",  color: statGood    },
    { label: "Avg Response Time", value: "42ms",    color: statGood    },
    { label: "Active Instances",  value: "128",     color: statNeutral },
    { label: "Data Encrypted",    value: "Yes ✓",   color: statGood    },
  ];

  return (
    <>
    
      {/* ══════════════════ HERO SECTION ══════════════════ */}
      <Container size="xl" py={{ base:50, md:80 }}>
        
        <Grid gutter={{ base:40, md:60 }} align="flex-start">

          {/* ══════════ LEFT — visuals ══════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:-30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7 }}
            >
              <Stack gap={16}>

                {/* Hero image card */}
                <Box style={{
                  borderRadius:16, overflow:"hidden", position:"relative",
                  border:`1px solid ${border}`, height:240,
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
                    alt="Cloud Infrastructure Data Center"
                    style={{
                      width:"100%", height:"100%", objectFit:"cover",
                      position:"absolute", inset:0,
                    }}
                  />

                  <Box style={{
                    position:"absolute", bottom:0, left:0, right:0,
                    display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                    padding:"12px 16px",
                    background:"linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 100%)",
                  }}>
                    <Text fw={700} size="sm" c="white">NEX Cloud</Text>
                    <Badge size="sm" style={{
                      background:accentDim, color:accent,
                      border:`1px solid ${accent}55`, fontWeight:700, letterSpacing:1,
                    }}>
                      CLOUD SOLUTIONS
                    </Badge>
                  </Box>
                </Box>

                {/* Dashboard card */}
                <motion.div
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.35, duration:0.55 }}
                >
                  <Box style={{
                    background:surface2, border:`1px solid ${border}`,
                    borderRadius:16, padding:"20px 20px 16px",
                    position:"relative", overflow:"hidden", backdropFilter:"blur(12px)",
                  }}>
                    <Box style={{
                      position:"absolute", top:0, left:0, right:0, height:2,
                      background:`linear-gradient(90deg,${accent},#6366F1)`,
                    }}/>

                    <Group justify="space-between" mb={18} align="center">
                      <Group gap={6}>
                        {["#ef4444","#f59e0b","#22c55e"].map((c,i)=>(
                          <Box key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }}/>
                        ))}
                      </Group>
                      <Text fz={11} style={{ color:textDim, letterSpacing:1 }}>
                        Cloud Monitor — Live
                      </Text>
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
                      {[true,false,true,false,true].map((fill, i) => (
                        <Box key={i} style={{
                          flex:`${[28,20,22,18,12][i]}%`, height:8, borderRadius:4, minWidth:8,
                          background: fill ? accent : barEmpty,
                        }}/>
                      ))}
                    </Group>
                  </Box>
                </motion.div>

              </Stack>
            </motion.div>
          </Grid.Col>

          {/* ══════════ RIGHT — content ══════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.7, delay:0.1 }}
            >
              <Stack gap={20}>

                <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
                  Cloud Solutions
                </Text>

                <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                  NEX Cloud Platform
                </Text>

                <Title
                  order={1}
                  style={{
                    color:textMain, fontWeight:900,
                    fontSize:"clamp(1.9rem,3.5vw,2.8rem)",
                    lineHeight:1.12, letterSpacing:-0.5,
                  }}
                >
                  Power Your Business
                  <br />with the Cloud
                </Title>

                <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                  NEX Cloud Platform delivers secure, scalable, and cost-efficient
                  cloud infrastructure built for modern businesses. From seamless
                  migration to real-time monitoring, we help you eliminate downtime,
                  cut operational costs, and scale on demand — across AWS, Azure,
                  and Google Cloud.
                </Text>

                <Stack gap={8} mt={4}>
                  {bullets.map((b, i) => (
                    <Group key={i} gap={8} wrap="nowrap" align="flex-start">
                      <IconPointFilled size={10} color={accent} style={{ flexShrink:0, marginTop:5 }} />
                      <Text size="sm" style={{ color:textSub }}>{b}</Text>
                    </Group>
                  ))}
                </Stack>

                <Group gap={12} mt={8}>
                  <Button
                    size="md" radius="xl"
                    rightSection={<IconArrowRight size={16}/>}
                    style={{ background:accent, color:btnPrimCol, fontWeight:700, border:"none" }}
                    className="cs-btn"
                    onClick={()=> navigate("/contact")}
                  >
                    Get Started
                  </Button>
                  <Button
                    size="md" radius="xl" variant="outline"
                    style={{ borderColor:btnOutline, color:btnTextOut }}
                    className="cs-btn"
                  >
                    View Pricing
                  </Button>
                </Group>

              </Stack>
            </motion.div>
          </Grid.Col>

        </Grid>
      </Container>

      {/* ══════════════════ STATS BAR ══════════════════ */}
      <Box style={{ background:sectionBg, borderTop:`1px solid ${border}`, borderBottom:`1px solid ${border}` }}>
        <Container size="xl" py={{ base:30, md:40 }}>
          <SimpleGrid cols={{ base:2, md:4 }} spacing={24}>
            {statsBar.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:15 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.08, duration:0.5 }}
              >
                <Stack gap={2} align="center">
                  <Text fw={900} style={{ color:accent, fontSize:"clamp(1.6rem,3vw,2.2rem)" }}>
                    {s.value}
                  </Text>
                  <Text size="xs" fw={600} ta="center" style={{ color:textDim, letterSpacing:0.5 }}>
                    {s.label}
                  </Text>
                </Stack>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ══════════════════ FEATURES SECTION ══════════════════ */}
      <Container size="xl" py={{ base:60, md:90 }}>
        <Stack gap={10} align="center" mb={44}>
          <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
            What We Offer
          </Text>
          <Title order={2} ta="center" style={{
            color:textMain, fontWeight:900,
            fontSize:"clamp(1.6rem,3vw,2.3rem)", maxWidth:600,
          }}>
            Everything You Need to Run in the Cloud
          </Title>
          <Text size="sm" ta="center" style={{ color:textDim, maxWidth:560 }}>
            A complete suite of cloud services designed to keep your business fast, secure, and always online.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base:1, sm:2, lg:4 }} spacing={20}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:(i%4)*0.08, duration:0.5 }}
              >
                <Box
                  className="cs-feat-card"
                  style={{
                    background:surface, border:`1px solid ${border}`,
                    borderRadius:14, padding:"22px 18px", height:"100%",
                    backdropFilter:"blur(12px)",
                    transition:"border-color .25s, box-shadow .25s, transform .25s",
                  }}
                >
                  <Box style={{
                    width:38, height:38, borderRadius:10, background:accentDim,
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14,
                  }}>
                    <Icon size={19} color={accent} />
                  </Box>
                  <Text size="sm" fw={700} mb={6} style={{ color:textMain, lineHeight:1.3 }}>
                    {f.title}
                  </Text>
                  <Text size="xs" lh={1.7} style={{ color:textDim }}>{f.desc}</Text>
                </Box>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>

      {/* ══════════════════ PROCESS SECTION ══════════════════ */}
      <Box style={{ background:sectionBg, borderTop:`1px solid ${border}`, borderBottom:`1px solid ${border}` }}>
        <Container size="xl" py={{ base:60, md:90 }}>
          <Stack gap={10} align="center" mb={44}>
            <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
              Our Process
            </Text>
            <Title order={2} ta="center" style={{
              color:textMain, fontWeight:900,
              fontSize:"clamp(1.6rem,3vw,2.3rem)", maxWidth:600,
            }}>
              From Assessment to Optimization
            </Title>
            <Text size="sm" ta="center" style={{ color:textDim, maxWidth:560 }}>
              A proven four-step methodology that takes you from legacy systems to a fully optimized cloud environment.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base:1, sm:2, lg:4 }} spacing={24}>
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:i*0.1, duration:0.5 }}
                >
                  <Box style={{
                    background:surface2, border:`1px solid ${border}`,
                    borderRadius:14, padding:"24px 20px", height:"100%",
                    position:"relative", backdropFilter:"blur(12px)",
                  }}>
                    <Text fw={900} style={{
                      color:accentDim, fontSize:"2.4rem", lineHeight:1,
                      position:"absolute", top:12, right:16,
                    }}>
                      {p.step}
                    </Text>
                    <Box style={{
                      width:40, height:40, borderRadius:10, background:accentDim,
                      display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16,
                    }}>
                      <Icon size={20} color={accent} />
                    </Box>
                    <Text size="sm" fw={700} mb={6} style={{ color:textMain }}>
                      {p.title}
                    </Text>
                    <Text size="xs" lh={1.7} style={{ color:textDim }}>{p.desc}</Text>
                  </Box>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ══════════════════ WHY CHOOSE US SECTION ══════════════════ */}
      <Container size="xl" py={{ base:60, md:90 }}>
        <Grid gutter={{ base:40, md:60 }} align="center">
          <Grid.Col span={{ base:12, md:5 }}>
            <motion.div
              initial={{ opacity:0, x:-30 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6 }}
            >
              <Stack gap={16}>
                <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
                  Why Choose NEX Cloud
                </Text>
                <Title order={2} style={{
                  color:textMain, fontWeight:900,
                  fontSize:"clamp(1.6rem,3vw,2.3rem)", lineHeight:1.15,
                }}>
                  Trusted by Growing Businesses Worldwide
                </Title>
                <Text size="sm" lh={1.85} style={{ color:textSub }}>
                  We don't just host your infrastructure — we become an extension of
                  your engineering team, ensuring performance, security, and cost
                  efficiency at every layer.
                </Text>
                <Button
                  size="md" radius="xl" mt={8}
                  rightSection={<IconArrowRight size={16}/>}
                  style={{ background:accent, color:btnPrimCol, fontWeight:700, border:"none", alignSelf:"flex-start" }}
                  className="cs-btn"
                  onClick={()=> navigate("/contact")}
                >
                  Talk to an Expert
                </Button>
              </Stack>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base:12, md:7 }}>
            <Stack gap={16}>
              {whyUs.map((w, i) => {
                const Icon = w.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:20 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ delay:i*0.1, duration:0.5 }}
                  >
                    <Group
                      gap={16} wrap="nowrap" align="flex-start"
                      style={{
                        background:surface, border:`1px solid ${border}`,
                        borderRadius:14, padding:"18px 20px",
                        backdropFilter:"blur(12px)",
                      }}
                    >
                      <Box style={{
                        width:44, height:44, borderRadius:12, background:accentDim,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                      }}>
                        <Icon size={22} color={accent} />
                      </Box>
                      <Box>
                        <Text size="sm" fw={700} mb={4} style={{ color:textMain }}>
                          {w.title}
                        </Text>
                        <Text size="xs" lh={1.7} style={{ color:textDim }}>{w.desc}</Text>
                      </Box>
                    </Group>
                  </motion.div>
                );
              })}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <Container size="xl" pb={{ base:60, md:90 }}>
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
        >
          <Box style={{
            borderRadius:20, padding:"48px 32px", textAlign:"center",
            background:`linear-gradient(135deg, ${accent}22, ${accentDim})`,
            border:`1px solid ${border}`, position:"relative", overflow:"hidden",
          }}>
            <Stack gap={14} align="center">
              <Title order={2} style={{
                color:textMain, fontWeight:900,
                fontSize:"clamp(1.5rem,3vw,2.1rem)", maxWidth:560,
              }}>
                Ready to Move Your Business to the Cloud?
              </Title>
              <Text size="sm" style={{ color:textSub, maxWidth:480 }}>
                Get a free infrastructure assessment and a custom migration plan — no commitment required.
              </Text>
              <Button
                size="md" radius="xl" mt={8}
                rightSection={<IconArrowRight size={16}/>}
                style={{ background:accent, color:btnPrimCol, fontWeight:700, border:"none" }}
                className="cs-btn"
                onClick={()=> navigate("/contact")}
              >
                Start Free Trial
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>

      <style>{`
        .cs-feat-card:hover {
          border-color: ${accent}55 !important;
          box-shadow: 0 8px 28px ${accentDim} !important;
          transform: translateY(-3px) !important;
        }
        .cs-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .cs-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-feat-card, .cs-btn { transition: none !important; }
        }
      `}</style>
    </>
  );
};

export default CloudSolutions;
