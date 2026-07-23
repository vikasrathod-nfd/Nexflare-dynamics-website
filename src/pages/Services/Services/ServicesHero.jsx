// import {
//   Badge,
//   Box,
//   Button,
//   Container,
//   Grid,
//   Group,
//   List,
//   Stack,
//   Text,
//   ThemeIcon,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";
// import {
//   IconArrowRight,
//   IconCheck,
//   IconCode,
//   IconDeviceMobile,
//   IconCloud,
//   IconRobot,
// } from "@tabler/icons-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const MotionBox = motion.create(Box);

// const ServicesHero = () => {
//   const colorScheme = useComputedColorScheme("light");

//   return (
//     <Box
//       pt={170}
//       pb={20}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Blur */}

//       <Box
//         style={{
//           position: "absolute",
//           width: 500,
//           height: 500,
//           borderRadius: "50%",
//           background:
//             colorScheme === "dark"
//               ? "rgba(37,99,235,.18)"
//               : "rgba(37,99,235,.10)",
//           filter: "blur(130px)",
//           top: -180,
//           right: -120,
//         }}
//       />

//       <Container size="xl">
//         <Grid align="center" gutter={60}>
//           {/* LEFT */}

//           <Grid.Col span={{ base: 12, lg: 7 }}>
//             <Stack gap="xl">
//               <motion.div
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 <Badge
//                   variant="light"
//                   radius="xl"
//                   size="lg"
//                 >
//                   🚀 Software Development Services
//                 </Badge>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: .15 }}
//               >
//                 <Title
//                   style={{
//                     fontSize: "clamp(2.8rem,5vw,4.8rem)",
//                     lineHeight: 1.15,
//                     fontWeight: 800,
//                   }}
//                 >
//                   Build Future-Ready
//                   <Text
//                     component="span"
//                     inherit
//                     variant="gradient"
//                     gradient={{
//                       from: "blue",
//                       to: "cyan",
//                     }}
//                   >
//                     {" "}
//                     Digital Solutions
//                   </Text>
//                 </Title>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: .25 }}
//               >
//                 <Text
//                   size="lg"
//                   c="dimmed"
//                   maw={650}
//                   lh={1.9}
//                 >
//                   We design and develop secure, scalable and modern
//                   software products that help startups, SMEs and
//                   enterprises automate operations and accelerate
//                   growth.
//                 </Text>
//               </motion.div>

//               <List
//                 spacing="md"
//                 icon={
//                   <ThemeIcon
//                     color="blue"
//                     radius="xl"
//                     size={22}
//                   >
//                     <IconCheck size={14} />
//                   </ThemeIcon>
//                 }
//               >
//                 <List.Item>Custom Software Development</List.Item>

//                 <List.Item>Web & Mobile Applications</List.Item>

//                 <List.Item>ERP • CRM • HRMS Solutions</List.Item>

//                 <List.Item>Cloud & AI Powered Platforms</List.Item>
//               </List>

//               <Group mt="md">
//                 <Button
//                   component={Link}
//                   to="/contact"
//                   radius="xl"
//                   size="lg"
//                   rightSection={<IconArrowRight size={18} />}
//                 >
//                   Get Free Consultation
//                 </Button>

//                 {/* <Button
//                   component={Link}
//                   to="/portfolio"
//                   variant="outline"
//                   radius="xl"
//                   size="lg"
//                 >
//                   View Portfolio
//                 </Button> */}
//               </Group>
//             </Stack>
//           </Grid.Col>

//           {/* RIGHT */}

//           <Grid.Col span={{ base: 12, lg: 5 }}>
//             <MotionBox
//               initial={{
//                 opacity: 0,
//                 scale: .85,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: .7,
//               }}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Box
//                 style={{
//                   width: 430,
//                   height: 430,
//                   borderRadius: 40,
//                   position: "relative",
//                   background:
//                     colorScheme === "dark"
//                       ? "linear-gradient(145deg,#13233c,#0b1326)"
//                       : "linear-gradient(145deg,#eef7ff,#dbeafe)",
//                   border:
//                     colorScheme === "dark"
//                       ? "1px solid rgba(255,255,255,.08)"
//                       : "1px solid #dbeafe",
//                   boxShadow:
//                     "0 35px 80px rgba(37,99,235,.18)",
//                 }}
//               >
//                 <ThemeIcon
//                   size={95}
//                   radius="xl"
//                   color="blue"
//                   style={{
//                     position: "absolute",
//                     top: 50,
//                     left: 50,
//                   }}
//                 >
//                   <IconCode size={45} />
//                 </ThemeIcon>

//                 <ThemeIcon
//                   size={95}
//                   radius="xl"
//                   color="cyan"
//                   style={{
//                     position: "absolute",
//                     top: 70,
//                     right: 45,
//                   }}
//                 >
//                   <IconDeviceMobile size={45} />
//                 </ThemeIcon>

//                 <ThemeIcon
//                   size={95}
//                   radius="xl"
//                   color="grape"
//                   style={{
//                     position: "absolute",
//                     bottom: 70,
//                     left: 70,
//                   }}
//                 >
//                   <IconCloud size={45} />
//                 </ThemeIcon>

//                 <ThemeIcon
//                   size={95}
//                   radius="xl"
//                   color="teal"
//                   style={{
//                     position: "absolute",
//                     bottom: 50,
//                     right: 60,
//                   }}
//                 >
//                   <IconRobot size={45} />
//                 </ThemeIcon>

//                 <Box
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Box
//                     style={{
//                       width: 170,
//                       height: 170,
//                       borderRadius: "50%",
//                       background:
//                         "linear-gradient(135deg,#2563eb,#06b6d4)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "white",
//                       fontSize: 22,
//                       fontWeight: 700,
//                     }}
//                   >
//                     NFD
//                   </Box>
//                 </Box>
//               </Box>
//             </MotionBox>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesHero;

import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
  SimpleGrid,
  Divider,
  Stack,
} from "@mantine/core";
import {
  IconArrowRight,
  IconCheck,
  IconSettings,
  IconDeviceLaptop,
  IconUsersGroup,
  IconServer,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Fix: Use motion.create for newer versions of framer-motion
const MotionBox = motion.create(Box);
const MotionDiv = motion.create("div");

const ANIMATION_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const StatCard = ({ icon: Icon, label, value, isDark }) => (
  <Box>
    <Group gap="xs" mb={5}>
      <ThemeIcon size="sm" variant="transparent" color="blue">
        <Icon size={16} />
      </ThemeIcon>
      <Text fz="xs" tt="uppercase" fw={700} c={isDark ? "dimmed" : "gray.6"} style={{ letterSpacing: '0.5px' }}>
        {label}
      </Text>
    </Group>
    <Title order={3} fz="h2" fw={900} c={isDark ? "white" : "gray.9"}>
      {value}
    </Title>
  </Box>
);

const ServicesHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // --- UPDATED: THEME LOGIC FROM FIRST COMPONENT ---
  // 1. Complex gradient background applied to the section container
  const parentBackground = isDark
    ? `
      radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 35%),
      radial-gradient(circle at top right, rgba(6,182,212,.15), transparent 35%),
      linear-gradient(180deg,#08111f 0%,#0b1326 45%,#060d18 100%)
    `
    : `
      radial-gradient(circle at top left, rgba(37,99,235,.08), transparent 35%),
      radial-gradient(circle at top right, rgba(6,182,212,.06), transparent 35%),
      linear-gradient(180deg,#ffffff 0%,#f7fbff 45%,#eef7ff 100%)
    `;

  // 2. Background Blur (the circle in the top right from the first component)
  const backgroundBlur = (
    <Box
      style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: isDark ? "rgba(37,99,235,.18)" : "rgba(37,99,235,.06)", // Slightly reduced opacity for light mode to match first component
        filter: "blur(130px)",
        top: -180,
        right: -120,
        zIndex: 0, // Ensure content sits on top
      }}
    />
  );

  // 3. Text Colors based on scheme
  const titleColor = isDark ? "white" : "gray.9";
  const descriptionColor = isDark ? "gray.2" : "gray.7"; // Matches 'dimmed' equivalent in light
  const capabilitiesTitleColor = isDark ? "white" : "gray.9";
  const capabilitiesTextColor = isDark ? "dark.3" : "gray.6"; // Matches 'dimmed' equivalent in light

  // 4. Card Styles based on scheme (improved contrast)
  const cardBgColor = isDark ? "rgba(255,255,255,0.05)" : "#ffffff";
  const cardBorderColor = isDark ? "rgba(255,255,255,0.1)" : "#e0e0e0";

  return (
    <Box
      component="section"
      style={{ 
        position: "relative",
        background: parentBackground, // Inherited complex gradient background
        width: "100%",
        overflow: "hidden", // Required for background blur positioning
      }}
      pt={180}
      pb={100}
    >
      {backgroundBlur} {/* Added the background blur element */}

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={80} justify="space-between">
          {/* LEFT CONTENT */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="lg">
              <MotionDiv custom={0} initial="hidden" animate="visible" variants={ANIMATION_UP_VARIANTS}>
                <Badge
                  variant="light" // Changed to 'light' to match first component
                  size="lg"
                  radius="xl" // Changed to 'xl' to match first component
                  color="blue"
                  style={{ fontWeight: 700, letterSpacing: '0.5px' }}
                >
                  🚀 SOFTWARE DEVELOPMENT SERVICES
                </Badge>
              </MotionDiv>

              <MotionDiv custom={1} initial="hidden" animate="visible" variants={ANIMATION_UP_VARIANTS}>
                <Title
                  c={titleColor}
                  style={{
                    fontSize: "clamp(2.8rem, 5vw, 4.8rem)", // Slightly adjusted to match first component
                    lineHeight: 1.15, // Slightly adjusted to match first component
                    fontWeight: 800, // Slightly adjusted to match first component
                    letterSpacing: "-1px", // Slightly softened
                  }}
                >
                  Build Future-Ready
                  <br />
                  {/* Development removed, Services moved here to match structure */}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }} // Simplified gradient to match first component
                  >
                    {" "}
                    Digital Solutions
                  </Text>
                </Title>
              </MotionDiv>

              <MotionDiv custom={2} initial="hidden" animate="visible" variants={ANIMATION_UP_VARIANTS}>
                <Text
                  fz="lg" // Adjusted to match first component
                  c={descriptionColor}
                  maw={650} // Adjusted to match first component
                  lh={1.9} // Adjusted to match first component
                  style={{ fontWeight: 400 }}
                >
                  We design and develop secure, scalable and modern software products that help startups, SMEs and enterprises automate operations and accelerate growth.
                </Text>
              </MotionDiv>

              <MotionDiv custom={3} initial="hidden" animate="visible" variants={ANIMATION_UP_VARIANTS}>
                <Button
                  component={Link}
                  to="/contact"
                  size="lg" // Adjusted to match first component
                  radius="xl" // Adjusted to match first component
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan", deg: 90 }} // Standard blue/cyan gradient
                  rightSection={<IconArrowRight size={18} />}
                  style={{ fontWeight: 700 }}
                >
                  Get Free Consultation
                </Button>
              </MotionDiv>
            </Stack>
          </Grid.Col>

          {/* RIGHT CONTENT */}
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                p="xl"
                radius="md"
                style={{
                  backgroundColor: cardBgColor,
                  border: `1px solid ${cardBorderColor}`,
                  borderRadius: '4px',
                  // Added subtle shadow for depth against the complex background
                  boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <Text fw={800} fz="lg" mb="lg" c={capabilitiesTitleColor}>
                  Core Capabilities
                </Text>
                
                <Stack gap="lg">
                  {/* Capability 1 */}
                  <Group align="flex-start" wrap="nowrap">
                    <ThemeIcon size={40} color="blue" variant="light" radius={4}>
                      <IconSettings size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={700} c={capabilitiesTitleColor} fz="lg">Custom Development</Text>
                      <Text fz="sm" c={capabilitiesTextColor}>Tailored software solutions built from the ground up to meet specific business logic.</Text>
                    </div>
                  </Group>
                  
                  <Divider color={isDark ? "dark.4" : "gray.2"} />

                  {/* Capability 2 */}
                  <Group align="flex-start" wrap="nowrap">
                    <ThemeIcon size={40} color="cyan" variant="light" radius={4}>
                      <IconDeviceLaptop size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={700} c={capabilitiesTitleColor} fz="lg">Web & Mobile</Text>
                      <Text fz="sm" c={capabilitiesTextColor}>High-performance applications delivering seamless user experiences across all devices.</Text>
                    </div>
                  </Group>

                  <Divider color={isDark ? "dark.4" : "gray.2"} />

                  {/* Capability 3 */}
                  <Group align="flex-start" wrap="nowrap">
                    <ThemeIcon size={40} color="grape" variant="light" radius={4}>
                      <IconUsersGroup size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={700} c={capabilitiesTitleColor} fz="lg">Enterprise Ecosystems</Text>
                      <Text fz="sm" c={capabilitiesTextColor}>Robust ERP, CRM, and HRMS solutions to centralize and automate operations.</Text>
                    </div>
                  </Group>
                </Stack>
              </Box>
              
              {/* Simple Stats Footer */}
              <SimpleGrid cols={3} mt={50}>
                  <StatCard icon={IconSettings} label="Experience" value="10+ Yrs" isDark={isDark} />
                  <StatCard icon={IconUsersGroup} label="Clients" value="98%" isDark={isDark} />
                  <StatCard icon={IconServer} label="Rating" value="4.9/5" isDark={isDark} />
              </SimpleGrid>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesHero;