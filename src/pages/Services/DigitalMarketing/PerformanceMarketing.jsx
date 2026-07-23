import { Box, useComputedColorScheme } from "@mantine/core";
import PMHero from "../../../components/PerformanceMarketingMain/PMHero";
import PMServiceSection from "../../../components/PerformanceMarketingMain/PMServiceSection";
import PMProcessSection from "../../../components/PerformanceMarketingMain/PMProcessSection";
import PMWhyChooseUs from "../../../components/PerformanceMarketingMain/PMWhyChooseUs";
import PMStatsSection from "../../../components/PerformanceMarketingMain/PMStatsSection";
import PMTools from "../../../components/PerformanceMarketingMain/PMTools";
import PMClientsSuccess from "../../../components/PerformanceMarketingMain/PMClientsSuccess";
import PMFaq from "../../../components/PerformanceMarketingMain/PMFaq";
import PMCTASection from "../../../components/PerformanceMarketingMain/PMCTASection";

const PerformanceMarketing = () => {
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
      <PMHero />
      <PMServiceSection />
      <PMProcessSection />
      <PMWhyChooseUs />
      <PMStatsSection />
      <PMTools />
      <PMClientsSuccess />
      <PMFaq />
      <PMCTASection />
    </Box>
  );
};

export default PerformanceMarketing;