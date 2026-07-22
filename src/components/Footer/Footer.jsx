// import {
//   ActionIcon,
//   Anchor,
//   Box,
//   Button,
//   Container,
//   Divider,
//   Group,
//   Image,
//   Stack,
//   Text,
//   useComputedColorScheme,
// } from "@mantine/core";
// import {
//   IconArrowUp,
//   IconBrandFacebook,
//   IconBrandGithub,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandX,
//   IconMail,
//   IconMapPin,
//   IconPhone,
//   IconSend,
//   IconChevronRight,
// } from "@tabler/icons-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import logoLight from "../../assets/images/logo.png";
// import logoDark from "../../assets/images/logo1.png";
// const quickLinks = [
//   { label: "Blog", link: "/blogs" },
//   { label: "Privacy Policy", link: "/privacy-policy" },
//   { label: "About Us", link: "/about" },
//   { label: "Contact Us", link: "/contact" },
//   { label: "Terms & Conditions", link: "/terms-conditions" },
//   { label: "Refund Policy", link: "/refund-policy" },
// ];
// const services = [
//   { label: "Custom Software", link: "/services/custom-software-development/custom-software" },
//   { label: "API Development", link: "/services/custom-software-development/api-development" },
//   { label: "Saas Development", link: "/services/custom-software-development/saas-development" },
//   { label: "Software Testing & QA", link: "/services/custom-software-development/software-testing" },
//   { label: "Maintenance & Support", link: "/services/custom-software-development/maintenance-support" },
//   { label: "CRM Services", link: "/services/custom-software-development/crm-service" },
// ];
// const digitalMarketingServices = [
//   { label: "Search Engine Optimization", link: "/services/digital-marketing/seo" },
//   { label: "Pay Per Click Advertising", link: "/services/digital-marketing/ppc-advertising" },
//   { label: "Social Media Marketing", link: "/services/digital-marketing/social-media-marketing" },
//   { label: "Email Marketing", link: "/services/digital-marketing/email-marketing" },
//   { label: "Analytics & Reporting", link: "/services/digital-marketing/analytics-reporting" },
// ];
// const webDevelopmentServices = [
//   { label: "Website Design", link: "/services/website-development-design/web-design" },
//   { label: "Website Development", link: "/services/website-development-design/web-development" },
//   { label: "App Development", link: "/services/website-development-design/app-development" },
//   { label: "eCommerce Development", link: "/services/website-development-design/ecommerce" },
//   { label: "Landing Page Design", link: "/services/website-development-design/landing-page" },
// ];
// const socialLinks = [
//   { Icon: IconBrandFacebook, href: "https://www.facebook.com/NexflareDynamics", label: "Facebook", color: "#1877F2" },
//   { Icon: IconBrandInstagram, href: "https://www.instagram.com/nexflare_dynamics/", label: "Instagram", color: "#E1306C" },
//   { Icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/nexflare-dynamics/", label: "LinkedIn", color: "#0A66C2" },
//   { Icon: IconBrandX, href: "https://twitter.com/NexflareDynamics", label: "X", color: "#1DA1F2" },
//   // { Icon:IconBrandGithub,    href:"https://github.com/NexflareDynamics", label:"GitHub",    color:"#7C3AED" },
// ];
// const contacts = [
//   { Icon: IconMapPin, text: "Global Business Hub, Eon Free Zone, Kharadi, Pune, Maharashtra 411014", color: "#3B82F6" },
//   { Icon: IconPhone, text: "+91-8237525097", color: "#10B981" },
//   { Icon: IconMail, text: "enquiry@nexflaredynamics.com", color: "#8B5CF6" },
// ];
// const Footer = () => {
//   const isDark = useComputedColorScheme("light") === "dark";
//   const logoSrc = isDark ? logoDark : logoLight;
//   const bg = isDark ? "#080E1C" : "#EEF4FF";
//   const cardBg = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
//   const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(37,99,235,0.12)";
//   const dimCol = isDark ? "rgba(255,255,255,0.50)" : "#64748b";
//   const renderLinkColumn = (title, items, matchMissionFont = false) => (
//     <Stack gap={0} className="f-col">
//       <Text size="xs" fw={700} tt="uppercase"
//         style={{ color: "#3B82F6", letterSpacing: 2 }} mb={14}>
//         {title}
//       </Text>
//       {items.map(({ label, link }) => (
//         <Anchor key={label} component={Link} to={link}
//           underline="never"
//           size={matchMissionFont ? "md" : "sm"}
//           fw={matchMissionFont ? 500 : 400}
//           mb={10} className="f-link"
//           style={{ color: dimCol, display: "flex", alignItems: "flex-start", gap: 4 }}>
//           <IconChevronRight size={12} style={{ opacity: 0.45, flexShrink: 0, marginTop: 4 }} />
//           {label}
//         </Anchor>
//       ))}
//     </Stack>
//   );
//   return (
//     <Box style={{ background: bg, position: "relative", overflow: "hidden" }}>
//       {/* ambient glows */}
//       <Box style={{
//         position: "absolute", width: 500, height: 500, borderRadius: "50%",
//         left: -220, top: -220, background: "rgba(37,99,235,0.12)",
//         filter: "blur(160px)", pointerEvents: "none"
//       }} />
//       <Box style={{
//         position: "absolute", width: 400, height: 400, borderRadius: "50%",
//         right: -180, bottom: -180, background: "rgba(56,189,248,0.09)",
//         filter: "blur(140px)", pointerEvents: "none"
//       }} />
//       {/* animated top line */}
//       <Box style={{
//         height: 3,
//         background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8,#2563EB)",
//         backgroundSize: "200% 100%",
//         animation: "shimmer 4s linear infinite",
//       }} />
//       <Box size="xl" py={40} className="f-container">
//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//         >
//           <Box className="f-grid">
//             {/* ── Brand ── */}
//             <Stack gap={0} className="f-col f-col-brand">
//               <Box className="f-logo-box" style={{ height: 90, display: "flex", alignItems: "center", overflow: "hidden", marginBottom: -10, marginLeft: -14 }}>
//                 <Image src={logoSrc} w={220} fit="contain" style={{ display: "block" }} />
//               </Box>
//               <Text size="md" fw={500} lh={1.75} style={{ color: dimCol }}>
//                 Our mission is to understand the unique challenges faced by our clients and deliver tailored solutions that drive efficiency, productivity and growth.
//               </Text>
//               <Group gap={8} mt={10}>
//                 {socialLinks.map(({ Icon, href, label, color }) => (
//                   <ActionIcon
//                     key={label}
//                     component="a"
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     size={38}
//                     radius="xl"
//                     className="f-social"
//                     style={{
//                       background: `${color}14`,
//                       border: `1px solid ${color}28`,
//                       color: color,
//                     }}
//                   >
//                     <Icon size={17} />
//                   </ActionIcon>
//                 ))}
//               </Group>
//             </Stack>
//             {/* ── Company ── */}
//             {renderLinkColumn("Company", quickLinks, true)}
//             {/* ── Services ── */}
//             {renderLinkColumn("Services", services, true)}
//             {/* ── Digital Marketing ── */}
//             {renderLinkColumn("Digital Marketing ", digitalMarketingServices, true)}
//             {/* ── Web Development ── */}
//             {renderLinkColumn("Web Development", webDevelopmentServices, true)}
//             {/* ── Contact card ── */}
//             <Box className="f-col f-col-contact" style={{
//               background: cardBg, border: cardBorder,
//               borderRadius: 20, padding: "26px 26px 22px",
//               position: "relative", overflow: "hidden",
//               boxShadow: isDark
//                 ? "0 10px 36px rgba(0,0,0,0.24)"
//                 : "0 10px 36px rgba(37,99,235,0.08)",
//             }}>
//               {/* top accent */}
//               <Box style={{
//                 position: "absolute", top: 0, left: 0, right: 0, height: 3,
//                 background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8)",
//               }} />
//               <Text size="sm" fw={700} tt="uppercase"
//                 style={{ color: dimCol, letterSpacing: 2 }} mb={18}>
//                 Get in Touch
//               </Text>
//               <Stack gap={18}>
//                 {contacts.map(({ Icon, text, color }) => (
//                   <Group
//                     key={text}
//                     gap={14}
//                     wrap="nowrap"
//                     align="flex-start"
//                     style={{ minWidth: 0 }}
//                   >
//                     <Box style={{
//                       width: 38, height: 38, borderRadius: 10, flexShrink: 0,
//                       background: `${color}14`,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <Icon size={18} color={color} />
//                     </Box>
//                     <Text
//                       size="md"
//                       fw={500}
//                       style={{
//                         color: dimCol,
//                         lineHeight: 1.6,
//                         paddingTop: 7,
//                         minWidth: 0,
//                         wordBreak: "break-word",
//                         overflowWrap: "anywhere",
//                       }}
//                     >
//                       {text}
//                     </Text>
//                   </Group>
//                 ))}
//               </Stack>
//               {/* <Button mt={18} radius="xl" size="sm" fullWidth
//                 variant="gradient" gradient={{ from: "blue", to: "cyan" }}
//                 rightSection={<IconSend size={14} />}
//                 fw={600} style={{ height: 40 }} className="f-btn">
//                 Request a Free Quote
//               </Button> */}
//             </Box>
//           </Box>
//         </motion.div>
//         {/* bottom bar */}
//         <Divider mt={32} mb={18} color={isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0"} />
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           <Box pos="relative" className="f-bottom">
//             <Text
//               ta="center"
//               size="md"
//               fw={600}
//               style={{ color: dimCol }}
//             >
//               © {new Date().getFullYear()} Nexflare Dynamics. All rights reserved.
//             </Text>
//             <Group
//               gap={10}
//               align="center"
//               className="f-back-to-top"
//               style={{
//                 position: "absolute",
//                 right: 0,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//               }}
//             >
              
//               <ActionIcon
//                 radius="xl"
//                 size={40}
//                 variant="gradient"
//                 gradient={{ from: "blue", to: "cyan" }}
//                 aria-label="Back to top"
//                 className="f-social"
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               >
//                 <IconArrowUp size={17} />
//               </ActionIcon>
//             </Group>
//           </Box>
//         </motion.div>
//       </Box>
//       <style>{`
//         @keyframes shimmer {
//           0%   { background-position: 0% 0; }
//           100% { background-position: 200% 0; }
//         }
//         /* ── Container padding ── */
//         .f-container {
//           padding-left: 20px;
//           padding-right: 20px;
//           box-sizing: border-box;
//           max-width: 100%;
//         }
//         /* ── Footer grid layout ── */
//         .f-grid {
//           display: grid;
//           grid-template-columns: 1.35fr 0.85fr 0.95fr 1.1fr 1fr 1.7fr;
//           gap: 20px;
//           align-items: start;
//         }
//         .f-col-brand { min-width: 0; }
//         .f-col-contact { min-width: 0; }
//         /* Push brand column to the very left edge on desktop */
//         @media (min-width: 1201px) {
//           .f-container {
//             padding: 40px !important;
//           }
//         }
//         /* Large tablets / small desktops: 3 columns */
//         @media (max-width: 1200px) {
//           .f-grid {
//             grid-template-columns: 1fr 1fr 1fr;
//             row-gap: 32px;
//           }
//           .f-col-brand { grid-column: 1 / -1; }
//           .f-col-contact { grid-column: 1 / -1; max-width: 420px; }
//         }
//         /* Tablets: 2 columns */
//         @media (max-width: 768px) {
//           .f-container {
//             padding-left: 24px;
//             padding-right: 24px;
//           }
//           .f-grid {
//             grid-template-columns: 1fr 1fr;
//             row-gap: 30px;
//           }
//           .f-col-brand { grid-column: 1 / -1; }
//           .f-col-contact { grid-column: 1 / -1; max-width: 100%; }
//         }
//         /* Mobile: single column, everything stacked */
//         @media (max-width: 480px) {
//           .f-container {
//             padding-left: 16px;
//             padding-right: 16px;
//           }
//           .f-grid {
//             grid-template-columns: 1fr;
//             gap: 28px;
//           }
//           .f-col-brand,
//           .f-col-contact {
//             grid-column: 1 / -1;
//           }
//           .f-logo-box {
//             margin-left: 0 !important;
//           }
//           .f-col-contact {
//             padding: 20px 18px 18px !important;
//           }
//           .f-bottom {
//             display: flex;
//             flex-direction: column;
//             gap: 14px;
//             align-items: center;
//             text-align: center;
//           }
//           .f-back-to-top {
//             position: static !important;
//             transform: none !important;
//           }
//         }
//         .f-link {
//           transition: color .2s ease, transform .2s ease;
//         }
//         .f-link:hover {
//           color: #2563EB !important;
//           transform: translateX(4px);
//         }
//         .f-social {
//           transition: transform .22s ease, box-shadow .22s ease !important;
//         }
//         .f-social:hover {
//           transform: translateY(-4px) scale(1.12) !important;
//           box-shadow: 0 8px 20px rgba(37,99,235,0.26) !important;
//         }
//         .f-btn {
//           transition: transform .22s ease, box-shadow .22s ease !important;
//         }
//         .f-btn:hover {
//           transform: translateY(-2px) !important;
//           box-shadow: 0 8px 24px rgba(37,99,235,0.28) !important;
//         }
//         @media (max-width: 768px) {
//           .f-btn { width: 100%; }
//         }
//       `}</style>
//     </Box>
//   );
// };
// export default Footer;

import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconArrowUp,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoLight from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo1.png";

/* ── Original brand SVG icons (accurate colors/shapes) ── */
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      fill="#1877F2"
    />
    <path
      d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.12 12.12 0 003.75 0v-8.385h2.796z"
      fill="#fff"
    />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="igGrad" cx="0.3" cy="1" r="1.2">
        <stop offset="0%" stopColor="#FFDD55" />
        <stop offset="20%" stopColor="#FFDD55" />
        <stop offset="40%" stopColor="#FF543E" />
        <stop offset="60%" stopColor="#C837AB" />
        <stop offset="100%" stopColor="#3F51B5" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
    <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#fff" strokeWidth="1.6" fill="none" />
    <circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.6" fill="none" />
    <circle cx="16.4" cy="7.6" r="1" fill="#fff" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#0A66C2" />
    <path
      d="M7.28 9.14H4.6V19h2.68V9.14zM5.94 8.02a1.56 1.56 0 100-3.12 1.56 1.56 0 000 3.12zM19.4 19h-2.67v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V19H10.5V9.14h2.56v1.35h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.13V19z"
      fill="#fff"
    />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#000" />
    <path
      d="M13.62 10.77L18.2 5h-1.09l-3.98 5.01L9.85 5H5.5l4.8 6.85L5.5 19h1.09l4.2-5.29L14.15 19h4.35l-4.88-8.23zm-1.49 1.87l-.49-.69L7.02 6.9h1.63l3.14 4.42.49.69 4.08 5.75h-1.63l-3.32-4.69z"
      fill="#fff"
    />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#181717" />
    <path
      d="M12 4.3c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014.01 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0020 12.3c0-4.42-3.58-8-8-8z"
      fill="#fff"
    />
  </svg>
);

const quickLinks = [
  { label: "About Us", link: "/about" },
  { label: "Contact Us", link: "/contact" },
  { label: "Blog", link: "/blogs" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Terms & Conditions", link: "/terms-conditions" },
];
const services = [
  { label: "Custom Software", link: "/services/custom-software-development/custom-software" },
  { label: "Saas Development", link: "/services/custom-software-development/saas-development" },
  { label: "Software Testing & QA", link: "/services/custom-software-development/software-testing" },
  { label: "API Development", link: "/services/custom-software-development/api-development" },
  { label: "Maintenance & Support", link: "/services/custom-software-development/maintenance-support" },
];
const digitalMarketingServices = [
  { label: "Social Media Marketing", link: "/services/digital-marketing/social-media-marketing" },
  { label: "Search Engine Optimization", link: "/services/digital-marketing/seo" },
  { label: "Pay Per Click Advertising", link: "/services/digital-marketing/ppc-advertising" },
  { label: "Email Marketing", link: "/services/digital-marketing/email-marketing" },
  { label: "Analytics & Reporting", link: "/services/digital-marketing/analytics-reporting" },
];
const webDevelopmentServices = [
  { label: "Website Design", link: "/services/website-development-design/web-design" },
  { label: "Website Development", link: "/services/website-development-design/web-development" },
  { label: "App Development", link: "/services/website-development-design/app-development" },
  { label: "eCommerce Development", link: "/services/website-development-design/ecommerce" },
  { label: "Landing Page Design", link: "/services/website-development-design/landing-page" },
];
const socialLinks = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/NexflareDynamics", label: "Facebook", color: "#1877F2" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/nexflare_dynamics/", label: "Instagram", color: "#C837AB" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/nexflare-dynamics/", label: "LinkedIn", color: "#0A66C2" },
  { Icon: XIcon, href: "https://twitter.com/NexflareDynamics", label: "X", color: "#000000" },
  // { Icon: GithubIcon, href: "https://github.com/NexflareDynamics", label: "GitHub", color: "#181717" },
];
const contacts = [
  { Icon: IconMapPin, text: "Global Business Hub, Eon Free Zone, Kharadi, Pune, Maharashtra 411014", color: "#3B82F6" },
  { Icon: IconPhone, text: "+91-8237525097", color: "#10B981" },
  // { Icon: IconPhone, text: "+91-9834496938", color: "#10B981" },
  { Icon: IconMail, text: "enquiry@nexflaredynamics.com", color: "#8B5CF6" },
  // { Icon: IconMail, text: "contact-us@nexflaredynamics.com", color: "#8B5CF6" },
];
const Footer = () => {
  const isDark = useComputedColorScheme("light") === "dark";
  const logoSrc = isDark ? logoDark : logoLight;
  const bg = isDark ? "#080E1C" : "#EEF4FF";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(37,99,235,0.12)";
  const dimCol = isDark ? "rgba(255,255,255,0.50)" : "#64748b";
  const renderLinkColumn = (title, items, matchMissionFont = false) => (
    <Stack gap={0} className="f-col">
      <Text size="xs" fw={700} tt="uppercase"
        style={{ color: "#3B82F6", letterSpacing: 2 }} mb={14}>
        {title}
      </Text>
      {items.map(({ label, link }) => (
        <Anchor key={label} component={Link} to={link}
          underline="never"
          size={matchMissionFont ? "md" : "sm"}
          fw={matchMissionFont ? 500 : 400}
          mb={10} className="f-link"
          style={{ color: dimCol, display: "flex", alignItems: "flex-start", gap: 4 }}>
          <IconChevronRight size={12} style={{ opacity: 0.45, flexShrink: 0, marginTop: 4 }} />
          {label}
        </Anchor>
      ))}
    </Stack>
  );
  return (
    <Box style={{ background: bg, position: "relative", overflow: "hidden" }}>
      {/* ambient glows */}
      <Box style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        left: -220, top: -220, background: "rgba(37,99,235,0.12)",
        filter: "blur(160px)", pointerEvents: "none"
      }} />
      <Box style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        right: -180, bottom: -180, background: "rgba(56,189,248,0.09)",
        filter: "blur(140px)", pointerEvents: "none"
      }} />
      {/* animated top line */}
      <Box style={{
        height: 3,
        background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8,#2563EB)",
        backgroundSize: "200% 100%",
        animation: "shimmer 4s linear infinite",
      }} />
      <Box size="xl" py={40} className="f-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Box className="f-grid">
            {/* ── Brand ── */}
            <Stack gap={0} className="f-col f-col-brand">
              <Box className="f-logo-box" style={{ height: 90, display: "flex", alignItems: "center", overflow: "hidden", marginBottom: -10, marginLeft: -1 }}>
                <Image src={logoSrc} w={220} fit="contain" style={{ display: "block" }} />
              </Box>
              <Text size="md" fw={500} lh={1.75} style={{ color: dimCol }}>
                Our mission is to understand the unique challenges faced by our clients and deliver tailored solutions that drive efficiency, productivity and growth.
              </Text>
              <Group gap={0} mt={14}>
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <ActionIcon
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    size={54}
                    radius="xl"
                    variant="transparent"
                    className="f-social"
                    style={{
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    <Icon size={30} />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>

            {/* ── Services ── */}
            {renderLinkColumn("Services", services, true)}
            {/* ── Digital Marketing ── */}
            {renderLinkColumn("Digital Marketing ", digitalMarketingServices, true)}
            {/* ── Web Development ── */}
            {renderLinkColumn("Web Development", webDevelopmentServices, true)}
            {/* ── Company ── */}
            {renderLinkColumn("Company", quickLinks, true)}
            {/* ── Contact card ── */}
            <Box className="f-col f-col-contact" style={{
              background: cardBg, border: cardBorder,
              borderRadius: 20, padding: "26px 26px 22px",
              position: "relative", overflow: "hidden",
              boxShadow: isDark
                ? "0 10px 36px rgba(0,0,0,0.24)"
                : "0 10px 36px rgba(37,99,235,0.08)",
            }}>
              {/* top accent */}
              <Box style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8)",
              }} />
              <Text size="sm" fw={700} tt="uppercase"
                style={{ color: dimCol, letterSpacing: 2 }} mb={18}>
                Get in Touch
              </Text>
              <Stack gap={18}>
                {contacts.map(({ Icon, text, color }) => (
                  <Group
                    key={text}
                    gap={14}
                    wrap="nowrap"
                    align="flex-start"
                    style={{ minWidth: 0 }}
                  >
                    <Box style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: `${color}14`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={18} color={color} />
                    </Box>
                    <Text
                      size="md"
                      fw={500}
                      style={{
                        color: dimCol,
                        lineHeight: 1.6,
                        paddingTop: 7,
                        minWidth: 0,
                        wordBreak: "break-word",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {text}
                    </Text>
                  </Group>
                ))}
              </Stack>
              {/* <Button mt={18} radius="xl" size="sm" fullWidth
                variant="gradient" gradient={{ from: "blue", to: "cyan" }}
                rightSection={<IconSend size={14} />}
                fw={600} style={{ height: 40 }} className="f-btn">
                Request a Free Quote
              </Button> */}
            </Box>
          </Box>
        </motion.div>
        {/* bottom bar */}
        <Divider mt={32} mb={18} color={isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0"} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Box pos="relative" className="f-bottom">
            <Text
              ta="center"
              size="md"
              fw={600}
              style={{ color: dimCol }}
            >
              © {new Date().getFullYear()} All Rights Reserved, Nexflare Dynamics Private Limited.
            </Text>
            <Group
              gap={10}
              align="center"
              className="f-back-to-top"
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >

              <ActionIcon
                radius="xl"
                size={40}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                aria-label="Back to top"
                className="f-social"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IconArrowUp size={17} />
              </ActionIcon>
            </Group>
          </Box>
        </motion.div>
      </Box>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        /* ── Container padding ── */
        .f-container {
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          max-width: 100%;
        }
        /* ── Footer grid layout ── */
        .f-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr 0.95fr 1.1fr 1fr 1.7fr;
          gap: 20px;
          align-items: start;
        }
        .f-col-brand { min-width: 0; }
        .f-col-contact { min-width: 0; }
        /* Push brand column to the very left edge on desktop */
        @media (min-width: 1201px) {
          .f-container {
            padding: 40px !important;
          }
        }
        /* Large tablets / small desktops: 3 columns */
        @media (max-width: 1200px) {
          .f-grid {
            grid-template-columns: 1fr 1fr 1fr;
            row-gap: 32px;
          }
          .f-col-brand { grid-column: 1 / -1; }
          .f-col-contact { grid-column: 1 / -1; max-width: 420px; }
        }
        /* Tablets: 2 columns */
        @media (max-width: 768px) {
          .f-container {
            padding-left: 24px;
            padding-right: 24px;
          }
          .f-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 30px;
          }
          .f-col-brand { grid-column: 1 / -1; }
          .f-col-contact { grid-column: 1 / -1; max-width: 100%; }
        }
        /* Mobile: single column, everything stacked */
        @media (max-width: 480px) {
          .f-container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .f-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .f-col-brand,
          .f-col-contact {
            grid-column: 1 / -1;
          }
          .f-logo-box {
            margin-left: 0 !important;
          }
          .f-col-contact {
            padding: 20px 18px 18px !important;
          }
          .f-bottom {
            display: flex;
            flex-direction: column;
            gap: 14px;
            align-items: center;
            text-align: center;
          }
          .f-back-to-top {
            position: static !important;
            transform: none !important;
          }
        }
        .f-link {
          transition: color .2s ease, transform .2s ease;
        }
        .f-link:hover {
          color: #2563EB !important;
          transform: translateX(4px);
        }
        .f-social {
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease !important;
        }
        .f-social:hover {
          transform: translateY(-5px) scale(1.14) !important;
          box-shadow: 0 10px 24px rgba(0,0,0,0.18) !important;
        }
        .f-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .f-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(37,99,235,0.28) !important;
        }
        @media (max-width: 768px) {
          .f-btn { width: 100%; }
        }
      `}</style>
    </Box>
  );
};
export default Footer;
