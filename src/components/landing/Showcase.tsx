import { ArrowRight, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { DashboardSite } from "@/components/mock/MockSites";

export function Showcase() {
  return (
    <section id="product" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 halo opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Showcase"
          title="From prompt to product."
          subtitle="One sentence in. A working interface out. Watch the transformation."
        />

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.35fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-surface p-5 shadow-panel"
          >
            <div className="mb-4 flex gap-1.5">
              {["oklch(0.6 0.19 25)", "oklch(0.75 0.15 85)", "oklch(0.72 0.14 160)"].map((c) => (
                <span key={c} className="size-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Prompt
            </p>
            <p className="mt-3 font-display text-lg leading-snug text-foreground">
              “Build a modern project management platform for creative teams.”
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 animate-pulse rounded-full bg-violet" />
              Sent to the build agent
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mx-auto grid size-28 place-items-center"
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-violet/40"
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute inset-4 rounded-full border border-azure/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <span className="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
              <Cpu className="size-6" />
            </span>
            <ArrowRight className="absolute -right-2 hidden size-4 text-muted-foreground lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-border bg-surface shadow-panel"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <span className="size-2 rounded-full bg-mint" />
              <p className="text-[11px] text-muted-foreground">
                studio-os.app <span className="text-border">/</span> generated in 42s
              </p>
            </div>
            <div className="h-72">
              <DashboardSite />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
