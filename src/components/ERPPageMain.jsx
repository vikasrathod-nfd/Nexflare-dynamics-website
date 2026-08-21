import React from "react";
import {
  Box, Badge, Button, Container, Group, Stack, Text, Title,
  TextInput, SimpleGrid, Paper, Accordion, useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IconBolt, IconArrowRight, IconUsersGroup, IconCoin, IconTargetArrow,
  IconUserCircle, IconSpeakerphone, IconBox, IconTruck, IconTool,
  IconBuildingFactory2, IconClipboardList, IconChartBar, IconBuildingStore,
  IconStethoscope, IconBuildingBridge2, IconShoppingBag, IconBriefcase,
  IconPlugConnected, IconShieldCheck, IconDeviceLaptop, IconRocket,
} from "@tabler/icons-react";

const ERPComingSoon = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent    = isDark ? "#00D4C8"                : "#0891B2";
  const accentDim = isDark ? "rgba(0,212,200,0.12)"   : "rgba(8,145,178,0.10)";
  const border    = isDark ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.18)";
  const btnCol    = isDark ? "#0a0f1e"                : "#ffffff";
  const bgBase    = isDark ? "#040a12"                : "#f8fafc";
  const cardBg    = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";

  const modules = [
    { icon: IconUsersGroup, label: "HRMS", desc: "Onboarding, attendance, leave and payroll, automated end to end — zero manual reconciliation at month close." },
    { icon: IconCoin, label: "Finance", desc: "Invoicing, expense tracking and financial statements that update the instant a transaction happens." },
    { icon: IconUserCircle, label: "CRM", desc: "One shared timeline per customer — calls, emails, deals and support tickets, visible to the whole team." },
    { icon: IconTargetArrow, label: "Leads", desc: "Automatic capture, scoring and routing, so no lead sits untouched in someone's inbox for days." },
    { icon: IconSpeakerphone, label: "Marketing", desc: "Plan campaigns and track spend against pipeline, so you know exactly which channels convert." },
    { icon: IconBox, label: "Inventory", desc: "Live stock counts across every warehouse and outlet, with low-stock alerts before you run out." },
    { icon: IconClipboardList, label: "Purchase", desc: "Vendor comparisons, approval chains and purchase order tracking, without a single spreadsheet." },
    { icon: IconTruck, label: "Logistics", desc: "Route planning, shipment tracking and delivery confirmations your customers can follow live." },
    { icon: IconTool, label: "Maintenance", desc: "Preventive schedules and full asset history, so equipment downtime stops being a surprise." },
    { icon: IconBuildingFactory2, label: "Manufacturing", desc: "Production planning and shop-floor tracking tied directly to raw material stock in real time." },
    { icon: IconChartBar, label: "Sales", desc: "A pipeline your whole team actually uses — quotes, orders and follow-ups in a single thread." },
    { icon: IconChartBar, label: "Analytics", desc: "Live dashboards pulled from every module, so leadership sees the business as it stands today." },
  ];

  return (
    <Box style={{ background: bgBase }}>
      {/* HERO */}
      <Box
        component="section"
        py={{ base: 120, sm: 150, md: 190 }}
        style={{ position: "relative", overflow: "hidden", paddingBottom:"0px" }}
      >
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${accentDim}, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        {/* soft floating glyphs */}
        <Box style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          {modules.slice(0, 6).map((m, i) => {
            const positions = [
              { top: "10%", left: "8%" }, { top: "16%", right: "6%" },
              { bottom: "20%", left: "5%" }, { bottom: "14%", right: "8%" },
              { top: "48%", left: "2%" }, { top: "44%", right: "1%" },
            ];
            return (
              <motion.div
                key={m.label}
                style={{ position: "absolute", ...positions[i] }}
                animate={{ opacity: [0.12, 0.35, 0.12], scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              >
                <Box
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    border: `1px solid ${border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: cardBg,
                  }}
                >
                  <m.icon size={20} color={accent} stroke={1.5} />
                </Box>
              </motion.div>
            );
          })}
        </Box>

        <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Stack gap={24} align="center" ta="center" mx="auto" maw={680}>
              <Badge
                size="lg"
                variant="outline"
                leftSection={<IconBolt size={14} />}
                style={{
                  borderColor: `${accent}55`, color: accent, fontWeight: 700,
                  letterSpacing: 1, textTransform: "uppercase",
                }}
              >
                In Development Launching Soon
              </Badge>

              <Title
                fw={900}
                style={{
                  fontSize: "clamp(2.4rem,6vw,4rem)",
                  lineHeight: 1.1, letterSpacing: -0.5,
                  color: isDark ? "#f8fafc" : "#0a0f1e",
                }}
              >
                Run Your Entire Business{" "}
                <span >
                  From One System.
                </span>
              </Title>

              <Text
                size="md"
                lh={1.85}
                style={{
                  color: isDark ? "rgba(255,255,255,.75)" : "rgba(10,15,30,.7)",
                  maxWidth: 560,
                }}
              >
                From hiring and payroll to inventory and invoicing, from your first lead to
                the delivery van at the customer's door every workflow your business
                depends on, connected in one platform that actually talks to itself.
                No more juggling six tools that don't sync.
              </Text>

            
              
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* MODULES GRID */}
      <Box component="section" py={{ base: 60, sm: 80, md: 100 }}>
        <Container size="xl">
          <Stack gap={8} align="center" ta="center" mb={48}>
            <Text
              size="xs"
              fw={700}
              style={{ color: accent, letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              What's Inside
            </Text>
            <Title
              order={2}
              fw={800}
              style={{
                fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
                color: isDark ? "#f8fafc" : "#0a0f1e",
              }}
            >
              Every department, one system of record
            </Title>
          </Stack>
          <Text
            size="sm"
            ta="center"
            mx="auto"
            mb={40}
            style={{ color: isDark ? "rgba(255,255,255,.6)" : "rgba(10,15,30,.6)", maxWidth: 560 }}
          >
            Twelve modules built to work together from day one — not bolted on after
            the fact. Data entered once flows everywhere it's needed.
          </Text>

          <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing={20}>
            {modules.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Paper
                  p="lg"
                  radius="lg"
                  style={{
                    background: cardBg,
                    border: `1px solid ${border}`,
                    height: "100%",
                  }}
                  className="erp-mod-card"
                >
                  <Box
                    style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: accentDim,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <m.icon size={20} color={accent} stroke={1.6} />
                  </Box>
                  <Text fw={700} size="sm" mb={4} style={{ color: isDark ? "#f8fafc" : "#0a0f1e" }}>
                    {m.label}
                  </Text>
                  <Text size="xs" lh={1.6} style={{ color: isDark ? "rgba(255,255,255,.6)" : "rgba(10,15,30,.6)" }}>
                    {m.desc}
                  </Text>
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

     

      {/* WHY CHOOSE US */}
      <Box component="section" py={{ base: 60, sm: 80, md: 100 }}>
        <Container size="xl">
          <Stack gap={8} align="center" ta="center" mb={48}>
            <Text
              size="xs"
              fw={700}
              style={{ color: accent, letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              Why This ERP
            </Text>
            <Title
              order={2}
              fw={800}
              style={{
                fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
                color: isDark ? "#f8fafc" : "#0a0f1e",
              }}
            >
              Built to remove the busywork
            </Title>
          </Stack>
          <Text
            size="sm"
            ta="center"
            mx="auto"
            mb={40}
            style={{ color: isDark ? "rgba(255,255,255,.6)" : "rgba(10,15,30,.6)", maxWidth: 560 }}
          >
            Most ERPs make you adapt to the software. This one is built around how
            your teams already work — so adoption takes days, not quarters.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={24}>
            {[
              {
                icon: IconChartBar,
                title: "One Source Of Truth",
                desc: "Every department reads from the same live data, so nothing is out of sync or duplicated across spreadsheets.",
              },
              {
                icon: IconBolt,
                title: "Automated Workflows",
                desc: "Routine approvals, reminders and handoffs happen on their own, so your team spends time on decisions, not data entry.",
              },
              {
                icon: IconClipboardList,
                title: "Role-Based Access",
                desc: "Every team sees exactly what's relevant to them, with clean permissions across HR, finance, and operations.",
              },
              {
                icon: IconUsersGroup,
                title: "Built To Scale",
                desc: "Start with a 10-person team and grow to 500 without outgrowing the system or migrating your data again.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Paper p="xl" radius="lg" style={{ background: cardBg, border: `1px solid ${border}`, height: "100%" }}>
                  <Box
                    style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: accentDim,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <f.icon size={22} color={accent} stroke={1.6} />
                  </Box>
                  <Text fw={700} size="md" mb={8} style={{ color: isDark ? "#f8fafc" : "#0a0f1e" }}>
                    {f.title}
                  </Text>
                  <Text size="sm" lh={1.7} style={{ color: isDark ? "rgba(255,255,255,.65)" : "rgba(10,15,30,.65)" }}>
                    {f.desc}
                  </Text>
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* INDUSTRIES */}
      <Box component="section" py={{ base: 60, sm: 80, md: 100 }} style={{ borderTop: `1px solid ${border}` }}>
        <Container size="xl">
          <Stack gap={8} align="center" ta="center" mb={16}>
            <Text
              size="xs"
              fw={700}
              style={{ color: accent, letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              Who It's For
            </Text>
            <Title
              order={2}
              fw={800}
              style={{
                fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
                color: isDark ? "#f8fafc" : "#0a0f1e",
              }}
            >
              Built for how your industry actually runs
            </Title>
          </Stack>
          <Text
            size="sm"
            ta="center"
            mx="auto"
            mb={40}
            style={{ color: isDark ? "rgba(255,255,255,.6)" : "rgba(10,15,30,.6)", maxWidth: 560 }}
          >
            The modules stay the same, but how they're configured changes by industry —
            so you're not stretching a generic template to fit your operations.
          </Text>

          <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} spacing={20}>
            {[
              { icon: IconBuildingFactory2, title: "Manufacturing", desc: "Production planning, BOM tracking and shop-floor visibility tied to raw material stock." },
              { icon: IconBuildingStore, title: "Retail & Distribution", desc: "Multi-outlet inventory, POS sync and vendor management in one connected view." },
              { icon: IconBriefcase, title: "Professional Services", desc: "Project timelines, billable hours and client invoicing without switching tools." },
              { icon: IconStethoscope, title: "Healthcare", desc: "Staff scheduling, supply tracking and compliance-ready record keeping." },
              { icon: IconBuildingBridge2, title: "Construction", desc: "Site-wise procurement, equipment maintenance and project cost tracking." },
              { icon: IconShoppingBag, title: "E-commerce", desc: "Order-to-delivery visibility across warehouses, couriers and payment reconciliation." },
            ].map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Paper p="lg" radius="lg" style={{ background: cardBg, border: `1px solid ${border}`, height: "100%" }}>
                  <Group gap={12} align="flex-start" wrap="nowrap">
                    <Box
                      style={{
                        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                        background: accentDim,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <ind.icon size={20} color={accent} stroke={1.6} />
                    </Box>
                    <Box>
                      <Text fw={700} size="sm" mb={4} style={{ color: isDark ? "#f8fafc" : "#0a0f1e" }}>
                        {ind.title}
                      </Text>
                      <Text size="xs" lh={1.6} style={{ color: isDark ? "rgba(255,255,255,.6)" : "rgba(10,15,30,.6)" }}>
                        {ind.desc}
                      </Text>
                    </Box>
                  </Group>
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* HOW IT WORKS */}
      <Box component="section" py={{ base: 60, sm: 80, md: 100 }} style={{ borderTop: `1px solid ${border}` }}>
        <Container size="xl">
          <Stack gap={8} align="center" ta="center" mb={48}>
            <Text
              size="xs"
              fw={700}
              style={{ color: accent, letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              How It Works
            </Text>
            <Title
              order={2}
              fw={800}
              style={{
                fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
                color: isDark ? "#f8fafc" : "#0a0f1e",
              }}
            >
              From signup to go live in four steps
            </Title>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={24}>
            {[
              { icon: IconDeviceLaptop, step: "01", title: "Create Your Workspace", desc: "Sign up and set up your company profile — no credit card required to get started." },
              { icon: IconPlugConnected, step: "02", title: "Import Your Data", desc: "Bring in existing records from spreadsheets or your current system with guided import tools." },
              { icon: IconShieldCheck, step: "03", title: "Configure Your Modules", desc: "Turn on the modules your business needs and set roles, permissions and approval flows." },
              { icon: IconRocket, step: "04", title: "Go Live", desc: "Your team starts working from one system — with support on hand through the first weeks." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Paper p="lg" radius="lg" style={{ background: cardBg, border: `1px solid ${border}`, height: "100%" }}>
                  <Text
                    fw={900}
                    style={{ fontSize: "1.8rem", color: `${accent}55`, letterSpacing: -1, marginBottom: 8 }}
                  >
                    {s.step}
                  </Text>
                  <Box
                    style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: accentDim,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <s.icon size={20} color={accent} stroke={1.6} />
                  </Box>
                  <Text fw={700} size="sm" mb={4} style={{ color: isDark ? "#f8fafc" : "#0a0f1e" }}>
                    {s.title}
                  </Text>
                  <Text size="xs" lh={1.6} style={{ color: isDark ? "rgba(255,255,255,.6)" : "rgba(10,15,30,.6)" }}>
                    {s.desc}
                  </Text>
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box component="section" py={{ base: 60, sm: 80, md: 100 }} style={{ borderTop: `1px solid ${border}` }}>
        <Container size="md">
          <Stack gap={8} align="center" ta="center" mb={40}>
            <Text
              size="xs"
              fw={700}
              style={{ color: accent, letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              Common Questions
            </Text>
            <Title
              order={2}
              fw={800}
              style={{
                fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
                color: isDark ? "#f8fafc" : "#0a0f1e",
              }}
            >
              Frequently asked questions
            </Title>
          </Stack>

          <Accordion
            variant="separated"
            radius="lg"
            styles={{
              item: { background: cardBg, border: `1px solid ${border}` },
              label: { color: isDark ? "#f8fafc" : "#0a0f1e", fontWeight: 600 },
              content: { color: isDark ? "rgba(255,255,255,.65)" : "rgba(10,15,30,.65)" },
            }}
          >
            <Accordion.Item value="modules">
              <Accordion.Control>Do I need to use every module, or can I pick what I need?</Accordion.Control>
              <Accordion.Panel>
                You choose which modules to activate. Start with the ones that matter most —
                like Finance and CRM and turn on the rest as your business needs them.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="data">
              <Accordion.Control>Can I migrate data from my current system?</Accordion.Control>
              <Accordion.Panel>
                Yes. During onboarding, our guided import tools help you bring in records
                from spreadsheets or most existing ERP and accounting systems.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="pricing">
              <Accordion.Control>What will pricing look like?</Accordion.Control>
              <Accordion.Panel>
                Pricing details will be shared with early access users first. Joining the
                waitlist guarantees you see them — and early access pricing — before public launch.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="security">
              <Accordion.Control>How is my business data kept secure?</Accordion.Control>
              <Accordion.Panel>
                Data is encrypted in transit and at rest, access is controlled through
                role-based permissions, and every account gets its own isolated workspace.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="support">
              <Accordion.Control>Will I get help setting things up?</Accordion.Control>
              <Accordion.Panel>
                Early access customers get hands-on onboarding support to configure modules,
                import data and get their team trained before go-live.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box component="section" py={{ base: 60, sm: 80 }}>
        <Container size="xl">
          <Paper
            p={{ base: 32, sm: 48 }}
            radius="xl"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${accentDim}, transparent 70%), ${cardBg}`,
              border: `1px solid ${border}`,
              textAlign: "center",
            }}
          >
            <Stack gap={16} align="center" mx="auto" maw={520}>
              <Title
                order={2}
                fw={800}
                style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: isDark ? "#f8fafc" : "#0a0f1e" }}
              >
                Get Early Access Before We Open The Doors
              </Title>
              <Text size="sm" style={{ color: isDark ? "rgba(255,255,255,.65)" : "rgba(10,15,30,.65)" }}>
                Join the waitlist and we'll email you the moment onboarding opens —
                early access spots are limited to the first batch of businesses.
              </Text>
             

              <Button
                variant="outline"
                size="md" radius="xl"
                rightSection={<IconArrowRight size={16} />}
                style={{ borderColor: `${accent}55`, color: accent, fontWeight: 700 }}
                className="aisv-btn-outline"
                onClick={() => navigate("/contact")}
              >
                Book a Call
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <style>{`
        .aisv-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .aisv-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        .aisv-btn-outline {
          transition: transform .22s ease, background .22s ease !important;
        }
        .aisv-btn-outline:hover {
          transform: translateY(-2px) !important;
          background: ${accentDim} !important;
        }
        .erp-mod-card {
          transition: transform .2s ease, border-color .2s ease !important;
        }
        .erp-mod-card:hover {
          transform: translateY(-3px) !important;
          border-color: ${accent}55 !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .aisv-btn, .erp-mod-card { transition: none !important; }
        }
      `}</style>
    </Box>
  );
};

export default ERPComingSoon;