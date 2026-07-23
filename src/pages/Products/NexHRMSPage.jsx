import { Box, useComputedColorScheme } from "@mantine/core";
import PageTitle from "../../components/PageTitle";

import HRMSHero from "../../components/NexHRMSPageMain/HRMSHero";
import HRMSServiceSection from "../../components/NexHRMSPageMain/HRMSServiceSection";
import HRMSStatsSection from "../../components/NexHRMSPageMain/HRMSStatsSection";
import HRMSResults from "../../components/NexHRMSPageMain/HRMSResults";
import HRMSTools from "../../components/NexHRMSPageMain/HRMSTools";
import HRMSClientSection from "../../components/NexHRMSPageMain/HRMSClientSection";
import HRMSFaq from "../../components/NexHRMSPageMain/HRMSFaq";
import HRMSCTA from "../../components/NexHRMSPageMain/HRMSCTA";

const NexHRMSPage = () => {
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <>
      <PageTitle title="NexHRMS" />
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
        <HRMSHero />
        <HRMSServiceSection />
        <HRMSStatsSection />
        <HRMSResults />
        <HRMSTools />
        <HRMSClientSection />
        <HRMSFaq />
        <HRMSCTA />
      </Box>
    </>
  );
};

export default NexHRMSPage;
