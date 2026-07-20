// import { Container, Title, Text, Button, Stack, Group } from "@mantine/core";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const AboutHero = () => {
//   return (
//     <Container size="xl" py={120}>
//       <Stack align="center" gap="xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Text
//             ta="center"
//             fw={700}
//             c="blue"
//             size="sm"
//             tt="uppercase"
//           >
//             About Nexflare Dynamics
//           </Text>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Title
//             order={1}
//             ta="center"
//             maw={900}
//             style={{
//               fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
//               lineHeight: 1.2,
//             }}
//           >
//             Transforming Ideas Into Powerful Digital Solutions
//           </Title>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <Text
//             ta="center"
//             c="dimmed"
//             maw={800}
//             size="lg"
//             lh={1.8}
//           >
//             At Nexflare Dynamics, we help businesses accelerate growth through
//             innovative software solutions, custom application development, and
//             digital transformation services. We deliver scalable, secure, and
//             user-centric technology that empowers organizations to achieve
//             their goals.
//           </Text>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: true }}
//         >
//           <Group justify="center">
//             <Button
//               component={Link}
//               to="/contact"
//               size="lg"
//               radius="xl"
//             >
//               Get Started
//             </Button>

//             <Button
//               component={Link}
//               to="/services"
//               variant="outline"
//               size="lg"
//               radius="xl"
//             >
//               Explore Services
//             </Button>
//           </Group>
//         </motion.div>
//       </Stack>
//     </Container>
//   );
// };

// export default AboutHero;

import {
  Badge,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Box,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconCode,
  IconBrandGoogle,
  IconDeviceLaptop,
} from "@tabler/icons-react";

const MotionBox = motion.create(Box);

const AboutHero = () => {
  return (
    <Container size="xl" py={120}>
      <Stack align="center" gap="xl">

        {/* Badge */}
        <MotionBox
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            size="lg"
            radius="xl"
            variant="light"
            color="blue"
            px="lg"
            py={14}
          >
            Software Development • Digital Marketing • IT Consulting
          </Badge>
        </MotionBox>

        {/* Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            ta="center"
            maw={950}
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
              lineHeight: 1.15,
              fontWeight: 800,
            }}
          >
            Building{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Innovative Software
            </Text>{" "}
            & Delivering{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "cyan", to: "blue" }}
            >
              Digital Growth
            </Text>
          </Title>
        </MotionBox>

        {/* Description */}
        <MotionBox
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text
            ta="center"
            maw={850}
            c="dimmed"
            size="lg"
            lh={1.9}
          >
            <b>Nexflare Dynamics </b> is your trusted technology partner for Software Development and Digital Marketing. We design and develop scalable digital products, websites, mobile applications, enterprise solutions, and cloud-based platforms while delivering strategic SEO, branding, social media marketing, and performance marketing services. By combining technology with marketing expertise, we help businesses innovate, attract customers, and achieve long-term success.


          </Text>
        </MotionBox>

        {/* Feature Pills */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Group justify="center" gap="md">
            <Badge
              variant="default"
              size="lg"
              leftSection={<IconCode size={15} />}
            >
              Custom Software
            </Badge>

            <Badge
              variant="default"
              size="lg"
              leftSection={<IconDeviceLaptop size={15} />}
            >
              Web & Mobile Apps
            </Badge>

            <Badge
              variant="default"
              size="lg"
              leftSection={<IconBrandGoogle size={15} />}
            >
              Digital Marketing
            </Badge>
          </Group>
        </MotionBox>

        {/* Buttons */}
        <MotionBox
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Group justify="center" mt="md">
            <Button
              component={Link}
              to="/contact"
              size="lg"
              radius="xl"
              rightSection={<IconArrowRight size={18} />}
            >
              Start Your Project
            </Button>

            <Button
              component={Link}
              to="/services"
              size="lg"
              radius="xl"
              variant="outline"
            >
              Explore Our Services
            </Button>
          </Group>
        </MotionBox>

        {/* Stats */}
        <MotionBox
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <Group justify="center" gap={60} mt={40}>

            <Stack gap={0} align="center">
              <Title order={2} c="blue">
                100+
              </Title>
              <Text c="dimmed" size="sm">
                Projects Delivered
              </Text>
            </Stack>

            <Stack gap={0} align="center">
              <Title order={2} c="blue">
                50+
              </Title>
              <Text c="dimmed" size="sm">
                Happy Clients
              </Text>
            </Stack>

            <Stack gap={0} align="center">
              <Title order={2} c="blue">
                5+
              </Title>
              <Text c="dimmed" size="sm">
                Years of Innovation
              </Text>
            </Stack>

            <Stack gap={0} align="center">
              <Title order={2} c="blue">
                24/7
              </Title>
              <Text c="dimmed" size="sm">
                Technical Support
              </Text>
            </Stack>

          </Group>
        </MotionBox>

      </Stack>
    </Container>
  );
};

export default AboutHero;