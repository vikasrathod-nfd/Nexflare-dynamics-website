import { Box, Button, Container, Group, rem, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const SMMCTASection = () => {
  return (
    <Box py={rem(100)}>
      <Container size="md">
        <Box
          p={rem(56)}
          style={{
            borderRadius: rem(24),
            textAlign: "center",
            background: "linear-gradient(90deg, #2563eb, #06b6d4)",
          }}
        >
          <Stack align="center" gap="md">
            <Title order={2} c="white" style={{ fontSize: rem(34) }}>
              Ready for a feed that works as hard as you do?
            </Title>
            <Text c="rgba(255,255,255,0.9)" maw={rem(480)}>
              Get a free audit of your current social presence and a
              custom plan for the platforms that matter most to your brand.
            </Text>
            <Group mt="sm">
              <Button
                size="lg"
                radius="md"
                variant="white"
                color="dark"
                rightSection={<IconArrowRight size={18} />}
              >
                Get Your Free Audit
              </Button>
            </Group>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SMMCTASection;
