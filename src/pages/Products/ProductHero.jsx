// import {
//   Badge,
//   Box,
//   Button,
//   Container,
//   Grid,
//   Group,
//   Stack,
//   Text,
//   ThemeIcon,
//   Title,
//   Card,
//   Divider,
//   useComputedColorScheme,
// } from "@mantine/core";

// import {
//   IconApps,
//   IconArrowRight,
//   IconCircleCheck,
//   IconBrandWindows,
//   IconBrandReact,
//   IconCloudComputing,
// } from "@tabler/icons-react";

// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const products = [
//   {
//     name: "NexHRMS",
//     status: "Live",
//     color: "green",
//     icon: IconBrandWindows,
//   },
//   {
//     name: "Smart CRM",
//     status: "Coming Soon",
//     color: "orange",
//     icon: IconBrandReact,
//   },
//   {
//     name: "Project Hub",
//     status: "Coming Soon",
//     color: "orange",
//     icon: IconCloudComputing,
//   },
// ];

// const features = [
//   "Enterprise Ready",
//   "Cloud Based Platform",
//   "Secure & Scalable",
//   "Modern User Experience",
// ];

// const ProductHero = () => {
//   const navigate = useNavigate();
//   const colorScheme = useComputedColorScheme("light");
//   const isDark = colorScheme === "dark";

//   return (
//     <Box py={100}>
//       <Container size="xl" py={60}>
//         <Grid align="center" gutter={70}>
//           {/* ================= LEFT SIDE ================= */}

//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <Stack gap="xl">
//                 <Badge
//                   size="lg"
//                   radius="xl"
//                   variant="light"
//                   color="#06b6d4"
//                   leftSection={<IconApps size={14} />}
//                 >
//                   Software Products
//                 </Badge>

//                 <Title
//                   order={1}
//                   style={{
//                     fontSize: "clamp(2.8rem,5vw,5rem)",
//                     lineHeight: 1.08,
//                     fontWeight: 900,
//                     color: isDark ? "#fff" : "#0F172A",
//                   }}
//                 >
//                   Best Custom
//                   <br />
//                   <span
//                     style={{
//                       background: "linear-gradient(90deg,#2563EB,#38BDF8)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     Software Products
//                   </span>
//                   <br />
//                   For Growing Businesses
//                 </Title>

//                 <Text
//                   size="lg"
//                   c={isDark ? "gray.3" : "dimmed"}
//                   style={{
//                     lineHeight: 1.9,
//                     maxWidth: 620,
//                   }}
//                 >
//                   Designed with advanced technology and innovative techniques
//                   for your business growth. Our software products minimize
//                   operational loads, reduce human error, and boost production
//                   capacity with intelligent automation.
//                 </Text>

//                 {/* ================= FEATURES ================= */}

//                 <Stack gap="md">
//                   {features.map((feature) => (
//                     <Group key={feature} gap="sm" align="center">
//                       <ThemeIcon
//                         size={28}
//                         radius="xl"
//                         color="blue"
//                         variant="light"
//                       >
//                         <IconCircleCheck size={16} />
//                       </ThemeIcon>

//                       <Text fw={500} size="md" c={isDark ? "gray.1" : "dark"}>
//                         {feature}
//                       </Text>
//                     </Group>
//                   ))}
//                 </Stack>

//                 {/* ================= BUTTONS ================= */}

//                 <Group mt="lg">
//                   <Button
//                     size="lg"
//                     radius="xl"
//                     variant="gradient"
//                     gradient={{ from: "blue", to: "cyan" }}
//                     rightSection={<IconArrowRight size={18} />}
//                     styles={{
//                       root: {
//                         paddingInline: 28,
//                         height: 52,
//                         fontWeight: 600,
//                       },
//                     }}
//                     onClick={() => navigate("/contact")}
//                   >
//                     Explore Products
//                   </Button>

//                   <Button
//                     size="lg"
//                     radius="xl"
//                     variant="outline"
//                     color="blue"
//                     styles={{
//                       root: {
//                         paddingInline: 28,
//                         height: 52,
//                         fontWeight: 600,
//                       },
//                     }}
//                     onClick={() => navigate("/contact")}
//                   >
//                     Request Demo
//                   </Button>
//                 </Group>

//                 {/* ================= STATS ================= */}

//                 {/* <Group mt="xl" gap={40} wrap="wrap">
//                   <Box>
//                     <Title order={2} c="blue" fw={800}>
//                       3+
//                     </Title>

//                     <Text size="sm" c="dimmed">
//                       Enterprise Products
//                     </Text>
//                   </Box>

//                   <Divider orientation="vertical" />

//                   <Box>
//                     <Title order={2} c="blue" fw={800}>
//                       100%
//                     </Title>

//                     <Text size="sm" c="dimmed">
//                       Scalable Solutions
//                     </Text>
//                   </Box>

//                   <Divider orientation="vertical" />

//                   <Box>
//                     <Title order={2} c="blue" fw={800}>
//                       24×7
//                     </Title>

//                     <Text size="sm" c="dimmed">
//                       Technical Support
//                     </Text>
//                   </Box>
//                 </Group> */}
//               </Stack>
//             </motion.div>
//           </Grid.Col>

//           {/* ================= RIGHT SIDE ================= */}

//           <Grid.Col span={{ base: 12, md: 6 }}>
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <Card
//                 radius={24}
//                 p="xl"
//                 shadow="xl"
//                 withBorder
//                 style={{
//                   background: isDark
//                     ? "rgba(255,255,255,0.04)"
//                     : "rgba(255,255,255,0.9)",
//                   backdropFilter: "blur(14px)",
//                 }}
//               >
//                 <Stack gap="lg">
//                   <Group justify="space-between">
//                     <Box>
//                       <Text fw={700} size="xl">
//                         Our Software Suite
//                       </Text>

//                       <Text size="sm" c="dimmed" mt={4}>
//                         Modern enterprise products designed to help businesses
//                         grow with powerful digital solutions.
//                       </Text>
//                     </Box>

//                     <ThemeIcon
//                       size={55}
//                       radius="xl"
//                       variant="light"
//                       color="blue"
//                     >
//                       <IconApps size={28} />
//                     </ThemeIcon>
//                   </Group>

//                   <Divider />

//                   {products.map((product) => {
//                     const Icon = product.icon;

//                     return (
//                       <Card
//                         key={product.name}
//                         radius="lg"
//                         withBorder
//                         p="md"
//                         shadow="sm"
//                         style={{
//                           transition: "all .3s ease",
//                           cursor: "pointer",
//                         }}
//                       >
//                         <Group justify="space-between">
//                           <Group>
//                             <ThemeIcon
//                               size={48}
//                               radius="xl"
//                               variant="light"
//                               color="blue"
//                             >
//                               <Icon size={24} />
//                             </ThemeIcon>

//                             <Box>
//                               <Text fw={700}>{product.name}</Text>

//                               <Text size="sm" c="dimmed">
//                                 Enterprise Software
//                               </Text>
//                             </Box>
//                           </Group>

//                           <Badge
//                             radius="xl"
//                             color={product.color}
//                             variant="light"
//                           >
//                             {product.status}
//                           </Badge>
//                         </Group>
//                       </Card>
//                     );
//                   })}

//                   <Divider />

//                   <Group grow>
//                     <Button radius="xl" variant="light" color="blue">
//                       View All Products
//                     </Button>

//                     <Button
//                       radius="xl"
//                       variant="gradient"
//                       gradient={{
//                         from: "blue",
//                         to: "cyan",
//                       }}
//                       rightSection={<IconArrowRight size={18} />}
//                       onClick={() => navigate("/contact")}
//                     >
//                       Get Started
//                     </Button>
//                   </Group>
//                 </Stack>
//               </Card>
//             </motion.div>
//           </Grid.Col>
//         </Grid>
//         {/* ================= PRODUCT HIGHLIGHTS ================= */}

//         <Box mt={80}>
//           <Card
//             radius={24}
//             p="xl"
//             withBorder
//             shadow="md"
//             style={{
//               background: isDark
//                 ? "rgba(255,255,255,0.04)"
//                 : "rgba(255,255,255,0.9)",
//               backdropFilter: "blur(14px)",
//             }}
//           >
//             <Stack gap="xl">
//               <Title order={2} ta="center" fw={800}>
//                 Why Choose Our Products?
//               </Title>

//               <Text ta="center" maw={700} mx="auto" c="dimmed">
//                 Our enterprise software products are designed to improve
//                 productivity, automate business processes, and help your
//                 organization scale with confidence.
//               </Text>

//               <Grid gutter="lg">
//                 <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
//                   <Card radius="lg" p="lg" withBorder>
//                     <ThemeIcon
//                       size={56}
//                       radius="xl"
//                       color="blue"
//                       variant="light"
//                     >
//                       <IconCloudComputing size={28} />
//                     </ThemeIcon>

//                     <Text fw={700} mt="md">
//                       Cloud Ready
//                     </Text>

//                     <Text size="sm" c="dimmed" mt={6}>
//                       Secure cloud infrastructure with easy accessibility.
//                     </Text>
//                   </Card>
//                 </Grid.Col>

//                 <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
//                   <Card radius="lg" p="lg" withBorder>
//                     <ThemeIcon
//                       size={56}
//                       radius="xl"
//                       color="green"
//                       variant="light"
//                     >
//                       <IconCircleCheck size={28} />
//                     </ThemeIcon>

//                     <Text fw={700} mt="md">
//                       Easy to Use
//                     </Text>

//                     <Text size="sm" c="dimmed" mt={6}>
//                       Modern UI with an intuitive user experience.
//                     </Text>
//                   </Card>
//                 </Grid.Col>

//                 <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
//                   <Card radius="lg" p="lg" withBorder>
//                     <ThemeIcon
//                       size={56}
//                       radius="xl"
//                       color="orange"
//                       variant="light"
//                     >
//                       <IconApps size={28} />
//                     </ThemeIcon>

//                     <Text fw={700} mt="md">
//                       Modular
//                     </Text>

//                     <Text size="sm" c="dimmed" mt={6}>
//                       Flexible modules that fit businesses of every size.
//                     </Text>
//                   </Card>
//                 </Grid.Col>

//                 <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
//                   <Card radius="lg" p="lg" withBorder>
//                     <ThemeIcon
//                       size={56}
//                       radius="xl"
//                       color="cyan"
//                       variant="light"
//                     >
//                       <IconBrandReact size={28} />
//                     </ThemeIcon>

//                     <Text fw={700} mt="md">
//                       Modern Technology
//                     </Text>

//                     <Text size="sm" c="dimmed" mt={6}>
//                       Built using the latest technologies for performance and
//                       scalability.
//                     </Text>
//                   </Card>
//                 </Grid.Col>
//               </Grid>
//             </Stack>
//           </Card>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ProductHero;


import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Card,
  Divider,
  useComputedColorScheme,
} from "@mantine/core";

import { useState } from "react";

import {
  IconApps,
  IconArrowRight,
  IconCircleCheck,
  IconBrandWindows,
  IconBrandReact,
  IconCloudComputing,
  IconTruck,
  IconClipboardList,
} from "@tabler/icons-react";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "NexHRMS",
    status: "Live",
    color: "green",
    icon: IconBrandWindows,
  },
  {
    name: "Smart CRM",
    status: "Coming Soon",
    color: "orange",
    icon: IconBrandReact,
  },
  {
    name: "Project Hub",
    status: "Coming Soon",
    color: "orange",
    icon: IconCloudComputing,
  },
];

// 4 cards jo "View All Products" click karne pe show honge
const allProducts = [
  {
    name: "NexHRMS",
    description: "Human Resource Management System",
    icon: IconBrandWindows,
    color: "blue",
    status: "Live",
    statusColor: "green",
    route: "/products/hrms",
  },
  {
    name: "ERP",
    description: "Enterprise Resource Planning",
    icon: IconCloudComputing,
    color: "cyan",
    status: "Coming Soon",
    statusColor: "orange",
    route: "/products/erp",
  },
  {
    name: "Project Management",
    description: "Plan, track & manage projects",
    icon: IconClipboardList,
    color: "orange",
    status: "Coming Soon",
    statusColor: "orange",
    route: "/products/project-management",
  },
  {
    name: "Freight Management",
    description: "Manage logistics & freight operations",
    icon: IconTruck,
    color: "grape",
    status: "Coming Soon",
    statusColor: "orange",
    route: "/products/freight-management",
  },
];

const features = [
  "Enterprise Ready",
  "Cloud Based Platform",
  "Secure & Scalable",
  "Modern User Experience",
];

const ProductHero = () => {
  const navigate = useNavigate();
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  // naya state - ye control karega ki 4 cards dikhne chaiye ya nahi
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <Box py={100}>
      <Container size="xl" py={60}>
        <Grid align="center" gutter={70}>
          {/* ================= LEFT SIDE ================= */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Stack gap="xl">
                <Badge
                  size="lg"
                  radius="xl"
                  variant="light"
                  color="#06b6d4"
                  leftSection={<IconApps size={14} />}
                >
                  Software Products
                </Badge>

                <Title
                  order={1}
                  style={{
                    fontSize: "clamp(2.8rem,5vw,5rem)",
                    lineHeight: 1.08,
                    fontWeight: 900,
                    color: isDark ? "#fff" : "#0F172A",
                  }}
                >
                  Best Custom
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Software Products
                  </span>
                  <br />
                  For Growing Businesses
                </Title>

                <Text
                  size="lg"
                  c={isDark ? "gray.3" : "dimmed"}
                  style={{
                    lineHeight: 1.9,
                    maxWidth: 620,
                  }}
                >
                  Designed with advanced technology and innovative techniques
                  for your business growth. Our software products minimize
                  operational loads, reduce human error, and boost production
                  capacity with intelligent automation.
                </Text>

                {/* ================= FEATURES ================= */}

                <Stack gap="md">
                  {features.map((feature) => (
                    <Group key={feature} gap="sm" align="center">
                      <ThemeIcon
                        size={28}
                        radius="xl"
                        color="blue"
                        variant="light"
                      >
                        <IconCircleCheck size={16} />
                      </ThemeIcon>

                      <Text fw={500} size="md" c={isDark ? "gray.1" : "dark"}>
                        {feature}
                      </Text>
                    </Group>
                  ))}
                </Stack>

                {/* ================= BUTTONS ================= */}

                <Group mt="lg">
                  <Button
                    size="lg"
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    rightSection={<IconArrowRight size={18} />}
                    styles={{
                      root: {
                        paddingInline: 28,
                        height: 52,
                        fontWeight: 600,
                      },
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    Explore Products
                  </Button>

                  <Button
                    size="lg"
                    radius="xl"
                    variant="outline"
                    color="blue"
                    styles={{
                      root: {
                        paddingInline: 28,
                        height: 52,
                        fontWeight: 600,
                      },
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    Request Demo
                  </Button>
                </Group>
              </Stack>
            </motion.div>
          </Grid.Col>

          {/* ================= RIGHT SIDE ================= */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card
                radius={24}
                p="xl"
                shadow="xl"
                withBorder
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <Stack gap="lg">
                  <Group justify="space-between">
                    <Box>
                      <Text fw={700} size="xl">
                        Our Software Suite
                      </Text>

                      <Text size="sm" c="dimmed" mt={4}>
                        Modern enterprise products designed to help businesses
                        grow with powerful digital solutions.
                      </Text>
                    </Box>

                    <ThemeIcon
                      size={55}
                      radius="xl"
                      variant="light"
                      color="blue"
                    >
                      <IconApps size={28} />
                    </ThemeIcon>
                  </Group>

                  <Divider />

                  {products.map((product) => {
                    const Icon = product.icon;

                    return (
                      <Card
                        key={product.name}
                        radius="lg"
                        withBorder
                        p="md"
                        shadow="sm"
                        style={{
                          transition: "all .3s ease",
                          cursor: "pointer",
                        }}
                      >
                        <Group justify="space-between">
                          <Group>
                            <ThemeIcon
                              size={48}
                              radius="xl"
                              variant="light"
                              color="blue"
                            >
                              <Icon size={24} />
                            </ThemeIcon>

                            <Box>
                              <Text fw={700}>{product.name}</Text>

                              <Text size="sm" c="dimmed">
                                Enterprise Software
                              </Text>
                            </Box>
                          </Group>

                          <Badge
                            radius="xl"
                            color={product.color}
                            variant="light"
                          >
                            {product.status}
                          </Badge>
                        </Group>
                      </Card>
                    );
                  })}

                  <Divider />

                  <Group grow>
                    {/* onClick add kiya - toggle state */}
                    <Button
                      radius="xl"
                      variant="light"
                      color="blue"
                      onClick={() => setShowAllProducts((prev) => !prev)}
                    >
                      {showAllProducts ? "Hide Products" : "View All Products"}
                    </Button>

                    <Button
                      radius="xl"
                      variant="gradient"
                      gradient={{
                        from: "blue",
                        to: "cyan",
                      }}
                      rightSection={<IconArrowRight size={18} />}
                      onClick={() => navigate("/contact")}
                    >
                      Get Started
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* ================= 4 PRODUCT CARDS (View All Products click pe) ================= */}

        <AnimatePresence>
          {showAllProducts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: "hidden" }}
            >
              <Box mt={60}>
                <Grid gutter="xl">
                  {allProducts.map((product, index) => {
                    const Icon = product.icon;

                    return (
                      <Grid.Col
                        key={product.name}
                        span={{ base: 12, sm: 6, md: 3 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          style={{ height: "100%" }}
                        >
                          <Card
                            radius="xl"
                            p="lg"
                            withBorder
                            shadow="md"
                            style={{
                              height: "100%",
                              cursor: "pointer",
                              transition: "all .3s ease",
                              background: isDark
                                ? "rgba(255,255,255,0.03)"
                                : "#ffffff",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-6px)";
                              e.currentTarget.style.boxShadow =
                                "0 12px 30px rgba(37,99,235,0.18)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <Stack gap="md" style={{ height: "100%" }}>
                              {/* Icon + Status Badge */}
                              <Group justify="space-between" align="flex-start">
                                <ThemeIcon
                                  size={56}
                                  radius="xl"
                                  variant="gradient"
                                  gradient={{ from: product.color, to: "cyan" }}
                                >
                                  <Icon size={28} />
                                </ThemeIcon>

                                <Badge
                                  radius="xl"
                                  size="sm"
                                  color={product.statusColor}
                                  variant="light"
                                >
                                  {product.status}
                                </Badge>
                              </Group>

                              {/* Title + Description */}
                              <Box style={{ flexGrow: 1 }}>
                                <Text fw={700} size="lg">
                                  {product.name}
                                </Text>

                                <Text size="sm" c="dimmed" mt={4}>
                                  {product.description}
                                </Text>
                              </Box>

                              <Divider />

                              {/* View Details Button - sirf Live products k liye clickable */}
                              <Button
                                radius="xl"
                                variant="light"
                                color={product.status === "Live" ? "blue" : "gray"}
                                fullWidth
                                disabled={product.status !== "Live"}
                                rightSection={
                                  product.status === "Live" ? (
                                    <IconArrowRight size={16} />
                                  ) : null
                                }
                                onClick={() => {
                                  if (product.status === "Live") {
                                    navigate(product.route);
                                  }
                                }}
                                style={{
                                  cursor:
                                    product.status === "Live"
                                      ? "pointer"
                                      : "not-allowed",
                                  opacity: product.status === "Live" ? 1 : 0.6,
                                }}
                              >
                                {product.status === "Live"
                                  ? "View Details"
                                  : "Coming Soon"}
                              </Button>
                            </Stack>
                          </Card>
                        </motion.div>
                      </Grid.Col>
                    );
                  })}
                </Grid>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= PRODUCT HIGHLIGHTS ================= */}

        <Box mt={80}>
          <Card
            radius={24}
            p="xl"
            withBorder
            shadow="md"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.04)"
                : "rgba(255,255,255,0.9)",
              backdropFilter: "blur(14px)",
            }}
          >
            <Stack gap="xl">
              <Title order={2} ta="center" fw={800}>
                Why Choose Our Products?
              </Title>

              <Text ta="center" maw={700} mx="auto" c="dimmed">
                Our enterprise software products are designed to improve
                productivity, automate business processes, and help your
                organization scale with confidence.
              </Text>

              <Grid gutter="lg">
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card radius="lg" p="lg" withBorder>
                    <ThemeIcon
                      size={56}
                      radius="xl"
                      color="blue"
                      variant="light"
                    >
                      <IconCloudComputing size={28} />
                    </ThemeIcon>

                    <Text fw={700} mt="md">
                      Cloud Ready
                    </Text>

                    <Text size="sm" c="dimmed" mt={6}>
                      Secure cloud infrastructure with easy accessibility.
                    </Text>
                  </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card radius="lg" p="lg" withBorder>
                    <ThemeIcon
                      size={56}
                      radius="xl"
                      color="green"
                      variant="light"
                    >
                      <IconCircleCheck size={28} />
                    </ThemeIcon>

                    <Text fw={700} mt="md">
                      Easy to Use
                    </Text>

                    <Text size="sm" c="dimmed" mt={6}>
                      Modern UI with an intuitive user experience.
                    </Text>
                  </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card radius="lg" p="lg" withBorder>
                    <ThemeIcon
                      size={56}
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      <IconApps size={28} />
                    </ThemeIcon>

                    <Text fw={700} mt="md">
                      Modular
                    </Text>

                    <Text size="sm" c="dimmed" mt={6}>
                      Flexible modules that fit businesses of every size.
                    </Text>
                  </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card radius="lg" p="lg" withBorder>
                    <ThemeIcon
                      size={56}
                      radius="xl"
                      color="cyan"
                      variant="light"
                    >
                      <IconBrandReact size={28} />
                    </ThemeIcon>

                    <Text fw={700} mt="md">
                      Modern Technology
                    </Text>

                    <Text size="sm" c="dimmed" mt={6}>
                      Built using the latest technologies for performance and
                      scalability.
                    </Text>
                  </Card>
                </Grid.Col>
              </Grid>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductHero;
