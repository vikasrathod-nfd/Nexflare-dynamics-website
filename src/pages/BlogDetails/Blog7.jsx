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

const Blog7 = () => {
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
  };

  const gradientText = {
    background: `linear-gradient(90deg, ${tealDark}, ${teal})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // ---- reusable bits ----

  const SectionHeading = ({ children }) => (
    <Text fw={800} mb={20} style={{ fontSize: 24, color: colors.heading, lineHeight: 1.3 }}>
      {children}
    </Text>
  );

  const SubHeading = ({ children }) => (
    <Text fw={700} size="lg" mt={20} mb={14} style={{ color: colors.heading }}>
      {children}
    </Text>
  );

  const MiniHeading = ({ n, children }) => (
    <Box style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 24, marginBottom: 10 }}>
      <Text fw={800} style={{ color: teal, fontSize: 13, letterSpacing: 1 }}>
        {n}.
      </Text>
      <Text fw={800} style={{ color: colors.heading, fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>
        {children}
      </Text>
    </Box>
  );

  const NumberedItem = ({ n, label, children }) => (
    <Box style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
      <Text fw={800} style={{ color: teal, fontSize: 16, lineHeight: 1.75, minWidth: 18 }}>
        {n}.
      </Text>
      <Text style={{ color: colors.listItem, lineHeight: 1.75, fontSize: 16 }}>
        <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
          {label}
        </Text>
        : {children}
      </Text>
    </Box>
  );

  const LabeledBullet = ({ label, children }) => (
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
        <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
          {label}
        </Text>
        : {children}
      </Text>
    </Box>
  );

  const FigureImage = ({ src, alt, caption, maxWidth }) => (
    <Box mt={20} mb={8} style={{ maxWidth: maxWidth || "100%", marginLeft: maxWidth ? "auto" : 0, marginRight: maxWidth ? "auto" : 0 }}>
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
        <Image src={src} alt={alt} h={300} fit="cover" />
      </Box>
      {caption && (
        <Text mt={8} size="xs" ta="center" style={{ color: colors.muted }}>
          {caption}
        </Text>
      )}
    </Box>
  );

  const InlineLink = ({ href, children }) => (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" style={{ color: teal, fontWeight: 600 }}>
      {children}
    </Anchor>
  );

  const NexFlare = ({ children = "NexFlare Dynamics" }) => (
    <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
      {children}
    </Text>
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
          Data Security &amp; Trust
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
          Digital Trust:{" "}
          <Text component="span" inherit style={gradientText}>
            Safeguarding Data
          </Text>{" "}
          and Fostering Customer Loyalty
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
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1400&h=560&fit=crop&auto=format&q=80"
            alt="Businessperson holding a glowing digital trust network globe"
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
            In today's fast-paced digital landscape, where technology
            dominates every aspect of life, the term{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              "digital trust"
            </Text>{" "}
            has emerged as a cornerstone for successful business operations
            and sustainable growth. As organizations increasingly embrace
            digital transformation, safeguarding data and nurturing customer
            loyalty have become pivotal to achieving long-term success.
            Digital trust not only strengthens customer relationships but
            also elevates brand reputation, ultimately impacting the bottom
            line.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&h=600&fit=crop&auto=format&q=80"
            alt="Two hands reaching toward each other, one digital and one human, representing trust"
            maxWidth={520}
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* What Is Digital Trust */}
        <Box mb={48}>
          <SectionHeading>What Is Digital Trust?</SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Digital trust refers to the confidence that users have in an
            organization's ability to protect their data, maintain privacy,
            and operate with integrity in the digital space. It involves
            transparency, ethical practices, robust security measures, and
            adherence to legal and regulatory requirements. Companies that
            prioritize digital trust create a safe and reliable environment
            for their stakeholders, fostering customer loyalty and enhancing
            brand value.
          </Text>
          <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
            For instance, companies like <NexFlare>NexFlare Dynamics Pvt. Ltd.</NexFlare> excel
            by integrating cutting-edge technologies to ensure data security
            and build trust. Investing in robust software solutions like ERP
            and CRM systems strengthens an organization's capacity to handle
            sensitive information efficiently.
          </Text>

          <SubHeading>Why Digital Trust Matters</SubHeading>
          <Box>
            <NumberedItem n={1} label="Enhancing Customer Confidence">
              Customers are more likely to engage with brands they perceive
              as trustworthy. Transparency and secure platforms ensure that
              clients feel their data is in safe hands.
            </NumberedItem>
            <NumberedItem n={2} label="Regulatory Compliance">
              Governments and regulatory bodies worldwide have established
              stringent data protection laws, such as{" "}
              <InlineLink href="https://gdpr.eu">GDPR and CCPA.</InlineLink> Non-compliance not
              only leads to hefty fines but also erodes customer trust.
            </NumberedItem>
            <NumberedItem n={3} label="Mitigating Risks">
              Cyber threats, including data breaches and phishing attacks,
              can devastate a business. Building digital trust minimizes
              vulnerabilities and strengthens defenses against such threats.
            </NumberedItem>
            <NumberedItem n={4} label="Boosting Brand Reputation">
              Trustworthy businesses are likely to enjoy positive
              word-of-mouth marketing, improving brand image and attracting
              more customers.
            </NumberedItem>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Building Digital Trust */}
        <Box mb={48}>
          <SectionHeading>Building Digital Trust</SectionHeading>

          <MiniHeading n={1}>Adopt Robust Security Measures</MiniHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            To safeguard customer data, invest in advanced cybersecurity
            technologies. Implement measures like encryption, multi-factor
            authentication, and regular security audits. Partnering with a
            reliable software development company such as{" "}
            <NexFlare>NexFlare Dynamics</NexFlare> ensures access to tailored
            solutions that prioritize security.
          </Text>

          <MiniHeading n={2}>Ensure Transparency</MiniHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Transparency is key to establishing digital trust. Clearly
            communicate your data handling policies, and ensure customers
            are aware of how their information is stored, shared, and used.
            Providing regular updates and being open about any security
            incidents helps maintain trust even in challenging situations.
          </Text>

          <MiniHeading n={3}>Prioritize Customer Privacy</MiniHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Respecting customer privacy is fundamental to digital trust. Use
            only the data necessary for your operations, and seek explicit
            consent when collecting sensitive information. Implement
            privacy-by-design principles in your software and systems to
            safeguard user data effectively.
          </Text>

          <MiniHeading n={4}>Invest in Employee Training</MiniHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Your team plays a critical role in maintaining digital trust.
            Regularly train employees on cybersecurity best practices, data
            privacy regulations, and ethical conduct. Awareness at all
            levels of the organization helps create a culture of trust.
          </Text>

          <MiniHeading n={5}>Use Trusted Software Solutions</MiniHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Businesses can strengthen their trust by leveraging reliable and
            efficient software solutions. ERP and CRM tools from companies
            like <NexFlare>NexFlare Dynamics Pvt. Ltd.</NexFlare> enable
            secure and seamless management of customer data and operations.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Measuring Digital Trust */}
        <Box mb={48}>
          <SectionHeading>Measuring Digital Trust</SectionHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            How do you know if your efforts to build digital trust are
            effective? Measuring customer satisfaction, analyzing feedback,
            and tracking key performance indicators (KPIs) like Net Promoter
            Score (NPS) can provide valuable insights. Furthermore,
            conducting third-party audits and certifications ensures
            compliance with industry standards and enhances credibility.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Role of Digital Trust in Fostering Loyalty */}
        <Box mb={48}>
          <SectionHeading>
            The Role of Digital Trust in Fostering Customer Loyalty
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Customer loyalty stems from trust and satisfaction. When
            customers feel secure and valued, they are more likely to
            return to your brand. Here's how digital trust fosters loyalty:
          </Text>

          <Box>
            <LabeledBullet label="Improved Customer Retention">
              Trustworthy businesses create long-lasting relationships with
              their clients. Repeat customers not only drive sales but also
              act as brand ambassadors.
            </LabeledBullet>
            <LabeledBullet label="Positive Customer Experience">
              Secure and seamless interactions with your digital platforms
              enhance user satisfaction and encourage loyalty.
            </LabeledBullet>
            <LabeledBullet label="Competitive Advantage">
              In a crowded marketplace, digital trust sets your business
              apart. It's a unique selling proposition (USP) that attracts
              discerning customers.
            </LabeledBullet>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Real-World Examples */}
        <Box mb={48}>
          <SectionHeading>Real-World Examples of Digital Trust in Action</SectionHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Global companies like <InlineLink href="https://www.apple.com">Apple</InlineLink> and
            Amazon are excellent examples of brands that prioritize digital
            trust. Apple's commitment to user privacy and Amazon's secure
            payment systems exemplify how businesses can build trust through
            transparency and robust technologies. Similarly, startups and
            SMEs can leverage services from trusted partners like{" "}
            <NexFlare>NexFlare Dynamics</NexFlare> to achieve similar
            results.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Challenges */}
        <Box mb={48}>
          <SectionHeading>Challenges in Building Digital Trust</SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Despite its importance, building digital trust is not without
            challenges:
          </Text>

          <Box mb={16}>
            <NumberedItem n={1} label="Evolving Cyber Threats">
              As technology advances, so do the methods employed by
              cybercriminals.
            </NumberedItem>
            <NumberedItem n={2} label="Complex Regulatory Landscape">
              Navigating the myriad of global and regional data protection
              laws can be overwhelming.
            </NumberedItem>
            <NumberedItem n={3} label="Consumer Skepticism">
              High-profile data breaches have made many users wary of
              sharing personal information online.
            </NumberedItem>
            <NumberedItem n={4} label="Resource Constraints">
              Small businesses may struggle to allocate sufficient resources
              for implementing advanced security measures.
            </NumberedItem>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Addressing these challenges requires a proactive approach,
            leveraging expertise from seasoned professionals, and adopting
            scalable, secure software solutions. Companies like{" "}
            <NexFlare>NexFlare Dynamics</NexFlare> offer comprehensive
            solutions tailored to overcome these hurdles effectively.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Future of Digital Trust */}
        <Box mb={48}>
          <SectionHeading>The Future of Digital Trust</SectionHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            As technology continues to evolve, so too will the expectations
            around digital trust. Emerging trends such as blockchain,
            AI-powered security, and decentralized identities hold immense
            potential to revolutionize how businesses establish and maintain
            trust in the digital age. Businesses must stay ahead of the
            curve by investing in research, adopting new technologies, and
            consistently refining their practices.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&h=650&fit=crop&auto=format&q=80"
            alt="Person holding a tablet with a digital security shield and standard checkmark overlay"
            maxWidth={520}
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Conclusion */}
        <Box>
          <SectionHeading>
            <Text component="span" inherit style={gradientText}>
              Conclusion
            </Text>
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Digital faith is no longer optional—it is an essential element
            for any business operating in the modern digital ecosystem. By
            safeguarding data, ensuring transparency, and prioritizing
            customer needs, organizations can foster loyalty and secure a
            competitive edge. Companies like{" "}
            <NexFlare>NexFlare Dynamics Pvt. Ltd.</NexFlare> serve as
            valuable partners in this journey, offering innovative solutions
            to help businesses thrive in a trust-driven marketplace.
          </Text>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Start building trust today to unlock new opportunities, enhance
            customer satisfaction, and drive long-term success.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog7;
