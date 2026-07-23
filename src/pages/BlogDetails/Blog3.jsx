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

const Blog3 = () => {
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

  const Check = ({ children }) => (
    <Box style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
      <Text style={{ color: teal, fontWeight: 800, fontSize: 16, lineHeight: 1.75 }}>
        ✓
      </Text>
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
          HR Software Guide
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
          Best{" "}
          <Text component="span" inherit style={gradientText}>
            HRMS Software
          </Text>{" "}
          in India for Small Businesses — Simplify Your HR in 2026
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=560&fit=crop&auto=format&q=80"
            alt="HR team reviewing employee records and HRMS dashboard"
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
          – Smart HR & Payroll Automation for Modern Indian Businesses
        </Text>

        <Divider color={colors.divider} mb={40} />

        {/* Intro */}
        <Box mb={48}>
          <SectionHeading>
            Introduction: Why Small Businesses Are Switching to HRMS
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Managing HR manually can feel like a never-ending task, especially
            for small business owners. Attendance, leave, salary slips,
            payroll — it all adds up. And let's face it, when you're handling
            everything from sales to operations, spending hours on HR is the
            last thing you want.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            In today's competitive landscape, small businesses are
            increasingly relying on technology to streamline their
            operations. The transition to an HRMS not only simplifies HR
            tasks but also improves overall business efficiency. Automating
            recruitment, for instance, can significantly reduce the time
            spent on hiring — instead of manually sifting through resumes, an
            HRMS can automatically filter candidates based on predetermined
            criteria, letting HR focus on interviewing qualified candidates.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            With features like electronic onboarding, new hires become
            productive faster too — digital document signing, training
            modules, and a structured introduction to company culture make
            the transition seamless for both the new employee and HR.
          </Text>
          <Text mb={8} style={{ color: colors.body, lineHeight: 1.8 }}>
            Scalability matters just as much. As a small business grows, its
            HR needs evolve — choosing software with modular features helps
            avoid the hassle of switching systems later, so you only pay for
            what you need at the outset.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="Small business team collaborating around a laptop"
            caption="The right HRMS scales with the business instead of holding it back."
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 1. Why small businesses need HRMS */}
        <Box mb={48}>
          <SectionHeading n={1}>
            Why Small Businesses Need the Best HRMS Software in India in 2026
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            There's a common misconception that HR software is only meant for
            large enterprises with hundreds of employees. But in reality,
            small businesses benefit even more from HR automation.
          </Text>
          <Text mb={12} style={{ color: colors.body }}>
            Here's why:
          </Text>

          <Box mb={20}>
            <Check>You save time — no more manual attendance or leave tracking</Check>
            <Check>You avoid costly payroll errors</Check>
            <Check>You create a smoother experience for employees</Check>
            <Check>You keep everything in one place — accessible from your phone</Check>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Whether you have 5 employees or 50, HRMS helps you stay
            organized, compliant, and stress-free.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 2. Top features checklist */}
        <Box mb={48}>
          <SectionHeading n={2}>
            Top Features to Look for in the Best HRMS Software in India
          </SectionHeading>
          <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
            Before you choose any HR tool, make sure it covers the basics you
            actually need. For small businesses, these are the essentials:
          </Text>

          <Box
            style={{
              background: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: 14,
              padding: "24px 28px",
            }}
          >
            <Check>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Mobile Access
              </Text>{" "}
              — So you or your manager can approve leaves, track attendance,
              or download salary slips, anytime, anywhere.
            </Check>
            <Check>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Automated Payroll
              </Text>{" "}
              — No need to spend hours calculating salaries manually. A good
              HRMS will calculate payroll automatically, including
              deductions, taxes, and even generate payslips.
            </Check>
            <Check>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Leave Management
              </Text>{" "}
              — Employees should be able to apply for leave easily, and
              managers should be able to approve or reject it in one click.
            </Check>
            <Check>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Attendance Tracking
              </Text>{" "}
              — Whether through a biometric system or app-based check-in,
              attendance should be recorded and visible to both employee and
              HR/admin.
            </Check>
            <Check>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Employee Self-Service
              </Text>{" "}
              — Let your team check their own attendance, salary details, and
              leave status without asking HR every time.
            </Check>
            <Check>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Affordable & Easy Setup
              </Text>{" "}
              — The software should be budget-friendly and easy to get
              started with, ideally in just a day or two.
            </Check>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 3. Why NEXHRMS */}
        <Box mb={48}>
          <SectionHeading n={3}>
            Why NEXHRMS Is a Smart Choice for Indian Small Businesses
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            At NEXHRMS, we've built a platform keeping Indian small
            businesses in mind — from local compliance needs to
            user-friendly design.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Integration capabilities matter too. Connecting the HR software
            with existing systems, such as customer relationship management
            (CRM) or accounting software, reduces duplication and errors,
            which is vital for maintaining accurate records and ensuring
            compliance with labor regulations.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            NEXHRMS also offers customizable features that let small
            businesses tailor the platform to their unique requirements, so
            it aligns with company-specific workflows rather than the other
            way around.
          </Text>
          <Text mb={12} style={{ color: colors.body }}>
            Here's what makes NEXHRMS different:
          </Text>

          <Box mb={20}>
            <Bullet>Works on mobile phones (Android/iOS)</Bullet>
            <Bullet>Quick setup — ready to use in 24 hours</Bullet>
            <Bullet>Payroll, attendance, leave, and salary slip — all in one place</Bullet>
            <Bullet>Transparent and affordable pricing plans</Bullet>
            <Bullet>Dedicated support team to help you get started</Bullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Whether you're running a small factory, consultancy, startup, or
            retail business, NEXHRMS simplifies your work and gives you full
            control.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 4. Testimonial */}
        <Box mb={48}>
          <SectionHeading n={4}>Real Feedback from a Small Business Owner</SectionHeading>

          <Box
            style={{
              background: colors.quoteBg,
              borderLeft: `4px solid ${teal}`,
              borderRadius: 8,
              padding: "20px 24px",
              margin: "8px 0",
            }}
          >
            <Text fs="italic" mb={12} style={{ color: colors.body, lineHeight: 1.8 }}>
              "We used to do everything manually. Salaries were delayed,
              leave requests were forgotten, and attendance was messy.
              NEXHRMS changed everything. Now, my team checks their own
              salary slips, applies for leave, and tracks attendance on their
              own — right from their phones."
            </Text>
            <Text fw={700} size="sm" style={{ color: colors.heading }}>
              — Neeraj Shah
            </Text>
            <Text size="sm" style={{ color: colors.muted }}>
              HR Manager at a manufacturing firm in Pune
            </Text>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 5. NEXHRMS CTA */}
        <Box mb={48}>
          <SectionHeading n={5}>
            Final Thoughts: Make the Smart Move in 2026 with the Best HRMS
            Software in India
          </SectionHeading>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            If your business is still stuck in Excel sheets, now's the time
            to upgrade. HR is the backbone of any growing company — and
            automating it gives you the freedom to focus on growth. Whether
            you're just starting or scaling up, NEXHRMS is built to grow with
            you.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Another significant advantage of using an HRMS is the reporting
            and analytics features. Comprehensive analytics can provide
            invaluable insights into employee performance, turnover rates,
            and even predict future hiring needs — helping businesses make
            informed decisions that contribute to overall growth and
            employee satisfaction.
          </Text>
          <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
            HRMS software also emphasizes compliance with labor laws and
            regulations, which can be daunting for small business owners.
            Automation of compliance-related tasks ensures your business
            adheres to the latest legal requirements, minimizing the risk of
            penalties, while feedback and recognition features help improve
            morale and retention as employee engagement becomes harder to
            ignore.
          </Text>

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
            <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                Try our Lifetime Free Plan now!
              </Text>
            </Text>
            <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
              Ready to try it out? Book a free demo with our team today.
            </Text>

            <Anchor
              href="https://nexhrms.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: `linear-gradient(135deg, ${tealDark}, ${teal})`,
                color: "#ffffff",
                fontWeight: 700,
                padding: "12px 26px",
                borderRadius: 10,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: `0 10px 24px ${isDark ? "rgba(20,184,166,0.3)" : "rgba(13,148,136,0.25)"}`,
              }}
            >
              👉 Book a Free Demo with NEXHRMS
            </Anchor>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog3;
