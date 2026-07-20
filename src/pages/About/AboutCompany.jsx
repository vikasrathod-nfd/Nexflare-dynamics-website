// import { Container, Grid, Title, Text, Stack, Paper, ThemeIcon } from "@mantine/core";
// import { IconBuildingSkyscraper } from "@tabler/icons-react";
// import { motion } from "framer-motion";

// const AboutCompany = () => {
//   return (
//     <Container size="xl">
//       <Grid align="center">
//         {/* Left Content */}
//         <Grid.Col span={{ base: 12, md: 7 }}>
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Stack gap="md">
//               <Text
//                 fw={700}
//                 c="blue"
//                 tt="uppercase"
//                 size="sm"
//               >
//                 Who We Are
//               </Text>

//               <Title order={2} size="h1">
//                 Empowering Businesses Through Innovation & Technology
//               </Title>

//               <Text size="lg" c="dimmed" lh={1.8}>
//                 Nexflare Dynamics is a leading software development company
//                 focused on delivering innovative digital solutions for
//                 startups, SMEs, and enterprises. We specialize in creating
//                 scalable web applications, mobile apps, ERP systems, CRM
//                 platforms, HRMS solutions, cloud-based applications, and
//                 AI-powered software products.
//               </Text>

//               <Text size="lg" c="dimmed" lh={1.8}>
//                 Our team combines technical expertise, creative thinking, and
//                 business understanding to develop solutions that improve
//                 operational efficiency, enhance customer experiences, and
//                 accelerate business growth.
//               </Text>

//               <Text size="lg" c="dimmed" lh={1.8}>
//                 We believe technology should simplify processes, solve real
//                 business challenges, and create measurable value. Every
//                 project we undertake is driven by innovation, quality, and a
//                 commitment to delivering exceptional results.
//               </Text>
//             </Stack>
//           </motion.div>
//         </Grid.Col>

//         {/* Right Card */}
//         <Grid.Col span={{ base: 12, md: 5 }}>
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Paper
//               shadow="lg"
//               radius="xl"
//               p="xl"
//               withBorder
//             >
//               <Stack align="center" gap="md">
//                 <ThemeIcon
//                   size={80}
//                   radius="xl"
//                   variant="light"
//                 >
//                   <IconBuildingSkyscraper size={42} />
//                 </ThemeIcon>

//                 <Title order={3} ta="center">
//                   Trusted Technology Partner
//                 </Title>

//                 <Text ta="center" c="dimmed" lh={1.8}>
//                   We help businesses transform ideas into powerful digital
//                   products through strategic planning, modern technologies,
//                   and customer-focused development practices.
//                 </Text>
//               </Stack>
//             </Paper>
//           </motion.div>
//         </Grid.Col>
//       </Grid>
//     </Container>
//   );
// };

// export default AboutCompany;


import {
  Container,
  Grid,
  Title,
  Text,
  Stack,
  Paper,
  ThemeIcon,
  Badge,
  Group,
} from "@mantine/core";
import {
  IconRocket,
  IconCode,
  IconBrandGoogle,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const AboutCompany = () => {
  return (
    <Container size="xl" py={80}>
      <Grid align="center" gutter={60}>
        {/* Left Content */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Stack gap="lg">
              <Badge
                color="blue"
                variant="light"
                radius="xl"
                size="lg"
                w="fit-content"
              >
                Who We Are
              </Badge>

              <Title
                order={2}
                style={{
                  fontSize: "clamp(2rem,4vw,3.4rem)",
                  lineHeight: 1.2,
                  fontWeight: 800,
                }}
              >
                Driving Business Success Through{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                >
                  Technology
                </Text>{" "}
                &{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "cyan", to: "blue" }}
                >
                  Digital Marketing
                </Text>
              </Title>

              <Text size="lg" c="dimmed" lh={1.9}>
                Nexflare Dynamics is a technology-driven company specializing
                in <b>Software Development</b> and{" "}
                <b>Digital Marketing</b> solutions. We partner with startups,
                growing businesses, and enterprises to build innovative digital
                products while creating impactful marketing strategies that
                strengthen brands and accelerate business growth.
              </Text>

              <Text size="lg" c="dimmed" lh={1.9}>
                Our expertise includes custom software development, web and
                mobile application development, enterprise software, cloud
                solutions, UI/UX design, and API integrations. Alongside
                technology, we provide SEO, social media marketing, branding,
                performance marketing, and digital advertising to help
                businesses increase visibility, generate quality leads, and
                achieve measurable results.
              </Text>

              <Text size="lg" c="dimmed" lh={1.9}>
                At Nexflare Dynamics, we believe technology and marketing work
                together to create meaningful business success. By combining
                innovative software engineering with creative digital marketing
                strategies, we deliver complete digital solutions that improve
                efficiency, enhance customer experiences, and drive sustainable
                growth.
              </Text>

              {/* Services */}
              <Group mt="md">
                <Badge
                  size="lg"
                  radius="xl"
                  variant="light"
                  leftSection={<IconCode size={16} />}
                >
                  Software Development
                </Badge>

                <Badge
                  size="lg"
                  radius="xl"
                  variant="light"
                  color="grape"
                  leftSection={<IconDeviceLaptop size={16} />}
                >
                  Web & Mobile Apps
                </Badge>

                <Badge
                  size="lg"
                  radius="xl"
                  variant="light"
                  color="orange"
                  leftSection={<IconBrandGoogle size={16} />}
                >
                  Digital Marketing
                </Badge>
              </Group>
            </Stack>
          </motion.div>
        </Grid.Col>

        {/* Right Card */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <MotionPaper
            shadow="xl"
            radius="xl"
            p={40}
            withBorder
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background:
                "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 100%)",
            }}
          >
            <Stack align="center" gap="lg">
              <ThemeIcon
                size={90}
                radius="xl"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
              >
                <IconRocket size={46} />
              </ThemeIcon>

              <Title order={3} ta="center">
                Your Trusted Digital Growth Partner
              </Title>

              <Text ta="center" c="dimmed" lh={1.8}>
                We combine modern software development with strategic digital
                marketing to help businesses innovate, reach the right
                audience, strengthen their online presence, and achieve
                long-term success.
              </Text>

              <Paper
                radius="lg"
                p="md"
                withBorder
                w="100%"
                bg="gray.0"
              >
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Text fw={600}>✔ Custom Software</Text>
                    <Text c="blue" fw={700}>
                      100%
                    </Text>
                  </Group>

                  <Group justify="space-between">
                    <Text fw={600}>✔ Web & Mobile Apps</Text>
                    <Text c="blue" fw={700}>
                      End-to-End
                    </Text>
                  </Group>

                  <Group justify="space-between">
                    <Text fw={600}>✔ Digital Marketing</Text>
                    <Text c="blue" fw={700}>
                      ROI Focused
                    </Text>
                  </Group>

                  <Group justify="space-between">
                    <Text fw={600}>✔ Client Success</Text>
                    <Text c="blue" fw={700}>
                      Our Priority
                    </Text>
                  </Group>
                </Stack>
              </Paper>
            </Stack>
          </MotionPaper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutCompany;