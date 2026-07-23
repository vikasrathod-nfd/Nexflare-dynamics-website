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

const Blog1 = () => {
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

  const Formula = ({ children }) => (
    <Box
      style={{
        background: colors.formulaBg,
        border: `1px solid ${colors.formulaBorder}`,
        borderRadius: 10,
        padding: "16px 20px",
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Box
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: teal,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 15,
          flexShrink: 0,
        }}
      >
        =
      </Box>
      <Text fw={700} style={{ color: colors.heading, fontSize: 16, lineHeight: 1.6 }}>
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
          Payroll & Compliance Guide
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
          CTC vs Gross Salary vs{" "}
          <Text component="span" inherit style={gradientText}>
            In-Hand Salary
          </Text>
          : The Ultimate Payroll Guide for Indian Employees &amp; Companies
          (2026)
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
            src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1400&h=560&fit=crop&auto=format&q=80"
            alt="Woman reviewing cash and payslip, illustrating salary and payroll concepts"
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
          <SectionHeading>
            Introduction: Why Salary Structure Clarity Matters More Than Ever
            in 2026
          </SectionHeading>
          <Text fw={700} size="lg" mb={20} style={{ color: colors.heading }}>
            Understanding CTC for Better Financial Planning
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            If you work in HR, you already know the drill.
            <br />
            A new hire joins, sees their first payslip… and the DMs start:
          </Text>

          <Box
            style={{
              background: colors.quoteBg,
              borderLeft: `4px solid ${teal}`,
              borderRadius: 8,
              padding: "16px 20px",
              margin: "20px 0",
            }}
          >
            <Text fs="italic" style={{ color: colors.body, lineHeight: 1.8 }}>
              "CTC 6 lakh bola tha. Salary 50,000 nahi aa rahi hai. Yeh kya
              hai?"
            </Text>
          </Box>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            This confusion has been around for years, and in 2025, it's still
            one of the biggest disconnects between HR teams and employees.
            With compliance rules tightening and payroll audits becoming more
            frequent, companies can no longer afford vague salary
            communication.
          </Text>
          <Text mb={8} style={{ color: colors.body, lineHeight: 1.8 }}>
            This guide breaks down the three most commonly misunderstood
            salary terms —{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              CTC, Gross Salary, and In-Hand Salary
            </Text>{" "}
            — in the simplest way possible. If you're an employer, HR
            manager, or an employee trying to decode your payslip, this is
            for you.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="Charts and paperwork used to track salary and financial goals"
            caption="Tracking pay structure clearly protects both employees and employers."
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 1. CTC */}
        <Box mb={48}>
          <SectionHeading n={1}>What Exactly Is CTC? (Cost to Company)</SectionHeading>

          <Text
            component="span"
            fw={800}
            style={{
              display: "inline-block",
              background: "#fde68a",
              color: "#0a0a0a",
              padding: "4px 10px",
              borderRadius: 4,
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Understanding the Importance of CTC in Salary Structure
          </Text>

          <Text mt={20} mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            CTC is basically the{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              total annual cost
            </Text>{" "}
            a company spends on an employee.
            <br />
            It's not the salary — it's the entire investment.
          </Text>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            A lot of people assume CTC = In-hand salary.
            <br />
            That's where the confusion begins.
          </Text>
          <Text mb={12} style={{ color: colors.body }}>
            A typical CTC may include:
          </Text>

          <Box mb={20}>
            {[
              "Basic salary",
              "HRA, DA, Special Allowance",
              "Employer PF",
              "Employer ESI",
              "Gratuity",
              "Insurance benefits",
              "Bonuses & incentives",
              "Training costs",
              "Statutory contributions",
              "Company perks (like meals, travel, wellness, etc.)",
            ].map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </Box>

          <Text mb={4} style={{ color: colors.body }}>
            In short:
          </Text>
          <Formula>
            CTC = Direct Benefits + Indirect Benefits + Employer Contributions
          </Formula>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            And no — the employee doesn't get all of this in their bank
            account.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 2. Gross Salary */}
        <Box mb={48}>
          <SectionHeading n={2}>What Is Gross Salary?</SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Gross Salary is much closer to the employee's actual earnings but
            still not the final number.
          </Text>
          <Text mb={12} style={{ color: colors.body }}>
            Gross Salary includes:
          </Text>

          <Box mb={20}>
            {[
              "Basic pay",
              "HRA",
              "DA",
              "Conveyance / Travel Allowance",
              "Special Allowance",
              "Medical allowance",
              "Bonuses (where applicable)",
            ].map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </Box>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            The difference between{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              CTC
            </Text>{" "}
            and{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              Gross
            </Text>{" "}
            is all the employer-side contributions.
          </Text>
          <Formula>
            Gross Salary = CTC – Employer PF/ESI/Gratuity + other employer
            costs
          </Formula>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Think of Gross as the "salary before deductions."
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 3. In-Hand Salary */}
        <Box mb={48}>
          <SectionHeading n={3}>What Is In-Hand Salary? (Take-Home Salary)</SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            This is the part people care about the most — the amount that
            actually reaches the bank.
          </Text>
          <Formula>In-Hand Salary = Gross Salary – Employee Deductions</Formula>
          <Text mb={12} style={{ color: colors.body }}>
            These deductions usually include:
          </Text>

          <Box mb={20}>
            {[
              "Employee PF",
              "Employee ESI",
              "Professional Tax",
              "TDS / Income Tax",
              "Loan recoveries",
              "Salary advances",
              "Any other deductions",
            ].map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            This is the real monthly salary employees receive.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 4. Example */}
        <Box mb={48}>
          <SectionHeading n={4}>A Simple Example (2025 Scenario)</SectionHeading>
          <Text mb={16} style={{ color: colors.body }}>
            Let's assume:
          </Text>

          <Box
            style={{
              background: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: 14,
              padding: "24px 28px",
              marginBottom: 20,
            }}
          >
            <Text fw={700} mb={2} style={{ color: colors.heading }}>
              CTC: ₹6,00,000 per year
            </Text>
            <Text mb={18} style={{ color: colors.body }}>
              (₹50,000 per month)
            </Text>

            <Text fw={700} mb={10} style={{ color: colors.heading }}>
              Employer-side deductions (employee does NOT receive this):
            </Text>
            <Bullet>Employer PF: ₹1,800</Bullet>
            <Bullet>Employer ESI: ₹0–750</Bullet>
            <Bullet>Gratuity: ₹2,000</Bullet>
            <Bullet>Other benefits: ₹1,000</Bullet>

            <Box mt={18} mb={4}>
              <Text fw={700} style={{ color: colors.heading }}>
                Gross Salary = ₹50,000 – ₹5,500
              </Text>
              <Text fw={800} style={{ color: teal }}>
                = ₹44,500
              </Text>
            </Box>

            <Text fw={700} mt={18} mb={10} style={{ color: colors.heading }}>
              Employee-side deductions:
            </Text>
            <Bullet>Employee PF: ₹1,800</Bullet>
            <Bullet>Professional Tax: ₹200</Bullet>
            <Bullet>TDS (example): ₹1,000</Bullet>

            <Text fw={800} mt={18} style={{ color: teal, fontSize: 18 }}>
              In-Hand Salary = ₹44,500 – ₹3,000 = ~₹41,500
            </Text>
          </Box>

          <Text mb={8} style={{ color: colors.body, lineHeight: 1.8 }}>
            This is why many employees feel their take-home is "less than
            expected."
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1746221331496-a87689fc8eb9?w=1200&h=460&fit=crop&auto=format&q=80"
            alt="Calculator and office supplies used for salary calculations"
            caption="Getting the breakup right, every payroll cycle, without manual errors."
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 5. Transparency */}
        <Box mb={48}>
          <SectionHeading n={5}>
            Why Payroll Transparency Is Non-Negotiable in 2025
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body }}>
            Here's what happens when salary structures are unclear:
          </Text>

          <Box mb={20}>
            {[
              "Confusion during onboarding",
              "Unhappy employees",
              "Friction during appraisal and exit",
              "Compliance complications",
              "Unnecessary disputes",
            ].map((item) => (
              <Check key={item}>{item}</Check>
            ))}
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            With new labour codes coming in, PF, gratuity, and tax rules are
            all under scrutiny. Transparent payroll is no longer optional —
            it's essential.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 6. Mistakes */}
        <Box mb={48}>
          <SectionHeading n={6}>
            The Most Common Payroll Mistakes (Still Happening in 2025)
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body }}>
            Even large companies continue to make these mistakes:
          </Text>

          <Box mb={20}>
            {[
              'Showing CTC as the "annual salary"',
              "Hiding employer contributions inside gross",
              "Delaying TDS updates when employees submit late proofs",
              "Running payroll manually on Excel",
              "No standard salary structure",
              "Communicating only the take-home salary during onboarding",
            ].map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Each one of these adds unnecessary stress to HR and
            dissatisfaction to employees.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 7. NEXHRMS CTA */}
        <Box mb={48}>
          <SectionHeading n={7}>
            How NEXHRMS Fixes All Payroll Confusion Instantly
          </SectionHeading>

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
                NEXHRMS automates
              </Text>{" "}
              the entire salary structure and compliance process.
            </Text>
            <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
              Everything is calculated accurately — every time.
            </Text>

            <Text mb={10} style={{ color: colors.body }}>
              With NEXHRMS, businesses get:
            </Text>

            <Box mb={20}>
              {[
                "Automatic salary breakup (CTC → Gross → Net)",
                "Auto PF, ESI, PT & TDS calculation",
                "Error-free payslips",
                "Auto-generated PF/ESI/LWF reports",
                "Zero manual mistakes",
                "Employees can view salary details anytime",
              ].map((item) => (
                <Check key={item}>{item}</Check>
              ))}
            </Box>

            <Text mb={20} style={{ color: colors.body, lineHeight: 1.8 }}>
              This means less HR workload and better employee satisfaction.
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
              👉 Explore Smart Payroll Automation
            </Anchor>
          </Box>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Conclusion */}
        <Box>
          <SectionHeading>
            Conclusion:{" "}
            <Text component="span" inherit style={gradientText}>
              Clear Payroll = Happier Teams + Stronger HR
            </Text>
          </SectionHeading>
          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Understanding the difference between{" "}
            <Text component="span" fw={700} inherit style={{ color: colors.heading }}>
              CTC, Gross, and In-Hand salary
            </Text>{" "}
            is crucial for every Indian company.
            <br />
            When salary structures are transparent, employees feel confident
            and HR teams work without confusion.
          </Text>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            If your organization is still manually calculating salary every
            month, 2025 is the perfect year to switch to automation and build
            a more trustworthy payroll system.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog1;