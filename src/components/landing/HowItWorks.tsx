import { MessageSquare, Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/landing/SectionHeading";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Describe Your Idea",
    body: "Tell the AI what you want to build in natural language.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI Builds It",
    body: "AI transforms your idea into a complete application interface.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Launch Your Product",
    body: "Preview, refine, and prepare your project for deployment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps from thought to interface."
        subtitle="No boilerplate, no setup rituals. Just a conversation that ends in a product."
      />

      <div className="relative mt-14 grid gap-5 md:grid-cols-3">
        <div className="pointer-events-none absolute inset-x-[16%] top-16 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-violet/40"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-2xl border border-border bg-surface-2 text-violet transition-colors group-hover:border-violet/40">
                <s.icon className="size-5" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">Step {s.n}</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
