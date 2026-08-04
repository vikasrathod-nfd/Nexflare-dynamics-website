import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import { SiMailchimp, SiHubspot, SiBrevo, SiZoho } from "react-icons/si";
import {
  IconChartDots,
  IconRoute,
  IconAddressBook,
  IconDroplet,
  IconMailForward,
  IconDeviceDesktopCheck,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

// Real brand icons where available (react-icons/simple-icons).
// Klaviyo, ActiveCampaign, Constant Contact, Drip, ConvertKit, and Litmus
// don't have a Simple Icons entry, so those use a close-fit Tabler icon
// instead, each tinted with that brand's actual color so it still reads as
// intentional, not generic.
const tools = [
  { name: "Klaviyo", Icon: IconChartDots, color: "#0B0B0B" },
  { name: "Mailchimp", Icon: SiMailchimp, color: "#FFE01B" },
  { name: "ActiveCampaign", Icon: IconRoute, color: "#0067B1" },
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
  { name: "Brevo (Sendinblue)", Icon: SiBrevo, color: "#0B996E" },
  { name: "Constant Contact", Icon: IconAddressBook, color: "#1E6EC8" },
  { name: "Drip", Icon: IconDroplet, color: "#E85C41" },
  { name: "ConvertKit", Icon: IconMailForward, color: "#FB6970" },
  { name: "Zoho Campaigns", Icon: SiZoho, color: "#C8202F" },
  { name: "Litmus", Icon: IconDeviceDesktopCheck, color: "#3EBFA3" },
];

const EmailTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      component="section"
      py={{ base: 60, md: 90 }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ambient glow */}
      <Box
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          top: -220,
          right: -180,
          background: isDark
            ? "radial-gradient(circle, rgba(20,184,166,0.14), transparent 70%)"
            : "radial-gradient(circle, rgba(13,148,136,0.10), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Label */}
        <Text
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#14b8a6",
          }}
        >
          Platforms We Work On
        </Text>

        {/* Heading */}
        <Text
          fw={800}
          mb={16}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Every Major{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Email Platform
          </Text>
        </Text>

        {/* Subtitle */}
        <Text
          mb={48}
          maw={650}
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          Certified experts across all leading email service providers and automation tools.
        </Text>

        {/* Tool Cards */}
        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5 }} spacing={16} verticalSpacing={16}>
          {tools.map(({ name, Icon, color }, index) => (
            <MotionBox
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "26px 14px",
                borderRadius: 16,
                textAlign: "center",
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(13,148,136,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid rgba(13,148,136,0.12)",
                cursor: "default",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 14px 28px ${color}26`;
                e.currentTarget.style.borderColor = `${color}66`;
                e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255,255,255,0.10)"
                  : "rgba(13,148,136,0.12)";
                e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(13,148,136,0.03)";
              }}
            >
              <Box
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${color}17`,
                }}
              >
                <Icon size={24} color={color} />
              </Box>
              <Text
                size="sm"
                fw={600}
                style={{
                  color: isDark ? "rgba(255,255,255,0.85)" : "rgba(11,19,38,0.8)",
                  lineHeight: 1.3,
                }}
              >
                {name}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EmailTools;