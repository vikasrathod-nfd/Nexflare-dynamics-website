import React from "react";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  Button,
  Group,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
import {
  Palette,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Applicationdevelopment = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Ordered as a build journey: design → test → maintain
  const features = [
    {
      icon: Palette,
      tag: "DESIGN",
      title: "App UI/UX Design",
      description:
        "Intuitive, visually engaging app interfaces designed around real user behavior and platform-specific guidelines. We craft smooth onboarding flows, clear navigation, and delightful micro-interactions.",
    },
    {
      icon: ShieldCheck,
      tag: "TEST",
      title: "App Security & Testing",
      description:
        "Rigorous QA and security testing so your app performs flawlessly across devices. Performance testing, vulnerability assessments, and real-device testing before every release.",
    },
    {
      icon: RefreshCw,
      tag: "MAINTAIN",
      title: "App Maintenance & Updates",
      description:
        "Ongoing support, OS-compatibility updates, and feature enhancements. We monitor performance, fix bugs proactively, and ship updates aligned with the latest platform releases.",
    },
  ];

  const highlights = [
    "Native & Cross-Platform Expertise",
    "App Store & Play Store Deployment Support",
    "Scalable Backend & API Integration",
    "Post-Launch Support & Maintenance",
  ];

  return (
    <Box py={90} id="application-development-service" style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes appFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes appFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes appPulseDot {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .app-row {
          animation: appFadeUp .6s ease both;
        }
        .app-device {
          transition: transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s ease, border-color .45s ease;
        }
        .app-row:hover .app-device {
          transform: translateY(-6px);
        }
        .app-device-icon {
          animation: appFloat 4.5s ease-in-out infinite;
        }
        .app-node {
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .app-row:hover .app-node {
          transform: scale(1.35);
          box-shadow: 0 0 0 6px var(--app-node-ring);
        }
        .app-cta-btn {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .app-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -10px rgba(37,99,235,.5);
        }
        @media (prefers-reduced-motion: reduce) {
          .app-row, .app-device-icon { animation: none !important; }
          .app-device, .app-node, .app-cta-btn { transition: none !important; }
        }
      `}</style>

      {/* Ambient background mesh */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: isDark
            ? "radial-gradient(circle at 12% 8%, rgba(37,99,235,.12), transparent 32%), radial-gradient(circle at 88% 92%, rgba(6,182,212,.10), transparent 32%)"
            : "radial-gradient(circle at 12% 8%, rgba(37,99,235,.06), transparent 32%), radial-gradient(circle at 88% 92%, rgba(6,182,212,.05), transparent 32%)",
        }}
      />

      <Container size="lg" style={{ position: "relative" }}>
        {/* Header */}
        <Box ta="center" mb={80}>
          <Group justify="center" gap={8} mb="sm">
            <Box
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "linear-gradient(90deg,#2563eb,#06b6d4)",
                animation: "appPulseDot 2s ease-in-out infinite",
              }}
            />
            <Text
              fz={11}
              fw={700}
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: isDark ? "#7dd3fc" : "#2563eb",
              }}
            >
              App Development
            </Text>
          </Group>

          <Title
            order={1}
            fz={{ base: 32, md: 46 }}
            fw={800}
            lh={1.15}
            style={{ color: isDark ? "#ffffff" : "#0f172a", letterSpacing: "-0.02em" }}
            mb="md"
          >
            From First Sketch to{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg,#2563eb,#06b6d4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              App Store Launch
            </span>
          </Title>
          <Text
            style={{ color: isDark ? "#909296" : "#4B5563" }}
            fz={{ base: "md", md: "lg" }}
            maw={640}
            mx="auto"
            lh={1.7}
          >
            A single team carries your mobile product through design,
            rigorous testing, and long-term maintenance — no handoffs, no
            dropped context.
          </Text>
        </Box>

        {/* Journey rows with connecting line */}
        <Box style={{ position: "relative" }} mb={80}>
          {/* Connecting line (desktop only) */}
          <Box
            visibleFrom="md"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              transform: "translateX(-50%)",
              background: isDark
                ? "linear-gradient(180deg, transparent, rgba(37,99,235,.35) 8%, rgba(6,182,212,.35) 92%, transparent)"
                : "linear-gradient(180deg, transparent, rgba(37,99,235,.25) 8%, rgba(6,182,212,.25) 92%, transparent)",
            }}
          />

          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isReversed = index % 2 !== 0;

            return (
              <SimpleGrid
                key={index}
                cols={{ base: 1, md: 2 }}
                spacing={{ base: 30, md: 60 }}
                verticalSpacing={30}
                mb={64}
                className="app-row"
                style={{
                  alignItems: "center",
                  position: "relative",
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {/* Center node on the line */}
                <Box
                  visibleFrom="md"
                  className="app-node"
                  style={{
                    "--app-node-ring": isDark
                      ? "rgba(37,99,235,.18)"
                      : "rgba(37,99,235,.12)",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    transform: "translate(-50%,-50%)",
                    background: "linear-gradient(135deg,#2563eb,#06b6d4)",
                    zIndex: 2,
                  }}
                />

                {/* Device-style icon panel */}
                <Box
                  className="app-device"
                  style={{
                    order: isReversed ? 2 : 1,
                    borderRadius: 24,
                    height: 260,
                    position: "relative",
                    overflow: "hidden",
                    background: isDark
                      ? "linear-gradient(155deg, rgba(19,29,53,.9) 0%, rgba(9,15,30,.9) 100%)"
                      : "linear-gradient(155deg, #ffffff 0%, #f3f8ff 100%)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,.08)" : "rgba(37,99,235,.10)"}`,
                    boxShadow: isDark
                      ? "0 20px 45px -20px rgba(0,0,0,.6)"
                      : "0 20px 45px -20px rgba(37,99,235,.20)",
                  }}
                >
                  {/* faux device status bar */}
                  <Group
                    justify="space-between"
                    px={18}
                    py={12}
                    style={{
                      borderBottom: `1px solid ${isDark ? "rgba(255,255,255,.06)" : "rgba(15,23,42,.06)"}`,
                    }}
                  >
                    <Text fz={10} fw={700} style={{ letterSpacing: "1.5px", color: isDark ? "#5b6a82" : "#94a3b8" }}>
                      {feature.tag}
                    </Text>
                    <Group gap={4}>
                      <Box style={{ width: 4, height: 4, borderRadius: "50%", background: isDark ? "#3b4a63" : "#cbd5e1" }} />
                      <Box style={{ width: 4, height: 4, borderRadius: "50%", background: isDark ? "#3b4a63" : "#cbd5e1" }} />
                      <Box style={{ width: 4, height: 4, borderRadius: "50%", background: "#06b6d4" }} />
                    </Group>
                  </Group>

                  {/* grid texture */}
                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: isDark
                        ? "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)"
                        : "linear-gradient(rgba(15,23,42,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.03) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className="app-device-icon"
                      style={{
                        width: 88,
                        height: 88,
                        borderRadius: 22,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg,#2563eb,#06b6d4)",
                        boxShadow: "0 18px 35px -12px rgba(37,99,235,.55)",
                      }}
                    >
                      <IconComponent size={40} color="#fff" strokeWidth={1.75} />
                    </Box>
                  </Box>
                </Box>

                {/* Text */}
                <Box
                  style={{
                    order: isReversed ? 1 : 2,
                    textAlign: isReversed ? { md: "right" } : "left",
                  }}
                >
                  <Text
                    fz={11}
                    fw={700}
                    mb={8}
                    style={{
                      letterSpacing: "1.5px",
                      color: isDark ? "#38bdf8" : "#2563eb",
                    }}
                  >
                    {feature.tag}
                  </Text>

                  <Title
                    order={3}
                    fz={{ base: 22, md: 27 }}
                    fw={700}
                    style={{ color: isDark ? "#ffffff" : "#0f172a", letterSpacing: "-0.01em" }}
                    mb="sm"
                  >
                    {feature.title}
                  </Title>

                  <Text
                    fz="sm"
                    lh={1.85}
                    style={{ color: isDark ? "#9CA3AF" : "#4B5563" }}
                  >
                    {feature.description}
                  </Text>
                </Box>
              </SimpleGrid>
            );
          })}
        </Box>

        {/* Bottom Callout Section */}
        <Box
          p={{ base: 28, md: 44 }}
          style={{
            borderRadius: 28,
            position: "relative",
            overflow: "hidden",
            background: isDark
              ? "linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(6,182,212,0.08) 100%)"
              : "linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(6,182,212,0.04) 100%)",
            border: `1px solid ${isDark ? "rgba(37,99,235,0.25)" : "rgba(37,99,235,0.12)"}`,
          }}
        >
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={30}
            verticalSpacing={20}
            style={{ alignItems: "center", position: "relative" }}
          >
            <Box>
              <Title
                order={3}
                fz={{ base: 22, md: 27 }}
                fw={700}
                style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                mb="md"
              >
                Ready to Build Your Mobile App?
              </Title>
              <Text
                fz="sm"
                style={{ color: isDark ? "#A6A7AB" : "#374151" }}
                mb="xl"
                lh={1.7}
              >
                Partner with our development team to create a mobile
                application tailored specifically to your business needs.
              </Text>

              <SimpleGrid cols={1} spacing={10}>
                {highlights.map((item, idx) => (
                  <Group key={idx} gap="sm">
                    <Box
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isDark ? "rgba(6,182,212,.15)" : "rgba(6,182,212,.10)",
                      }}
                    >
                      <CheckCircle2 size={13} color="#06b6d4" />
                    </Box>
                    <Text
                      fz="sm"
                      fw={500}
                      style={{ color: isDark ? "#E2E8F0" : "#1F2937" }}
                    >
                      {item}
                    </Text>
                  </Group>
                ))}
              </SimpleGrid>
            </Box>

            <Box ta={{ base: "left", md: "right" }}>
              <Button
                className="app-cta-btn"
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
                rightSection={<ArrowRight size={18} />}
                component="a"
                href="#contact"
              >
                Discuss Your App
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Applicationdevelopment;