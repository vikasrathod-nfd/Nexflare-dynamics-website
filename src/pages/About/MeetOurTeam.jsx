import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  ActionIcon,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconUserFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

const CIRCLE_SIZE = 200;
const ITEM_GAP = 20;

const teamMembers = [
  {
    id: 1,
    name: "Shubham Lokhande",
    role: "Founder & CEO",
    // image: "Images/ShubhamSirNewOnee.jpeg",
    image: "Images/Shubham-Sir.jpeg",
  },
  {
    id: 2,
    name: "Rohit Lokhande",
    role: "Co-Founder & Marketing Head",
    image: "Images/RohitSirNewOnee.jpeg",
  },
  {
    id: 3,
    name: "Isha Kulkarni",
    role: "Human Resources Head",
    image: "Images/IshaOne.jpeg",
  },
  {
    id: 4,
    name: "Masira Shah",
    role: "Sales Head",
    image: "Images/Masiraone.jpeg",
  },
];

const AboutUs = () => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const heading = isDark ? theme.white : theme.colors.dark[8];
  const body = isDark ? theme.colors.gray[4] : theme.colors.gray[7];

  const accent = isDark ? "#00D4C8" : "#0891B2";

  const [startIndex, setStartIndex] = useState(0);
  const [brokenImages, setBrokenImages] = useState({});

  const handleImageError = (id) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  const total = teamMembers.length;
  const maxIndex = Math.max(total - 2, 0);

  const isAtStart = startIndex <= 0;
  const isAtEnd = startIndex >= maxIndex;

  const handleNext = () => {
    if (isAtEnd) return;
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    if (isAtStart) return;
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const showArrows = teamMembers.length > 2;
  const viewportWidth = CIRCLE_SIZE * 2 + ITEM_GAP + 16;

  return (
    <Box py={100}>
      <Container size="xl">
        {/* Heading */}
        <Title
          order={2}
          mb={30}
          style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 800,
            color: heading,
          }}
        >
          Nexflare Dynamics Private Limited
        </Title>

        {/* TOP full-width content */}
        <Text
          size="xl"
          lh={1.9}
          mb={50}
          fw={700}
          fs="italic"
          c={heading}
        >
          "Nexflare Dynamics helps businesses grow through innovative software and result-driven digital marketing."
        </Text>

        {/* Photos LEFT + Content RIGHT */}
        <Grid gutter={{ base: 30, md: 80 }} align="center">
          {/* LEFT - Photos */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Group gap={10} wrap="nowrap" justify="center" align="center">
              {showArrows && (
                <ActionIcon
                  variant="light"
                  radius="xl"
                  size={40}
                  onClick={handlePrev}
                  disabled={isAtStart}
                  style={{
                    color: accent,
                    background: isDark
                      ? "rgba(0,212,200,0.12)"
                      : "rgba(8,145,178,0.10)",
                    flexShrink: 0,
                    opacity: isAtStart ? 0.35 : 1,
                    cursor: isAtStart ? "not-allowed" : "pointer",
                  }}
                  aria-label="Previous team members"
                >
                  <IconChevronLeft size={20} />
                </ActionIcon>
              )}

              <Box style={{ width: viewportWidth, overflow: "hidden", padding: "6px 4px" }}>
                <motion.div
                  animate={{ x: -(startIndex * (CIRCLE_SIZE + ITEM_GAP)) }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  style={{ display: "flex", gap: ITEM_GAP, flexWrap: "nowrap" }}
                >
                  {teamMembers.map((member) => (
                    <Box key={member.id} style={{ textAlign: "center", flexShrink: 0, width: CIRCLE_SIZE }}>
                      <Box
                        style={{
                          width: CIRCLE_SIZE,
                          height: CIRCLE_SIZE,
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: `3px solid ${isDark ? theme.colors.dark[5] : "#fff"}`,
                          outline: `1px solid ${isDark ? theme.colors.dark[4] : "#E0E0E0"}`,
                        }}
                      >
                        {member.image && !brokenImages[member.id] ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            onError={() => handleImageError(member.id)}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top",
                              display: "block",
                            }}
                          />
                        ) : (
                          <Box
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: isDark
                                ? theme.colors.dark[5]
                                : "#D9D9D9",
                            }}
                          >
                            <IconUserFilled
                              size={CIRCLE_SIZE * 0.55}
                              color={isDark ? theme.colors.dark[2] : "#ffffff"}
                            />
                          </Box>
                        )}
                      </Box>
                      <Text fw={700} size="sm" mt={10} c={heading}>
                        {member.name}
                      </Text>
                      <Text size="xs" c={body}>
                        {member.role}
                      </Text>
                    </Box>
                  ))}
                </motion.div>
              </Box>

              {showArrows && (
                <ActionIcon
                  variant="light"
                  radius="xl"
                  size={40}
                  onClick={handleNext}
                  disabled={isAtEnd}
                  style={{
                    color: accent,
                    background: isDark
                      ? "rgba(0,212,200,0.12)"
                      : "rgba(8,145,178,0.10)",
                    flexShrink: 0,
                    opacity: isAtEnd ? 0.35 : 1,
                    cursor: isAtEnd ? "not-allowed" : "pointer",
                  }}
                  aria-label="Next team members"
                >
                  <IconChevronRight size={20} />
                </ActionIcon>
              )}
            </Group>
          </Grid.Col>

          {/* RIGHT - Content (shifted more to the right) */}
          <Grid.Col span={{ base: 12, md: 7 }} pl={{ base: 0, md: 70 }}>
            <Stack gap={22}>

              <Text c={body} size="md" lh={1.9}>
                Nexflare Dynamics Private Limited, is a technology-driven company dedicated to
                helping businesses accelerate growth through innovative software
                development, result-oriented{" "} 
                <Text component="span" fw={700}>
                  Performance Marketing
                </Text>
                , and scalable digital
                solutions. We combine creativity, technology, and strategic thinking to
                build products and marketing campaigns that deliver measurable business
                outcomes.
              </Text>

              <Text c={body} size="md" lh={1.9}>
                At Nexflare Dynamics Private Limited, we believe in one simple philosophy:{" "}
                <br />
                <Text component="span" fw={700} fs="italic" c={heading}>
                  "We Build Software. We Grow Brands."
                </Text>
              </Text>

              <Text c={body} size="md" lh={1.9}>
                We proudly serve businesses across India, London, and UAE

                with scalable technology and strategic marketing solutions.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;