import React from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  ThemeIcon,
  Button,
  Box,
  Badge,
  useComputedColorScheme,
  Image,
  Group,
} from "@mantine/core";
import {
  Megaphone,
  Search,
  Share2,
  BarChart3,
  Mail,
  PenTool,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const DigitalMarketing = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const services = [
    {
      icon: Megaphone,
      title: "Paid Advertising (PPC)",
      description:
        "Strategic ad campaigns across Google Ads, Meta, and LinkedIn to drive immediate traffic and maximize your ROI with precision targeting.",
      image: "/ServicesImage/PPC.jpg",
    },
    {
      icon: Search,
      title: "SEO & Content Strategy",
      description:
        "Boost organic visibility with technical SEO, on-page optimization, and high-value content that resonates with your audience and ranks.",
      image: "/ServicesImage/SEO.jpg",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage communities across platforms. We create and curate content that builds brand loyalty and turns followers into customers.",
      image: "/ServicesImage/Social.jpg",
    },
    {
      icon: BarChart3,
      title: "Analytics & Data Reporting",
      description:
        "Make informed decisions with transparent reporting. We track KPIs that matter, providing deep insights into campaign performance and growth.",
      image: "/ServicesImage/Analyticsss.jpg",
    },
    {
      icon: Mail,
      title: "Email Marketing & Automation",
      description:
        "Nurture leads and drive repeat sales with personalized email sequences, automated workflows, and targeted customer segmentation.",
      image: "/ServicesImage/Email.jpg",
    },
    {
      icon: PenTool,
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Turn more visitors into buyers. We analyze user behavior and A/B test landing pages to continuously improve your conversion rates.",
      image: "/ServicesImage/cro.jpg",
    },
  ];

  const highlights = [
    "Data-Driven Growth Strategies",
    "Multi-Channel Campaign Expertise",
    "Transparent ROI & KPI Tracking",
    "Dedicated Marketing Specialists",
  ];

  return (
    <Box
      py={80}
      id="digital-marketing-service"
      style={{
        position: "relative",
      }}
    >
      <Container size="lg">
        <Box ta="center" mb={60}>
          <Badge
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            size="lg"
            radius="sm"
            mb="sm"
            style={{ textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Digital Marketing
          </Badge>
          <Title
            order={1}
            fz={{ base: 32, md: 44 }}
            fw={800}
            style={{ color: isDark ? "#ffffff" : "#111827" }}
            mb="md"
          >
            Drive Traffic, Leads, and Revenue
          </Title>
          <Text
            style={{ color: isDark ? "#909296" : "#4B5563" }}
            fz={{ base: "md", md: "lg" }}
            maw={750}
            mx="auto"
            lh={1.6}
          >
            Scale your online presence with result-oriented digital marketing
            services. From SEO to paid advertising, we create strategies that
            deliver measurable growth.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30} mb={60}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                radius="xl"
                p={0}
                style={{
                  position: "relative",
                  // HR-Changes: Required for zoom effect on child
                  overflow: "hidden", 
                  height: 420,
                  cursor: "pointer",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,.08)" : "rgba(37,99,235,.08)"
                  }`,
                  transition: "all .35s ease",
                }}
                // HR-Changes: Hover selector targeting class on Image
                className="service-card-container"
              >
                <style>{`
                  .service-card-container:hover .service-image {
                    transform: scale(1.08);
                  }
                `}</style>

                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  h="100%"
                  w="100%"
                  fit="cover"
                  style={{
                    transition: "transform 0.8s ease-out", 
                    position: "absolute", // Sit behind everything
                    top: 0,
                    left: 0
                  }}
                  className="service-image"
                />

                {/* HR-Changes: Darker Gradient + Backdrop Blur for Legibility */}
                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    // Darker stops to ensure white text visibility
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.95) 0%, rgba(0,0,0,.6) 60%, rgba(0,0,0,.3) 100%)",
                    // The blur effect applied to the area behind this box
                    backdropFilter: "blur(2px)", 
                    WebkitBackdropFilter: "blur(2px)", 
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: 24,
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
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

                  <Title order={3} mt={20} c="white" fw={700} style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {service.title}
                  </Title>

                  <Text mt="sm" c="gray.2" size="sm" lh={1.7}>
                    {service.description}
                  </Text>

                  {/* <Button
                    mt="auto"
                    radius="xl"
                    variant="white"
                    color="dark"
                    rightSection={<ArrowRight size={16} />}
                    component="a"
                    href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Explore Service
                  </Button> */}
                </Box>
              </Card>
            );
          })}
        </SimpleGrid>

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
                Partner With Experts to Scale Your Business
              </Title>
              <Text
                fz="sm"
                style={{ color: isDark ? "#A6A7AB" : "#374151" }}
                mb="xl"
                lh={1.6}
              >
                Ready to dominate your market? Our digital marketing agency
                combines creative campaigns with technical expertise to help you
                achieve sustainable business growth.
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
                Get a Free Marketing Audit
              </Button>
            </Box>
          </SimpleGrid>
        </Card>
      </Container>
    </Box>
  );
};

export default DigitalMarketing;