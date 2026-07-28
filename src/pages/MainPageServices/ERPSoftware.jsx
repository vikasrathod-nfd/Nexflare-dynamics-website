// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Title,
//   Text,
//   Group,
//   Stack,
//   SimpleGrid,
//   Paper,
//   Button,
//   Badge,
//   ThemeIcon,
//   Accordion,
//   Image,
//   useComputedColorScheme,
// } from "@mantine/core";
// import {
//   IconBuildingSkyscraper,
//   IconCircleCheck,
//   IconWallet,
//   IconBoxSeam,
//   IconUsers,
//   IconShoppingCart,
//   IconChartBar,
//   IconAffiliate,
//   IconArrowRight,
//   IconRocket,
//   IconChevronDown,
//   IconShieldCheck,
//   IconTrendingUp,
//   IconBolt,
//   IconCoin,
//   IconSearch,
//   IconPencil,
//   IconCode,
//   IconServer,
// } from "@tabler/icons-react";

// const CAPABILITIES = [
//   "Unified finance, inventory & HR data",
//   "Custom workflow automation engine",
//   "Real-time dashboards & reporting",
//   "Role-based access & audit trails",
// ];

// const MODULES = [
//   {
//     icon: IconWallet,
//     color: "blue",
//     title: "Finance & Accounting",
//     summary: "General ledger, invoicing, and multi-currency accounting in one place.",
//     details:
//       "Automate accounts payable/receivable, reconcile ledgers in real time, and generate audit-ready financial statements. Supports multi-entity, multi-currency operations with configurable approval chains.",
//   },
//   {
//     icon: IconBoxSeam,
//     color: "cyan",
//     title: "Inventory & Warehouse",
//     summary: "Track stock levels, transfers, and fulfillment across every location.",
//     details:
//       "Barcode/RFID-ready stock tracking, automated reorder points, and warehouse-to-warehouse transfers. Integrates with your shipping carriers for live fulfillment status.",
//   },
//   {
//     icon: IconUsers,
//     color: "indigo",
//     title: "HR & Payroll",
//     summary: "Employee records, attendance, payroll runs, and compliance.",
//     details:
//       "Centralize onboarding, leave management, and performance reviews. Run payroll with automatic tax and statutory deduction calculations tailored to your region.",
//   },
//   {
//     icon: IconShoppingCart,
//     color: "blue",
//     title: "Procurement",
//     summary: "Purchase orders, vendor management, and approval workflows.",
//     details:
//       "Set up multi-level approval rules, compare vendor quotes side by side, and track purchase-order status from request to delivery — all tied back to inventory in real time.",
//   },
//   {
//     icon: IconChartBar,
//     color: "cyan",
//     title: "Business Intelligence",
//     summary: "Live dashboards and custom reports across every department.",
//     details:
//       "Drag-and-drop report builder, scheduled exports, and role-based dashboards so finance, ops, and leadership each see the metrics that matter to them.",
//   },
//   {
//     icon: IconAffiliate,
//     color: "indigo",
//     title: "Workflow Automation",
//     summary: "No-code rules engine to automate approvals and notifications.",
//     details:
//       "Build if-this-then-that style automations across modules — auto-route invoices over a threshold for approval, trigger low-stock alerts, or notify managers of pending leave requests.",
//   },
// ];

// const WHY_CHOOSE_US = [
//   {
//     icon: IconTrendingUp,
//     color: "blue",
//     title: "Scales With You",
//     description:
//       "Add users, warehouses, or entities without re-platforming. Built to grow from one office to multi-country operations.",
//   },
//   {
//     icon: IconShieldCheck,
//     color: "cyan",
//     title: "Secure By Design",
//     description:
//       "Role-based access, encrypted data at rest and in transit, and full audit trails for every transaction.",
//   },
//   {
//     icon: IconBolt,
//     color: "indigo",
//     title: "Faster Decisions",
//     description:
//       "Real-time dashboards mean finance, ops, and leadership see the same numbers the moment they change.",
//   },
//   {
//     icon: IconCoin,
//     color: "blue",
//     title: "Lower Total Cost",
//     description:
//       "One platform replaces multiple disconnected tools and the manual work of keeping them in sync.",
//   },
// ];

// const PROCESS_STEPS = [
//   {
//     icon: IconSearch,
//     title: "Discovery",
//     description: "We map your current workflows, data sources, and pain points across departments.",
//   },
//   {
//     icon: IconPencil,
//     title: "Design",
//     description: "Module structure, permissions, and integrations are planned around how your team actually works.",
//   },
//   {
//     icon: IconCode,
//     title: "Development",
//     description: "Build in iterations with regular check-ins, so nothing ships as a surprise.",
//   },
//   {
//     icon: IconServer,
//     title: "Deployment & Support",
//     description: "Go live with data migration handled, plus ongoing monitoring and support after launch.",
//   },
// ];

// const FAQS = [
//   {
//     question: "Can this integrate with our existing accounting or CRM software?",
//     answer:
//       "Yes. The ERP is built with an open API layer so it can connect to existing accounting software, CRMs, and shipping or payment providers instead of forcing a full replacement on day one.",
//   },
//   {
//     question: "How long does implementation usually take?",
//     answer:
//       "Most single-entity setups go live in 8–12 weeks. Multi-entity or multi-country rollouts typically take longer depending on how much data migration and process customization is involved.",
//   },
//   {
//     question: "Is our data migrated automatically from spreadsheets or our old system?",
//     answer:
//       "We handle data migration as part of the deployment phase — cleaning, mapping, and importing your existing records so your team isn't starting from zero.",
//   },
//   {
//     question: "What happens after launch if we need changes?",
//     answer:
//       "Ongoing support is included. New workflows, additional modules, or reporting changes can be added as your business needs evolve.",
//   },
// ];

// const STATS = [
//   { value: "100+", label: "Successful software projects" },
//   { value: "35%", label: "Avg. reduction in manual ops" },
//   { value: "24/7", label: "Support & monitoring" },
// ];

// const TECH = ["REACT", "JAVA", "SPRING BOOT", "NODE.JS", "MYSQL", "AWS"];

// const ModuleCard = ({ mod, isOpen, onToggle, dark }) => {
//   const Icon = mod.icon;
//   return (
//     <Paper
//       onClick={onToggle}
//       p="lg"
//       radius="lg"
//       withBorder
//       style={{
//         cursor: "pointer",
//         background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
//         borderColor: isOpen
//           ? "var(--mantine-color-blue-5)"
//           : dark
//             ? "rgba(255,255,255,0.08)"
//             : "var(--mantine-color-gray-2)",
//         transition: "all .2s ease",
//       }}
//     >
//       <Group justify="space-between" wrap="nowrap" align="flex-start">
//         <Group wrap="nowrap" align="flex-start">
//           <ThemeIcon size={44} radius="xl" variant="light" color={mod.color}>
//             <Icon size={22} />
//           </ThemeIcon>
//           <div>
//             <Text fw={600} size="md">
//               {mod.title}
//             </Text>
//             <Text size="sm" c="dimmed" mt={2}>
//               {mod.summary}
//             </Text>
//           </div>
//         </Group>
//         <IconChevronDown
//           size={18}
//           style={{
//             flexShrink: 0,
//             marginTop: 6,
//             transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//             transition: "transform .2s ease",
//             color: "var(--mantine-color-dimmed)",
//           }}
//         />
//       </Group>

//       {isOpen && (
//         <Text size="sm" c="dimmed" mt="sm" pl={58} style={{ lineHeight: 1.6 }}>
//           {mod.details}
//         </Text>
//       )}
//     </Paper>
//   );
// };

// const ERPSoftware = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const dark = computedColorScheme === "dark";
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <Box
//       py={50}
//       style={{
//         minHeight: "100vh",
//         overflow: "hidden",
//         background: dark
//           ? `
//             radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 35%),
//             radial-gradient(circle at top right, rgba(6,182,212,.15), transparent 35%),
//             linear-gradient(180deg,#08111f 0%,#0b1326 45%,#060d18 100%)
//           `
//           : `
//             radial-gradient(circle at top left, rgba(37,99,235,.08), transparent 35%),
//             radial-gradient(circle at top right, rgba(6,182,212,.06), transparent 35%),
//             linear-gradient(180deg,#ffffff 0%,#f7fbff 45%,#eef7ff 100%)
//           `,
//       }}
//     >
//       {/* Hero */}
//       <Container size="lg" pt={100} pb={70}>

//         <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50} verticalSpacing={40}>
//           <div>
//             <Group gap="sm" mb="lg">
//               <ThemeIcon size={48} radius="md" variant="light" color="blue">
//                 <IconBuildingSkyscraper size={24} />
//               </ThemeIcon>
//               <Text fw={600} tt="uppercase" c="blue" size="sm" style={{ letterSpacing: 0.5 }}>
//                 Software Solutions
//               </Text>
//             </Group>

//             <Title order={1} size={44} fw={800} style={{ lineHeight: 1.15 }}>
//               Enterprise Resource Planning
//             </Title>

//             <Text size="lg" c="dimmed" mt="lg" style={{ lineHeight: 1.6 }}>
//               One connected system for finance, inventory, HR, and procurement —
//               replacing spreadsheets and disconnected tools with a single source of
//               truth that scales as your business grows.
//             </Text>

//             <Stack gap="md" mt="xl">
//               {CAPABILITIES.map((item) => (
//                 <Group key={item} gap="sm" wrap="nowrap">
//                   <ThemeIcon size={24} radius="xl" variant="light" color="cyan">
//                     <IconCircleCheck size={16} />
//                   </ThemeIcon>
//                   <Text fw={500} size="sm">
//                     {item}
//                   </Text>
//                 </Group>
//               ))}
//             </Stack>

//             <Group gap="xs" mt="xl">
//               {TECH.map((t) => (
//                 <Badge key={t} size="lg" radius="sm" variant="filled" color="blue">
//                   {t}
//                 </Badge>
//               ))}
//             </Group>

//             <Button
//               mt="xl"
//               size="md"
//               radius="md"
//               color="blue"
//               rightSection={<IconArrowRight size={16} />}
//             >
//               Start Your Project
//             </Button>
//           </div>

//           <Box visibleFrom="md">
//             <Image
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
//               alt="Team reviewing business dashboards"
//               radius="lg"
//               h={460}
//               fit="cover"
//               style={{
//                 boxShadow: dark
//                   ? "0 20px 60px rgba(0,0,0,.5)"
//                   : "0 20px 60px rgba(37,99,235,.15)",
//               }}
//             />
//           </Box>
//         </SimpleGrid>
//       </Container>

//       {/* Modules */}
//       <Container size="lg" py="xl">
//         <Title order={2} size={28} fw={700} mb={4}>
//           What&apos;s included
//         </Title>
//         <Text c="dimmed" mb="xl">
//           Tap a module to see what it covers.
//         </Text>

//         <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
//           {MODULES.map((mod, i) => (
//             <ModuleCard
//               key={mod.title}
//               mod={mod}
//               isOpen={openIndex === i}
//               onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
//               dark={dark}
//             />
//           ))}
//         </SimpleGrid>
//       </Container>

//       {/* Why Choose Us */}
//       <Container size="lg" py="xl">
//         <Title order={2} size={28} fw={700} mb={4}>
//           Why teams choose this ERP
//         </Title>
//         <Text c="dimmed" mb="xl">
//           Built for the operational details that generic software misses.
//         </Text>

//         <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
//           {WHY_CHOOSE_US.map((item) => (
//             <Paper
//               key={item.title}
//               p="lg"
//               radius="lg"
//               withBorder
//               style={{
//                 background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
//                 borderColor: dark ? "rgba(255,255,255,0.08)" : "var(--mantine-color-gray-2)",
//               }}
//             >
//               <ThemeIcon size={44} radius="xl" variant="light" color={item.color} mb="md">
//                 <item.icon size={22} />
//               </ThemeIcon>
//               <Text fw={600} mb={4}>
//                 {item.title}
//               </Text>
//               <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
//                 {item.description}
//               </Text>
//             </Paper>
//           ))}
//         </SimpleGrid>
//       </Container>

//       {/* Banner image */}
//       <Container size="lg" py="md">
//         <Image
//           src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
//           alt="Team collaborating around a laptop"
//           radius="lg"
//           h={280}
//           fit="cover"
//         />
//       </Container>

//       {/* Process */}
//       <Container size="lg" py="xl">
//         <Title order={2} size={28} fw={700} mb={4}>
//           How implementation works
//         </Title>
//         <Text c="dimmed" mb="xl">
//           From first call to go-live, in four stages.
//         </Text>

//         <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
//           {PROCESS_STEPS.map((step, i) => (
//             <Paper
//               key={step.title}
//               p="lg"
//               radius="lg"
//               withBorder
//               style={{
//                 background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
//                 borderColor: dark ? "rgba(255,255,255,0.08)" : "var(--mantine-color-gray-2)",
//               }}
//             >
//               <Group gap="sm" mb="sm">
//                 <ThemeIcon size={40} radius="xl" variant="light" color="blue">
//                   <step.icon size={20} />
//                 </ThemeIcon>
//                 <Text size="xs" fw={700} c="dimmed">
//                   STEP {i + 1}
//                 </Text>
//               </Group>
//               <Text fw={600} mb={4}>
//                 {step.title}
//               </Text>
//               <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
//                 {step.description}
//               </Text>
//             </Paper>
//           ))}
//         </SimpleGrid>
//       </Container>



//       {/* FAQ */}
//       <Container size="lg" py="xl">
//         <Title order={2} size={28} fw={700} mb={4}>
//           Frequently asked questions
//         </Title>
//         <Text c="dimmed" mb="xl">
//           Still deciding? Here's what teams usually ask first.
//         </Text>

//         <Accordion
//           variant="separated"
//           radius="lg"
//           styles={{
//             item: {
//               background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
//               border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "var(--mantine-color-gray-2)"}`,
//             },
//           }}
//         >
//           {FAQS.map((faq) => (
//             <Accordion.Item key={faq.question} value={faq.question}>
//               <Accordion.Control>
//                 <Text fw={600}>{faq.question}</Text>
//               </Accordion.Control>
//               <Accordion.Panel>
//                 <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
//                   {faq.answer}
//                 </Text>
//               </Accordion.Panel>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </Container>

//       {/* CTA footer */}
//       <Container size="lg" py={80}>
//         <Paper
//           radius="lg"
//           p="xl"
//           withBorder
//           style={{
//             background: dark ? "rgba(37,99,235,.08)" : "rgba(37,99,235,.05)",
//             borderColor: dark ? "rgba(37,99,235,.25)" : "rgba(37,99,235,.15)",
//           }}
//         >
//           <Group justify="space-between" wrap="wrap" gap="lg">
//             <div>
//               <Title order={3} size={22} fw={700}>
//                 Ready to bring your operations onto one platform?
//               </Title>
//               <Text c="dimmed" mt={4}>
//                 Tell us about your workflows and we&apos;ll map out an ERP build that fits.
//               </Text>
//             </div>
//             <Button size="md" radius="md" color="blue" leftSection={<IconRocket size={16} />}>
//               Get a Proposal
//             </Button>
//           </Group>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default ERPSoftware;



import { useState } from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  SimpleGrid,
  Paper,
  Button,
  Badge,
  ThemeIcon,
  Image,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconBuildingSkyscraper,
  IconCircleCheck,
  IconWallet,
  IconBoxSeam,
  IconUsers,
  IconShoppingCart,
  IconChartBar,
  IconAffiliate,
  IconArrowRight,
  IconRocket,
  IconChevronDown,
  IconShieldCheck,
  IconTrendingUp,
  IconBolt,
  IconCoin,
  IconSearch,
  IconPencil,
  IconCode,
  IconServer,
  IconClock,
  IconDatabase,
  IconLock,
  IconCloud,
  IconCheck,
  IconStar,
} from "@tabler/icons-react";

const CAPABILITIES = [
  "Unified finance, inventory & HR in one source of truth",
  "No-code workflow automation across every department",
  "Live dashboards that update the moment data changes",
  "Role-based access, full audit trails & enterprise security",
];

const MODULES = [
  {
    icon: IconWallet,
    color: "blue",
    title: "Finance & Accounting",
    summary: "General ledger, invoicing, multi-currency & audit-ready statements.",
    details:
      "Automate AP/AR, reconcile ledgers in real time, and generate financial statements that stand up to audits. Built for multi-entity and multi-currency operations with configurable approval chains, tax rules, and period close workflows—so finance stops chasing spreadsheets.",
  },
  {
    icon: IconBoxSeam,
    color: "cyan",
    title: "Inventory & Warehouse",
    summary: "Stock, transfers, and fulfillment visibility across every location.",
    details:
      "Barcode/RFID-ready tracking, automated reorder points, and warehouse-to-warehouse transfers. Live stock levels, lot/serial tracking, and carrier integrations mean ops always knows what’s available and where it’s going—without manual stock takes.",
  },
  {
    icon: IconUsers,
    color: "indigo",
    title: "HR & Payroll",
    summary: "Employee records, attendance, payroll, and regional compliance.",
    details:
      "Centralize onboarding, leave, and performance. Run payroll with automatic tax and statutory deductions tailored to your region. Managers and employees self-serve the routine requests so HR can focus on people, not paperwork.",
  },
  {
    icon: IconShoppingCart,
    color: "blue",
    title: "Procurement",
    summary: "Purchase orders, vendor quotes, and multi-level approvals.",
    details:
      "Configure approval rules by amount or category, compare vendor quotes side by side, and track every PO from request to delivery. Every purchase is linked back to inventory and finance in real time—no more lost POs or surprise invoices.",
  },
  {
    icon: IconChartBar,
    color: "cyan",
    title: "Business Intelligence",
    summary: "Role-based dashboards and reports that leadership actually uses.",
    details:
      "Drag-and-drop report builder, scheduled exports, and live KPIs so finance, ops, and executives each see the metrics that matter to them. One version of the truth—no more conflicting numbers in different spreadsheets.",
  },
  {
    icon: IconAffiliate,
    color: "indigo",
    title: "Workflow Automation",
    summary: "No-code rules that route approvals, alerts, and handoffs.",
    details:
      "Build if-this-then-that automations across modules: auto-route invoices over a threshold, trigger low-stock alerts, notify managers of pending leave, or escalate overdue POs. Reduce manual chasing and keep processes consistent as you scale.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: IconTrendingUp,
    color: "blue",
    title: "Scales With You",
    description:
      "Add users, warehouses, entities, or countries without re-platforming. Designed to grow from a single office to multi-entity operations without starting over.",
  },
  {
    icon: IconShieldCheck,
    color: "cyan",
    title: "Secure By Design",
    description:
      "Role-based access, encryption at rest and in transit, and complete audit trails on every transaction—so compliance and security teams stay confident.",
  },
  {
    icon: IconBolt,
    color: "indigo",
    title: "Faster Decisions",
    description:
      "Real-time dashboards mean finance, ops, and leadership see the same numbers the moment they change. No more waiting for month-end reports.",
  },
  {
    icon: IconCoin,
    color: "blue",
    title: "Lower Total Cost",
    description:
      "One connected platform replaces a stack of disconnected tools and the manual work of keeping them in sync—reducing license sprawl and rework.",
  },
];

const PROCESS_STEPS = [
  {
    icon: IconSearch,
    title: "Discovery",
    description:
      "We map current workflows, data sources, pain points, and success metrics across finance, ops, HR, and procurement.",
  },
  {
    icon: IconPencil,
    title: "Design",
    description:
      "Module structure, permissions, integrations, and automation rules are planned around how your teams actually work day to day.",
  },
  {
    icon: IconCode,
    title: "Build & Iterate",
    description:
      "Development in short cycles with regular demos so stakeholders see progress early and nothing ships as a surprise.",
  },
  {
    icon: IconServer,
    title: "Go-Live & Support",
    description:
      "Data migration, training, and cutover are handled end-to-end—then ongoing monitoring and support keep the system improving after launch.",
  },
];

const FAQS = [
  {
    question: "Can this integrate with our existing accounting or CRM software?",
    answer:
      "Yes. The platform is built with an open API layer so it can connect to existing accounting systems, CRMs, shipping carriers, and payment providers. You don’t have to rip and replace everything on day one—we phase integrations around your priorities.",
  },
  {
    question: "How long does implementation usually take?",
    answer:
      "Most single-entity deployments go live in 8–12 weeks. Multi-entity or multi-country rollouts take longer depending on data migration volume, process customization, and the number of integrations. We’ll give you a realistic timeline after discovery.",
  },
  {
    question: "Is our data migrated from spreadsheets or our old system?",
    answer:
      "Data migration is part of the deployment phase. We clean, map, and import existing records so your team isn’t starting from a blank slate. Historical data can be brought across where it still has operational value.",
  },
  {
    question: "What happens after launch if we need changes?",
    answer:
      "Ongoing support is included. New workflows, extra modules, reporting changes, or additional entities can be added as your business evolves—without a full re-implementation.",
  },
  {
    question: "Who owns the data and the system?",
    answer:
      "You do. Your data stays under your control. We provide the platform, hosting options, and support; commercial and data ownership terms are clear in the agreement so there’s no lock-in surprise later.",
  },
];

const STATS = [
  { value: "100+", label: "Software projects delivered", sub: "Across finance, ops & retail" },
  { value: "35%", label: "Avg. drop in manual work", sub: "After going live" },
  { value: "8–12", label: "Weeks to first go-live", sub: "Typical single-entity timeline" },
  { value: "24/7", label: "Monitoring & support", sub: "Post-launch coverage" },
];

const TRUST_POINTS = [
  { icon: IconLock, label: "Encrypted at rest & in transit" },
  { icon: IconDatabase, label: "Full audit trail on every change" },
  { icon: IconCloud, label: "Cloud or private deployment" },
  { icon: IconClock, label: "Real-time sync across modules" },
];

const TECH = ["REACT", "JAVA", "SPRING BOOT", "NODE.JS", "MYSQL", "AWS"];

const ModuleCard = ({ mod, isOpen, onToggle, dark }) => {
  const Icon = mod.icon;
  return (
    <Paper
      onClick={onToggle}
      p="lg"
      radius="lg"
      withBorder
      style={{
        cursor: "pointer",
        background: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
        borderColor: isOpen
          ? "var(--mantine-color-blue-5)"
          : dark
            ? "rgba(255,255,255,0.09)"
            : "var(--mantine-color-gray-2)",
        boxShadow: isOpen
          ? dark
            ? "0 12px 40px rgba(37,99,235,0.15)"
            : "0 12px 40px rgba(37,99,235,0.12)"
          : "none",
        transition: "all 0.22s ease",
        height: "100%",
      }}
    >
      <Group justify="space-between" wrap="nowrap" align="flex-start">
        <Group wrap="nowrap" align="flex-start" gap="md">
          <ThemeIcon size={48} radius="xl" variant="light" color={mod.color}>
            <Icon size={24} />
          </ThemeIcon>
          <div>
            <Text fw={700} size="md">
              {mod.title}
            </Text>
            <Text size="sm" c="dimmed" mt={4} style={{ lineHeight: 1.5 }}>
              {mod.summary}
            </Text>
          </div>
        </Group>
        <IconChevronDown
          size={18}
          style={{
            flexShrink: 0,
            marginTop: 8,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            color: "var(--mantine-color-dimmed)",
          }}
        />
      </Group>

      {isOpen && (
        <Text size="sm" c="dimmed" mt="md" pl={64} style={{ lineHeight: 1.65 }}>
          {mod.details}
        </Text>
      )}
    </Paper>
  );
};

const ERPSoftware = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const dark = computedColorScheme === "dark";
  const [openIndex, setOpenIndex] = useState(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [faqHoveredIndex, setFaqHoveredIndex] = useState(null);

  // FAQ colors resolved in JS (same pattern as your reference component)
  const faqColors = {
    eyebrow: "#3b82f6",
    heading: dark ? "#ffffff" : "#0f172a",
    headingAccent: "#3b82f6",
    question: dark ? "#ffffff" : "#0f172a",
    questionHover: "#3b82f6",
    answer: dark ? "rgba(226,232,240,0.7)" : "#475569",
    divider: dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    icon: "#3b82f6",
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background: dark
          ? `
            radial-gradient(ellipse 80% 50% at 10% -10%, rgba(37,99,235,0.22), transparent),
            radial-gradient(ellipse 60% 40% at 90% 0%, rgba(6,182,212,0.16), transparent),
            linear-gradient(180deg, #060d18 0%, #0b1326 40%, #08111f 100%)
          `
          : `
            radial-gradient(ellipse 80% 50% at 10% -10%, rgba(37,99,235,0.09), transparent),
            radial-gradient(ellipse 60% 40% at 90% 0%, rgba(6,182,212,0.07), transparent),
            linear-gradient(180deg, #ffffff 0%, #f5f9ff 45%, #eef6ff 100%)
          `,
      }}
    >
      {/* ── Hero ── */}
      <Container size="lg" pt={{ base: 70, md: 100 }} pb={{ base: 50, md: 80 }}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48} verticalSpacing={40}>
          <Stack gap="lg" justify="center">
            <Group gap="sm">
              <ThemeIcon size={48} radius="md" variant="light" color="blue">
                <IconBuildingSkyscraper size={24} />
              </ThemeIcon>
              <Text
                fw={700}
                tt="uppercase"
                c="blue"
                size="xs"
                style={{ letterSpacing: 1.2 }}
              >
                Enterprise Software
              </Text>
            </Group>

            <Title
              order={1}
              fw={800}
              style={{
                fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
                lineHeight: 1.12,
                letterSpacing: -0.5,
              }}
            >
              One platform for finance, inventory, HR & procurement
            </Title>

            <Text size="lg" c="dimmed" style={{ lineHeight: 1.65, maxWidth: 520 }}>
              Replace spreadsheets and disconnected tools with a single source of
              truth. Built for growing businesses that need real-time visibility,
              automation, and control—without the complexity of legacy ERPs.
            </Text>

            <Stack gap="sm" mt={4}>
              {CAPABILITIES.map((item) => (
                <Group key={item} gap="sm" wrap="nowrap">
                  <ThemeIcon size={22} radius="xl" variant="light" color="cyan">
                    <IconCircleCheck size={14} />
                  </ThemeIcon>
                  <Text fw={500} size="sm">
                    {item}
                  </Text>
                </Group>
              ))}
            </Stack>

            <Group gap="xs" mt="sm">
              {TECH.map((t) => (
                <Badge
                  key={t}
                  size="md"
                  radius="sm"
                  variant="light"
                  color="blue"
                  style={{ fontWeight: 600, letterSpacing: 0.3 }}
                >
                  {t}
                </Badge>
              ))}
            </Group>

            <Group gap="md" mt="md">
              <Button
                size="md"
                radius="md"
                color="blue"
                rightSection={<IconArrowRight size={16} />}
              >
                Start Your Project
              </Button>
              <Button size="md" radius="md" variant="default">
                See How It Works
              </Button>
            </Group>
          </Stack>

          <Box visibleFrom="md" style={{ position: "relative" }}>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
              alt="Team reviewing live business dashboards"
              radius="xl"
              h={480}
              fit="cover"
              style={{
                boxShadow: dark
                  ? "0 28px 80px rgba(0,0,0,0.55)"
                  : "0 28px 80px rgba(37,99,235,0.18)",
              }}
            />
            <Paper
              shadow="md"
              radius="md"
              p="sm"
              withBorder
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                background: dark ? "rgba(15,23,42,0.92)" : "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Group gap="xs">
                <ThemeIcon size={32} radius="xl" color="teal" variant="light">
                  <IconCheck size={16} />
                </ThemeIcon>
                <div>
                  <Text size="xs" fw={700}>
                    Audit-ready from day one
                  </Text>
                  <Text size="xs" c="dimmed">
                    Full trail on every transaction
                  </Text>
                </div>
              </Group>
            </Paper>
          </Box>
        </SimpleGrid>
      </Container>

      {/* ── Stats strip ── */}
      <Container size="lg" pb={60}>
        <Paper
          radius="xl"
          p={{ base: "lg", md: "xl" }}
          withBorder
          style={{
            background: dark
              ? "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.08))"
              : "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(6,182,212,0.04))",
            borderColor: dark ? "rgba(37,99,235,0.25)" : "rgba(37,99,235,0.12)",
          }}
        >
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg">
            {STATS.map((s) => (
              <div key={s.label}>
                <Text
                  fw={800}
                  style={{ fontSize: "1.75rem", lineHeight: 1.1 }}
                  c={dark ? "blue.3" : "blue.7"}
                >
                  {s.value}
                </Text>
                <Text fw={600} size="sm" mt={4}>
                  {s.label}
                </Text>
                <Text size="xs" c="dimmed" mt={2}>
                  {s.sub}
                </Text>
              </div>
            ))}
          </SimpleGrid>
        </Paper>
      </Container>

      {/* ── Modules ── */}
      <Container size="lg" py={50}>
        <Group justify="space-between" align="flex-end" mb="xl" wrap="wrap" gap="md">
          <div>
            <Title order={2} size={28} fw={700} mb={6}>
              What’s included
            </Title>
            <Text c="dimmed" maw={480}>
              Six core modules that share the same data model. Tap any card to see
              what it covers in practice.
            </Text>
          </div>
          <Badge size="lg" variant="light" color="blue" leftSection={<IconStar size={14} />}>
            Expandable as you grow
          </Badge>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {MODULES.map((mod, i) => (
            <ModuleCard
              key={mod.title}
              mod={mod}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              dark={dark}
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* ── Why choose us ── */}
      <Container size="lg" py={50}>
        <Title order={2} size={28} fw={700} mb={6}>
          Why teams choose this ERP
        </Title>
        <Text c="dimmed" mb="xl" maw={520}>
          Built for the operational reality that generic SaaS tools often miss—
          multi-entity control, audit trails, and workflows that match how your
          people already work.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
          {WHY_CHOOSE_US.map((item) => (
            <Paper
              key={item.title}
              p="lg"
              radius="lg"
              withBorder
              style={{
                background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
                borderColor: dark
                  ? "rgba(255,255,255,0.08)"
                  : "var(--mantine-color-gray-2)",
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <ThemeIcon size={48} radius="xl" variant="light" color={item.color} mb="md">
                <item.icon size={22} />
              </ThemeIcon>
              <Text fw={700} mb={6}>
                {item.title}
              </Text>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.55 }}>
                {item.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      {/* ── Trust / security strip ── */}
      <Container size="lg" py={30}>
        <Paper
          radius="lg"
          p="lg"
          withBorder
          style={{
            background: dark ? "rgba(255,255,255,0.03)" : "#fff",
            borderColor: dark
              ? "rgba(255,255,255,0.08)"
              : "var(--mantine-color-gray-2)",
          }}
        >
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
            {TRUST_POINTS.map((t) => (
              <Group key={t.label} gap="sm" wrap="nowrap">
                <ThemeIcon size={36} radius="xl" variant="light" color="blue">
                  <t.icon size={18} />
                </ThemeIcon>
                <Text size="sm" fw={500}>
                  {t.label}
                </Text>
              </Group>
            ))}
          </SimpleGrid>
        </Paper>
      </Container>

      {/* ── Banner ── */}
      <Container size="lg" py={40}>
        <Box style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
            alt="Team collaborating around live operational data"
            radius="lg"
            h={300}
            fit="cover"
          />
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background: dark
                ? "linear-gradient(90deg, rgba(8,17,31,0.85) 0%, rgba(8,17,31,0.35) 100%)"
                : "linear-gradient(90deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.2) 100%)",
              display: "flex",
              alignItems: "center",
              padding: "0 2.5rem",
            }}
          >
            <div style={{ maxWidth: 420 }}>
              <Text c="white" fw={700} size="xl" mb={6}>
                See the same numbers across every department
              </Text>
              <Text c="rgba(255,255,255,0.8)" size="sm" style={{ lineHeight: 1.55 }}>
                Finance, warehouse, HR, and procurement share one data model—so
                leadership stops reconciling conflicting reports.
              </Text>
            </div>
          </Box>
        </Box>
      </Container>

      {/* ── Process ── */}
      <Container size="lg" py={50}>
        <Title order={2} size={28} fw={700} mb={6}>
          How implementation works
        </Title>
        <Text c="dimmed" mb="xl" maw={480}>
          From first conversation to go-live in four clear stages—with regular
          check-ins so you’re never left guessing.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
          {PROCESS_STEPS.map((step, i) => (
            <Paper
              key={step.title}
              p="lg"
              radius="lg"
              withBorder
              style={{
                background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
                borderColor: dark
                  ? "rgba(255,255,255,0.08)"
                  : "var(--mantine-color-gray-2)",
                height: "100%",
                position: "relative",
              }}
            >
              <Group gap="sm" mb="md">
                <ThemeIcon size={42} radius="xl" variant="light" color="blue">
                  <step.icon size={20} />
                </ThemeIcon>
                <Badge size="sm" variant="outline" color="gray">
                  Step {i + 1}
                </Badge>
              </Group>
              <Text fw={700} mb={6}>
                {step.title}
              </Text>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.55 }}>
                {step.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      {/* ── FAQ (custom design matching your reference) ── */}
      <Box component="section" style={{ padding: "64px 0 80px" }}>
        <Container size="md">
          <Stack gap={6} align="center" mb={56}>
            <Text
              style={{
                color: faqColors.eyebrow,
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1.6,
                textAlign: "center",
              }}
            >
              FAQ
            </Text>
            <Title
              order={2}
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                margin: 0,
                color: faqColors.heading,
                textAlign: "center",
              }}
            >
              Common{" "}
              <Box component="span" style={{ color: faqColors.headingAccent }}>
                Questions
              </Box>
            </Title>
            <Text
              c="dimmed"
              ta="center"
              maw={480}
              mt={8}
              style={{ lineHeight: 1.6 }}
            >
              The questions teams ask before committing. If yours isn’t here,
              we’ll answer it on the first call.
            </Text>
          </Stack>

          <Stack gap={0}>
            {FAQS.map((faq, index) => {
              const isOpen = faqOpenIndex === index;
              const isHovered = faqHoveredIndex === index;
              return (
                <Box
                  key={faq.question}
                  style={{ borderBottom: `1px solid ${faqColors.divider}` }}
                >
                  <UnstyledButton
                    onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                    onMouseEnter={() => setFaqHoveredIndex(index)}
                    onMouseLeave={() => setFaqHoveredIndex(null)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 24,
                      padding: "26px 4px",
                      textAlign: "left",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 600,
                        color: isHovered || isOpen
                          ? faqColors.questionHover
                          : faqColors.question,
                        transition: "color 150ms ease",
                      }}
                    >
                      {faq.question}
                    </Text>
                    <Box
                      component="span"
                      style={{
                        color: faqColors.icon,
                        fontSize: 20,
                        fontWeight: 500,
                        lineHeight: 1,
                        flexShrink: 0,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 200ms ease",
                      }}
                    >
                      +
                    </Box>
                  </UnstyledButton>
                  <Box
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 220ms ease",
                    }}
                  >
                    <Box style={{ overflow: "hidden" }}>
                      <Text
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.7,
                          color: faqColors.answer,
                          padding: "0 4px 26px",
                          maxWidth: 760,
                        }}
                      >
                        {faq.answer}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* ── Final CTA ── */}
      <Container size="lg" py={70}>
        <Paper
          radius="xl"
          p={{ base: "xl", md: 48 }}
          withBorder
          style={{
            background: dark
              ? "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(6,182,212,0.1))"
              : "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.05))",
            borderColor: dark ? "rgba(37,99,235,0.3)" : "rgba(37,99,235,0.18)",
          }}
        >
          <Group justify="space-between" wrap="wrap" gap="xl" align="center">
            <div style={{ maxWidth: 480 }}>
              <Title order={3} size={24} fw={800} mb={8}>
                Ready to run operations on one platform?
              </Title>
              <Text c="dimmed" style={{ lineHeight: 1.6 }}>
                Tell us how your finance, inventory, and HR teams work today.
                We’ll map a realistic ERP build, timeline, and integration plan—
                no obligation.
              </Text>
            </div>
            <Stack gap="sm">
              <Button
                size="lg"
                radius="md"
                color="blue"
                leftSection={<IconRocket size={18} />}
              >
                Get a Proposal
              </Button>
              <Text size="xs" c="dimmed" ta="center">
                Response within 1 business day
              </Text>
            </Stack>
          </Group>
        </Paper>
      </Container>
    </Box>
  );
};

export default ERPSoftware;