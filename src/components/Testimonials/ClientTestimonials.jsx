
// import {
//   Avatar,
//   Badge,
//   Box,
//   Container,
//   Group,
//   Paper,
//   Rating,
//   Stack,
//   Text,
//   ThemeIcon,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";
// import { motion } from "framer-motion";
// import { IconQuoteFilled, IconStarFilled } from "@tabler/icons-react";
// const testimonials = [
//   {
//     id: 1,
//     name: "Azaj Shaikh",
//     position: "Owner",
//     company: "Perfect Security Service",
//     rating: 5,
//     review:
//       "NexHRMS has completely simplified how we manage our workforce. Attendance tracking, payroll and employee records are now just a few clicks away — saving us hours every single week.",
//   },
//   {
//     id: 2,
//     name: "Umair",
//     position: "Owner",
//     company: "FuGenEd",
//     rating: 4,
//     review:
//       "Before NexHRMS, managing staff data was a mess of spreadsheets and paperwork. Nexflare Dynamics built us a system that's intuitive, fast and genuinely easy for our whole team to use.",
//   },
//   {
//     id: 3,
//     name: "Shanti Bhushan",
//     position: "Manager Director",
//     company: "Maceo Pvt Ltd",
//     rating: 5,
//     review:
//       "The onboarding, leave management and reporting features in NexHRMS have brought real structure to our HR processes. Support from the Nexflare team throughout was quick and reliable.",
//   },
//   {
//     id: 4,
//     name: "Ahesas Naik",
//     position: "Founder",
//     company: "P&G Solar",
//     rating: 5,
//     review:
//       "Nexflare Dynamics built us a website that truly represents our brand — fast, clean and easy to navigate. Customers now find it much easier to learn about our solar solutions and get in touch.",
//   },
//   {
//     id: 5,
//     name: "Rahul Salve",
//     position: "CEO & Founder",
//     company: "Janakalyan Multipurpose",
//     rating: 5,
//     review:
//       "Nexflare Dynamics ran our performance marketing campaigns with real focus on ROI, not just impressions. Our cost per lead dropped significantly while conversions kept climbing month after month.",
//   },
//   {
//     id: 6,
//     name: "Akshay More",
//     position: "Owner",
//     company: "Urja Solar",
//     rating: 5,
//     review:
//       "Their SEO and social media strategy brought us genuine, high-quality leads instead of just vanity numbers. We've seen a real increase in inquiries from our target audience.",
//   },
//   {
//     id: 7,
//     name: "Yash Gorde Patil",
//     position: "CEO",
//     company: "Oscillation Energy LLP",
//     rating: 4,
//     review:
//       "The digital ad campaigns Nexflare ran for us were well targeted and cost-effective. Our brand visibility in the energy sector has noticeably improved over the past few months.",
//   },
//   {
//     id: 8,
//     name: "Pranav Kaningdhwaj",
//     position: "Founder",
//     company: "Grover Academy",
//     rating: 4,
//     review:
//       "Nexflare handled our social media and admissions marketing beautifully. Parent engagement online has gone up, and our academy's brand feels far more professional now.",
//   },
// ];
// // Card ko duplicate karke seamless loop banate hain
// const loopTestimonials = [...testimonials, ...testimonials];
// const ClientTestimonials = () => {
//   const isDark = useComputedColorScheme("light") === "dark";
//   return (
//     <Box
//       py={{ base: 90, md: 60 }}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         background: isDark
//           ? "linear-gradient(180deg,#050816,#081120,#0F172A)"
//           : "linear-gradient(180deg,#ffffff,#F8FAFC,#EEF5FF)",
//       }}
//     >
//       {/* Background Glow */}
//       <Box
//         style={{
//           position: "absolute",
//           top: -200,
//           left: -150,
//           width: 450,
//           height: 450,
//           borderRadius: "50%",
//           background: "rgba(37,99,235,.15)",
//           filter: "blur(140px)",
//         }}
//       />
//       <Box
//         style={{
//           position: "absolute",
//           right: -180,
//           bottom: -180,
//           width: 500,
//           height: 500,
//           borderRadius: "50%",
//           background: "rgba(56,189,248,.14)",
//           filter: "blur(150px)",
//         }}
//       />
//       <Container size="xl" style={{ position: "relative", zIndex: 5 }}>
//         <Stack align="center" mb={70}>
//           <Badge
//             radius="xl"
//             size="lg"
//             variant="gradient"
//             gradient={{ from: "blue", to: "cyan" }}
//           >
//             CLIENT TESTIMONIALS
//           </Badge>
//           <Title
//             ta="center"
//             style={{
//               fontWeight: 900,
//               fontSize: "clamp(2rem,5vw,3.8rem)",
//               color: isDark ? "#ffffff" : "#111827",
//             }}
//           >
//             What Our Clients
//             <br />
//             <span
//               style={{
//                 background: "linear-gradient(90deg,#2563EB,#38BDF8)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Say About Us
//             </span>
//           </Title>
//           <Text ta="center" maw={760} size="lg" c="dimmed" style={{ lineHeight: 1.9 }}>
//             We believe long-term relationships are built on trust, transparency
//             and delivering exceptional software solutions that help businesses
//             grow faster.
//           </Text>
//         </Stack>
//       </Container>
//       {/* Marquee wrapper - full width, edge fade */}
//       <Box
//         className="marquee-wrapper"
//         style={{
//           position: "relative",
//           width: "100%",
//           overflow: "hidden",
//           maskImage:
//             "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
//           WebkitMaskImage:
//             "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
//         }}
//       >
//         <Box className="marquee-track">
//           {loopTestimonials.map((item, index) => (
//             <Paper
//               key={`${item.id}-${index}`}
//               radius="xl"
//               p={35}
//               className="testimonial-card"
//               style={{
//                 position: "relative",
//                 overflow: "hidden",
//                 flex: "0 0 auto",
//                 width: 380,
//                 background: isDark ? "rgba(255,255,255,.05)" : "#ffffff",
//                 border: isDark
//                   ? "1px solid rgba(255,255,255,.08)"
//                   : "1px solid rgba(37,99,235,.08)",
//                 backdropFilter: "blur(18px)",
//                 boxShadow: isDark
//                   ? "0 20px 45px rgba(0,0,0,.28)"
//                   : "0 20px 45px rgba(37,99,235,.08)",
//               }}
//             >
//               <Box
//                 className="testimonial-glow"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   opacity: 0,
//                   transition: ".35s",
//                   background:
//                     "radial-gradient(circle at top right, rgba(37,99,235,.25), transparent 70%)",
//                 }}
//               />
//               <Group justify="space-between" mb={25}>
//                 <ThemeIcon radius="xl" size={52} variant="light" color="blue">
//                   <IconQuoteFilled size={28} />
//                 </ThemeIcon>
//                 {/* <Group gap={3}>
//                   {Array.from({ length:  }).map((_, i) => (
//                     <IconStarFilled key={i} size={18} color="#FFC107" fill="#FFC107" />
//                   ))}
//                 </Group> */}
//               </Group>
//               <Text
//                 c="dimmed"
//                 style={{ lineHeight: 1.9, minHeight: 180, fontStyle: "italic" }}
//               >
//                 "{item.review}"
//               </Text>
//               <Rating value={item.rating} readOnly mt={18} color="yellow" />
//               <Group mt={30} wrap="nowrap">
//                 <Avatar src={item.image} size={68} radius="xl" />
//                 <Stack gap={2}>
//                   <Title order={4} style={{ color: isDark ? "#fff" : "#111827" }}>
//                     {item.name}
//                   </Title>
//                   <Text size="sm" c="dimmed">
//                     {item.position}
//                   </Text>
//                   <Badge radius="xl" variant="light" color="blue" w="fit-content">
//                     {item.company}
//                   </Badge>
//                 </Stack>
//               </Group>
//             </Paper>
//           ))}
//         </Box>
//       </Box>
//       {/* Internal Styles */}
//       <style>{`
//         .marquee-track{
//           display:flex;
//           gap:28px;
//           width:max-content;
//           animation: marquee-scroll 35s linear infinite;
//         }
//         .marquee-wrapper:hover .marquee-track{
//           animation-play-state: paused;
//         }
//         @keyframes marquee-scroll{
//           from{ transform: translateX(0); }
//           to{ transform: translateX(-50%); }
//         }
//         .testimonial-card{
//           transition:.35s ease;
//         }
//         .testimonial-card:hover{
//           transform:translateY(-10px);
//           border-color:#2563EB !important;
//         }
//         .testimonial-card:hover .testimonial-glow{
//           opacity:1 !important;
//         }
//         @media(max-width:992px){
//           .testimonial-card{ padding:28px !important; width:320px; }
//         }
//         @media(max-width:768px){
//           .testimonial-card{ padding:22px !important; width:280px; }
//         }
//         @media(max-width:576px){
//           .testimonial-card{ padding:18px !important; width:250px; }
//         }
//       `}</style>
//     </Box>
//   );
// };
// export default ClientTestimonials;



import {
  Avatar,
  Badge,
  Box,
  Container,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconQuoteFilled, IconStarFilled } from "@tabler/icons-react";
const testimonials = [
  {
    id: 1,
    name: "Azaj Shaikh",
    position: "Owner",
    company: "Perfect Industrial Security Agency",
    image: "TestimonialsLogo/perfect.png",
    rating: 5,
    review:
      "NexHRMS has completely simplified how we manage our workforce. Attendance tracking, payroll and employee records are now very easy — saving us hours every single week.",
  },
  {
    id: 2,
    name: "Umair",
    position: "Owner",
    company: "FuGenEd",
    image: "TestimonialsLogo/fugened.png",
    rating: 4,
    review:
      "Before NexHRMS, managing staff data was a mess of spreadsheets and paperwork. Nexflare Dynamics Private Limited built us a system that's very fast and genuinely easy for our whole team to use.",
  },
  {
    id: 3,
    name: "Shanti Bhushan",
    position: "Managing  Director",
    company: "Maceo Private Limited",
    rating: 5,
    review:
      "The onboarding, leave management and reporting features in NexHRMS have brought real structure to our HR processes. Support from the Nexflare Dynamics Private Limited team throughout was quick and reliable.",
  },
  {
    id: 4,
    name: "Ahesas Naik",
    position: "Founder",
    company: "P&G Solar",
    image: "TestimonialsLogo/p&g.png",
    rating: 5,
    review:
      "Nexflare Dynamics Private Limited transformed our ideas into a professional and engaging website. Their attention to detail, quick responses, and dedication to quality made the entire experience seamless. We're extremely satisfied with the final result.",
  },
  {
    id: 5,
    name: "Rahul Salve",
    position: "CEO & Founder",
    company: "Janakalyan Multipurpose Society",
    image: "TestimonialsLogo/jankalyan.png",
    rating: 5,
    review:
      "Nexflare Dynamics Private Limited managed our performance marketing campaigns with exceptional professionalism and attention to detail. Their transparent communication, and consistent support made the entire experience smooth and highly effective.",
  },
  {
    id: 6,
    name: "Akshay More",
    position: "Owner",
    company: "Urja Solar",
    image: "TestimonialsLogo/akshayurja.png",
    rating: 5,
    review:
      "From planning to execution, the Nexflare Dynamics Private Limited team was supportive, knowledgeable, and easy to work with. Their digital marketing efforts have significantly strengthened our online presence and helped us reach more potential customers.",
  },
  {
    id: 7,
    name: "Yash Gorde Patil",
    position: "CEO",
    company: "Oscillation Energy LLP",
    image: "TestimonialsLogo/oscillation.png",
    rating: 5,
    review:
      "We appreciate the professionalism and commitment shown by Nexflare Dynamics Private Limited throughout our collaboration. Their creative solutions and focus on delivering quality have made them a trusted technology partner for our business.",
  },
  {
    id: 8,
    name: "Pranav Kaningdhwaj",
    position: "Founder",
    company: "The Groovers Academy",
    image: "TestimonialsLogo/groovers.png",
    rating: 5,
    review:
      "It was a pleasure working with Nexflare Dynamics Private Limited. They understood our academy's identity and delivered a beautiful digital presence that showcases our classes, events, and achievements. Their creativity and dedication exceeded our expectations.",
    // "The team at Nexflare Dynamics was professional, creative, and easy to work with. They helped us build a strong digital identity for our dance academy, and we're extremely happy with the quality of their work"
  },
];
// Card ko duplicate karke seamless loop banate hain
const loopTestimonials = [...testimonials, ...testimonials];
const ClientTestimonials = () => {
  const isDark = useComputedColorScheme("light") === "dark";
  return (
    <Box
      py={{ base: 90, md: 60 }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(180deg,#050816,#081120,#0F172A)"
          : "linear-gradient(180deg,#ffffff,#F8FAFC,#EEF5FF)",
      }}
    >
      {/* Background Glow */}
      <Box
        style={{
          position: "absolute",
          top: -200,
          left: -150,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(37,99,235,.15)",
          filter: "blur(140px)",
        }}
      />
      <Box
        style={{
          position: "absolute",
          right: -180,
          bottom: -180,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(56,189,248,.14)",
          filter: "blur(150px)",
        }}
      />
      <Container size="xl" style={{ position: "relative", zIndex: 5 }}>
        <Stack align="center" mb={70}>
          <Badge
            radius="xl"
            size="lg"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            tt="none"
          >
            Client Testimonials
          </Badge>
          <Title
            ta="center"
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem,5vw,3.8rem)",
              color: isDark ? "#ffffff" : "#111827",
            }}
          >
            What Our Clients
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say About Us
            </span>
          </Title>
          <Text ta="center" maw={760} size="lg" c="dimmed" style={{ lineHeight: 1.9 }}>
            We believe long-term relationships are built on trust, transparency
            and delivering exceptional software solutions that help businesses
            grow faster.
          </Text>
        </Stack>
      </Container>
      {/* Marquee wrapper - full width, edge fade */}
      <Box
        className="marquee-wrapper"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <Box className="marquee-track">
          {loopTestimonials.map((item, index) => (
            <Paper
              key={`${item.id}-${index}`}
              radius="xl"
              p={35}
              className="testimonial-card"
              style={{
                position: "relative",
                overflow: "hidden",
                flex: "0 0 auto",
                width: 380,
                background: isDark ? "rgba(255,255,255,.05)" : "#ffffff",
                border: isDark
                  ? "1px solid rgba(255,255,255,.08)"
                  : "1px solid rgba(37,99,235,.08)",
                backdropFilter: "blur(18px)",
                boxShadow: isDark
                  ? "0 20px 45px rgba(0,0,0,.28)"
                  : "0 20px 45px rgba(37,99,235,.08)",
              }}
            >
              <Box
                className="testimonial-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0,
                  transition: ".35s",
                  background:
                    "radial-gradient(circle at top right, rgba(37,99,235,.25), transparent 70%)",
                }}
              />
              <Group justify="space-between" mb={25}>
                <ThemeIcon radius="xl" size={52} variant="light" color="blue">
                  <IconQuoteFilled size={28} />
                </ThemeIcon>
                {/* <Group gap={3}>
                  {Array.from({ length:  }).map((_, i) => (
                    <IconStarFilled key={i} size={18} color="#FFC107" fill="#FFC107" />
                  ))}
                </Group> */}
              </Group>
              <Text
                c="dimmed"
                style={{ lineHeight: 1.9, minHeight: 180, fontStyle: "italic" }}
              >
                "{item.review}"
              </Text>
              <Rating value={item.rating} readOnly mt={18} color="yellow" />
              <Group mt={30} wrap="nowrap">
                <Avatar src={item.image} size={68} radius="xl" />
                <Stack gap={2}>
                  <Title order={4} style={{ color: isDark ? "#fff" : "#111827" }}>
                    {item.name}
                  </Title>
                  <Text size="sm" c="dimmed">
                    {item.position}
                  </Text>
                  <Badge
                    radius="xl"
                    variant="light"
                    color="blue"
                    w="fit-content"
                    tt="none"
                    size="lg"
                    style={{ fontSize: 14, padding: "10px 16px" }}
                  >
                    {item.company}
                  </Badge>
                </Stack>
              </Group>
            </Paper>
          ))}
        </Box>
      </Box>
      {/* Internal Styles */}
      <style>{`
        .marquee-track{
          display:flex;
          gap:28px;
          width:max-content;
          animation: marquee-scroll 35s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track{
          animation-play-state: paused;
        }
        @keyframes marquee-scroll{
          from{ transform: translateX(0); }
          to{ transform: translateX(-50%); }
        }
        .testimonial-card{
          transition:.35s ease;
        }
        .testimonial-card:hover{
          transform:translateY(-10px);
          border-color:#2563EB !important;
        }
        .testimonial-card:hover .testimonial-glow{
          opacity:1 !important;
        }
        @media(max-width:992px){
          .testimonial-card{ padding:28px !important; width:320px; }
        }
        @media(max-width:768px){
          .testimonial-card{ padding:22px !important; width:280px; }
        }
        @media(max-width:576px){
          .testimonial-card{ padding:18px !important; width:250px; }
        }
      `}</style>
    </Box>
  );
};
export default ClientTestimonials;