import { Box, useComputedColorScheme } from "@mantine/core";
import CloudHeroSection from "../../components/CLoudSolutionsMain/CloudHeroSection";
import CloudProcessSection from "../../components/CLoudSolutionsMain/CloudProcessSection";
import CloudPlatformsSection from "../../components/CloudSolutionsMain/CloudPlatformsSection";
import CloudMaintenanceSection from "../../components/CloudSolutionsMain/CloudMaintenanceSection";
import CLoudCTASection from "../../components/CloudSolutionsMain/CloudCTASection";
const CloudSolutions = () => {
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
      <CloudHeroSection/>
      <CloudProcessSection/>
      <CloudPlatformsSection/>
      <CloudMaintenanceSection/>
      <CLoudCTASection/>
      
    </Box>
  );
};

export default CloudSolutions;