import { Box, useComputedColorScheme } from "@mantine/core";
import MediaManagementHero from "../../../components/SocialMediaManagementMain/MediaManagementHero";
import MediaMangementServiceSection from "../../../components/SocialMediaManagementMain/MediaManagementService";
import MediaMangementProcessSection from "../../../components/SocialMediaManagementMain/MediaManagementProcess";
import MediaMangementWhyChooseUs from "../../../components/SocialMediaManagementMain/MediaManagementWhyChooseUs";
import MediaMangementStatsSection from "../../../components/SocialMediaManagementMain/MediaManagementStatsSection";
import MediaMangementTools from "../../../components/SocialMediaManagementMain/MediaManagementTools";
import MediaMangementClientSuccess from "../../../components/SocialMediaManagementMain/MediaManagementClientSuccess";
import MediaMangementFaq from "../../../components/SocialMediaManagementMain/MediaManagementFaq";
import MediaManagementCTASection from "../../../components/SocialMediaManagementMain/MediaManagementCTASection";


const SocialMediaManagement = () => {
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
      <MediaManagementHero/>
      <MediaMangementServiceSection/>
      <MediaMangementProcessSection/>
      <MediaMangementWhyChooseUs/>
      <MediaMangementStatsSection/>
      <MediaMangementTools/>
      <MediaMangementClientSuccess/>
      <MediaMangementFaq/>
      <MediaManagementCTASection/>
    </Box>
  );
};

export default SocialMediaManagement;
