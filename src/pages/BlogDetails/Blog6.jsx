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

const Blog6 = () => {
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

  const SubHeading = ({ children }) => (
    <Text fw={700} size="lg" mt={20} mb={14} style={{ color: colors.heading }}>
      {children}
    </Text>
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
        <Image src={src} alt={alt} h={280} fit="cover" />
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
          Developer Resources
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
          The Most{" "}
          <Text component="span" inherit style={gradientText}>
            Versatile Programming Languages
          </Text>{" "}
          for Full-Stack Development in 2026
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
            alt="Developer analyzing data dashboards and market charts on screen"
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
          <FigureImage
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="Abstract illustration of a coding figure representing full-stack development"
          />
          <Text mt={24} style={{ color: colors.body, lineHeight: 1.8 }}>
            Full-stack development has become an indispensable skill in the
            tech world. It encompasses both front-end and back-end
            development, requiring developers to master a combination of
            languages, frameworks, and tools. But what are the most versatile
            programming languages that can streamline full-stack development
            in 2026? In this article, we'll explore the top choices, their
            advantages, and why they are the go-to options for developers
            worldwide.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 1. JavaScript */}
        <Box mb={48}>
          <SectionHeading n={1}>JavaScript</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            JavaScript remains the undisputed king of{" "}
            <Text component="span" fw={700} fs="italic" inherit style={{ color: colors.heading }}>
              full-stack development
            </Text>
            . With its universal application in both front-end and back-end,
            it's a must-know language for any aspiring developer.
          </Text>

          <SubHeading>Why Choose JavaScript?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Front-End Powerhouse">
              Frameworks like <InlineLink href="https://react.dev">React</InlineLink> and{" "}
              <InlineLink href="https://vuejs.org">Vue.js</InlineLink> make building dynamic
              user interfaces effortless.
            </LabeledBullet>
            <LabeledBullet label="Back-End Integration">
              Platforms like <InlineLink href="https://nodejs.org">Node.js</InlineLink> allow
              JavaScript to seamlessly handle server-side logic.
            </LabeledBullet>
            <LabeledBullet label="Community Support">
              JavaScript boasts a massive developer community, ensuring
              abundant resources and tutorials.
            </LabeledBullet>
          </Box>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            According to a{" "}
            <InlineLink href="https://survey.stackoverflow.co">2024 Stack Overflow survey</InlineLink>,
            JavaScript has been the most-used programming language for over a
            decade. This versatility ensures its continued dominance in
            full-stack development.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200&h=460&fit=crop&auto=format&q=80"
            alt="Hand interacting with holographic code on a laptop screen"
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 2. TypeScript */}
        <Box mb={48}>
          <SectionHeading n={2}>TypeScript</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            As a superset of JavaScript, TypeScript enhances your development
            process by adding static typing. This makes it a favorite for
            developers who prioritize scalability and maintainability.
          </Text>

          <SubHeading>Why Choose TypeScript?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Error Reduction">
              TypeScript's static typing catches errors at compile time,
              reducing debugging efforts.
            </LabeledBullet>
            <LabeledBullet label="Great for Large Projects">
              Its ability to define types makes it ideal for managing complex,
              large-scale applications.
            </LabeledBullet>
            <LabeledBullet label="Wide Framework Support">
              TypeScript integrates well with frameworks like{" "}
              <InlineLink href="https://angular.dev">Angular</InlineLink> and{" "}
              <InlineLink href="https://nestjs.com">NestJS</InlineLink>.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            The growing adoption of TypeScript is evident from{" "}
            <InlineLink href="https://octoverse.github.com">
              GitHub's annual Octoverse report
            </InlineLink>
            , which consistently lists it among the fastest-growing languages.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 3. Python */}
        <Box mb={48}>
          <SectionHeading n={3}>Python</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Python's simplicity and versatility make it a popular choice for
            full-stack development. Its extensive libraries and frameworks
            make it suitable for both web development and more advanced use
            cases like AI.
          </Text>

          <SubHeading>Why Choose Python?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Beginner-Friendly">
              Its intuitive syntax lowers the learning curve for new
              developers.
            </LabeledBullet>
            <LabeledBullet label="Powerful Frameworks">
              Frameworks like <InlineLink href="https://djangoproject.com">Django</InlineLink> and
              Flask expedite back-end development.
            </LabeledBullet>
            <LabeledBullet label="Cross-Domain Usability">
              Python's use in data science, machine learning, and automation
              makes it a versatile tool in any developer's arsenal.
            </LabeledBullet>
          </Box>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            Python's continued relevance is highlighted in TIOBE's 2025
            Index, where it consistently ranks as one of the most popular
            languages.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=460&fit=crop&auto=format&q=80"
            alt="Python code displayed on a screen"
            caption="Python"
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 4. Ruby */}
        <Box mb={48}>
          <SectionHeading n={4}>Ruby</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Ruby, coupled with the Rails framework, is known for its
            developer-friendly environment and rapid application development
            capabilities.
          </Text>

          <SubHeading>Why Choose Ruby?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Quick Prototyping">
              Ruby on Rails simplifies the development process, allowing for
              faster MVP creation.
            </LabeledBullet>
            <LabeledBullet label="Elegant Syntax">
              Ruby's syntax is designed to be readable and concise.
            </LabeledBullet>
            <LabeledBullet label="Active Community">
              A dedicated community ensures robust support and a plethora of
              libraries.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Though it has faced competition, Ruby remains a strong contender
            for startups looking to launch their products quickly.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 5. PHP */}
        <Box mb={48}>
          <SectionHeading n={5}>PHP</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Despite being one of the older languages, PHP continues to power
            a significant portion of the web, especially with content
            management systems like WordPress.
          </Text>

          <SubHeading>Why Choose PHP?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Web-Centric">
              PHP is optimized for web development and integrates seamlessly
              with HTML.
            </LabeledBullet>
            <LabeledBullet label="Mature Ecosystem">
              Frameworks like <InlineLink href="https://laravel.com">Laravel</InlineLink> make
              PHP relevant for modern full-stack applications.
            </LabeledBullet>
            <LabeledBullet label="Affordability">
              Open-source nature and low hosting costs make it an economical
              choice.
            </LabeledBullet>
          </Box>

          <Text mb={16} style={{ color: colors.body, lineHeight: 1.8 }}>
            PHP remains a practical option, especially for developers working
            on legacy systems or CMS-based websites.
          </Text>

          <FigureImage
            src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=1200&h=460&fit=crop&auto=format&q=80"
            alt="PHP logo on a dark background"
            caption="PHP"
          />
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 6. Go */}
        <Box mb={48}>
          <SectionHeading n={6}>Go (Golang)</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Go, developed by Google, is known for its performance and
            scalability, making it ideal for modern web applications.
          </Text>

          <SubHeading>Why Choose Go?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Concurrency">
              Built-in support for concurrent programming ensures efficient
              resource usage.
            </LabeledBullet>
            <LabeledBullet label="Simplicity">
              Go's clean syntax allows developers to write efficient code
              quickly.
            </LabeledBullet>
            <LabeledBullet label="Cloud-Native Development">
              Its compatibility with modern cloud platforms makes it a top
              choice for scalable applications.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Many companies, including <InlineLink href="https://www.docker.com">Docker</InlineLink> and{" "}
            <InlineLink href="https://kubernetes.io">Kubernetes</InlineLink>, rely on Go,
            showcasing its industrial applicability.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 7. Kotlin */}
        <Box mb={48}>
          <SectionHeading n={7}>Kotlin</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Kotlin is a modern, JVM-based language gaining traction in both
            mobile and server-side development.
          </Text>

          <SubHeading>Why Choose Kotlin?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Interoperability with Java">
              Kotlin can work seamlessly alongside existing Java codebases.
            </LabeledBullet>
            <LabeledBullet label="Modern Features">
              Null safety, extension functions, and coroutines make it a
              developer's dream.
            </LabeledBullet>
            <LabeledBullet label="Adoption in Frameworks">
              Frameworks like <InlineLink href="https://ktor.io">Ktor</InlineLink> simplify
              server-side development.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Kotlin's versatility ensures its rising adoption across web and
            mobile platforms.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 8. Rust */}
        <Box mb={48}>
          <SectionHeading n={8}>Rust</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Rust's focus on safety and performance makes it an excellent
            choice for building robust and secure web applications.
          </Text>

          <SubHeading>Why Choose Rust?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Memory Safety">
              Rust eliminates many common bugs through its ownership model.
            </LabeledBullet>
            <LabeledBullet label="Performance">
              Its low-level control allows for high-speed applications.
            </LabeledBullet>
            <LabeledBullet label="Web Assembly">
              Rust's compatibility with WebAssembly makes it a future-proof
              choice.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Rust is frequently praised by developers for its reliability, as
            shown in{" "}
            <InlineLink href="https://survey.stackoverflow.co">
              Stack Overflow's developer survey
            </InlineLink>
            , where it consistently ranks as the most loved language.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 9. C# */}
        <Box mb={48}>
          <SectionHeading n={9}>C#</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            C# is a versatile language widely used for enterprise-level
            full-stack development.
          </Text>

          <SubHeading>Why Choose C#?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Seamless Integration">
              Works well with the Microsoft ecosystem, including{" "}
              <InlineLink href="https://dotnet.microsoft.com/apps/aspnet">ASP.NET</InlineLink>.
            </LabeledBullet>
            <LabeledBullet label="Cross-Platform Development">
              The .NET Core framework enables cross-platform functionality.
            </LabeledBullet>
            <LabeledBullet label="Game Development Bonus">
              Its use in <InlineLink href="https://unity.com">Unity</InlineLink> adds
              versatility.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            C# remains a top choice for enterprises due to its reliability and
            robust framework support.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* 10. Dart */}
        <Box mb={48}>
          <SectionHeading n={10}>Dart</SectionHeading>
          <Text mb={4} style={{ color: colors.body, lineHeight: 1.8 }}>
            Dart, developed by Google, powers the Flutter framework, making it
            a solid choice for full-stack and{" "}
            <Text component="span" fw={700} fs="italic" inherit style={{ color: colors.heading }}>
              mobile apps development
            </Text>
            .
          </Text>

          <SubHeading>Why Choose Dart?</SubHeading>
          <Box mb={16}>
            <LabeledBullet label="Unified Development">
              Use a single codebase for web, mobile, and desktop apps.
            </LabeledBullet>
            <LabeledBullet label="Hot Reload">
              Flutter's hot reload speeds up development and debugging.
            </LabeledBullet>
            <LabeledBullet label="Google-Backed">
              Strong support and constant updates from Google.
            </LabeledBullet>
          </Box>

          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Dart's rise is directly tied to Flutter's growing popularity in
            cross-platform development.
          </Text>
        </Box>

        <Divider color={colors.divider} mb={40} />

        {/* Conclusion */}
        <Box>
          <SectionHeading>Conclusion</SectionHeading>
          <Text style={{ color: colors.body, lineHeight: 1.8 }}>
            Choosing the right language for full-stack development depends on
            your project requirements, team expertise, and scalability
            needs. While JavaScript and its derivatives dominate the field,
            newer entrants like Rust and Dart offer exciting possibilities.
            By understanding the strengths of each language, you can make
            informed decisions that align with your development goals.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog6;
