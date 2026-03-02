import { motion } from "framer-motion";
import jasonHeader from "@/assets/jason-west-header.webp";
import caseStudyBefore from "@/assets/case-study-before.webp";
import caseStudyAfter from "@/assets/case-study-after.webp";
import caseStudyProjects from "@/assets/case-study-projects.webp";

/* ─── Inline SVG Graphics ─── */

function AttentionIcon() {
  return (
    <motion.svg
      width="48" height="48" viewBox="0 0 48 48" fill="none"
      whileHover={{ scale: 1.15, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
    >
      <rect x="4" y="12" width="6" height="24" rx="2" className="fill-primary/60" />
      <rect x="14" y="8" width="6" height="32" rx="2" className="fill-primary/80" />
      <rect x="24" y="16" width="6" height="20" rx="2" className="fill-primary/50" />
      <rect x="34" y="6" width="6" height="36" rx="2" className="fill-primary" />
      <motion.circle
        cx="37" cy="10" r="3" className="fill-primary"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

function FeatureEmphasisIcon() {
  return (
    <motion.svg
      width="48" height="48" viewBox="0 0 48 48" fill="none"
      whileHover={{ scale: 1.15, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
    >
      <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-primary/40" strokeWidth="2" fill="none" />
      <rect x="12" y="12" width="24" height="24" rx="3" className="stroke-primary/70" strokeWidth="2" fill="none" />
      <motion.rect
        x="18" y="18" width="12" height="12" rx="2" className="fill-primary/80"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}

function VisualConsistencyIcon() {
  return (
    <motion.svg
      width="48" height="48" viewBox="0 0 48 48" fill="none"
      whileHover={{ scale: 1.15, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
    >
      <rect x="4" y="14" width="12" height="20" rx="2" className="fill-primary/50" />
      <rect x="18" y="14" width="12" height="20" rx="2" className="fill-primary/70" />
      <rect x="32" y="14" width="12" height="20" rx="2" className="fill-primary/50" />
      <motion.line
        x1="4" y1="24" x2="44" y2="24" className="stroke-primary" strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  );
}

function GrowthGraphic() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full max-w-md mx-auto cursor-pointer"
    >
      <svg viewBox="0 0 400 160" fill="none" className="w-full h-auto">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="40" y1={20 + i * 30} x2="380" y2={20 + i * 30}
            className="stroke-border/30" strokeWidth="1" />
        ))}
        {/* Baseline area */}
        <motion.path
          d="M40,140 L40,120 Q100,118 140,110 Q180,100 220,95 Q260,85 300,70 Q340,55 380,40 L380,140 Z"
          className="fill-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Growth line */}
        <motion.path
          d="M40,120 Q100,118 140,110 Q180,100 220,95 Q260,85 300,70 Q340,55 380,40"
          className="stroke-primary" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        {/* End dot */}
        <motion.circle
          cx="380" cy="40" r="4" className="fill-primary"
          animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}

/* ─── Section ─── */

export function CaseStudySection() {
  const structuralBlocks = [
    { icon: <AttentionIcon />, label: "Attention Reinforcement", desc: "Visual shifts placed at cognitive fatigue points" },
    { icon: <FeatureEmphasisIcon />, label: "Feature Emphasis", desc: "Key moments isolated with framing & motion" },
    { icon: <VisualConsistencyIcon />, label: "Visual Consistency", desc: "Unified style, pacing, and sequencing" },
  ];

  return (
    <section className="section-padding">
      <div className="container-main">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            A Real Client Example
          </h2>
        </motion.div>

        {/* Channel Header Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <img src={jasonHeader} alt="Jason West YouTube Channel" className="w-full h-auto rounded-xl object-cover" loading="lazy" />
        </motion.div>

        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">Context</h3>
          <p className="text-muted-foreground leading-relaxed">
            This is a business-focused YouTube channel producing sponsored software reviews.
            I handled long-form editing across ongoing uploads, with the goal of improving clarity,
            pacing, and consistency while supporting a higher publishing cadence.
          </p>
        </motion.div>

        {/* ═══ PART 1 — The Performance Pattern We Noticed ═══ */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              The Performance Pattern We Noticed
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Despite a strong subscriber base (~450K at the time), performance varied significantly between uploads. Some videos performed well; others underdelivered relative to audience size.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                The content itself was solid. The gap wasn’t quality it was structural consistency.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-medium text-foreground">
                Three patterns stood out:
              </motion.p>
              <motion.ul initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="space-y-3 pl-1">
                {[
                  "Early value wasn’t always reinforced clearly, making it harder to anchor viewer expectations.",
                  "Screen-heavy breakdowns occasionally ran too long without visual shifts, reducing engagement.",
                  "Sponsor features were explained well, but key value points weren’t consistently emphasized.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                Individually, these weren’t major issues. Together, they created volatility in retention and viewer return behavior.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ═══ PART 2 — What We Changed Structurally ═══ */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              What We Changed Structurally
            </h3>
          

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-12">
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                The goal wasn't to "edit better." It was to redesign how attention and trust were reinforced throughout each video.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="font-medium text-foreground">
                Three structural changes were implemented:
              </motion.p>
            </div>

            {/* 3 structural changes */}
            <div className="space-y-10 mb-12">
              {[
                {
                  title: "Engineered Attention Flow",
                  paragraphs: [
                    "Intentional visual resets were introduced at key fatigue points to maintain engagement across longer screen-heavy segments.",
                  ],
                },
                {
                  title: "Sponsor Feature Emphasis",
                  paragraphs: [
                    "Core product features were visually isolated at the moment of explanation increasing clarity and memorability without disrupting pacing.",
                  ],
                },
                {
                  title: "Systemized Brand Consistency",
                  paragraphs: [
                    "A unified visual rhythm, graphic style, and sequencing framework strengthened perceived authority and encouraged viewer return behavior.",
                  ],
                },
              ].map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="pl-5 border-l-2 border-primary/30"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">{block.title}</h4>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    {block.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Graphic blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {structuralBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-6 text-center cursor-pointer group"
                >
                  <div className="flex justify-center mb-3">{block.icon}</div>
                  <p className="text-sm font-semibold text-foreground mb-1">{block.label}</p>
                  <p className="text-xs text-muted-foreground">{block.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ═══ PART 3 — Structured for Consistency ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12 mb-28"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              Structured for Consistency
            </motion.h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Performance improvements only matter if they can be sustained.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                To support increasing sponsor volume and publishing cadence, a structured production workflow was implemented:
              </motion.p>
              <motion.ul initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-2 pl-1">
                {[
                  "Videos were batched and sequenced around sponsor timelines and release goals.",
                  "Clear project tracking kept assets, revisions, and deadlines aligned.",
                  "A standardized editing framework reduced turnaround time while maintaining structural integrity across uploads.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                As sponsor demand increased, output remained reliable without sacrificing pacing, clarity, or brand consistency.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-medium text-foreground">
                The result wasn’t just stronger videos. It was stable execution that supported long-term growth.
              </motion.p>
            </div>
          </div>

          {/* Project folders image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={caseStudyProjects} alt="18 project folders showing consistent delivery" className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══ PART 4 — What Changed ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-28"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              What Changed
            </motion.h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                After implementing the structural and operational shifts:
              </motion.p>
              {[
                { bold: "Average views per upload increased ~2x", text: "Performance became more consistent across videos — reducing heavy fluctuations between uploads." },
                { bold: "Subscriber growth moved from ~450K to 600K+", text: "While multiple factors influence growth, improved structural consistency supported sustained audience expansion." },
                { bold: "Publishing cadence stabilized alongside sponsor volume", text: "Recurring sponsored content was integrated without performance degradation." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <p className="font-semibold text-foreground">{item.bold}</p>
                  <p>{item.text}</p>
                </motion.div>
              ))}
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="font-medium text-foreground pt-2">
                The impact wasn't just higher peaks.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-foreground">
                It was a stronger performance floor creating predictability instead of volatility.
              </motion.p>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="cursor-pointer"
            >
              <span className="inline-block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Before
              </span>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={caseStudyBefore} alt="Channel performance before working together" className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="cursor-pointer"
            >
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                After
              </span>
              <div className="rounded-xl overflow-hidden border border-primary/30">
                <img src={caseStudyAfter} alt="Channel performance after working together" className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══ PART 5 — Why This Matters ═══ */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-28"
          >
            {/* Chart Left */}
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GrowthGraphic />
              </motion.div>
            </div>

            {/* Text Right */}
            <div className="w-full md:w-1/2">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              >
                Why This Matters
              </motion.h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>More consistent performance creates predictability.</p>
                <p>Predictability strengthens sponsor confidence.</p>
                <p>
                  And sponsor confidence supports repeat partnerships and higher
                  publishing cadence without performance drop-off.
                </p>

                <p className="font-medium text-foreground pt-2">
                  This wasn’t just growth.
                </p>
                <p className="text-foreground">
                  It was operational stability that made scaling sustainable instead of
                  reactive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}