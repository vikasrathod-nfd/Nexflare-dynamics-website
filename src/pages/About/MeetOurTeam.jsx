// import {
//   Container,
//   Title,
//   Text,
//   SimpleGrid,
//   Paper,
//   Stack,
//   Avatar,
//   Group,
//   ActionIcon,
// } from "@mantine/core";
// import {
//   IconBrandLinkedin,
//   IconBrandTwitter,
// } from "@tabler/icons-react";
// import { motion } from "framer-motion";

// const MotionPaper = motion.create(Paper);

// const teamMembers = [
//   {
//     name: "Shubham Lokhande",
//     role: "Founder & CEO",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a",
//   },
//   {
//     name: "Rohit Lokhande",
//     role: "Marketing Head",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//   },
//   // {
//   //   name: "Rahul Verma",
//   //   role: "Lead Full Stack Developer",
//   //   image:
//   //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//   // },
//   // {
//   //   name: "Sneha Joshi",
//   //   role: "Project Manager",
//   //   image:
//   //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//   // },
// ];

// const MeetOurTeam = () => {
//   return (
//     <Container size="xl" py={90}>
//       <Stack align="center" gap="md" mb={60}>
//         <Text
//           fw={700}
//           c="blue"
//           tt="uppercase"
//           size="sm"
//         >
//           Meet Our Team
//         </Text>

//         <Title
//           order={2}
//           ta="center"
//           maw={700}
//         >
//           The People Behind Our Success
//         </Title>

//         <Text
//           ta="center"
//           c="dimmed"
//           size="lg"
//           maw={850}
//         >
//           Our talented team of developers, designers, project
//           managers, and technology experts work together to
//           deliver innovative solutions that help businesses
//           achieve their goals.
//         </Text>
//       </Stack>

//       <SimpleGrid
//         cols={{ base: 1, sm: 2, lg: 4 }}
//         spacing="xl"

//       >
//         {teamMembers.map((member, index) => (
//           <MotionPaper
//             key={member.name}
//             p="xl"
//             radius="xl"

//             shadow="sm"
//             withBorder
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.15,
//             }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -10,
//             }}
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//             }}
//           >
//             <Stack align="center">
//               <Avatar
//                 src={member.image}
//                 size={120}
//                 radius="50%"
//               />

//               <div>
//                 <Title order={4}>
//                   {member.name}
//                 </Title>

//                 <Text c="dimmed" size="sm">
//                   {member.role}
//                 </Text>
//               </div>

//               {/* <Group gap="xs">
//                 <ActionIcon
//                   variant="light"
//                   radius="xl"
//                 >
//                   <IconBrandLinkedin size={18} />
//                 </ActionIcon>

//                 <ActionIcon
//                   variant="light"
//                   radius="xl"
//                 >
//                   <IconBrandTwitter size={18} />
//                 </ActionIcon>
//               </Group> */}
//             </Stack>
//           </MotionPaper>
//         ))}
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default MeetOurTeam;

import React from "react";
import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";

import { IconArrowUpRight } from "@tabler/icons-react";

import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const teamMembers = [
  {
    id: 1,
    name: "Shubham Lokhande",
    role: "Founder & CEO",
    image: "Images/ShubhamSirNewOnee.jpeg",
  },

  {
    id: 2,
    name: "Rohit Lokhande",
    role: "Marketing Head",
    image: "Images/RohitSirNew.jpeg",
  },

  // {
  //   id: 3,
  //   name: "Vikas Rathod",
  //   role: "Lead Software Engineer",
  //   image: "Images/Vikas4.jpeg",
  // },
];

const MeetOurTeam = () => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("light");

  const isDark = colorScheme === "dark";

  return (
    <Box py={100}>
      <Container size="xl">
        <Stack gap={8} mb={55} align="center">
          <Group gap="sm">
            <Box w={35} h={2} bg={theme.colors.teal[5]} />

            <Text
              fw={700}
              size="14px"
              // c="#1E293B"
              tt="uppercase"
              style={{
                letterSpacing: "1px",
              }}
            >
              OUR TEAM
            </Text>
          </Group>

          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 800,
              color: isDark ? theme.white : theme.colors.dark[8],
            }}
          >
            Our Extraordinary Team
          </Title>

          <Text maw={560} c={isDark ? "gray.4" : "dimmed"} size="md" lh={1.8}>
            Discover brilliance in action with our exceptional team, fusing
            diverse talents to drive innovation and success.
          </Text>
        </Stack>

        <Group justify="center" gap={30} align="flex-start" wrap="wrap">
          {teamMembers.map((member, index) => (
            <MotionPaper
              key={member.id}
              radius={0}
              shadow="none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              style={{
                width: 450,
                maxWidth: "100%",
                cursor: "pointer",
                overflow: "hidden",
                background: "transparent",
                flex: "0 0 450px",
              }}
            >
              {/* Image */}
              <Box
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 500,
                }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />

                {/* Bottom Information Card */}
                <Paper
                  radius={0}
                  shadow="md"
                  p="md"
                  style={{
                    position: "absolute",
                    left: 18,
                    right: 18,
                    bottom: 18,
                    background: isDark ? theme.colors.dark[7] : theme.white,
                    border: isDark
                      ? `1px solid ${theme.colors.dark[5]}`
                      : "1px solid #ECECEC",
                    boxShadow: isDark
                      ? "0 10px 40px rgba(0,0,0,.45)"
                      : "0 10px 30px rgba(0,0,0,.08)",
                  }}
                >
                  <Group justify="space-between" align="center" wrap="nowrap">
                    <Stack gap={2}>
                      <Text
                        fw={700}
                        size="sm"
                        c={isDark ? theme.white : theme.colors.dark[8]}
                      >
                        {member.name}
                      </Text>

                      <Text size="xs" c={isDark ? "gray.5" : "dimmed"}>
                        {member.role}
                      </Text>
                    </Stack>
                  </Group>
                </Paper>
              </Box>
            </MotionPaper>
          ))}
        </Group>

        {/* Slider Dots */}

        {/* <Group justify="center" mt={55} gap={10}>
          <Box
            w={34}
            h={6}
            style={{
              borderRadius: 100,
              background: "#0F766E",
            }}
          />

          <Box
            w={18}
            h={6}
            style={{
              borderRadius: 100,
              background: "#E5E7EB",
            }}
          />

          <Box
            w={18}
            h={6}
            style={{
              borderRadius: 100,
              background: "#E5E7EB",
            }}
          />

          <Box
            w={18}
            h={6}
            style={{
              borderRadius: 100,
              background: "#E5E7EB",
            }}
          />
        </Group> */}
      </Container>
    </Box>
  );
};

export default MeetOurTeam;
