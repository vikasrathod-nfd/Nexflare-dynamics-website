import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import WhatsAppChatWidget from "../components/WhatsApp/WhatsAppChatWidget";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppChatWidget />
    </>
  );
};

export default MainLayout;