import { Box, useComputedColorScheme } from "@mantine/core";
import BlogHero from "../../components/Blog5Main/BlogHero";
import BlogServiceSection from "../../components/Blog5Main/BlogServiceSection";
import BlogWhyChooseUs from "../../components/Blog5Main/BlogWhyChooseUs";
import BlogStatsSection from "../../components/Blog5Main/BlogStatsSection";
import BlogClientSection from "../../components/Blog5Main/BlogClientSection";
import BlogFaq from "../../components/Blog5Main/BlogFaq";
import BlogCTA from "../../components/Blog5Main/BlogCTA";

const AnalyticsReporting = () => {
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
       <BlogHero/>
       <BlogServiceSection/>
       <BlogWhyChooseUs/>
       <BlogStatsSection/>
       <BlogClientSection/>
       <BlogFaq/>
       <BlogCTA/>
    </Box>
  );
};
export default AnalyticsReporting;