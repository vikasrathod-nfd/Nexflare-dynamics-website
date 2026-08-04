// import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

// const FEATURES = [
//   {
//     icon: "🎯",
//     title: "Google Search Ads",
//     description:
//       "Reach customers actively searching for your products or services with highly targeted Google Search Ads. We perform in-depth keyword research, create compelling ad copy, optimize bidding strategies, and continuously refine campaigns to drive qualified traffic, increase conversions, and maximize your return on advertising investment.",
//     highlight: false,
//   },
//   {
//     icon: "🖼️",
//     title: "Display & Banner Ads",
//     description:
//       "Expand your brand's reach with visually engaging display and banner advertisements across Google's extensive Display Network. Our creative, audience-focused campaigns increase brand awareness, attract potential customers, and keep your business visible throughout every stage of the customer journey.",
//     highlight: false,
//   },
//   {
//     icon: "📘",
//     title: "Meta (Facebook/Instagram) Ads",
//     description:
//       "Drive meaningful engagement and conversions with expertly managed Facebook and Instagram advertising campaigns. We create compelling creatives, define precise audience targeting, optimize campaign performance, and leverage advanced remarketing strategies to generate leads, sales, and measurable business growth.",
//     highlight: false,
//   },
//   {
//     icon: "💼",
//     title: "LinkedIn Ads",
//     description:
//       "Generate high-quality B2B leads through strategic LinkedIn advertising designed for professionals and decision-makers. We target audiences based on industry, job title, company size, and interests while creating campaigns that increase brand credibility, attract qualified prospects, and support long-term business growth.",
//     highlight: false,
//   },
//   {
//     icon: "🛒",
//     title: "Google Shopping Ads",
//     description:
//       "Showcase your products directly in Google Search with optimized Google Shopping campaigns that feature product images, pricing, ratings, and promotions. We optimize product feeds, improve campaign performance, and help eCommerce businesses attract purchase-ready customers while maximizing sales and return on ad spend.",
//     highlight: true,
//   },
//   {
//     icon: "🔄",
//     title: "Remarketing Campaigns",
//     description:
//       "Reconnect with visitors who have previously interacted with your website or ads through personalized remarketing campaigns. By delivering relevant messages across Google, Facebook, Instagram, and other platforms, we encourage potential customers to return, complete purchases, and improve overall conversion rates.",
//     highlight: false,
//   },
// ];

// const PPCServiceSection = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";

//   // All colors are resolved here in JS and applied via inline `style`,
//   // so nothing depends on Mantine's built-in light/dark component CSS —
//   // text and backgrounds correctly flip per theme since this section sits
//   // on the page's ambient (non-fixed) background, unlike the Hero.
//   const colors = {
//     eyebrow: "#14b8a6",
//     heading: isDark ? "#ffffff" : "#0f172a",
//     headingAccent: "#14b8a6",
//     subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
//     cardBg: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
//     cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
//     cardBorderHighlight: "rgba(20,184,166,0.55)",
//     cardShadow: isDark
//       ? "0 1px 2px rgba(0,0,0,0.4)"
//       : "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
//     cardShadowHighlight: isDark
//       ? "0 0 0 1px rgba(20,184,166,0.25), 0 12px 32px rgba(20,184,166,0.12)"
//       : "0 0 0 1px rgba(20,184,166,0.2), 0 12px 28px rgba(20,184,166,0.1)",
//     iconBg: isDark ? "rgba(255,255,255,0.05)" : "rgba(13,148,136,0.08)",
//     iconBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(13,148,136,0.15)",
//     cardTitle: isDark ? "#ffffff" : "#0f172a",
//     cardText: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
//   };

//   return (
//     <Box component="section" style={{ padding: "96px 0" }}>
//       <Container size="xl">
//         <Stack gap={6} maw={720} mb={56}>
//           <Text
//             style={{
//               color: colors.eyebrow,
//               textTransform: "uppercase",
//               fontWeight: 700,
//               fontSize: 13,
//               letterSpacing: 1.2,
//             }}
//           >
//             What We Offer
//           </Text>

//           <Title
//             order={2}
//             style={{
//               fontSize: "clamp(2rem, 4vw, 2.75rem)",
//               fontWeight: 800,
//               lineHeight: 1.15,
//               margin: 0,
//               color: colors.heading,
//             }}
//           >
//             Full-Spectrum{" "}
//             <Box component="span" style={{ color: colors.headingAccent }}>
//               PPC Management
//             </Box>
//           </Title>

//           <Text
//             style={{
//               fontSize: "1.0625rem",
//               lineHeight: 1.7,
//               color: colors.subtitle,
//               marginTop: 8,
//             }}
//           >
//             From search ads to remarketing — we build, manage, and optimise
//             campaigns that bring measurable returns.
//           </Text>
//         </Stack>

//         <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={24}>
//           {FEATURES.map((feature) => (
//             <Box
//               key={feature.title}
//               style={{
//                 position: "relative",
//                 backgroundColor: feature.highlight ? (isDark ? "rgba(20,184,166,0.05)" : "rgba(20,184,166,0.04)") : colors.cardBg,
//                 border: `1px solid ${feature.highlight ? colors.cardBorderHighlight : colors.cardBorder}`,
//                 borderRadius: 16,
//                 padding: "32px 28px",
//                 boxShadow: feature.highlight ? colors.cardShadowHighlight : colors.cardShadow,
//                 overflow: "hidden",
//               }}
//             >
//               {feature.highlight && (
//                 <Box
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: 3,
//                     background:
//                       "linear-gradient(90deg, rgba(20,184,166,0) 0%, #2dd4bf 50%, rgba(20,184,166,0) 100%)",
//                   }}
//                 />
//               )}

//               <Box
//                 style={{
//                   width: 48,
//                   height: 48,
//                   borderRadius: 12,
//                   backgroundColor: colors.iconBg,
//                   border: `1px solid ${colors.iconBorder}`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 22,
//                   marginBottom: 20,
//                 }}
//               >
//                 {feature.icon}
//               </Box>

//               <Text
//                 style={{
//                   fontSize: "1.0625rem",
//                   fontWeight: 700,
//                   color: colors.cardTitle,
//                   marginBottom: 10,
//                   lineHeight: 1.35,
//                 }}
//               >
//                 {feature.title}
//               </Text>

//               <Text
//                 style={{
//                   fontSize: "0.9375rem",
//                   lineHeight: 1.65,
//                   color: colors.cardText,
//                 }}
//               >
//                 {feature.description}
//               </Text>
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// };

// export default PPCServiceSection;



import {
  Box,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconTarget,
  IconPhoto,
  IconBrandFacebook,
  IconBriefcase,
  IconShoppingCart,
  IconRefresh,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const features = [
  {
    title: "Google Search Ads",
    description:
      "Reach customers actively searching for your products or services with highly targeted Google Search Ads. We perform in-depth keyword research, create compelling ad copy, optimize bidding strategies, and continuously refine campaigns to drive qualified traffic, increase conversions, and maximize your return on advertising investment.",
    icon: IconTarget,
  },
  {
    title: "Display & Banner Ads",
    description:
      "Expand your brand's reach with visually engaging display and banner advertisements across Google's extensive Display Network. Our creative, audience-focused campaigns increase brand awareness, attract potential customers, and keep your business visible throughout every stage of the customer journey.",
    icon: IconPhoto,
  },
  {
    title: "Meta (Facebook/Instagram) Ads",
    description:
      "Drive meaningful engagement and conversions with expertly managed Facebook and Instagram advertising campaigns. We create compelling creatives, define precise audience targeting, optimize campaign performance, and leverage advanced remarketing strategies to generate leads, sales, and measurable business growth.",
    icon: IconBrandFacebook,
  },
  {
    title: "LinkedIn Ads",
    description:
      "Generate high-quality B2B leads through strategic LinkedIn advertising designed for professionals and decision-makers. We target audiences based on industry, job title, company size, and interests while creating campaigns that increase brand credibility, attract qualified prospects, and support long-term business growth.",
    icon: IconBriefcase,
  },
  {
    title: "Google Shopping Ads",
    description:
      "Showcase your products directly in Google Search with optimized Google Shopping campaigns that feature product images, pricing, ratings, and promotions. We optimize product feeds, improve campaign performance, and help eCommerce businesses attract purchase-ready customers while maximizing sales and return on ad spend.",
    icon: IconShoppingCart,
  },
  {
    title: "Remarketing Campaigns",
    description:
      "Reconnect with visitors who have previously interacted with your website or ads through personalized remarketing campaigns. By delivering relevant messages across Google, Facebook, Instagram, and other platforms, we encourage potential customers to return, complete purchases, and improve overall conversion rates.",
    icon: IconRefresh,
  },
];

const PPCServiceSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === "dark";

  return (
    <Box
      py={120}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark ? "transparent" : theme.colors.gray[0],
      }}
    >
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,.14), transparent 70%)",
            top: 80,
            left: -180,
            filter: "blur(80px)",
          }}
        />
      )}
      {isDark && (
        <Box
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.14), transparent 70%)",
            bottom: 0,
            right: -180,
            filter: "blur(90px)",
          }}
        />
      )}

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="md" mb={70}>
          <Text
            fw={700}
            c="teal"
            tt="uppercase"
            style={{ letterSpacing: 3, fontSize: 15 }}
          >
            WHAT WE OFFER
          </Text>
          <Title
            style={{
              fontSize: "clamp(2rem,3vw,4.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Full-Spectrum{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              PPC Management
            </Text>
          </Title>
          <Text
            maw={760}
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: isDark ? "rgba(255,255,255,.72)" : theme.colors.gray[7],
            }}
          >
            Drive high-quality traffic and accelerate business growth with expertly managed PPC campaigns. From keyword research and audience targeting to conversion tracking, budget optimization, and performance reporting, we handle every detail to deliver maximum ROI.
          </Text>
        </Stack>

        <Grid gutter={30}>
          {features.map((item, index) => (
            <Grid.Col key={item.title} span={{ base: 12, sm: 6, lg: 4 }}>
              <MotionCard
                p={0}
                radius={24}
                h="100%"
                withBorder
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: isDark ? "rgba(18, 26, 36, 0.92)" : theme.white,
                  border: isDark
                    ? "1px solid rgba(255,255,255,.08)"
                    : `1px solid ${theme.colors.gray[3]}`,
                  backdropFilter: isDark ? "blur(18px)" : "none",
                  boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,.35)"
                    : "0 10px 30px rgba(0,0,0,.06)",
                  cursor: "pointer",
                  transition: "all .35s ease",
                }}
              >
                {/* top gradient accent bar */}
                <Box
                  style={{
                    height: 5,
                    width: "100%",
                    background: "linear-gradient(90deg, #22d3ee, #14b8a6)",
                  }}
                />

                <Box p={40} style={{ position: "relative" }}>
                  <Stack gap={20}>
                    {/* Icon + Heading in one row */}
                    <Group gap={16} wrap="nowrap" align="center">
                      <ThemeIcon
                        size={58}
                        radius={16}
                        variant="gradient"
                        gradient={{ from: "#22d3ee", to: "#14b8a6", deg: 135 }}
                        style={{
                          boxShadow: "0 10px 24px rgba(20,184,166,.35)",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={30} stroke={1.8} color="#fff" />
                      </ThemeIcon>
                      <Title
                        order={3}
                        style={{
                          fontSize: 21,
                          fontWeight: 800,
                          lineHeight: 1.35,
                          color: isDark ? theme.white : theme.black,
                        }}
                      >
                        {item.title}
                      </Title>
                    </Group>

                    <Text
                      style={{
                        fontSize: 16.5,
                        lineHeight: 1.85,
                        color: isDark
                          ? "rgba(255,255,255,.68)"
                          : theme.colors.gray[7],
                      }}
                    >
                      {item.description}
                    </Text>
                  </Stack>
                </Box>
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PPCServiceSection;