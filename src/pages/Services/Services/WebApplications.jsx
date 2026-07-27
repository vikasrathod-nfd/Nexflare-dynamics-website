// import React from "react";
// import {
//   Container,
//   Title,
//   Text,
//   SimpleGrid,
//   Card,
//   Group,
//   ThemeIcon,
//   Button,
//   Box,
//   Badge,
//   useComputedColorScheme,
//   Image,
// } from "@mantine/core";
// import {
//   Globe,
//   Layout,
//   Zap,
//   Smartphone,
//   Layers,
//   Database,
//   ArrowRight,
//   CheckCircle2,
//   Code2,
// } from "lucide-react";

// const WebApplications = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";



//   const features = [
//     {
//       icon: Layout,
//       title: "Custom Single-Page Apps (SPAs)",
//       description:
//         "Lightning-fast, highly responsive dynamic web applications built with modern frameworks like React and Next.js.",
//       image: "/ServicesImage/SPA.webp",
//     },
//     {
//       icon: Zap,
//       title: "Progressive Web Apps (PWAs)",
//       description:
//         "Deliver native mobile-like experiences on the web with offline capabilities.",
//       image: "/ServicesImage/pwa.jpg",
//     },
//     {
//       icon: Layers,
//       title: "Enterprise Portals & Dashboards",
//       description:
//         "Data-rich dashboards and enterprise portals for modern businesses.",
//       image: "/ServicesImage/dashboard.webp",
//     },
//     {
//       icon: Globe,
//       title: "Scalable SaaS Platforms",
//       description:
//         "End-to-end SaaS product development engineered for high availability.",
//       image: "/ServicesImage/saas.webp",
//     },
//     {
//       icon: Database,
//       title: "Backend & API Integration",
//       description:
//         "Secure APIs, scalable databases and third-party integrations.",
//       image: "/ServicesImage/api.jpg",
//     },
//     {
//       icon: Smartphone,
//       title: "Responsive UI/UX",
//       description:
//         "Pixel-perfect mobile-first interfaces with exceptional user experience.",
//       image: "/ServicesImage/responsive.jpg",
//     },
//   ];

//   const highlights = [
//     "High Performance & Core Web Vitals Optimization",
//     "Modern Component-Driven Architecture",
//     "Advanced Security Protocols & Data Protection",
//     "Agile Development & Rapid Delivery Cycles",
//   ];

//   return (
//     <Box
//       py={80}
//       id="web-applications-service"
//       style={{
//         position: "relative",
//       }}
//     >
//       <Container size="lg">
//         {/* Header Section */}
//         <Box ta="center" mb={60}>
//           <Badge
//             variant="gradient"
//             gradient={{ from: "blue", to: "cyan", deg: 90 }}
//             size="lg"
//             radius="sm"
//             mb="sm"
//             style={{ textTransform: "uppercase", letterSpacing: "1px" }}
//           >
//             Web Development
//           </Badge>
//           <Title
//             order={1}
//             fz={{ base: 32, md: 44 }}
//             fw={800}
//             style={{ color: isDark ? "#ffffff" : "#111827" }}
//             mb="md"
//           >
//             High-Performance Custom Web Applications
//           </Title>
//           <Text
//             style={{ color: isDark ? "#909296" : "#4B5563" }}
//             fz={{ base: "md", md: "lg" }}
//             maw={750}
//             mx="auto"
//             lh={1.6}
//           >
//             Transform your business ideas into scalable, secure, and
//             feature-rich web applications engineered to deliver exceptional user
//             engagement and business growth.
//           </Text>
//         </Box>

//         {/* Feature Cards Grid */}
//         <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30} mb={60}>
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <Card
//                 key={index}
//                 className="web-card"
//                 radius="xl"
//                 p={0}
//                 style={{
//                   position: "relative",
//                   overflow: "hidden",
//                   height: 430,
//                   cursor: "pointer",
//                   border: `1px solid ${
//                     isDark ? "rgba(255,255,255,.08)" : "rgba(37,99,235,.08)"
//                   }`,
//                   transition: ".4s",
//                 }}
//               >
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   h="100%"
//                   w="100%"
//                   fit="cover"
//                   className="web-card-image"
//                   style={{
//                     transition: "transform .8s ease, filter .8s ease",
//                     filter: "blur(1px) brightness(.6)",
//                   }}
//                 />

//                 <Box
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.55), rgba(0,0,0,.20))",
//                     zIndex: 1,
//                   }}
//                 />

//                 <Box
//                   className="web-card-content"
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     zIndex: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     padding: 24,
//                     transition: ".4s",
//                   }}
//                 >
//                   <ThemeIcon
//                     size={55}
//                     radius="xl"
//                     variant="gradient"
//                     gradient={{
//                       from: "blue",
//                       to: "cyan",
//                     }}
//                   >
//                     <IconComponent size={26} />
//                   </ThemeIcon>

//                   <Title order={3} mt={18} c="white" fw={700}>
//                     {feature.title}
//                   </Title>

//                   <Text mt="sm" c="gray.2" size="sm" lh={1.7}>
//                     {feature.description}
//                   </Text>

//                   {/* <Button
//                     mt="auto"
//                     radius="xl"
//                     variant="white"
//                     color="dark"
//                     rightSection={<ArrowRight size={16} />}
//                   >
//                     Learn More
//                   </Button> */}
//                 </Box>
//               </Card>
//             );
//           })}
//         </SimpleGrid>

//         {/* Bottom Callout Section */}
//         <Card
//           padding="xl"
//           radius="xl"
//           style={{
//             background: isDark
//               ? "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.08) 100%)"
//               : "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(6,182,212,0.04) 100%)",
//             border: `1px solid ${
//               isDark ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.1)"
//             }`,
//           }}
//         >
//           <SimpleGrid
//             cols={{ base: 1, md: 2 }}
//             spacing={30}
//             verticalSpacing={20}
//             style={{ alignItems: "center" }}
//           >
//             <Box>
//               <Title
//                 order={3}
//                 fz={{ base: 22, md: 26 }}
//                 fw={700}
//                 style={{ color: isDark ? "#ffffff" : "#111827" }}
//                 mb="md"
//               >
//                 Ready to Build Your Next Web Project?
//               </Title>
//               <Text
//                 fz="sm"
//                 style={{ color: isDark ? "#A6A7AB" : "#374151" }}
//                 mb="xl"
//                 lh={1.6}
//               >
//                 Partner with our engineering team to develop robust web
//                 solutions tailored specifically to your enterprise workflows.
//               </Text>

//               <SimpleGrid cols={1} spacing={10}>
//                 {highlights.map((item, idx) => (
//                   <Group key={idx} gap="sm">
//                     <ThemeIcon
//                       size={20}
//                       radius="xl"
//                       color="cyan"
//                       variant="light"
//                     >
//                       <CheckCircle2 size={14} />
//                     </ThemeIcon>
//                     <Text
//                       fz="sm"
//                       fw={500}
//                       style={{ color: isDark ? "#E2E8F0" : "#1F2937" }}
//                     >
//                       {item}
//                     </Text>
//                   </Group>
//                 ))}
//               </SimpleGrid>
//             </Box>

//             <Box ta={{ base: "left", md: "right" }}>
//               <Button
//                 size="lg"
//                 radius="md"
//                 variant="gradient"
//                 gradient={{ from: "blue", to: "cyan", deg: 90 }}
//                 rightSection={<ArrowRight size={18} />}
//                 component="a"
//                 href="#contact"
//               >
//                 Discuss Your Web App
//               </Button>
//             </Box>
//           </SimpleGrid>
//         </Card>
//       </Container>
//     </Box>
//   );
// };

// export default WebApplications;


import React from "react";
// import {
//   Container,
//   Title,
//   Text,
//   SimpleGrid,
//   Card,
//   Group,
//   ThemeIcon,
//   Button,
//   Box,
//   Badge,
//   useComputedColorScheme,
//   Image,
// } from "@mantine/core";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
  ThemeIcon,
  Button,
  Box,
  Badge,
  useComputedColorScheme,
  Image,
} from "@mantine/core";
import {
  Globe,
  Layout,
  Zap,
  Smartphone,
  Layers,
  Database,
  ArrowRight,
  CheckCircle2,
  Code2,
} from "lucide-react";

const WebApplications = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

const features = [
  {
    icon: Layout,
    title: "Custom Single-Page Apps (SPAs)",
    description:
      "Lightning-fast, highly responsive web applications built with modern frameworks like React and Next.js. We architect every SPA for smooth client-side routing, instant page transitions, and minimal load times. The result is an app-like experience that keeps users engaged without full page reloads.",
    image: "/ServicesImage/SPA.webp",
  },
  {
    icon: Zap,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Deliver native mobile-like experiences on the web with offline capabilities and push notifications built in. Our PWAs load instantly, work reliably even on flaky networks, and can be installed directly from the browser. Users get app-store quality without ever visiting an app store.",
    image: "/ServicesImage/pwa.jpg",
  },
  {
    icon: Layers,
    title: "Enterprise Portals & Dashboards",
    description:
      "Data-rich dashboards and enterprise portals designed to simplify complex workflows for modern businesses. We build role-based access, real-time data visualization, and intuitive navigation into every portal. The result is a centralized system that empowers teams to make faster, informed decisions.",
    image: "/ServicesImage/dashboard.webp",
  },
  {
    icon: Globe,
    title: "Scalable SaaS Platforms",
    description:
      "End-to-end SaaS product development engineered for high availability, multi-tenancy, and effortless scaling. From initial architecture to billing integrations and user onboarding, we build platforms ready to grow with your business. Every layer is optimized to handle increasing users and data without compromising performance.",
    image: "/ServicesImage/saas.webp",
  },
  {
    icon: Database,
    title: "Backend & API Integration",
    description:
      "Secure, well-documented APIs paired with scalable databases and seamless third-party integrations. We design backend architecture that handles high traffic loads while keeping your data protected and consistent. Whether connecting payment gateways, CRMs, or internal systems, we ensure everything communicates reliably.",
    image: "/ServicesImage/api.jpg",
  },
  {
    icon: Smartphone,
    title: "Responsive UI/UX",
    description:
      "Pixel-perfect, mobile-first interfaces crafted for an exceptional user experience across every device and screen size. We focus on intuitive navigation, accessibility, and consistent visual design from mobile to desktop. The result is an interface that feels effortless no matter how users access it.",
    image: "/ServicesImage/responsive.jpg",
  },
];

  const highlights = [
    "High Performance & Core Web Vitals Optimization",
    "Modern Component-Driven Architecture",
    "Advanced Security Protocols & Data Protection",
    "Agile Development & Rapid Delivery Cycles",
  ];

  return (
    <Box
      py={80}
      id="web-applications-service"
      style={{
        position: "relative",
      }}
    >
      {/* Global CSS fix for hover zoom */}
      <style>{`
        .web-card {
          overflow: hidden;
        }
        .web-card:hover .web-card-image {
          transform: scale(1.1) !important;
        }
      `}</style>

      <Container size="lg">
        {/* Header Section */}
        <Box ta="center" mb={60}>
          <Badge
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            size="lg"
            radius="sm"
            mb="sm"
            style={{ textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Web Development
          </Badge>
          <Title
            order={1}
            fz={{ base: 32, md: 44 }}
            fw={800}
            style={{ color: isDark ? "#ffffff" : "#111827" }}
            mb="md"
          >
            High-Performance Custom Web Applications
          </Title>
          <Text
            style={{ color: isDark ? "#909296" : "#4B5563" }}
            fz={{ base: "md", md: "lg" }}
            maw={750}
            mx="auto"
            lh={1.6}
          >
            Transform your business ideas into scalable, secure, and
            feature-rich web applications engineered to deliver exceptional user
            engagement and business growth.
          </Text>
        </Box>

        {/* Feature Cards Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30} mb={60}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="web-card"
                radius="xl"
                p={0}
                style={{
                  position: "relative",
                  height: 430,
                  cursor: "pointer",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,.08)" : "rgba(37,99,235,.08)"
                  }`,
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  h="100%"
                  w="100%"
                  fit="cover"
                  className="web-card-image"
                  style={{
                    transition: "transform 0.8s ease, filter 0.8s ease",
                    filter: "blur(1px) brightness(.6)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />

                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.55), rgba(0,0,0,.20))",
                    zIndex: 1,
                  }}
                />

                <Box
                  className="web-card-content"
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    padding: 24,
                  }}
                >
                  <ThemeIcon
                    size={55}
                    radius="xl"
                    variant="gradient"
                    gradient={{
                      from: "blue",
                      to: "cyan",
                    }}
                  >
                    <IconComponent size={26} />
                  </ThemeIcon>

                  <Title order={3} mt={18} c="white" fw={700}>
                    {feature.title}
                  </Title>

                  <Text mt="sm" c="gray.2" size="sm" lh={1.7}>
                    {feature.description}
                  </Text>
                </Box>
              </Card>
            );
          })}
        </SimpleGrid>

        {/* Bottom Callout Section */}
        <Card
          padding="xl"
          radius="xl"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.08) 100%)"
              : "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(6,182,212,0.04) 100%)",
            border: `1px solid ${
              isDark ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.1)"
            }`,
          }}
        >
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={30}
            verticalSpacing={20}
            style={{ alignItems: "center" }}
          >
            <Box>
              <Title
                order={3}
                fz={{ base: 22, md: 26 }}
                fw={700}
                style={{ color: isDark ? "#ffffff" : "#111827" }}
                mb="md"
              >
                Ready to Build Your Next Web Project?
              </Title>
              <Text
                fz="sm"
                style={{ color: isDark ? "#A6A7AB" : "#374151" }}
                mb="xl"
                lh={1.6}
              >
                Partner with our engineering team to develop robust web
                solutions tailored specifically to your enterprise workflows.
              </Text>

              <SimpleGrid cols={1} spacing={10}>
                {highlights.map((item, idx) => (
                  <Group key={idx} gap="sm">
                    <ThemeIcon
                      size={20}
                      radius="xl"
                      color="cyan"
                      variant="light"
                    >
                      <CheckCircle2 size={14} />
                    </ThemeIcon>
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
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
                rightSection={<ArrowRight size={18} />}
                component="a"
                href="#contact"
              >
                Discuss Your Web App
              </Button>
            </Box>
          </SimpleGrid>
        </Card>
      </Container>
    </Box>
  );
};

export default WebApplications;