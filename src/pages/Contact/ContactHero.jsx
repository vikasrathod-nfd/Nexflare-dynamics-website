import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
import { Phone, Mail, MapPin } from "lucide-react";

const aqua = "aqua";
const teal = "#06b6d4";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91-8237525097"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["enquiry@nexflaredynamics.com", "contact-us@nexflaredynamics.com"],
  },
  {
    icon: MapPin,
    label: "Office Address",
    lines: [
      "Global Business Hub, EON Free Zone,",
      "Kharadi, Pune, Maharashtra 411014",
    ],
    bold: true,
  },
];

// Decorative illustration for the left column
const ContactIllustration = () => (
  <svg width="100%" viewBox="0 0 680 500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="120" cy="90" r="70" fill="#06b6d4" opacity="0.08" />
    <circle cx="580" cy="420" r="90" fill="#06b6d4" opacity="0.06" />
    <circle cx="600" cy="80" r="30" fill="#06b6d4" opacity="0.12" />

    <g transform="translate(150,150)">
      <rect x="0" y="0" width="300" height="200" rx="16" fill="#06b6d4" opacity="0.1" />
      <rect x="20" y="30" width="260" height="150" rx="10" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5" />
      <path d="M20 30 L150 130 L280 30" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
    </g>

    <g transform="translate(420,260)">
      <path
        d="M0 40 Q0 0 40 0 L140 0 Q180 0 180 40 L180 90 Q180 130 140 130 L60 130 L20 165 L30 130 L40 130 Q0 130 0 90 Z"
        fill="#06b6d4"
        opacity="0.9"
      />
      <circle cx="45" cy="60" r="7" fill="#ffffff" />
      <circle cx="90" cy="60" r="7" fill="#ffffff" />
      <circle cx="135" cy="60" r="7" fill="#ffffff" />
    </g>

    <g stroke="#06b6d4" strokeWidth="1.5" opacity="0.5">
      <line x1="450" y1="180" x2="500" y2="250" />
      <line x1="130" y1="380" x2="200" y2="330" />
    </g>
    <circle cx="450" cy="180" r="5" fill="#06b6d4" />
    <circle cx="130" cy="380" r="5" fill="#06b6d4" />

    <g transform="translate(60,340)">
      <rect x="0" y="0" width="130" height="90" rx="14" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5" />
      <circle cx="30" cy="35" r="12" fill="#06b6d4" opacity="0.2" />
      <circle cx="30" cy="35" r="6" fill="#06b6d4" />
      <rect x="55" y="27" width="55" height="6" rx="3" fill="#06b6d4" opacity="0.35" />
      <rect x="55" y="42" width="40" height="6" rx="3" fill="#06b6d4" opacity="0.2" />
    </g>
  </svg>
);

const GetInTouchScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.6)" : "rgba(11,19,38,0.65)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const iconBg = isDark ? "rgba(6,182,212,0.14)" : "rgba(6,182,212,0.1)";
  const labelColor = isDark ? "rgba(226,232,240,0.45)" : "rgba(15,23,42,0.5)";
  const statLabelColor = isDark
    ? "rgba(226,232,240,0.55)"
    : "rgba(15,23,42,0.55)";

  return (
    <Box component="section" pt={40}>
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={{ base: 40, md: 60 }}
          py={60}
        >
          {/* Left column */}
          <Stack gap={20} justify="center">
            <Box
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                alignSelf: "flex-start",
                padding: "8px 16px",
                borderRadius: 999,
                border: `1px solid ${teal}55`,
                background: isDark
                  ? "rgba(6,182,212,0.08)"
                  : "rgba(6,182,212,0.06)",
                marginBottom: 4,
              }}
            >
              <Box
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: teal,
                }}
              />
              <Text
                fw={700}
                size="xs"
                style={{
                  color: teal,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </Text>
            </Box>

            <Title
              order={2}
              style={{ color: headingColor, fontSize: 36, lineHeight: 1.2 }}
            >
              Let's start a conversation
            </Title>

            <Text style={{ color: bodyColor, lineHeight: 1.7 }}>
              Have a project in mind or want to learn more about our services?
              Contact us through any of the channels alongside we look forward
              to connecting with you.
            </Text>

            <Box mt={12}>
              <ContactIllustration />
            </Box>
          </Stack>

          {/* Right column */}
          <Stack gap={16}>
            {contactCards.map(({ icon: Icon, label, lines }) => (
              <Box
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 14,
                  padding: "22px 24px",
                }}
              >
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    minWidth: 38,
                    borderRadius: 10,
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={17} color={teal} strokeWidth={1.8} />
                </Box>

                <Stack gap={4}>
                  <Text
                    fw={600}
                    size="xs"
                    style={{
                      color: labelColor,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </Text>
                  {lines.map((line) => (
                    <Text
                      key={line}
                      size="sm"
                      fw={600}
                      style={{
                        color: label === "Office Address" ? headingColor : teal,
                        lineHeight: 1.5,
                      }}
                    >
                      {line}
                    </Text>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GetInTouchScreen;