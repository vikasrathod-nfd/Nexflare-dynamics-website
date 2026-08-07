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
  IconCalendarTime,
  IconBell,
  IconCalendarEvent,
  IconCreditCard,
  IconArrowRight,
  IconPointFilled,
  IconSparkles,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: IconCalendarTime,  title: "Real-Time Booking",              desc: "Clients book anytime, anywhere with live availability updates", color: "#6366F1" },
  { icon: IconBell,          title: "Automated Reminders",            desc: "Custom SMS and email reminders that slash no-show rates", color: "#F59E0B" },
  { icon: IconCalendarEvent, title: "Calendar Integration",           desc: "Sync with Google Calendar, Outlook, and any preferred calendar system", color: "#10B981" },
  { icon: IconCreditCard,    title: "Secure Payment Integration",     desc: "Collect payments at booking to reduce cancellations instantly", color: "#EC4899" },
];

const bullets = [
  "Centralized scheduling with real-time availability",
  "Multi-channel: website, app, and social media booking",
];

/* Hero image - fresh Indian, booking/appointment themed. Replace this URL with your own asset anytime */
const HERO_IMAGE_URL =
  "https://thumbs.dreamstime.com/b/scheduling-booking-online-appointment-calendar-using-laptop-275149473.jpg";

const BookingScreen = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent      = isDark ? "#00D4C8"                    : "#0891B2";
  const accent2     = isDark ? "#6366F1"                    : "#2563EB";
  const accentDim   = isDark ? "rgba(0,212,200,0.12)"       : "rgba(8,145,178,0.10)";
  const surface     = isDark ? "rgba(255,255,255,0.04)"      : "rgba(255,255,255,0.85)";
  const border      = isDark ? "rgba(255,255,255,0.08)"      : "rgba(37,99,235,0.12)";
  const textMain    = isDark ? "#ffffff"                    : "#0f172a";
  const textSub     = isDark ? "rgba(255,255,255,0.75)"      : "#334155";
  const textDim     = isDark ? "rgba(255,255,255,0.45)"      : "#64748b";
  const btnPrimCol  = isDark ? "#0a0f1e"                    : "#ffffff";

  return (
    <Box style={{ position: "relative", overflow: "hidden" }}>

      {/* ── decorative background glows ── */}
      <Box style={{
        position: "absolute", top: -120, right: -120, width: 380, height: 380,
        borderRadius: "50%", background: accent, opacity: isDark ? 0.10 : 0.12,
        filter: "blur(100px)", pointerEvents: "none",
      }}/>
      <Box style={{
        position: "absolute", bottom: -140, left: -140, width: 420, height: 420,
        borderRadius: "50%", background: accent2, opacity: isDark ? 0.10 : 0.10,
        filter: "blur(110px)", pointerEvents: "none",
      }}/>

      <Container size="xl" py={{ base:50, md:80 }} style={{ position:"relative", zIndex:1 }}>
        <Grid gutter={{ base:40, md:60 }} align="stretch">

          {/* ══════════ LEFT — bigger hero image, matches text column height ══════════ */}
          <Grid.Col span={{ base:12, md:6 }}>
            <motion.div
              initial={{ opacity:0, x:-30, scale:0.97 }}
              animate={{ opacity:1, x:0, scale:1 }}
              transition={{ duration:0.7 }}
              style={{ height:"100%" }}
            >
              <Box style={{
                position:"relative",
                height:"93%",
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
                    alt="Indian client scheduling an appointment"
                    style={{
                      position:"absolute", inset:0,
                      width:"100%", height:"100%",
                      objectFit:"cover",
                      objectPosition:"center 20%",
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
                      <Text fw={800} size="lg" c="white">Booking System</Text>
                      <Text size="xs" c="rgba(255,255,255,0.75)">Trusted by businesses across India</Text>
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
                      SCHEDULING
                    </Badge>
                  </Box>
                </Box>
              </Box>
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
                    BOOKING SOFTWARE
                  </Badge>
                  <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                    Appointment Booking
                  </Text>
                </Group>

                {/* headline with gradient highlight */}
                <Title order={1} style={{
                  color:textMain, fontWeight:900,
                  fontSize:"clamp(1.9rem,3.5vw,2.9rem)",
                  lineHeight:1.14, letterSpacing:-0.5,
                }}>
                  Streamline{" "}
                  <span style={{
                    background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Scheduling
                  </span>
                  <br />Reduce No-Shows
                </Title>

                <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                  Optimize scheduling with a centralized appointment booking platform
                  featuring automated confirmations, real-time calendar updates, and
                  smart reminders. Ensure a smooth booking experience while minimizing
                  scheduling conflicts and no-shows.
                </Text>

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
                          className="bk-feat-card"
                          style={{
                            background:surface, border:`1px solid ${border}`,
                            borderRadius:14, padding:"16px 14px", height:"100%",
                            backdropFilter:"blur(12px)",
                            transition:"transform .25s, border-color .25s, box-shadow .25s",
                            position:"relative", overflow:"hidden",
                          }}
                        >
                          <Group gap={8} mb={8} wrap="nowrap">
                            <Box style={{
                              width:30, height:30, borderRadius:9,
                              background: `${f.color}1F`,
                              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                            }}>
                              <Icon size={16} color={f.color} />
                            </Box>
                            <Text size="xs" fw={700} style={{ color:textMain, lineHeight:1.3 }}>
                              {f.title}
                            </Text>
                          </Group>
                          <Text size="xs" lh={1.7} style={{ color:textDim }}>{f.desc}</Text>
                        </Box>
                      </motion.div>
                    );
                  })}
                </SimpleGrid>

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
                    className="bk-btn"
                    onClick={()=> navigate("/contact")}
                  >
                    Get a Demo
                  </Button>
                </Group>

              </Stack>
            </motion.div>
          </Grid.Col>

        </Grid>

        <style>{`
          .bk-feat-card:hover {
            transform: translateY(-4px);
            border-color: ${accent}55 !important;
            box-shadow: 0 10px 30px ${accentDim} !important;
          }
          .bk-btn {
            transition: transform .22s ease, box-shadow .22s ease !important;
          }
          .bk-btn:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 14px 32px ${accentDim} !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .bk-feat-card, .bk-btn { transition: none !important; }
          }
        `}</style>
      </Container>
    </Box>
  );
};

export default BookingScreen;