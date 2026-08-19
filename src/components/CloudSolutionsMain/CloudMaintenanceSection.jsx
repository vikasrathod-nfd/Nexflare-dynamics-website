import React from "react";
import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconGauge,
  IconShieldCheck,
  IconTrendingUp,
  IconHeadset,
  IconCircleCheckFilled,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

/* ══════════════════ CUSTOM FLAT-ILLUSTRATION ICONS ══════════════════ */

const CloudHostingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M44 30c5 0 9 3.8 9 8.5S49 47 44 47H19c-6 0-11-4.5-11-10.2 0-5 3.6-9.2 8.4-10-.3-1-.4-2-.4-3 0-6.6 5.6-12 12.5-12 5.6 0 10.4 3.6 11.9 8.7.9-.3 1.7-.5 2.6-.5z" fill="#2563EB"/>
    <rect x="20" y="30" width="20" height="16" rx="2" fill="#ffffff"/>
    <rect x="23" y="33" width="14" height="3" rx="1" fill="#93C5FD"/>
    <rect x="23" y="38" width="14" height="3" rx="1" fill="#93C5FD"/>
    <circle cx="26" cy="43" r="1.4" fill="#2563EB"/>
    <circle cx="30" cy="43" r="1.4" fill="#2563EB"/>
    <rect x="17" y="48" width="12" height="8" rx="2" fill="#ffffff" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="2 2"/>
    <rect x="19.5" y="50.5" width="7" height="1.6" rx="0.8" fill="#93C5FD"/>
  </svg>
);

const InfrastructureIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="14" y="12" width="24" height="10" rx="2" fill="#059669"/>
    <rect x="18" y="16" width="10" height="2" rx="1" fill="#A7F3D0"/>
    <circle cx="33" cy="17" r="1.4" fill="#A7F3D0"/>
    <rect x="14" y="24" width="24" height="10" rx="2" fill="#10B981"/>
    <rect x="18" y="28" width="10" height="2" rx="1" fill="#D1FAE5"/>
    <circle cx="33" cy="29" r="1.4" fill="#D1FAE5"/>
    <rect x="14" y="36" width="24" height="10" rx="2" fill="#34D399"/>
    <rect x="18" y="40" width="10" height="2" rx="1" fill="#ECFDF5"/>
    <circle cx="33" cy="41" r="1.4" fill="#ECFDF5"/>
    <path d="M42 44c3.5 0 6.3 2.7 6.3 6s-2.8 6-6.3 6H30c-4.2 0-7.6-3.2-7.6-7.1 0-3.5 2.5-6.4 5.9-7-.2-.7-.3-1.4-.3-2.1 0-4.6 3.9-8.4 8.7-8.4 3.9 0 7.2 2.5 8.3 6 .6-.2 1.2-.4 1.9-.4" fill="#A7F3D0" opacity="0.6"/>
  </svg>
);

const AppHostingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="10" y="14" width="34" height="26" rx="4" fill="#EDE9FE"/>
    <rect x="10" y="14" width="34" height="7" rx="4" fill="#7C3AED"/>
    <circle cx="14.5" cy="17.5" r="1.1" fill="#fff"/>
    <circle cx="18" cy="17.5" r="1.1" fill="#fff"/>
    <circle cx="21.5" cy="17.5" r="1.1" fill="#fff"/>
    <text x="16" y="33" fontSize="9" fill="#7C3AED" fontFamily="monospace" fontWeight="700">{'</>'}</text>
    <circle cx="42" cy="38" r="11" fill="#A855F7"/>
    <text x="35.5" y="42" fontSize="10" fill="#fff" fontFamily="monospace" fontWeight="700">{'</>'}</text>
  </svg>
);

const StorageIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <ellipse cx="24" cy="16" rx="10" ry="3.4" fill="#FBBF24"/>
    <path d="M14 16v20c0 1.9 4.5 3.4 10 3.4s10-1.5 10-3.4V16" fill="#F59E0B"/>
    <ellipse cx="24" cy="24" rx="10" ry="3.4" fill="#FBBF24" opacity="0.7"/>
    <ellipse cx="24" cy="32" rx="10" ry="3.4" fill="#FCD34D"/>
    <path d="M42 34c3.3 0 6 2.6 6 5.7S45.3 45.5 42 45.5H30.5c-3.9 0-7.1-3-7.1-6.7 0-3.3 2.4-6.1 5.6-6.6-.2-.6-.3-1.3-.3-2 0-4.4 3.7-8 8.2-8 3.7 0 6.8 2.4 7.8 5.7" fill="#FDE68A"/>
    <rect x="30" y="38" width="9" height="7" rx="1.5" fill="#fff"/>
    <path d="M32 38v-1.6a2.5 2.5 0 015 0V38" stroke="#F59E0B" strokeWidth="1.4" fill="none"/>
  </svg>
);

const SecurityIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M28 8l14 5v11c0 9.4-6 16.7-14 19-8-2.3-14-9.6-14-19V13z" fill="#DC2626"/>
    <path d="M28 12l10 3.6v8.4c0 7-4.4 12.5-10 14.3-5.6-1.8-10-7.3-10-14.3v-8.4z" fill="#EF4444"/>
    <rect x="23" y="24" width="10" height="8" rx="1.5" fill="#fff"/>
    <path d="M24.5 24v-2.3a3.5 3.5 0 017 0V24" stroke="#fff" strokeWidth="2" fill="none"/>
    <circle cx="28" cy="28" r="1.3" fill="#DC2626"/>
    <path d="M40 40c3 0 5.4 2.3 5.4 5.2S43 50.3 40 50.3H30c-3.5 0-6.4-2.7-6.4-6 0-3 2.2-5.5 5-5.9-.1-.6-.2-1.1-.2-1.7 0-3.9 3.3-7.1 7.4-7.1 3.3 0 6.1 2.1 7 5.1" fill="#FCA5A5" opacity="0.5"/>
  </svg>
);

const ServerMgmtIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="10" y="14" width="32" height="22" rx="2.5" fill="#1E3A8A"/>
    <rect x="13" y="17" width="26" height="16" rx="1.5" fill="#DBEAFE"/>
    <rect x="20" y="36" width="12" height="4" fill="#1E3A8A"/>
    <rect x="16" y="40" width="20" height="2.6" rx="1.3" fill="#1E3A8A"/>
    <path d="M17 22l4 4-4 4" stroke="#2563EB" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25 30h5" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="46" cy="26" r="10" fill="#3B82F6"/>
    <circle cx="46" cy="26" r="3.6" fill="#DBEAFE"/>
    <g stroke="#DBEAFE" strokeWidth="1.8" strokeLinecap="round">
      <line x1="46" y1="17.5" x2="46" y2="19.7" />
      <line x1="46" y1="32.3" x2="46" y2="34.5" />
      <line x1="37.5" y1="26" x2="39.7" y2="26" />
      <line x1="52.3" y1="26" x2="54.5" y2="26" />
      <line x1="40" y1="20" x2="41.5" y2="21.5" />
      <line x1="50.5" y1="30.5" x2="52" y2="32" />
      <line x1="52" y1="20" x2="50.5" y2="21.5" />
      <line x1="41.5" y1="30.5" x2="40" y2="32" />
    </g>
  </svg>
);

/* ---------------- DATA ---------------- */

const services = [
  {
    Icon: CloudHostingIcon,
    title: "Cloud Hosting",
    desc: "Fast, secure and reliable cloud hosting for websites, applications and businesses of all sizes.",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.10)",
    glow: "rgba(37,99,235,0.35)",
    points: ["High Performance", "99.9% Uptime", "Scalable Resources"],
  },
  {
    Icon: InfrastructureIcon,
    title: "Cloud Infrastructure",
    desc: "Scalable and flexible cloud infrastructure designed to support your business growth.",
    color: "#059669",
    bg: "rgba(5,150,105,0.10)",
    glow: "rgba(5,150,105,0.35)",
    points: ["Elastic & Scalable", "High Availability", "Optimized Performance"],
  },
  {
    Icon: AppHostingIcon,
    title: "Application Hosting",
    desc: "Deploy and host your web applications with ease and ensure optimal performance.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.10)",
    glow: "rgba(124,58,237,0.35)",
    points: ["Quick Deployment", "Auto Scaling", "Seamless Performance"],
  },
  {
    Icon: StorageIcon,
    title: "Cloud Storage & Database",
    desc: "Securely store, manage and access your data with scalable cloud storage and databases.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.10)",
    glow: "rgba(217,119,6,0.35)",
    points: ["Secure Data Storage", "Managed Databases", "Backup & Recovery"],
  },
  {
    Icon: SecurityIcon,
    title: "Cloud Security",
    desc: "Protect your applications and data with advanced security and SSL encryption.",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.10)",
    glow: "rgba(220,38,38,0.35)",
    points: ["SSL Certificates", "Firewall Protection", "Data Encryption"],
  },
  {
    Icon: ServerMgmtIcon,
    title: "Server Management",
    desc: "We handle server setup, monitoring, maintenance and updates so you can focus on your business.",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.10)",
    glow: "rgba(37,99,235,0.35)",
    points: ["24/7 Monitoring", "Regular Updates", "Performance Optimization"],
  },
];

const statsRow = [
  { icon: IconGauge,       title: "High Performance",  desc: "Built for speed, reliability and maximum uptime.",  color: "#2563EB", bg: "rgba(37,99,235,0.10)" },
  { icon: IconShieldCheck, title: "Secure & Reliable",  desc: "Enterprise-grade security to protect your data.",   color: "#059669", bg: "rgba(5,150,105,0.10)" },
  { icon: IconTrendingUp,  title: "Scalable Solutions", desc: "Scale resources on demand as your business grows.", color: "#7C3AED", bg: "rgba(124,58,237,0.10)" },
  { icon: IconHeadset,     title: "Expert Support",     desc: "24/7 expert support whenever you need it.",         color: "#D97706", bg: "rgba(217,119,6,0.10)" },
];

/* ---------------- COMPONENT ---------------- */

const CloudMaintenanceSection = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent    = isDark ? "#60A5FA"                : "#2563EB";
  const pageBg    = isDark ? "#0b1220"                : "#f8fafc";
  const surface   = isDark ? "rgba(255,255,255,0.045)" : "#ffffff";
  const border    = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.07)";
  const textMain  = isDark ? "#ffffff"                : "#0f172a";
  const textSub   = isDark ? "rgba(255,255,255,0.65)" : "#64748b";
  const textDim   = isDark ? "rgba(255,255,255,0.45)" : "#94a3b8";
  const badgeBg   = isDark ? "rgba(96,165,250,0.12)"  : "rgba(37,99,235,0.08)";

  return (
    <Box style={{ background: pageBg, position: "relative", overflow: "hidden" }}>

      {/* ══════════ AMBIENT BACKGROUND GLOW ══════════ */}
      <Box style={{
        position: "absolute", top: -120, left: "8%", width: 420, height: 420,
        borderRadius: "50%", filter: "blur(110px)", pointerEvents: "none",
        background: isDark ? "rgba(37,99,235,0.20)" : "rgba(37,99,235,0.12)",
      }} />
      <Box style={{
        position: "absolute", top: 60, right: "6%", width: 380, height: 380,
        borderRadius: "50%", filter: "blur(110px)", pointerEvents: "none",
        background: isDark ? "rgba(124,58,237,0.18)" : "rgba(168,85,247,0.10)",
      }} />
      <Box style={{
        position: "absolute", bottom: -80, left: "35%", width: 340, height: 340,
        borderRadius: "50%", filter: "blur(110px)", pointerEvents: "none",
        background: isDark ? "rgba(16,185,129,0.14)" : "rgba(16,185,129,0.08)",
      }} />

      <Container size="xl" py={{ base: 50, md: 70 }} style={{ position: "relative", zIndex: 1 }}>

        {/* ══════════ HEADER ══════════ */}
        <Stack gap={14} align="center" mb={44}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Group gap={6} style={{
              background: badgeBg, border: `1px solid ${accent}30`,
              borderRadius: 999, padding: "6px 16px",
            }}>
              <IconSparkles size={13} color={accent} />
              <Text fz={12} fw={700} style={{ color: accent, letterSpacing: 2, textTransform: "uppercase" }}>
                Cloud Services
              </Text>
            </Group>
          </motion.div>

          <Title order={2} ta="center" style={{
            color: textMain, fontWeight: 900,
            fontSize: "clamp(1.9rem,3.4vw,2.6rem)", maxWidth: 700, lineHeight: 1.15,
          }}>
            Smart Cloud Solutions{" "}
            <Box component="span" style={{
              background: `linear-gradient(90deg, ${accent}, #A855F7)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              For Your Business
            </Box>
          </Title>
          <Text size="sm" ta="center" lh={1.8} style={{ color: textSub, maxWidth: 560 }}>
            We deliver reliable, secure and scalable cloud services that help
            you deploy, manage and grow your applications with confidence.
          </Text>
          <Box style={{
            width: 64, height: 4, borderRadius: 2, marginTop: 2,
            background: `linear-gradient(90deg, ${accent}, #A855F7)`,
          }} />
        </Stack>

        {/* ══════════ CARDS GRID ══════════ */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={22} mb={24}>
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.09, duration: 0.55 }}
              >
                <Box
                  className="cs-card"
                  style={{
                    "--glow": s.glow,
                    background: surface, border: `1px solid ${border}`,
                    borderRadius: 18, padding: "24px 22px", height: "100%",
                    position: "relative", overflow: "hidden",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* top accent line */}
                  <Box style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}00)`,
                  }} />

                  {/* corner accent triangle */}
                  <Box style={{
                    position: "absolute", right: 0, bottom: 0, width: 0, height: 0,
                    borderStyle: "solid",
                    borderWidth: "0 0 68px 68px",
                    borderColor: `transparent transparent ${s.bg} transparent`,
                  }} />
                  <Box style={{
                    position: "absolute", right: 10, bottom: 10,
                    width: 20, height: 20, borderRadius: 6,
                    background: s.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 10px ${s.color}55`,
                  }}>
                    <IconCheck size={12} color="#fff" stroke={3} />
                  </Box>

                  <Group gap={16} wrap="nowrap" align="flex-start" mb={14}>
                    <Box className="cs-icon-wrap" style={{
                      width: 66, height: 66, borderRadius: "50%",
                      background: `radial-gradient(circle, ${s.bg} 0%, transparent 70%)`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      transition: "transform .3s ease",
                    }}>
                      <Icon />
                    </Box>
                    <Box style={{ paddingTop: 6 }}>
                      <Text size="sm" fw={800} style={{ color: textMain }}>{s.title}</Text>
                      <Box style={{ width: 28, height: 3, borderRadius: 2, background: s.color, marginTop: 7 }} />
                    </Box>
                  </Group>

                  <Text size="xs" lh={1.75} mb={16} style={{ color: textDim }}>{s.desc}</Text>

                  <Stack gap={8}>
                    {s.points.map((pt, j) => (
                      <Group key={j} gap={8} wrap="nowrap" align="center">
                        <IconCircleCheckFilled size={16} color={s.color} style={{ flexShrink: 0 }} />
                        <Text size="xs" fw={600} style={{ color: textSub }}>{pt}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            );
          })}
        </SimpleGrid>

        {/* ══════════ STATS BAR ══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box style={{
            border: `1px solid ${border}`, borderRadius: 18,
            background: surface, padding: "22px 12px",
            backdropFilter: "blur(10px)",
            boxShadow: isDark ? "0 12px 40px rgba(0,0,0,0.35)" : "0 12px 40px rgba(15,23,42,0.06)",
          }}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={20}>
              {statsRow.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Group key={i} gap={12} wrap="nowrap" px={12} align="center" className="cs-stat"
                    style={{
                      borderRight: i < statsRow.length - 1 ? `1px solid ${border}` : "none",
                    }}
                  >
                    <Box style={{
                      width: 44, height: 44, borderRadius: "50%", background: s.bg,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      transition: "transform .25s ease",
                    }}>
                      <Icon size={21} color={s.color} />
                    </Box>
                    <Box>
                      <Text size="xs" fw={800} style={{ color: textMain }}>{s.title}</Text>
                      <Text size="xs" lh={1.4} style={{ color: textDim }}>{s.desc}</Text>
                    </Box>
                  </Group>
                );
              })}
            </SimpleGrid>
          </Box>
        </motion.div>

      </Container>

      <style>{`
        .cs-card {
          transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;
        }
        .cs-card:hover {
          border-color: transparent !important;
          box-shadow: 0 16px 40px var(--glow) !important;
          transform: translateY(-6px) !important;
        }
        .cs-card:hover .cs-icon-wrap {
          transform: scale(1.08);
        }
        .cs-stat:hover .cs-icon-wrap,
        .cs-stat:hover > div:first-child {
          transform: scale(1.1);
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-card, .cs-icon-wrap { transition: none !important; }
        }
      `}</style>
    </Box>
  );
};

export default CloudMaintenanceSection;
