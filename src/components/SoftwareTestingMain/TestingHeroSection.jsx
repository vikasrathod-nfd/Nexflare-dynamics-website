// import {
//   Badge,
//   Box,
//   Button,
//   Container,
//   Group,
//   Stack,
//   Text,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";
// import { motion } from "framer-motion";
// const MotionBox = motion.create(Box);

// const TestingHeroSection = () => {
//   const computedColorScheme = useComputedColorScheme("light");
//   const isDark = computedColorScheme === "dark";

//   const handleStartQA = () => {
//     const contactForm = document.getElementById("contact-form");

//     if (contactForm) {
//       contactForm.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     } else {
//       window.location.href = "/contact"; // Change this if your contact page route is different
//     }
//   };

//   return (
//     <Box
//       component="section"
//       py={140}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         minHeight: "88vh",
//         alignItems: "center",
//       }}
//     >
//       {/* Background image - kept bright/visible, not washed out */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "brightness(1)",
//         }}
//       />
//       {/* Text-side overlay only - fades quickly so most of the image stays visible */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: isDark
//             ? `
//               linear-gradient(90deg, rgba(4,10,18,0.92) 0%, rgba(4,10,18,0.78) 32%, rgba(4,10,18,0.35) 55%, rgba(4,10,18,0) 72%),
//               linear-gradient(0deg, rgba(4,10,18,0.55) 0%, rgba(4,10,18,0) 30%)
//             `
//             : `
//               linear-gradient(90deg, rgba(6,12,24,0.85) 0%, rgba(6,12,24,0.68) 32%, rgba(6,12,24,0.28) 55%, rgba(6,12,24,0) 72%),
//               linear-gradient(0deg, rgba(6,12,24,0.45) 0%, rgba(6,12,24,0) 30%)
//             `,
//         }}
//       />
//       <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
//         <MotionBox
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           maw={640}
//         >
//           <Stack gap={30}>
//             <Badge
//               radius="xl"
//               size="xl"
//               color="teal"
//               variant="filled"
//               px={22}
//               py={14}
//               style={{
//                 width: "fit-content",
//                 letterSpacing: 1,
//                 fontSize: 13,
//                 fontWeight: 700,
//               }}
//             >
//               ● Software Development
//             </Badge>
//             <Title
//               style={{
//                 fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
//                 lineHeight: 1.05,
//                 fontWeight: 900,
//                 color: "#ffffff",
//                 textShadow: "0 2px 20px rgba(0,0,0,0.5)",
//               }}
//             >
//               Software Testing
//               <br />
//               <Text
//                 component="span"
//                 inherit
//                 variant="gradient"
//                 gradient={{ from: "#22d3ee", to: "#14b8a6" }}
//               >
//                 &amp; QA
//               </Text>
//             </Title>
//             <Text
//               lh={1.8}
//               style={{
//                 fontSize: 18,
//                 color: "rgba(255,255,255,.92)",
//                 textShadow: "0 1px 12px rgba(0,0,0,0.55)",
//               }}
//             >
//               Quality is the foundation of every successful application. Our
//               Software Testing & QA services combine strategic test
//               planning, manual and automated testing, performance
//               validation, security assessments, and continuous quality
//               assurance to deliver stable, scalable, and high-performing
//               software with every release.
//             </Text>
//             <Group mt={10}>
//               <Button
//                 size="lg"
//                 radius="xl"
//                 color="teal"
//                 h={54}
//                 px={34}
//                 onClick={handleStartQA}
//               >
//                 Start Your Project
//               </Button>
//             </Group>
//           </Stack>
//         </MotionBox>
//       </Container>
//     </Box>
//   );
// };

// export default TestingHeroSection;



import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
const MotionBox = motion.create(Box);

const TestingHeroSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const handleStartQA = () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };

  return (
    <Box
      component="section"
      py={200}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        alignItems: "center",
      }}
    >
      {/* Background image - kept bright/visible, not washed out */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.openai.com/static-rsc-4/BdDe_Px9tAdpALolxVLqTgsyqDhx9Lenb38SZk3mdV6XTJ_G6D9vO10aM6gjlBPz3JNjplPn2sPEOZj428uXypZnkVPyoP5-0KnACMvCLCeH8haMUcdFY0SatV4YibcETpWxhsv9y6SGzfLsg_qkE104f9QFcPsbcYDnnWMG66TUm8qZALBen22l0ZEnynYq?purpose=fullsize')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1)",
        }}
      />
      {/* Text-side overlay only - fades quickly so most of the image stays visible */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `
              linear-gradient(90deg, rgba(4,10,18,0.92) 0%, rgba(4,10,18,0.78) 32%, rgba(4,10,18,0.35) 55%, rgba(4,10,18,0) 72%),
              linear-gradient(0deg, rgba(4,10,18,0.55) 0%, rgba(4,10,18,0) 30%)
            `
            : `
              linear-gradient(90deg, rgba(6,12,24,0.85) 0%, rgba(6,12,24,0.68) 32%, rgba(6,12,24,0.28) 55%, rgba(6,12,24,0) 72%),
              linear-gradient(0deg, rgba(6,12,24,0.45) 0%, rgba(6,12,24,0) 30%)
            `,
        }}
      />
      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          maw={640}
        >
          <Stack gap={30}>
            <Badge
              radius="xl"
              size="xl"
              color="teal"
              variant="filled"
              px={22}
              py={14}
              style={{
                width: "fit-content",
                letterSpacing: 1,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ● Software Development
            </Badge>
            <Title
              style={{
                fontSize: "clamp(1.7rem, 6vw, 3.6rem)",
                lineHeight: 1.1,
                fontWeight: 900,
                color: "#ffffff",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Software Testing{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#22d3ee", to: "#14b8a6" }}
              >
                &amp; QA
              </Text>
            </Title>
            <Text
              lh={1.8}
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,.92)",
                textShadow: "0 1px 12px rgba(0,0,0,0.55)",
              }}
            >
              Quality is the foundation of every successful application. Our
              Software Testing & QA services combine strategic test
              planning, manual and automated testing, performance
              validation, security assessments, and continuous quality
              assurance to deliver stable, scalable, and high-performing
              software with every release.
            </Text>
            <Group mt={10}>
              <Button
                size="lg"
                radius="xl"
                color="teal"
                h={54}
                px={34}
                onClick={handleStartQA}
              >
                Start Your Project
              </Button>
            </Group>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default TestingHeroSection;