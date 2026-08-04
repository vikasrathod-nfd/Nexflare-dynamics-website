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
  IconBrandShopee,
  IconShoppingCart,
  IconSettings,
  IconCreditCard,
  IconPackage,
  IconTrendingUp,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "Shopify Development",
    description:
      "Create powerful and scalable Shopify stores with custom themes, advanced integrations, and tailored features. We help businesses launch, migrate, and optimize online stores designed for higher conversions and seamless growth.",
    icon: IconBrandShopee,
  },
  {
    title: "WooCommerce Development",
    description:
      "Develop flexible and fully customized WooCommerce solutions that combine the power of WordPress with advanced eCommerce capabilities. From store setup to custom functionality, we build platforms optimized for performance and SEO.",
    icon: IconShoppingCart,
  },
  {
    title: "Custom eCommerce Platforms",
    description:
      "Build fully customized eCommerce platforms designed around your unique business requirements. We develop scalable solutions including B2B marketplaces, multi-vendor platforms, and headless commerce architectures.",
    icon: IconSettings,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Enable secure and seamless transactions with reliable payment gateway integrations. We connect your store with leading payment providers to deliver smooth checkout experiences with multiple payment options.",
    icon: IconCreditCard,
  },
  {
    title: "Inventory & Order Management",
    description:
      "Streamline your business operations with intelligent inventory and order management solutions. We implement real-time tracking, automated workflows, warehouse management, and logistics integrations for efficient fulfillment.",
    icon: IconPackage,
  },
  {
    title: "Conversion Rate Optimisation",
    description:
      "Improve your online revenue with data-driven conversion optimization strategies. From checkout improvements and customer journey analysis to upselling techniques and cart recovery solutions, we help maximize sales performance.",
    icon: IconTrendingUp,
  },
];

const EDServiceSection = () => {
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
              "radial-gradient(circle, rgba(34,211,238,.14), transparent 70%)",
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
            Complete{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "#22d3ee", to: "#14b8a6" }}
            >
              eCommerce Solutions
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
            Build a powerful online marketplace with our complete eCommerce
            solutions designed to drive sales, enhance customer experiences,
            and support business growth. From custom store design and
            development to secure payment integrations, product management,
            SEO optimization, and ongoing support, we deliver scalable
            eCommerce platforms tailored to your business needs.
          </Text>
        </Stack>

        <Grid gutter={30}>
          {services.map((item, index) => (
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

export default EDServiceSection;