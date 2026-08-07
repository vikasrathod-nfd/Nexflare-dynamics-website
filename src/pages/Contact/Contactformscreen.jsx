import { useState } from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  TextInput,
  Textarea,
  Select,
  useComputedColorScheme,
  ThemeIcon,
  Button,
  Paper,
  Loader,
} from "@mantine/core";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { IconSend } from "@tabler/icons-react";
import { motion } from "framer-motion";

const teal = "#06b6d4";

// Decorative illustration for the right column
const ContactSideIllustration = () => (
  <svg width="100%" viewBox="0 0 680 620" xmlns="http://www.w3.org/2000/svg">
    <circle cx="560" cy="120" r="110" fill="#06b6d4" opacity="0.07" />
    <circle cx="100" cy="500" r="90" fill="#06b6d4" opacity="0.06" />
    <circle cx="70" cy="90" r="34" fill="#06b6d4" opacity="0.12" />

    <g transform="translate(190,80)">
      <rect x="0" y="0" width="300" height="360" rx="20" fill="#06b6d4" opacity="0.08" />
      <rect x="30" y="40" width="240" height="280" rx="16" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5" />

      <circle cx="150" cy="120" r="42" fill="#06b6d4" opacity="0.15" />
      <circle cx="150" cy="105" r="18" fill="#06b6d4" />
      <path d="M108 165 Q150 130 192 165 L192 185 L108 185 Z" fill="#06b6d4" />

      <rect x="65" y="215" width="150" height="10" rx="5" fill="#06b6d4" opacity="0.3" />
      <rect x="65" y="238" width="110" height="10" rx="5" fill="#06b6d4" opacity="0.18" />

      <rect x="65" y="270" width="150" height="34" rx="10" fill="#06b6d4" />
      <text
        x="140"
        y="292"
        textAnchor="middle"
        fontSize="13"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
      >
        We're here to help
      </text>
    </g>

    <g transform="translate(60,270)">
      <path
        d="M0 30 Q0 0 30 0 L110 0 Q140 0 140 30 L140 70 Q140 100 110 100 L45 100 L15 128 L22 100 L30 100 Q0 100 0 70 Z"
        fill="#06b6d4"
        opacity="0.85"
      />
      <circle cx="35" cy="48" r="6" fill="#ffffff" />
      <circle cx="70" cy="48" r="6" fill="#ffffff" />
      <circle cx="105" cy="48" r="6" fill="#ffffff" />
    </g>

    <g transform="translate(480,380)">
      <rect x="0" y="0" width="150" height="100" rx="16" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5" />
      <circle cx="34" cy="38" r="14" fill="#06b6d4" opacity="0.2" />
      <circle cx="34" cy="38" r="7" fill="#06b6d4" />
      <rect x="62" y="30" width="65" height="7" rx="3.5" fill="#06b6d4" opacity="0.35" />
      <rect x="62" y="48" width="45" height="7" rx="3.5" fill="#06b6d4" opacity="0.2" />
      <rect x="18" y="72" width="114" height="8" rx="4" fill="#06b6d4" opacity="0.12" />
    </g>

    <g stroke="#06b6d4" strokeWidth="1.5" opacity="0.45">
      <line x1="200" y1="300" x2="150" y2="330" />
      <line x1="480" y1="300" x2="510" y2="330" />
    </g>
    <circle cx="150" cy="330" r="5" fill="#06b6d4" />
    <circle cx="510" cy="330" r="5" fill="#06b6d4" />

    <g transform="translate(430,60)">
      <circle cx="0" cy="0" r="26" fill="#06b6d4" opacity="0.15" />
      <path
        d="M-10 0 L-2 8 L12 -8"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const ContactFormScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [company, setCompany] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.6)" : "rgba(11,19,38,0.65)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const labelColor = isDark ? "rgba(226,232,240,0.85)" : "rgba(15,23,42,0.85)";
  const inputBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const inputBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.15)";

  const inputStyles = {
    label: {
      color: labelColor,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0.5,
      marginBottom: 6,
      textTransform: "uppercase",
    },
    input: {
      backgroundColor: inputBg,
      borderColor: inputBorder,
      color: headingColor,
      height: 44,
    },
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/contact", {
        name,
        email,
        phone,
        service,
        company,
        message: query,
      });

      console.log(response.data);

      setSubmitted(true);

      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setCompany("");
      setQuery("");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" pt={130}>
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, lg: 2 }}
          spacing={{ base: 40, lg: 48 }}
          style={{ alignItems: "start" }}
        >
          {/* Left column — form */}
          <Box
            style={{
              background: isDark ? "#1B2434" : "#FFFFFF",
              borderRadius: 28,
              padding: 36,
              border: `1px solid ${
                isDark ? "rgba(255,255,255,.08)" : "#DCE8F8"
              }`,
              boxShadow: isDark
                ? "0 20px 60px rgba(0,0,0,.35)"
                : "0 25px 60px rgba(37,99,235,.10)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 4,
                background: "linear-gradient(90deg,#2563EB,#38BDF8)",
              }}
            />

            <Text
              fw={700}
              size="xs"
              mb={10}
              style={{
                color: teal,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              Why Contact Us
            </Text>

            <Title
              order={3}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: "1.5rem",
                color: headingColor,
              }}
            >
              Send Us a Message
            </Title>
            <Text
              mt={8}
              size="sm"
              style={{ color: bodyColor, lineHeight: 1.6 }}
            >
              Our experienced team will respond quickly with personalized
              attention and expert guidance to meet your goals.
            </Text>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Paper
                  radius={22}
                  p={40}
                  mt={30}
                  withBorder
                  style={{
                    textAlign: "center",
                    background: isDark ? "#1F2E4D" : "#EEF5FF",
                    border: `1px solid ${
                      isDark ? "rgba(59,130,246,.25)" : "rgba(59,130,246,.18)"
                    }`,
                  }}
                >
                  <ThemeIcon
                    size={74}
                    radius="xl"
                    mx="auto"
                    mb={22}
                    variant="gradient"
                    gradient={{ from: "#17A9E6", to: "#2589E6" }}
                  >
                    <IconSend
                      size={34}
                      stroke={2}
                      color="white"
                      style={{ transform: "rotate(-20deg)" }}
                    />
                  </ThemeIcon>

                  <Title
                    order={3}
                    mb={8}
                    style={{
                      color: isDark ? "#fff" : "#202020",
                      fontWeight: 700,
                    }}
                  >
                    Message sent!
                  </Title>

                  <Text
                    size="sm"
                    c={isDark ? "gray.4" : "gray.7"}
                    maw={320}
                    mx="auto"
                    mb={30}
                    lh={1.7}
                  >
                    Thanks for contacting us. Our team will reach out to you
                    within 24 hours.
                  </Text>

                  <Button
                    radius="xl"
                    size="md"
                    px={36}
                    variant="gradient"
                    gradient={
                      isDark
                        ? { from: "#153B69", to: "#0F4C81" }
                        : { from: "#D8ECFF", to: "#B9DEFF" }
                    }
                    styles={{
                      root: {
                        color: isDark ? "#fff" : "#1971C2",
                        fontWeight: 600,
                        height: 46,
                      },
                    }}
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setCompany("");
                      setService("");
                      setQuery("");
                    }}
                  >
                    Send another message
                  </Button>
                </Paper>
              </motion.div>
            ) : (
              <Stack gap={18} mt={26}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={16}>
                  <TextInput
                    label="Full Name *"
                    placeholder="e.g. Rahul Sharma"
                    styles={inputStyles}
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                  <TextInput
                    label="Email Address *"
                    placeholder="you@company.com"
                    styles={inputStyles}
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </SimpleGrid>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={16}>
                  <TextInput
                    label="Phone Number *"
                    placeholder="+91 98765 43210"
                    styles={inputStyles}
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                  />
                  <Select
                    label="Service Interested In"
                    placeholder="Select a service"
                    data={[
                      "HRM Software",
                      "ERP Software",
                      "CRM Software",
                      "Project Manager",
                      "Mobile Apps",
                      "Appointment Booking",
                      "Accounting & Finance",
                      "Not sure yet",
                    ]}
                    styles={inputStyles}
                    value={service}
                    onChange={setService}
                  />
                </SimpleGrid>

                <TextInput
                  label="Company / Organisation"
                  placeholder="Your company name (optional)"
                  styles={inputStyles}
                  value={company}
                  onChange={(e) => setCompany(e.currentTarget.value)}
                />

                <Box>
                  <Textarea
                    label="Your Query *"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    minRows={4}
                    maxLength={500}
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    styles={inputStyles}
                  />
                  <Text
                    size="xs"
                    ta="right"
                    mt={4}
                    style={{ color: bodyColor }}
                  >
                    {query.length} / 500
                  </Text>
                </Box>

                <Button
                  fullWidth
                  radius="md"
                  size="md"
                  onClick={handleSubmit}
                  disabled={loading}
                  leftSection={
                    loading ? (
                      <Loader color="white" size="xs" type="oval" />
                    ) : null
                  }
                  rightSection={!loading ? <ArrowRight size={16} /> : null}
                  style={{
                    height: 50,
                    background: "linear-gradient(135deg,#0891b2,#06b6d4)",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                <Text size="xs" ta="center" style={{ color: bodyColor }}>
                  We typically respond within{" "}
                  <Text component="span" fw={700} style={{ color: teal }}>
                    24 hours
                  </Text>{" "}
                  on business days.
                </Text>
              </Stack>
            )}
          </Box>

          {/* Right column — illustration */}
          <Stack justify="center" style={{ height: "100%" }}>
            <ContactSideIllustration />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactFormScreen;