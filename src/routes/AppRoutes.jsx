// import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// // Main Pages
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Products from "../pages/Products/Products";
// import Contact from "../pages/Contact/Contact";
// import Careers from "../pages/Careers/Careers";
// // Services
// import Services from "../pages/Services/Services/Services";

// import Blogs from "../pages/Blog/Blog";
// import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
// import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
// // ============================
// // Custom Software Development
// // ============================
// import CustomSoftwareDevelopment from "../pages/Services/Services/CustomSoftwareDevelopment";
// import CustomSoftware from "../pages/Services/CustomSoftwareDevelopment/CustomSoftware";
// import ApiDevelopment from "../pages/Services/CustomSoftwareDevelopment/ApiDevelopment";
// import SaaSDevelopment from "../pages/Services/CustomSoftwareDevelopment/SaaSDevelopment";
// import SoftwareTesting from "../pages/Services/CustomSoftwareDevelopment/SoftwareTesting";
// import MaintenanceSupport from "../pages/Services/CustomSoftwareDevelopment/MaintenanceSupport";
// import CRMServices from "../pages/Services/CustomSoftwareDevelopment/CRMServices";
// // ============================
// // Digital Marketing
// // ============================
// import SEO from "../pages/Services/DigitalMarketing/SEO";
// import PPCAdvertising from "../pages/Services/DigitalMarketing/PPCAdvertising";
// import SocialMediaMarketing from "../pages/Services/DigitalMarketing/SocialMediaMarketing";
// import EmailMarketing from "../pages/Services/DigitalMarketing/EmailMarketing";
// import AnalyticsReporting from "../pages/Services/DigitalMarketing/AnalyticsReporting";
// // ============================
// // Web Dev & Design
// // ============================
// import WebsiteDesign from "../pages/Services/WebsiteDevelopment/WebsiteDesign";
// import WebsiteDevelopment from "../pages/Services/WebsiteDevelopment/WebsiteDevelopment";
// import AppDevelopment from "../pages/Services/WebsiteDevelopment/AppDevelopment";
// import EcommerceDevelopment from "../pages/Services/WebsiteDevelopment/EcommerceDevelopment";
// import LandingPage from "../pages/Services/WebsiteDevelopment/LandingPage";
// import TermsConditions from "../pages/TermsConditions/TermsConditions";
// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         {/* Home */}
//         {/* <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} /> */}

//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         {/* <Route path="/careers" element={<Careers />} /> */}
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/refund-policy" element={<RefundPolicy />} />
//         <Route path="/terms-conditions" element={<TermsConditions />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* ====================================================== */}
//         {/* Custom Software Development */}
//         {/* ====================================================== */}
//         <Route
//           path="/services/custom-software-development"
//           element={<CustomSoftwareDevelopment />}
//         />
//         <Route
//           path="/services/custom-software-development/custom-software"
//           element={<CustomSoftware />}
//         />
//         <Route
//           path="/services/custom-software-development/api-development"
//           element={<ApiDevelopment />}
//         />
//         <Route
//           path="/services/custom-software-development/saas-development"
//           element={<SaaSDevelopment />}
//         />
//         <Route
//           path="/services/custom-software-development/software-testing"
//           element={<SoftwareTesting />}
//         />
//         <Route
//           path="/services/custom-software-development/maintenance-support"
//           element={<MaintenanceSupport />}
//         />
//         <Route
//           path="/services/custom-software-development/crm-service"
//           element={<CRMServices />}
//         />
//         {/* ====================================================== */}
//         {/* Digital Marketing */}
//         {/* ====================================================== */}
//         <Route path="/services/digital-marketing/seo" element={<SEO />} />
//         <Route
//           path="/services/digital-marketing/ppc-advertising"
//           element={<PPCAdvertising />}
//         />
//         <Route
//           path="/services/digital-marketing/social-media-marketing"
//           element={<SocialMediaMarketing />}
//         />
//         <Route
//           path="/services/digital-marketing/email-marketing"
//           element={<EmailMarketing />}
//         />
//         <Route
//           path="/services/digital-marketing/analytics-reporting"
//           element={<AnalyticsReporting />}
//         />
//         {/* ====================================================== */}
//         {/* Web Dev & Design */}
//         {/* ====================================================== */}
//         <Route
//           path="/services/website-development-design/web-design"
//           element={<WebsiteDesign />}
//         />
//         <Route
//           path="/services/website-development-design/web-development"
//           element={<WebsiteDevelopment />}
//         />
//         <Route
//           path="/services/website-development-design/app-development"
//           element={<AppDevelopment />}
//         />
//         <Route
//           path="/services/website-development-design/ecommerce"
//           element={<EcommerceDevelopment />}
//         />
//         <Route
//           path="/services/website-development-design/landing-page"
//           element={<LandingPage />}
//         />
//       </Route>
//     </Routes>
//   );
// };
// export default AppRoutes;



import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Main Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import NexHRMSPage from "../pages/Products/NexHRMSPage";
import Contact from "../pages/Contact/Contact";
import Careers from "../pages/Careers/Careers";

// Services
import Services from "../pages/Services/Services/Services";

import Blogs from "../pages/Blog/Blog";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";

// ============================
// Blog Details
// ============================
import Blog1 from "../pages/BlogDetails/Blog1";
import Blog2 from "../pages/BlogDetails/Blog2";
import Blog3 from "../pages/BlogDetails/Blog3";
import Blog4 from "../pages/BlogDetails/Blog4";
import Blog5 from "../pages/BlogDetails/Blog5";
import Blog6 from "../pages/BlogDetails/Blog6";
import Blog7 from "../pages/BlogDetails/Blog7";
import Blog8 from "../pages/BlogDetails/Blog8";

// ============================
// Custom Software Development
// ============================
import CustomSoftwareDevelopment from "../pages/Services/Services/CustomSoftwareDevelopment";
import CustomSoftware from "../pages/Services/CustomSoftwareDevelopment/CustomSoftware";
import ApiDevelopment from "../pages/Services/CustomSoftwareDevelopment/ApiDevelopment";
import SaaSDevelopment from "../pages/Services/CustomSoftwareDevelopment/SaaSDevelopment";
import SoftwareTesting from "../pages/Services/CustomSoftwareDevelopment/SoftwareTesting";
import MaintenanceSupport from "../pages/Services/CustomSoftwareDevelopment/MaintenanceSupport";
import CRMServices from "../pages/Services/CustomSoftwareDevelopment/CRMServices";

// ============================
// Digital Marketing
// ============================
import SEO from "../pages/Services/DigitalMarketing/SEO";
import PPCAdvertising from "../pages/Services/DigitalMarketing/PPCAdvertising";
import SocialMediaMarketing from "../pages/Services/DigitalMarketing/SocialMediaMarketing";
import EmailMarketing from "../pages/Services/DigitalMarketing/EmailMarketing";
import AnalyticsReporting from "../pages/Services/DigitalMarketing/AnalyticsReporting";
import PerformanceMarketing from "../pages/Services/DigitalMarketing/PerformanceMarketing";
import SocialMediaManagement from "../pages/Services/DigitalMarketing/SocialMediaManagement";
// ============================
// Web Dev & Design
// ============================
import WebsiteDesign from "../pages/Services/WebsiteDevelopment/WebsiteDesign";
import WebsiteDevelopment from "../pages/Services/WebsiteDevelopment/WebsiteDevelopment";
import AppDevelopment from "../pages/Services/WebsiteDevelopment/AppDevelopment";
import EcommerceDevelopment from "../pages/Services/WebsiteDevelopment/EcommerceDevelopment";
import LandingPage from "../pages/Services/WebsiteDevelopment/LandingPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/hrms" element={<NexHRMSPage />} />
        {/* <Route path="/careers" element={<Careers />} /> */}

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/* ========================= */}
        {/* Blogs */}
        {/* ========================= */}

        <Route path="/blogs" element={<Blogs />} />

      <Route path="/blogs/ctc-vs-gross-salary" element={<Blog1 />} />
        <Route path="/blogs/hr-software-benefits-2026" element={<Blog2 />} />
        <Route path="/blogs/best-hrms-software-india-2026" element={<Blog3 />} />
        <Route path="/blogs/erp-benefits-small-business" element={<Blog4 />} />
        <Route path="/blogs/nexflare-dynamics-software-company" element={<Blog5 />} />
        <Route path="/blogs/full-stack-programming-languages-2026" element={<Blog6 />} />
        <Route path="/blogs/digital-trust-customer-loyalty" element={<Blog7 />} />
        <Route path="/blogs/secure-software-development" element={<Blog8 />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ====================================================== */}
        {/* Custom Software Development */}
        {/* ====================================================== */}

        <Route
          path="/services/custom-software-development"
          element={<CustomSoftwareDevelopment />}
        />

        <Route
          path="/services/custom-software-development/custom-software"
          element={<CustomSoftware />}
        />

        <Route
          path="/services/custom-software-development/api-development"
          element={<ApiDevelopment />}
        />

        <Route
          path="/services/custom-software-development/saas-development"
          element={<SaaSDevelopment />}
        />

        <Route
          path="/services/custom-software-development/software-testing"
          element={<SoftwareTesting />}
        />

        <Route
          path="/services/custom-software-development/maintenance-support"
          element={<MaintenanceSupport />}
        />

        <Route
          path="/services/custom-software-development/crm-service"
          element={<CRMServices />}
        />

        {/* ====================================================== */}
        {/* Digital Marketing */}
        {/* ====================================================== */}

        <Route
          path="/services/digital-marketing/seo"
          element={<SEO />}
        />

        <Route
          path="/services/digital-marketing/ppc-advertising"
          element={<PPCAdvertising />}
        />

        <Route
          path="/services/digital-marketing/social-media-marketing"
          element={<SocialMediaMarketing />}
        />

        <Route
          path="/services/digital-marketing/email-marketing"
          element={<EmailMarketing />}
        />

        <Route
          path="/services/digital-marketing/analytics-reporting"
          element={<AnalyticsReporting />}
        />

         <Route
          path="/services/digital-marketing/Performance-Marketing"
          element={<PerformanceMarketing />}
        />

         <Route
          path="/services/digital-marketing/social-media-management"
          element={<SocialMediaManagement />}
        />

        {/* ====================================================== */}
        {/* Website Development */}
        {/* ====================================================== */}

        <Route
          path="/services/website-development-design/web-design"
          element={<WebsiteDesign />}
        />

        <Route
          path="/services/website-development-design/web-development"
          element={<WebsiteDevelopment />}
        />

        <Route
          path="/services/website-development-design/app-development"
          element={<AppDevelopment />}
        />

        <Route
          path="/services/website-development-design/ecommerce"
          element={<EcommerceDevelopment />}
        />

        <Route
          path="/services/website-development-design/landing-page"
          element={<LandingPage />}
        />

      </Route>
    </Routes>
  );
};

export default AppRoutes;