import { Box, useComputedColorScheme } from "@mantine/core";
import AIHeroSection from "../../components/AISolutions/AIHeroSection";
import AIProcessSection from "../../components/AISolutions/AIProcessSection";
import AIPlatformSection from "../../components/AISolutions/AIPlatformSection";
import AIMaintainance from "../../components/AISolutions/AIMaintainance";
import AICTASection from "../../components/AISolutions/AICTASection";
const AISolutions = () => {
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Box
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background:
          computedColorScheme === "dark"
            ? `
              radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 35%),
              radial-gradient(circle at top right, rgba(6,182,212,.15), transparent 35%),
              linear-gradient(180deg,#08111f 0%,#0b1326 45%,#060d18 100%)
            `
            : `
              radial-gradient(circle at top left, rgba(37,99,235,.08), transparent 35%),
              radial-gradient(circle at top right, rgba(6,182,212,.06), transparent 35%),
              linear-gradient(180deg,#ffffff 0%,#f7fbff 45%,#eef7ff 100%)
            `,
      }}
    >
    

      <AIHeroSection/>
      <AIProcessSection/>
      <AIPlatformSection/>
      <AIMaintainance/>
      <AICTASection/>
      
    </Box>
  );
};

export default AISolutions;
