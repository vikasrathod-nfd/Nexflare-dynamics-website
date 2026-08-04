import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Grid,
  Stack,
  Group,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ACCENT = "#2DD4BF";
const ACCENT2 = "#22D3EE";

const STANDARDS = [
  "RESTful design principles & correct HTTP status codes",
  "OpenAPI 3.0 spec & auto-generated interactive docs",
  "API versioning strategy (v1, v2) from day one",
  "Consistent JSON response structure & error formats",
  "Rate limiting, throttling & DDoS abuse prevention",
  "Full test coverage — unit, integration & load testing",
  "Webhook support & real-time event-driven architecture",
];

const TECH_STACK = [
  "Node.js",
  "Python / FastAPI",
  "Laravel / PHP",
  "GraphQL",
  "OAuth 2.0",
  "JWT",
  "Swagger / OpenAPI",
  "Postman",
];

const CodeLine = ({ children }) => (
  <Text
    component="div"
    style={{
      fontFamily:
        "ui-monospace, SFMono-Regular, 'JetBrains Mono', Menlo, monospace",
      fontSize: 14.5,
      lineHeight: 1.9,
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
    }}
  >
    {children}
  </Text>
);
const Key = ({ children }) => <span style={{ color: "#5eead4" }}>{children}</span>;
const Str = ({ children }) => <span style={{ color: "#4ade80" }}>{children}</span>;
const Num = ({ children }) => <span style={{ color: "#facc15" }}>{children}</span>;
const Punc = ({ children }) => (
  <span style={{ color: "rgba(226,232,240,0.5)" }}>{children}</span>
);

const ApiProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      component="section"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          top: -160,
          left: -200,
          background:
            "radial-gradient(circle, rgba(45,212,191,.12), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={{ base: 40, md: 56 }} align="stretch">
          {/* Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fw={700}
                style={{
                  fontSize: 13,
                  color: ACCENT,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                ● API Development Standards
              </Text>

              <Title
                order={2}
                style={{
                  fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: 16,
                  color: isDark ? "#F5F7FA" : "#0B1326",
                }}
              >
                APIs Built to{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: ACCENT2, to: ACCENT }}
                >
                  Industry Standards
                </Text>
              </Title>

              <Text
                style={{
                  maxWidth: 560,
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.75)"
                    : "rgba(15,23,42,0.65)",
                  marginBottom: 28,
                }}
              >
                Our APIs are engineered with clean architecture, robust security, and standardized documentation to ensure seamless integration across applications and third-party services. Every solution is built for reliability, scalability, and effortless maintenance by your development team.
              </Text>

              <Box style={{ marginBottom: 32 }}>
                {STANDARDS.map((item, index) => (
                  <MotionBox
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      marginBottom: 12,
                    }}
                  >
                    <Box
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                        background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
                      }}
                    >
                      <IconCheck size={12} stroke={3} color="#fff" />
                    </Box>
                    <Text
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.55,
                        color: isDark
                          ? "rgba(226,232,240,0.85)"
                          : "rgba(15,23,42,0.75)",
                      }}
                    >
                      {item}
                    </Text>
                  </MotionBox>
                ))}
              </Box>

              <Text
                fw={700}
                tt="uppercase"
                style={{
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: isDark
                    ? "rgba(226,232,240,0.5)"
                    : "rgba(15,23,42,0.45)",
                  marginBottom: 12,
                }}
              >
                Technologies We Work With
              </Text>
              <Group gap={10}>
                {TECH_STACK.map((tech) => (
                  <Box
                    key={tech}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 999,
                      border: `1px solid ${
                        isDark
                          ? "rgba(45,212,191,0.35)"
                          : "rgba(45,212,191,0.4)"
                      }`,
                      background: isDark
                        ? "rgba(45,212,191,0.06)"
                        : "rgba(45,212,191,0.08)",
                      transition: "all .25s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      const txt = e.currentTarget.querySelector("p");
                      if (txt) txt.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isDark
                        ? "rgba(45,212,191,0.06)"
                        : "rgba(45,212,191,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                      const txt = e.currentTarget.querySelector("p");
                      if (txt) txt.style.color = ACCENT;
                    }}
                  >
                    <Text
                      size="xs"
                      fw={500}
                      style={{
                        color: ACCENT,
                        whiteSpace: "nowrap",
                        transition: "color .25s ease",
                      }}
                    >
                      {tech}
                    </Text>
                  </Box>
                ))}
              </Group>
            </MotionBox>
          </Grid.Col>

          {/* Code panel — takes the place of the image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative", height: "100%" }}
            >
              <Paper
                p={28}
                radius={20}
                style={{
                  height: "100%",
                  minHeight: 480,
                  display: "flex",
                  alignItems: "center",
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(15,23,42,0.03)",
                  border: `1px solid ${
                    isDark ? "rgba(45,212,191,0.35)" : "rgba(45,212,191,0.4)"
                  }`,
                  boxShadow: isDark
                    ? "0 25px 70px rgba(0,0,0,0.5)"
                    : "0 25px 70px rgba(15,23,42,0.14)",
                }}
              >
                <CodeLine>
                  <span style={{ color: "rgba(226,232,240,0.4)" }}>
                    // Sample REST API Response — Nexflare Standard
                  </span>
                  {"\n"}
                  <Punc>{"{ "}</Punc>
                  <Key>&quot;status&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;success&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;code&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Num>200</Num>
                  <Punc>{", "}</Punc>
                  <Key>&quot;data&quot;</Key>
                  <Punc>{": { "}</Punc>
                  <Key>&quot;id&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;usr_4829&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;name&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;Arjun Shah&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;email&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;arjun@company.com&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;role&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;admin&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;created_at&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;2024-01-15T09:30:00Z&quot;</Str>
                  <Punc>{" }, "}</Punc>
                  <Key>&quot;meta&quot;</Key>
                  <Punc>{": { "}</Punc>
                  <Key>&quot;response_time&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;42ms&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;version&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;v2.1&quot;</Str>
                  <Punc>{", "}</Punc>
                  <Key>&quot;request_id&quot;</Key>
                  <Punc>{": "}</Punc>
                  <Str>&quot;req_7f3a9c&quot;</Str>
                  <Punc>{" } }"}</Punc>
                </CodeLine>
              </Paper>

              {/* Floating gradient accent behind the panel */}
              <Box
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: 26,
                  opacity: 0.18,
                  zIndex: -1,
                  filter: "blur(6px)",
                }}
              />
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ApiProcessSection;