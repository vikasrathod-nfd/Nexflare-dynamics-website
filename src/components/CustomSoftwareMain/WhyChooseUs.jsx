
// import React from "react";
// import {
//   Box,
//   Container,
//   Text,
//   Title,
//   Grid,
//   Group,
//   Button,
//   Image,
//   useComputedColorScheme,
// } from "@mantine/core";
// import { IconCheck } from "@tabler/icons-react";
// const ACCENT = "#2DD4BF";
// const features = [
//   "Custom-built software aligned with your unique business requirements",
//   "Future-ready, scalable solutions that evolve with your organization",
//   "Advanced security and reliable performance you can trust",
//   "Smooth integration with existing platforms and third-party applications",
//   "100% ownership and control over your software and source code",
//   "A collaborative development process with continuous support and optimization",
// ];
// const techStack = [
//   "Angular",
//   "React Native",
//   "Node.js",
//   "Python",
//   "PHP",
//   "JavaScript",
//   "MongoDB",
//   "SQL",
// ];
// const WhyChooseUs = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";
//   // Handle button click - Redirect to Contact page
//   const handleDiscussProject = () => {
//     window.location.href = "/contact"; // Change this path if your contact route is different
//   };
//   return (
//     <Box
//       component="section"
//       style={{
//         position: "relative",
//         padding: "100px 0",
//       }}
//     >
//       <Container size="xl">
//         <Grid gutter={{ base: 40, md: 64 }} align="center">
//           {/* Image */}
//           <Grid.Col span={{ base: 12, md: 5 }}>
//             <Box
//               style={{
//                 borderRadius: 16,
//                 overflow: "hidden",
//                 border: `1px solid ${
//                   isDark ? "rgba(45,212,191,0.35)" : "rgba(45,212,191,0.4)"
//                 }`,
//                 boxShadow: isDark
//                   ? "0 20px 60px rgba(0,0,0,0.45)"
//                   : "0 20px 60px rgba(15,23,42,0.12)",
//               }}
//             >
//               <Image
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
//                 alt="Development team collaborating on laptops"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   display: "block",
//                 }}
//               />
//             </Box>
//           </Grid.Col>
//           {/* Content */}
//           <Grid.Col span={{ base: 12, md: 7 }}>
//             {/* Eyebrow */}
//             <Text
//               fw={700}
//               size="sm"
//               style={{
//                 color: ACCENT,
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//                 marginBottom: 16,
//               }}
//             >
//               Why NexFlare Dynamics
//             </Text>
//             {/* Heading */}
//             <Title
//               order={2}
//               style={{
//                 fontSize: "clamp(2rem, 4vw, 2.75rem)",
//                 fontWeight: 800,
//                 lineHeight: 1.2,
//                 marginBottom: 20,
//                 color: isDark ? "#F5F7FA" : "#0B1326",
//               }}
//             >
//               Software That{" "}
//               <Text component="span" inherit style={{ color: ACCENT }}>
//                 Fits Like a Glove
//               </Text>
//             </Title>
//             {/* Description */}
//             <Text
//               style={{
//                 maxWidth: 640,
//                 fontSize: "1.05rem",
//                 lineHeight: 1.7,
//                 color: isDark
//                   ? "rgba(226,232,240,0.75)"
//                   : "rgba(15,23,42,0.65)",
//                 marginBottom: 32,
//               }}
//             >
//               Off-the-shelf software forces your team to adapt to the tool.
//               Our custom solutions adapt to you built around your exact
//               workflows, processes, and growth goals.
//             </Text>
//             {/* Checklist */}
//             <Box style={{ marginBottom: 32 }}>
//               {features.map((feature, index) => (
//                 <Group key={index} gap={12} wrap="nowrap" style={{ marginBottom: 16 }}>
//                   <IconCheck
//                     size={20}
//                     stroke={2.5}
//                     style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }}
//                   />
//                   <Text
//                     style={{
//                       fontSize: "1rem",
//                       lineHeight: 1.6,
//                       color: isDark
//                         ? "rgba(226,232,240,0.85)"
//                         : "rgba(15,23,42,0.75)",
//                     }}
//                   >
//                     {feature}
//                   </Text>
//                 </Group>
//               ))}
//             </Box>
//             {/* Tech stack pills */}
//             <Group gap={12} style={{ marginBottom: 40 }}>
//               {techStack.map((tech) => (
//                 <Box
//                   key={tech}
//                   style={{
//                     padding: "8px 20px",
//                     borderRadius: 999,
//                     border: `1px solid ${
//                       isDark
//                         ? "rgba(45,212,191,0.35)"
//                         : "rgba(45,212,191,0.4)"
//                     }`,
//                     background: isDark
//                       ? "rgba(45,212,191,0.06)"
//                       : "rgba(45,212,191,0.08)",
//                   }}
//                 >
//                   <Text
//                     size="sm"
//                     fw={500}
//                     style={{ color: ACCENT, whiteSpace: "nowrap" }}
//                   >
//                     {tech}
//                   </Text>
//                 </Box>
//               ))}
//             </Group>
//             {/* CTA Button - Updated */}
//             <Button
//               size="lg"
//               radius="xl"
//               style={{
//                 background: "linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)",
//                 fontWeight: 700,
//                 padding: "0 36px",
//                 height: 52,
//                 border: "none",
//               }}
//               onClick={handleDiscussProject}
//             >
//               Discuss Your Project
//             </Button>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };
// export default WhyChooseUs;



import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Grid,
  Group,
  Button,
  Image,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ACCENT = "#2DD4BF";
const ACCENT2 = "#22D3EE";

const features = [
  "Custom-built software aligned with your unique business requirements",
  "Future-ready, scalable solutions that evolve with your organization",
  "Advanced security and reliable performance you can trust",
  "Smooth integration with existing platforms and third-party applications",
  "100% ownership and control over your software and source code",
  "A collaborative development process with continuous support and optimization",
];

const techStack = [
  "Angular",
  "React Native",
  "Node.js",
  "Python",
  "PHP",
  "JavaScript",
  "MongoDB",
  "SQL",
];

const WhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleDiscussProject = () => {
    window.location.href = "/contact";
  };

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
          {/* Image - now takes more width and full height */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative", height: "100%" }}
            >
              <Box
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  height: "100%",
                  minHeight: 640,
                  border: `1px solid ${
                    isDark ? "rgba(45,212,191,0.35)" : "rgba(45,212,191,0.4)"
                  }`,
                  boxShadow: isDark
                    ? "0 25px 70px rgba(0,0,0,0.5)"
                    : "0 25px 70px rgba(15,23,42,0.14)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Development team collaborating on laptops"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              {/* Floating gradient accent behind image */}
              <Box
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: 26,
                  // background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
                  opacity: 0.18,
                  zIndex: -1,
                  filter: "blur(6px)",
                }}
              />

             
            </MotionBox>
          </Grid.Col>

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
                ● Why NexFlare Dynamics
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
                Software That{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: ACCENT2, to: ACCENT }}
                >
                  Fits Like a Glove
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
                Off-the-shelf software forces your team to adapt to the tool.
                Our custom solutions adapt to you — built around your exact
                workflows, processes, and growth goals.
              </Text>

              <Box style={{ marginBottom: 32 }}>
                {features.map((feature, index) => (
                  <MotionBox
                    key={index}
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
                      {feature}
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
              <Group gap={10} style={{ marginBottom: 32 }}>
                {techStack.map((tech) => (
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

              <Button
                size="md"
                radius="xl"
                rightSection={<IconArrowRight size={18} stroke={2.2} />}
                style={{
                  background:
                    "linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "0 30px",
                  height: 48,
                  border: "none",
                }}
                onClick={handleDiscussProject}
              >
                Discuss Your Project
              </Button>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
export default WhyChooseUs;