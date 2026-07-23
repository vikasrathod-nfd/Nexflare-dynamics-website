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

const Blog8 = () => {
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

  const SubHeading = ({ n, children }) => (
    <Text fw={700} size="lg" mt={22} mb={10} style={{ color: colors.heading }}>
      {n ? `${n}. ` : ""}
      {children}
    </Text>
  );

  const Bullet = ({ children }) => (
    <Box style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
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

  const FigureImage = ({ src, alt, caption, maxWidth }) => (
    <Box
      mt={20}
      mb={8}
      style={{
        maxWidth: maxWidth || "100%",
        marginLeft: maxWidth ? "auto" : 0,
        marginRight: maxWidth ? "auto" : 0,
      }}
    >
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
          Software Engineering
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
          Secure{" "}
          <Text component="span" inherit style={gradientText}>
            Software Development
          </Text>
          : Best Practices and Strategies
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
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=560&fit=crop&auto=format&q=80"
            alt="Abstract glowing digital sphere representing secure software architecture"
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
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            In a world where cyber threats are constantly evolving,{" "}
            <InlineLink href="#">secure software development</InlineLink> is not just an
            option—it's a necessity. Building secure applications from the
            ground up ensures that sensitive data remains protected, systems
            remain resilient, and users can trust your software. This blog
            delves into the essentials of secure software development,
            highlighting its importance, best practices, and actionable
            strategies.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* What is Secure Software Development */}
        <Box mb={48}>
          <SectionHeading>What is Secure Software Development?</SectionHeading>
          <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              Secure software development
            </Text>{" "}
            refers to the process of designing, coding, and deploying
            software with security as a primary consideration. It involves
            integrating security measures into every phase of the{" "}
            <InlineLink href="#">software development lifecycle (SDLC)</InlineLink> to prevent
            vulnerabilities that attackers could exploit.
          </Text>

          <SubHeading>Why is Secure Software Development Important?</SubHeading>
          <Box>
            <NumberedItem n={1} label="Protects Sensitive Data">
              Safeguards user and organizational information from breaches.
            </NumberedItem>
            <NumberedItem n={2} label="Mitigates Financial Loss">
              Prevents costs associated with data breaches, legal penalties,
              and reputational damage.
            </NumberedItem>
            <NumberedItem n={3} label="Enhances User Trust">
              Demonstrates a commitment to security, encouraging user
              confidence in your application.
            </NumberedItem>
            <NumberedItem n={4} label="Compliance">
              Helps meet regulatory requirements such as GDPR, HIPAA, and
              PCI-DSS.
            </NumberedItem>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Key Principles */}
        <Box mb={48}>
          <SectionHeading>Key Principles of Secure Software Development</SectionHeading>

          <SubHeading n={1}>Shift Left Security</SubHeading>
          <Bullet>
            Integrate security practices early in the SDLC. Address
            vulnerabilities during the design and development phases to
            minimize risks and reduce costs.
          </Bullet>

          <SubHeading n={2}>Secure Coding Practices</SubHeading>
          <Bullet>
            Use secure coding standards such as{" "}
            <InlineLink href="https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/">
              OWASP Secure Coding Guidelines
            </InlineLink>{" "}
            to prevent common vulnerabilities like SQL injection,
            cross-site scripting (XSS), and buffer overflows.
          </Bullet>

          <SubHeading n={3}>Threat Modeling</SubHeading>
          <Bullet>
            Identify potential threats, vulnerabilities, and risks early in
            the design phase. Utilize frameworks like STRIDE (Spoofing,
            Tampering, Repudiation, Information Disclosure, Denial of
            Service, Elevation of Privilege) for effective threat modeling.
          </Bullet>

          <SubHeading n={4}>Regular Code Reviews</SubHeading>
          <Bullet>
            Conduct peer reviews and static code analysis to identify and
            fix security flaws.
          </Bullet>

          <SubHeading n={5}>Implement Least Privilege</SubHeading>
          <Bullet>
            Restrict user and process permissions to the minimum required to
            perform their functions.
          </Bullet>

          <SubHeading n={6}>Encrypt Sensitive Data</SubHeading>
          <Bullet>
            Use robust encryption protocols for data in transit and at rest
            to prevent unauthorized access.
          </Bullet>

          <FigureImage
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&h=650&fit=crop&auto=format&q=80"
            alt="Digital shield icon representing encrypted and secured data"
            maxWidth={520}
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Best Practices */}
        <Box mb={48}>
          <SectionHeading>Best Practices for Secure Software Development</SectionHeading>

          <SubHeading n={1}>Secure Development Training</SubHeading>
          <Bullet>
            Train developers on secure coding practices and how to recognize
            potential vulnerabilities. Awareness is the first step toward
            building secure applications.
          </Bullet>

          <SubHeading n={2}>Use Security Frameworks and Libraries</SubHeading>
          <Bullet>
            Leverage trusted frameworks and libraries that include built-in
            security features. For example, Spring Security for Java
            applications or Django for Python.
          </Bullet>

          <SubHeading n={3}>Automated Security Testing</SubHeading>
          <Bullet>
            Integrate tools like{" "}
            <InlineLink href="#">SAST (Static Application Security Testing)</InlineLink>,{" "}
            <InlineLink href="#">DAST (Dynamic Application Security Testing)</InlineLink>, and{" "}
            <InlineLink href="#">IAST (Interactive Application Security Testing)</InlineLink> into
            the CI/CD pipeline.
          </Bullet>

          <SubHeading n={4}>Secure APIs</SubHeading>
          <Bullet>
            Implement authentication mechanisms such as OAuth2, validate
            inputs, and limit exposed endpoints to secure APIs.
          </Bullet>

          <SubHeading n={5}>Patch and Update Regularly</SubHeading>
          <Bullet>
            Keep all software components, including third-party libraries,
            up-to-date to address known vulnerabilities.
          </Bullet>

          <SubHeading n={6}>Monitor and Log Activities</SubHeading>
          <Bullet>
            Implement logging and monitoring to detect suspicious activities
            and respond to potential incidents promptly.
          </Bullet>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Tools */}
        <Box mb={48}>
          <SectionHeading>Tools for Secure Software Development</SectionHeading>

          <SubHeading n={1}>OWASP Dependency-Check</SubHeading>
          <Bullet>An open-source tool for identifying vulnerable dependencies.</Bullet>

          <SubHeading n={2}>Burp Suite</SubHeading>
          <Bullet>A comprehensive platform for testing web application security.</Bullet>

          <SubHeading n={3}>SonarQube</SubHeading>
          <Bullet>A tool for continuous code quality inspection with security analysis.</Bullet>

          <SubHeading n={4}>Veracode</SubHeading>
          <Bullet>Provides cloud-based application security testing.</Bullet>

          <SubHeading n={5}>Fortify</SubHeading>
          <Bullet>Offers static and dynamic application security testing solutions.</Bullet>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Challenges */}
        <Box mb={48}>
          <SectionHeading>Challenges in Secure Software Development</SectionHeading>

          <SubHeading n={1}>Balancing Security and Speed</SubHeading>
          <Bullet>
            Security measures often slow down development cycles. Balancing
            speed and security requires careful planning and automation.
          </Bullet>

          <SubHeading n={2}>Evolving Threat Landscape</SubHeading>
          <Bullet>
            Keeping up with the latest threats and vulnerabilities can be
            daunting. Regular updates and continuous learning are essential.
          </Bullet>

          <SubHeading n={3}>Lack of Awareness</SubHeading>
          <Bullet>
            Developers may lack training in secure coding practices, leading
            to unintentional vulnerabilities.
          </Bullet>

          <SubHeading n={4}>Complexity in Integration</SubHeading>
          <Bullet>
            Integrating security tools and practices into existing workflows
            can be challenging, especially for legacy systems.
          </Bullet>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Benefits */}
        <Box mb={48}>
          <SectionHeading>Benefits of Secure Software Development</SectionHeading>

          <Box mb={4}>
            <NumberedItem n={1} label="Reduced Risk of Breaches">
              Proactive measures lower the likelihood of exploitation.
            </NumberedItem>
            <NumberedItem n={2} label="Cost Savings">
              Fixing vulnerabilities early in the SDLC is cheaper than
              post-deployment fixes.
            </NumberedItem>
            <NumberedItem n={3} label="Improved User Confidence">
              A secure application fosters trust among users and
              stakeholders.
            </NumberedItem>
            <NumberedItem n={4} label="Regulatory Compliance">
              Adheres to data protection and privacy regulations, avoiding
              legal repercussions.
            </NumberedItem>
          </Box>

          <FigureImage
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=460&fit=crop&auto=format&q=80"
            alt="Futuristic interface with an eye scan representing identity verification and security"
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
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              Secure software development
            </Text>{" "}
            is a cornerstone of modern software engineering. By integrating
            security into every phase of the SDLC, organizations can build
            robust applications that stand the test of time and threats.
            Whether it's adopting secure coding practices, leveraging
            automated testing tools, or staying updated with the latest
            security trends, proactive measures go a long way in ensuring
            success.
          </Text>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Prioritize security today to protect your software, users, and
            reputation tomorrow. Embrace secure software development as an
            integral part of your organization's culture and reap the
            benefits of safer, more reliable applications.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog8;
