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

const Blog2 = () => {
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
    kwBg: isDark ? "rgba(20,184,166,0.08)" : "rgba(13,148,136,0.06)",
  };

  const gradientText = {
    background: `linear-gradient(90deg, ${tealDark}, ${teal})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // ---- reusable bits ----

  const NumBadge = ({ n, size = 26 }) => (
    <Box
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: size * 0.46,
        flexShrink: 0,
        background: `linear-gradient(135deg, ${tealDark}, ${teal})`,
        color: "#ffffff",
      }}
    >
      {n}
    </Box>
  );

  const BenefitHeading = ({ n, children }) => (
    <Box style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <NumBadge n={n} size={30} />
      <Text fw={700} style={{ fontSize: 20, color: colors.heading, lineHeight: 1.3 }}>
        {children}
      </Text>
    </Box>
  );

  const Keyword = ({ children }) => (
    <Box
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: colors.kwBg,
        borderRadius: 8,
        padding: "6px 12px",
        margin: "10px 0",
      }}
    >
      <Text style={{ color: teal, fontWeight: 800 }}>✓</Text>
      <Text style={{ color: colors.heading, fontSize: 14 }}>
        <Text component="span" fw={700} inherit>
          Keyword:
        </Text>{" "}
        {children}
      </Text>
    </Box>
  );

  const Check = ({ children, bold }) => (
    <Box style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
      <Text style={{ color: teal, fontWeight: 800, fontSize: 16, lineHeight: 1.75 }}>
        ✓
      </Text>
      <Text style={{ color: colors.listItem, lineHeight: 1.75, fontSize: 16 }}>
        {bold && (
          <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
            {bold}
          </Text>
        )}
        {bold && " — "}
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

  const benefits = [
    {
      title: "Automated Payroll & Salary Processing",
      keyword: "payroll management",
      body: (
        <>
          Manual payroll is one of the most time-consuming HR tasks and is
          highly prone to errors. An{" "}
          <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
            HRMS system
          </Text>{" "}
          automates payroll by syncing with attendance, leave records,
          reimbursements, and statutory deductions like PF, ESI, and TDS.
        </>
      ),
      after:
        "You can generate payslips, process salaries, and ensure timely deposits — all with just a click.",
    },
    {
      title: "Real-Time Attendance Tracking",
      keyword: "attendance tracking system",
      body: (
        <>
          Forget biometric machines and manual registers. The latest{" "}
          <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
            attendance tracking systems
          </Text>{" "}
          use GPS, face recognition, geofencing, and Wi-Fi to ensure accurate,
          real-time tracking.
        </>
      ),
      after:
        "This ensures there's no buddy punching, missed entries, or disputes — saving HR teams from hours of correction.",
    },
    {
      title: "Employee Self-Service Portals",
      keyword: "employee self-service",
      body: "Empower your team with a self-service HR portal. Employees can apply for leaves, check their salary slips, update documents, and access policies anytime, anywhere.",
      after:
        "This reduces HR dependency, improves transparency, and enhances the employee experience.",
    },
    {
      title: "Leave & Holiday Management",
      keyword: "leave management software",
      body: (
        <>
          Managing leave manually leads to overlaps, missed holidays, and
          confusion. A smart{" "}
          <Anchor href="#" style={{ color: teal, fontWeight: 700 }}>
            leave management system
          </Anchor>{" "}
          provides real-time leave balance, manager approvals, holiday
          calendars, and auto-updates.
        </>
      ),
      after:
        "It helps ensure fairness, accuracy, and smooth operations — without WhatsApp back-and-forth.",
    },
    {
      title: "Role-Based Access & Data Security",
      keyword: "human resource management system",
      body: (
        <>
          With growing data sensitivity,{" "}
          <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
            role-based access
          </Text>{" "}
          ensures that only authorized users can view or edit specific
          information. HR managers can assign roles like admin, team lead, or
          employee with custom permissions.
        </>
      ),
      after:
        "This protects employee data, ensures confidentiality, and avoids data mishandling.",
    },
    {
      title: "Effortless Onboarding & Centralized Employee Data",
      keyword: "HR software",
      body: "Streamline hiring and onboarding by collecting all employee documents and details in one place. From offer letters to KYC to past employment, everything is stored securely in the cloud.",
      after:
        "You no longer need scattered files or spreadsheets — everything is just a search away.",
      image: {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=460&fit=crop&auto=format&q=80",
        alt: "Team working together on laptops during onboarding",
        caption: "Centralized employee data means faster, error-free onboarding.",
      },
    },
    {
      title: "Reimbursement, Task & Payroll Integration",
      keyword: "automate HR tasks",
      body: "Reimbursements often get delayed due to manual processing. With HRMS, employees can submit bills directly, and managers can approve them with one click. Tasks assigned can also be linked to payroll or incentives.",
      after: "No confusion, no delays — everything is automatically calculated and recorded.",
    },
    {
      title: "Analytics & Smart HR Dashboards",
      keyword: "HRMS benefits",
      body: (
        <>
          Data is the new fuel. A modern{" "}
          <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
            HRMS
          </Text>{" "}
          provides dashboards showing attrition, leave trends, hiring costs,
          salary distribution, and performance metrics — helping HR leaders
          make informed decisions.
        </>
      ),
      after: "This turns your HR department into a data-driven, strategic powerhouse.",
    },
    {
      title: "Scalability with Free or Affordable Plans",
      keyword: "HR software in India",
      body: (
        <>
          Not every business has a big budget for software. Luckily, many
          providers like{" "}
          <Anchor href="#" style={{ color: teal, fontWeight: 700 }}>
            NEX HRMS
          </Anchor>{" "}
          offer{" "}
          <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
            free HR software plans
          </Text>{" "}
          tailored for Indian startups and SMBs.
        </>
      ),
      after: "This allows businesses to scale HR processes without worrying about expensive tools.",
    },
    {
      title: "Compliance & Audit-Readiness",
      keyword: "best HR software 2025",
      body: "Managing compliance manually can result in heavy penalties. HRMS automatically tracks and generates reports for PF, ESI, TDS, gratuity, and labor law requirements — ensuring 100% compliance.",
      after: "This saves you from legal risks and keeps you always audit-ready.",
    },
  ];

  return (
    <Box
      component="article"
      style={{ background: colors.pageBg, transition: "background 0.2s ease" }}
    >
      {/* ---------- HERO ---------- */}
      <Box
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
          HR Technology Guide
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
          Top 10 Benefits of{" "}
          <Text component="span" inherit style={gradientText}>
            HR Software
          </Text>{" "}
          in 2026 | Automate HR Tasks
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
            src="https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=1400&h=560&fit=crop&auto=format&q=80"
            alt="Team collaborating around a computer, representing modern HR technology"
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
            In 2025,{" "}
            <Anchor href="#" style={{ color: teal, fontWeight: 700 }}>
              HRMS software
            </Anchor>{" "}
            has evolved from a helpful tool into a critical part of business
            growth and efficiency. With increasing complexities in managing
            payroll, attendance, compliance, and employee engagement, manual
            HR processes simply can't keep up.
          </Text>
          <Text mb={8} style={{ color: colors.body, lineHeight: 1.8 }}>
            Whether you're a startup managing 5 people or an enterprise with
            500, adopting a smart{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              HRMS solution
            </Text>{" "}
            helps automate HR tasks, reduce human error, and drastically
            improve employee satisfaction.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1758691737083-0e7fdbde0f05?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="Two colleagues collaborating on a laptop in an office"
            caption="Modern HRMS platforms bring payroll, attendance, and compliance into one system."
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Top 10 label */}
        <Box style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <NumBadge n={10} size={24} />
          <Text
            fw={800}
            style={{ fontSize: 15, letterSpacing: 1.5, textTransform: "uppercase", color: teal }}
          >
            Top 10 Benefits of HR Software in 2026
          </Text>
        </Box>

        {/* Benefits list */}
        {benefits.map((b, i) => (
          <Box key={b.title}>
            <Box mb={48}>
              <BenefitHeading n={i + 1}>{b.title}</BenefitHeading>
              <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
                {b.body}
              </Text>
              <Keyword>{b.keyword}</Keyword>
              <Text mt={8} style={{ color: colors.body, lineHeight: 1.8 }}>
                {b.after}
              </Text>
              {b.image && (
                <FigureImage
                  src={b.image.src}
                  alt={b.image.alt}
                  caption={b.image.caption}
                />
              )}
            </Box>
            <Divider color={colors.divider} mb={40} />
          </Box>
        ))}

        {/* Bonus section */}
        <Box mb={48}>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            Bonus: Best HRMS Software for Small Businesses in India – Simplify
            Your HR in 2025
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Managing HR manually can feel like a full-time job for small
            business owners. With so many daily responsibilities, HR often
            gets delayed — resulting in frustrated employees, missed
            compliance, and payroll errors.
          </Text>
          <Text mb={8} style={{ color: colors.body, lineHeight: 1.8 }}>
            That's why adopting the right{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              HRMS software
            </Text>{" "}
            is no longer optional — it's a smart business move.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* What to look for */}
        <Box mb={48}>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            What to Look for in an HRMS for Small Businesses:
          </Text>
          <Check bold="Mobile App Access">Manage HR on the go</Check>
          <Check bold="Automated Payroll">No need for salary spreadsheets</Check>
          <Check bold="Leave & Attendance">Easy for staff and managers</Check>
          <Check bold="Employee Self-Service">Reduces HR's time burden</Check>
          <Check bold="Quick Setup">Start using it in just 1–2 days</Check>
          <Check bold="Affordable Plans">No huge costs for small teams</Check>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Why NEXHRMS */}
        <Box mb={48}>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            🏠 Why NEXHRMS is a Smart Choice for Indian Businesses
          </Text>
          <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
            At{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              NEXHRMS
            </Text>
            , we've designed our software specifically for Indian small and
            growing businesses. From pricing to features, everything is built
            with simplicity and compliance in mind.
          </Text>
          <Check>Works on Android/iOS</Check>
          <Check>Payroll, attendance, and leave – in one place</Check>
          <Check>Free forever plan available</Check>
          <Check>Quick setup (within 24 hours)</Check>
          <Check>Dedicated support for Indian businesses</Check>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Testimonial */}
        <Box mb={48}>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            🗣️ Real Feedback from a Business Owner:
          </Text>
          <Box
            style={{
              background: colors.cardBg,
              borderLeft: `4px solid ${teal}`,
              borderRadius: 10,
              padding: "20px 24px",
            }}
          >
            <Text fs="italic" mb={12} style={{ color: colors.body, lineHeight: 1.8 }}>
              "We used to do everything manually. Salaries were delayed, leave
              requests were forgotten, and attendance was messy. NEXHRMS
              changed everything. Now, my team checks their salary slips,
              applies for leave, and tracks attendance on their own — right
              from their phones."
            </Text>
            <Text size="sm" style={{ color: colors.muted }}>
              — Neeraj Shah, HR Manager, Manufacturing Firm, Pune
            </Text>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Final thoughts */}
        <Box mb={48}>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            ✅ Final Thoughts: Make the Smart Move in 2025
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            If you're still stuck with spreadsheets and paper trails, you're
            spending way too much time on things that software can do in
            seconds.
          </Text>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            HR is the backbone of growth — and with tools like{" "}
            <Anchor href="#" style={{ color: teal, fontWeight: 700 }}>
              NEXHRMS
            </Anchor>
            , even small businesses can run HR like large enterprises.
            Automation, accuracy, and access — all in one platform.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Closing CTA */}
        <Box>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            Looking to streamline HR and focus on growing your business?
          </Text>

          <Box
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(20,184,166,0.12), rgba(13,148,136,0.04))"
                : "linear-gradient(135deg, rgba(13,148,136,0.08), rgba(20,184,166,0.03))",
              border: `1px solid ${isDark ? "rgba(20,184,166,0.25)" : "rgba(13,148,136,0.2)"}`,
              borderRadius: 18,
              padding: "32px 32px",
            }}
          >
            <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
              ✨ Try{" "}
              <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
                NEXHRMS
              </Text>{" "}
              — India's best HR software for startups, factories, consultants,
              and small businesses.
            </Text>

            <Bullet>🍱 Free Forever Plan</Bullet>
            <Bullet>📱 Mobile Ready</Bullet>
            <Bullet>📊 All-in-One Dashboard</Bullet>
            <Bullet>🕐 Get Started in Just 24 Hours</Bullet>

            <Text mt={20} mb={24} style={{ color: colors.body, lineHeight: 1.8 }}>
              Companies that adopt NexHRMS solutions to automate HR tasks
              position themselves for sustainable growth, improved
              efficiency, and better employee experiences. In today's
              digital-first business environment, investing in HR software is
              a strategic decision that drives long-term success.
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
              👉 Try NEXHRMS Free
            </Anchor>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog2;