import {
  Anchor,
  Avatar,
  Box,
  Container,
  Divider,
  Image,
  Text,
  useComputedColorScheme,
} from "@mantine/core";

const Blog4 = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const teal = "#14b8a6";
  const tealDark = "#0d9488";

  const colors = {
    pageBg: isDark ? "#0a0a0a" : "#ffffff",
    heading: isDark ? "#ffffff" : "#0b1326",
    body: isDark ? "#d4d4d4" : "rgba(11,19,38,0.75)",
    listItem: isDark ? "#cfcfcf" : "rgba(11,19,38,0.7)",
    muted: isDark ? "#a3a3a3" : "rgba(11,19,38,0.55)",
    divider: isDark ? "rgba(255,255,255,0.1)" : "rgba(11,19,38,0.08)",
    avatarBg: isDark ? "#2a2a2a" : "#e5e5e5",
    avatarIcon: isDark ? "#8a8a8a" : "#9a9a9a",
    cardBg: isDark ? "rgba(255,255,255,0.03)" : "rgba(13,148,136,0.03)",
    cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(13,148,136,0.12)",
    formulaBg: isDark ? "rgba(20,184,166,0.08)" : "rgba(13,148,136,0.06)",
    formulaBorder: isDark ? "rgba(20,184,166,0.25)" : "rgba(13,148,136,0.2)",
    quoteBg: isDark ? "rgba(255,255,255,0.04)" : "rgba(11,19,38,0.03)",
  };

  const gradientText = {
    background: `linear-gradient(90deg, ${tealDark}, ${teal})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // ---- reusable bits ----

  const SectionBadge = ({ n }) => (
    <Box
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: 16,
        flexShrink: 0,
        background: `linear-gradient(135deg, ${tealDark}, ${teal})`,
        color: "#ffffff",
        boxShadow: `0 6px 16px ${isDark ? "rgba(20,184,166,0.25)" : "rgba(13,148,136,0.25)"}`,
      }}
    >
      {n}
    </Box>
  );

  const SectionHeading = ({ n, children }) => (
    <Box style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
      {n && <SectionBadge n={n} />}
      <Text fw={800} style={{ fontSize: 24, color: colors.heading, lineHeight: 1.3 }}>
        {children}
      </Text>
    </Box>
  );

  const Bullet = ({ children }) => (
    <Box style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
      <Box
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: teal,
          marginTop: 8,
          flexShrink: 0,
        }}
      />
      <Text style={{ color: colors.listItem, lineHeight: 1.75, fontSize: 16 }}>
        {children}
      </Text>
    </Box>
  );

  const FigureImage = ({ src, alt, caption }) => (
    <Box mt={20} mb={8}>
      <Box
        style={{
          borderRadius: 14,
          overflow: "hidden",
          border: `1px solid ${colors.cardBorder}`,
          boxShadow: isDark
            ? "0 12px 30px rgba(0,0,0,0.4)"
            : "0 12px 30px rgba(11,19,38,0.08)",
        }}
      >
        <Image src={src} alt={alt} h={320} fit="cover" />
      </Box>
      {caption && (
        <Text mt={8} size="xs" ta="center" style={{ color: colors.muted }}>
          {caption}
        </Text>
      )}
    </Box>
  );

  // ---- content data ----

  const benefits = [
    {
      title: "Streamlined Operations",
      paras: [
        "One of the primary benefits of ERP software is its ability to streamline business operations. ERP Software integrates various functions like inventory management, accounting, sales, customer relationship management (CRM), and human resources into a single platform. This eliminates the need for multiple standalone systems, reducing redundancy and ensuring that all departments work cohesively. For small businesses, this translates into smoother workflows and better coordination across teams.",
        "For instance, when an order is placed, the ERP system can automatically update inventory levels, notify the warehouse for fulfillment, and generate an invoice. Such automation reduces manual tasks and speeds up operations.",
      ],
    },
    {
      title: "Improved Decision-Making",
      paras: [
        "Small business owners often need to make quick decisions to stay competitive. ERP systems provide real-time data and analytics, enabling better decision-making. Dashboards and reporting tools give managers instant access to critical metrics like sales performance, cash flow, and inventory levels.",
        "With actionable insights at their fingertips, small business owners can identify trends, predict future demands, and respond to market changes effectively. For example, if sales for a particular product are declining, the ERP system can highlight the issue early, allowing the business to adjust its strategy accordingly.",
      ],
    },
    {
      title: "Enhanced Productivity",
      paras: [
        "Manual processes can be time-consuming and prone to errors. ERP software automates repetitive tasks, such as data entry, order processing, and payroll management, freeing up employees to focus on more strategic activities. Automation not only improves productivity but also reduces the likelihood of errors, which can be costly for small businesses.",
        "By streamlining day-to-day tasks, ERP enables small businesses to do more with fewer resources, making it an invaluable tool for growth.",
      ],
    },
    {
      title: "Cost Savings",
      paras: [
        "While the initial investment in an ERP Software may seem daunting for small businesses, the long-term cost savings are significant. By consolidating multiple software systems into one, businesses can reduce IT costs, lower maintenance expenses, and eliminate subscription fees for various standalone tools.",
        "Moreover, ERP helps minimize waste and optimize resource allocation. For example, better inventory management can prevent overstocking or understocking, leading to reduced carrying costs and fewer lost sales.",
      ],
    },
    {
      title: "Better Customer Service",
      paras: [
        "Customer satisfaction is crucial for small businesses aiming to build a loyal customer base. ERP Software with integrated CRM modules provide a 360-degree view of customer interactions, preferences, and purchase history. This enables businesses to offer personalized experiences and address customer inquiries promptly.",
        "For instance, if a customer contacts support, the ERP system can instantly pull up their order history and previous interactions, allowing the representative to resolve the issue efficiently. Enhanced customer service leads to increased customer retention and positive word-of-mouth referrals.",
      ],
    },
    {
      title: "Scalability",
      paras: [
        "As small businesses grow, their operational complexity increases. One of the advantages of ERP Software is their scalability. Most modern ERP solutions are modular, allowing businesses to add new features and functionalities as needed. This flexibility ensures that the software grows with the business, eliminating the need for frequent system replacements.",
        "For example, a small business might start with basic modules like accounting and inventory management and later expand to include advanced features like supply chain management or e-commerce integration.",
      ],
    },
    {
      title: "Regulatory Compliance",
      paras: [
        "Navigating regulatory requirements can be challenging for small businesses. ERP Software simplify compliance by automating processes and maintaining accurate records. Many ERP solutions come with built-in compliance features for tax calculations, financial reporting, and data protection.",
        "For example, ERP software can automatically generate tax-compliant invoices or prepare audit-ready financial statements, reducing the risk of penalties and ensuring peace of mind for business owners.",
      ],
    },
    {
      title: "Improved Collaboration",
      paras: [
        "ERP systems promote better collaboration among team members by providing a centralized platform for information sharing. Employees from different departments can access the same data in real-time, fostering transparency and teamwork.",
        "For instance, the sales team can check inventory levels before confirming an order, while the accounting team can track payments and update financial records. Improved collaboration ensures that everyone is on the same page, reducing miscommunication and delays.",
      ],
    },
    {
      title: "Data Security",
      paras: [
        "Small businesses are increasingly targeted by cyberattacks, making data security a top priority. ERP systems come with robust security features, including role-based access control, encryption, and regular backups. By centralizing data in a secure environment, ERP software minimizes the risk of data breaches and unauthorized access.",
        "Additionally, cloud-based ERP solutions offer the added benefit of disaster recovery, ensuring that critical business data is safe even in the event of hardware failure or natural disasters.",
      ],
    },
    {
      title: "Competitive Advantage",
      paras: [
        "Finally, adopting an ERP system gives small businesses a competitive edge. In a market where larger companies often dominate, ERP enables small businesses to operate with the same level of efficiency and professionalism as their larger counterparts. By leveraging technology, small businesses can improve their agility, respond quickly to customer needs, and position themselves as credible players in their industry.",
        "For example, a small retail business using an ERP system can offer features like real-time inventory tracking and personalized promotions, which can rival the capabilities of larger competitors.",
      ],
    },
  ];

  const SocialIcon = ({ children, href }) => (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${tealDark}, ${teal})`,
        color: "#fff",
      }}
    >
      {children}
    </Anchor>
  );

  return (
    <Box
      component="article"
      style={{ background: colors.pageBg, transition: "background 0.2s ease" }}
    >
      {/* ---------- HERO ---------- */}
      <Box
        py={30}
        style={{
          height: 5,
          background: `linear-gradient(90deg, ${tealDark}, ${teal}, #5eead4)`,
        }}
      />
      <Container size="lg" py={{ base: 40, md: 64 }}>
        <Text
          fw={700}
          size="sm"
          mb={16}
          style={{ letterSpacing: 2, textTransform: "uppercase", color: teal }}
        >
          Business Software Guide
        </Text>

        <Text
          component="h1"
          fw={800}
          mb={32}
          style={{
            fontSize: "clamp(28px, 4.2vw, 46px)",
            lineHeight: 1.18,
            color: colors.heading,
            maxWidth: 850,
          }}
        >
          Top 10 Best{" "}
          <Text component="span" inherit style={gradientText}>
            Benefits of Using ERP Software
          </Text>{" "}
          for Small Businesses
        </Text>

        <Box style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <Avatar radius="xl" size={48} style={{ background: colors.avatarBg }}>
            <svg viewBox="0 0 24 24" width={26} height={26} fill={colors.avatarIcon}>
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
            </svg>
          </Avatar>
          <Box>
            <Text fw={700} size="sm" style={{ color: colors.heading }}>
              Nexflare Dynamics
            </Text>
            <Text size="sm" style={{ color: teal }}>
              Nexflare Dynamics Team
            </Text>
          </Box>
        </Box>

        <Box
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: isDark
              ? "0 20px 50px rgba(0,0,0,0.5)"
              : "0 20px 50px rgba(11,19,38,0.12)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=560&fit=crop&auto=format&q=80"
            alt="Digital ERP dashboard connecting business functions like sales, inventory, and HR"
            h={{ base: 260, md: 460 }}
            fit="cover"
          />
        </Box>
      </Container>

      {/* ---------- BODY ---------- */}
      <Container size="lg" pb={80}>
        <Text mb={40} style={{ color: colors.body }}>
          By{" "}
          <Anchor href="#" style={{ color: teal, fontWeight: 700 }}>
            Nexflare Dynamics
          </Anchor>{" "}
          – Smart Payroll &amp; Compliance Automation for Modern Indian
          Businesses
        </Text>

        <Divider color={colors.divider} mb={40} />

        {/* Intro */}
        <Box mb={48}>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            In today's fast-paced and highly competitive business
            environment, efficiency, and streamlined processes are no longer
            luxuries – they're necessities. For small businesses, the
            challenge lies in scaling operations while managing limited
            resources effectively.{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              Enterprise Resource Planning (ERP) software
            </Text>{" "}
            has become a game-changer for businesses of all sizes, and small
            businesses are no exception. By integrating core business
            processes into one unified system, ERP enables small businesses
            to improve efficiency, reduce costs, and achieve better
            decision-making. In this article, we'll explore ten key benefits
            of using ERP systems for small businesses.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="Team reviewing ERP analytics and dashboards on a laptop"
            caption="A single, unified system keeps every department working from the same data."
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {benefits.map((b, i) => (
          <Box key={b.title}>
            <Box mb={48}>
              <SectionHeading n={i + 1}>{b.title}</SectionHeading>
              {b.paras.map((p, idx) => (
                <Text
                  key={idx}
                  mb={idx === b.paras.length - 1 ? 0 : 16}
                  style={{ color: colors.body, lineHeight: 1.8 }}
                >
                  {p}
                </Text>
              ))}
            </Box>
            {i < benefits.length - 1 && <Divider color={colors.divider} mb={40} />}
          </Box>
        ))}

        <Divider color={colors.divider} mt={8} mb={40} />

        {/* Conclusion */}
        <Box mb={48}>
          <SectionHeading>
            Conclusion:{" "}
            <Text component="span" inherit style={gradientText}>
              A Smart Investment for Sustainable Growth
            </Text>
          </SectionHeading>

          <Box
            mb={20}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: `1px solid ${colors.cardBorder}`,
              maxWidth: 360,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=700&fit=crop&auto=format&q=80"
              alt="Enterprise Resource Planning wheel connecting production, accounting, HR, delivery, logistics, inventory, finance, planning, and CRM & sales"
              h={280}
              fit="cover"
            />
          </Box>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Implementing an ERP system can be a transformative step for small
            businesses. From streamlining operations and reducing costs to
            improving decision-making and customer service, the benefits of
            ERP software are undeniable. While the initial investment may
            seem significant, the long-term returns far outweigh the costs,
            making ERP a smart choice for businesses looking to scale and
            succeed in today's competitive landscape.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            If you're a small business owner considering ERP software, take
            the time to evaluate your specific needs and choose a solution
            that aligns with your goals. With the right ERP system in place,
            you'll be well-equipped to overcome challenges, seize
            opportunities, and achieve sustainable growth.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Contact / CTA */}
        <Box>
          <Box
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(20,184,166,0.12), rgba(13,148,136,0.04))"
                : "linear-gradient(135deg, rgba(13,148,136,0.08), rgba(20,184,166,0.03))",
              border: `1px solid ${colors.formulaBorder}`,
              borderRadius: 18,
              padding: "32px 32px",
            }}
          >
            <Text mb={12} fw={700} style={{ color: colors.heading }}>
              For Custom Software Development, You Can Contact Us On
            </Text>
            <Text mb={20} style={{ color: colors.body }}>
              Website:{" "}
              <Anchor
                href="https://staging.nexflaredynamics.com/Softwaredevelopmentcompany/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: teal, fontWeight: 700 }}
              >
                nexflaredynamics.com
              </Anchor>
            </Text>

            <Text mb={12} style={{ color: colors.body }}>
              Social Media Profile:
            </Text>
            <Box style={{ display: "flex", gap: 12 }}>
              <SocialIcon href="https://facebook.com">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                  <path d="M12 2.2c2.7 0 3 .01 4.1.06 1.05.05 1.62.22 2 .37.5.2.86.43 1.24.8.37.38.6.74.8 1.24.15.38.32.95.37 2 .05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.05-.22 1.62-.37 2-.2.5-.43.86-.8 1.24-.38.37-.74.6-1.24.8-.38.15-.95.32-2 .37-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.05-.05-1.62-.22-2-.37-.5-.2-.86-.43-1.24-.8-.37-.38-.6-.74-.8-1.24-.15-.38-.32-.95-.37-2-.05-1.1-.06-1.4-.06-4.1s.01-3 .06-4.1c.05-1.05.22-1.62.37-2 .2-.5.43-.86.8-1.24.38-.37.74-.6 1.24-.8.38-.15.95-.32 2-.37 1.1-.05 1.4-.06 4.1-.06M12 0C9.25 0 8.9.01 7.8.06c-1.1.05-1.85.23-2.5.48-.68.27-1.26.62-1.83 1.2A5.13 5.13 0 0 0 2.27 3.6c-.25.66-.43 1.4-.48 2.5C1.74 7.2 1.73 7.56 1.73 12s.01 4.8.06 5.9c.05 1.1.23 1.85.48 2.5.27.68.62 1.26 1.2 1.83.57.57 1.15.93 1.83 1.2.65.25 1.4.43 2.5.48 1.1.05 1.45.06 4.2.06s3.1-.01 4.2-.06c1.1-.05 1.85-.23 2.5-.48a5.13 5.13 0 0 0 1.83-1.2c.57-.57.93-1.15 1.2-1.83.25-.65.43-1.4.48-2.5.05-1.1.06-1.45.06-4.2s-.01-3.1-.06-4.2c-.05-1.1-.23-1.85-.48-2.5a5.13 5.13 0 0 0-1.2-1.83A5.13 5.13 0 0 0 16.9.54c-.65-.25-1.4-.43-2.5-.48C13.3.01 12.95 0 10.2 0h1.8z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </SocialIcon>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog4;
