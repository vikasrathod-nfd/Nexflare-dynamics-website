// import { useState } from "react";
// import {
//   Badge,
//   Box,
//   Button,
//   Card,
//   Container,
//   Group,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";

// import { motion } from "framer-motion";

// import {
//   IconArrowRight,
//   IconCalendar,
//   IconClock,
// } from "@tabler/icons-react";

// const MotionCard = motion.create(Card);

// const blogs = [
//   {
//     title: "Top Web Development Trends in 2026",
//     category: "Web Development",
//     date: "12 Jul 2026",
//     read: "5 min read",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
//   },
//   {
//     title: "How AI is Transforming Modern Businesses",
//     category: "Artificial Intelligence",
//     date: "10 Jul 2026",
//     read: "7 min read",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
//   },
//   {
//     title: "Cloud Computing Best Practices",
//     category: "Cloud",
//     date: "08 Jul 2026",
//     read: "6 min read",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
//   },
//   {
//     title: "Why Every Business Needs CRM Software",
//     category: "CRM",
//     date: "05 Jul 2026",
//     read: "4 min read",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
//   },
//   {
//     title: "DevOps for Faster Software Delivery",
//     category: "DevOps",
//     date: "02 Jul 2026",
//     read: "6 min read",
//     image:
//       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
//   },
//   {
//     title: "Cybersecurity Tips for Enterprises",
//     category: "Security",
//     date: "30 Jun 2026",
//     read: "8 min read",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
//   },
// ];

// const LatestArticles = () => {
//   const colorScheme = useComputedColorScheme("light");
//   const [showAll, setShowAll] = useState(false);

//   const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

//   return (
//     <Container size="xl" pb={60}>
//       <Stack align="center" mb={60}>
//         <Badge
//           radius="xl"
//           size="lg"
//           color="cyan"
//           variant="light"
//         >
//           Latest Articles
//         </Badge>

//         <Title
//           ta="center"
//           order={2}
//           style={{
//             fontSize: "clamp(2rem,4vw,3.5rem)",
//           }}
//         >
//           Explore Our Latest
//           <br />
//           Technology Insights
//         </Title>

//         <Text
//           ta="center"
//           maw={700}
//           c="dimmed"
//           size="lg"
//         >
//           Stay updated with software development, AI, cloud,
//           cybersecurity, ERP, CRM, and digital transformation
//           articles from our experts.
//         </Text>
//       </Stack>

//       <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
//         {visibleBlogs.map((blog, index) => (
//           <motion.div
//             key={blog.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.1,
//             }}
//             viewport={{ once: true }}
//           >
//             <MotionCard
//               radius="xl"
//               shadow="lg"
//               withBorder
//               p={0}
//               h="100%"
//               whileHover={{
//                 y: -8,
//               }}
//               transition={{
//                 duration: 0.25,
//               }}
//               style={{
//                 overflow: "hidden",
//                 background:
//                   colorScheme === "dark"
//                     ? "rgba(255,255,255,.04)"
//                     : "#ffffff",
//                 backdropFilter: "blur(12px)",
//               }}
//             >
//               <Image
//                 src={blog.image}
//                 h={220}
//                 alt={blog.title}
//               />

//               <Box p="lg">
//                 <Badge
//                   color="cyan"
//                   variant="light"
//                   mb="md"
//                 >
//                   {blog.category}
//                 </Badge>

//                 <Title order={4} mb="sm">
//                   {blog.title}
//                 </Title>

//                 <Group
//                   gap="lg"
//                   mb="lg"
//                   c="dimmed"
//                 >
//                   <Group gap={5}>
//                     <IconCalendar size={16} />
//                     <Text size="sm">{blog.date}</Text>
//                   </Group>

//                   <Group gap={5}>
//                     <IconClock size={16} />
//                     <Text size="sm">{blog.read}</Text>
//                   </Group>
//                 </Group>

//                 {/* <Button
//                   variant="light"
//                   radius="xl"
//                   color="cyan"
//                   rightSection={
//                     <IconArrowRight size={16} />
//                   }
//                 >
//                   Read More
//                 </Button> */}
//               </Box>
//             </MotionCard>
//           </motion.div>
//         ))}
//       </SimpleGrid>

//       <Group justify="center" mt={60}>
//         <Button
//           radius="xl"
//           size="lg"
//           color="cyan"
//           variant={showAll ? "light" : "filled"}
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </Button>
//       </Group>
//     </Container>
//   );
// };

// export default LatestArticles;

// import { useState } from "react";
// import {
//   Badge,
//   Box,
//   Button,
//   Card,
//   Container,
//   Group,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   Title,
//   useComputedColorScheme,
// } from "@mantine/core";

// import { motion } from "framer-motion";

// import {
//   IconArrowRight,
//   IconCalendar,
//   IconClock,
// } from "@tabler/icons-react";

// const MotionCard = motion.create(Card);

// const blogs = [
//   {
//     title: "CTC vs Gross Salary vs In-Hand Salary: The Ultimate Payroll Guide for Indian Employees & Companies (2026)",
//     category: "Payroll",
//     date: "15 Jul 2026",
//     read: "10 min read",
//     image: "https://images.unsplash.com/photo-1554224155-6726b9b5b6c7?w=800", // You can replace with real image later
//   },
//   {
//     title: "Top 10 Benefits of HR Software in 2026 | Automate HR Tasks",
//     category: "HRMS",
//     date: "14 Jul 2026",
//     read: "10 min read",
//     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
//   },
//   {
//     title: "Best HRMS Software in India for Small Businesses – Simplify Your HR in 2026",
//     category: "HRMS",
//     date: "12 Jul 2026",
//     read: "9 min read",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
//   },
//   {
//     title: "Top 10 Best Benefits of Using ERP Software for Small Businesses",
//     category: "ERP",
//     date: "11 Jul 2026",
//     read: "10 min read",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
//   },
//   {
//     title: "NexFlare Dynamics Pvt. Ltd.: Redefining Software Development Company",
//     category: "Company",
//     date: "10 Jul 2026",
//     read: "7 min read",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
//   },
//   {
//     title: "The Most Versatile Programming Languages for Full-Stack Development in 2026",
//     category: "Development",
//     date: "09 Jul 2026",
//     read: "13 min read",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//   },
//   {
//     title: "Digital Trust: Safeguarding Data and Fostering Customer Loyalty",
//     category: "Security",
//     date: "08 Jul 2026",
//     read: "9 min read",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
//   },
//   {
//     title: "Secure Software Development: Best Practices and Strategies",
//     category: "Security",
//     date: "07 Jul 2026",
//     read: "11 min read",
//     image: "https://images.unsplash.com/photo-1558494949-ef0d38d3f9d8?w=800",
//   },
// ];

// const LatestArticles = () => {
//   const colorScheme = useComputedColorScheme("light");
//   const [showAll, setShowAll] = useState(false);

//   const visibleBlogs = showAll ? blogs : blogs.slice(0, 4); // Default 4 dikhega, Show More pe 8

//   return (
//     <Container size="xl" pb={60}>
//       <Stack align="center" mb={60}>
//         <Badge
//           radius="xl"
//           size="lg"
//           color="cyan"
//           variant="light"
//         >
//           Latest Articles
//         </Badge>

//         <Title
//           ta="center"
//           order={2}
//           style={{
//             fontSize: "clamp(2rem,4vw,3.5rem)",
//           }}
//         >
//           Explore Our Latest
//           <br />
//           Technology Insights
//         </Title>

//         <Text
//           ta="center"
//           maw={700}
//           c="dimmed"
//           size="lg"
//         >
//           Stay updated with software development, AI, cloud,
//           cybersecurity, ERP, CRM, and digital transformation
//           articles from our experts.
//         </Text>
//       </Stack>

//       <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
//         {visibleBlogs.map((blog, index) => (
//           <motion.div
//             key={blog.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.1,
//             }}
//             viewport={{ once: true }}
//           >
//             <MotionCard
//               radius="xl"
//               shadow="lg"
//               withBorder
//               p={0}
//               h="100%"
//               whileHover={{
//                 y: -8,
//               }}
//               transition={{
//                 duration: 0.25,
//               }}
//               style={{
//                 overflow: "hidden",
//                 background:
//                   colorScheme === "dark"
//                     ? "rgba(255,255,255,.04)"
//                     : "#ffffff",
//                 backdropFilter: "blur(12px)",
//               }}
//             >
//               {/* BLOG Badge on Image */}
//               <Badge
//                 size="sm"
//                 radius="sm"
//                 color="dark"
//                 style={{
//                   position: "absolute",
//                   top: 16,
//                   left: 16,
//                   zIndex: 10,
//                   backgroundColor: "rgba(0, 0, 0, 0.75)",
//                   color: "white",
//                 }}
//               >
//                 BLOG
//               </Badge>

//               <Image
//                 src={blog.image}
//                 h={220}
//                 alt={blog.title}
//               />

//               <Box p="lg">
//                 <Badge
//                   color="cyan"
//                   variant="light"
//                   mb="md"
//                 >
//                   {blog.category}
//                 </Badge>

//                 <Title order={4} mb="sm" lineClamp={3}>
//                   {blog.title}
//                 </Title>

//                 <Group
//                   gap="lg"
//                   mb="lg"
//                   c="dimmed"
//                 >
//                   <Group gap={5}>
//                     <IconCalendar size={16} />
//                     <Text size="sm">{blog.date}</Text>
//                   </Group>

//                   <Group gap={5}>
//                     <IconClock size={16} />
//                     <Text size="sm">{blog.read}</Text>
//                   </Group>
//                 </Group>

//                 {/* <Button
//                   variant="light"
//                   radius="xl"
//                   color="cyan"
//                   rightSection={
//                     <IconArrowRight size={16} />
//                   }
//                 >
//                   Read More
//                 </Button> */}
//               </Box>
//             </MotionCard>
//           </motion.div>
//         ))}
//       </SimpleGrid>

//       <Group justify="center" mt={60}>
//         <Button
//           radius="xl"
//           size="lg"
//           color="cyan"
//           variant={showAll ? "light" : "filled"}
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </Button>
//       </Group>
//     </Container>
//   );
// };

// export default LatestArticles;



import { useState } from "react";
import { Link } from "react-router-dom";   // ← Yeh import zaroori hai
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";
import { IconCalendar, IconClock } from "@tabler/icons-react";

const MotionCard = motion.create(Card);

const blogs = [
  {
    title: "CTC vs Gross Salary vs In-Hand Salary: The Ultimate Payroll Guide for Indian Employees & Companies (2026)",
    date: "15 Jul 2026",
    read: "10 min read",
    image: "https://apna.co/career-central/wp-content/uploads/2025/12/pexels-kunitsky-210990-1024x768.jpg",
    path: "/blogs/ctc-vs-gross-salary",   // ← Route se match kiya
  },
  {
    title: "Top 10 Benefits of HR Software in 2026 | Automate HR Tasks",
    date: "14 Jul 2026",
    read: "10 min read",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    path: "/blogs/hr-software-benefits-2026",
  },
  {
    title: "Best HRMS Software in India for Small Businesses – Simplify Your HR in 2026",
    date: "12 Jul 2026",
    read: "9 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    path: "/blogs/best-hrms-software-india-2026",
  },
  {
    title: "Top 10 Best Benefits of Using ERP Software for Small Businesses",
    date: "11 Jul 2026",
    read: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    path: "/blogs/erp-benefits-small-business",
  },
  {
    title: "NexFlare Dynamics Pvt. Ltd.: Redefining Software Development Company",
    date: "10 Jul 2026",
    read: "7 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    path: "/blogs/nexflare-dynamics-software-company",
  },
  {
    title: "The Most Versatile Programming Languages for Full-Stack Development in 2026",
    date: "09 Jul 2026",
    read: "13 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    path: "/blogs/full-stack-programming-languages-2026",
  },
  {
    title: "Digital Trust: Safeguarding Data and Fostering Customer Loyalty",
    date: "08 Jul 2026",
    read: "9 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    path: "/blogs/digital-trust-customer-loyalty",
  },
  {
    title: "Secure Software Development: Best Practices and Strategies",
    date: "07 Jul 2026",
    read: "11 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcbbtYhJz5-ibjlot2Sd68LUlq2DMLCOXYm-NwlOjnhPs58cVmervNmob&s=10",
    path: "/blogs/secure-software-development",
  },
];

const LatestArticles = () => {
  const colorScheme = useComputedColorScheme("light");
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 4);

  return (
    <Container size="xl" pb={60}>
      <Stack align="center" mb={60}>
        <Badge radius="xl" size="lg" color="cyan" variant="light">
          Latest Articles
        </Badge>

        <Title
          ta="center"
          order={2}
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
        >
          Explore Our Latest
          <br />
          Technology Insights
        </Title>

        <Text ta="center" maw={700} c="dimmed" size="lg">
          Stay updated with software development, AI, cloud, cybersecurity, ERP,
          CRM, and digital transformation articles from our experts.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
        {visibleBlogs.map((blog, index) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={blog.path} style={{ textDecoration: "none" }}>
              <MotionCard
                radius="xl"
                shadow="lg"
                withBorder
                p={0}
                h="100%"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  overflow: "hidden",
                  background: colorScheme === "dark" ? "rgba(255,255,255,.04)" : "#ffffff",
                  backdropFilter: "blur(12px)",
                  cursor: "pointer",
                }}
              >
             
                

                <Image src={blog.image} h={220} alt={blog.title} />

                <Box p="lg">
                 

                  <Title order={4} mb="sm" lineClamp={3}>
                    {blog.title}
                  </Title>

                  <Group gap="lg" mb="lg" c="dimmed">
                    <Group gap={5}>
                      <IconCalendar size={16} />
                      <Text size="sm">{blog.date}</Text>
                    </Group>

                    <Group gap={5}>
                      <IconClock size={16} />
                      <Text size="sm">{blog.read}</Text>
                    </Group>
                  </Group>
                </Box>
              </MotionCard>
            </Link>
          </motion.div>
        ))}
      </SimpleGrid>

      <Group justify="center" mt={60}>
        <Button
          radius="xl"
          size="lg"
          color="cyan"
          variant={showAll ? "light" : "filled"}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </Group>
    </Container>
  );
};

export default LatestArticles;