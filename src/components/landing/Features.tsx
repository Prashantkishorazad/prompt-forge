import {
  Blocks,
  Gauge,
  MonitorSmartphone,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Development",
    body: "Build interfaces through natural language.",
    span: "md:col-span-3 lg:col-span-2 lg:row-span-2",
    feature: true,
  },
  {
    icon: Gauge,
    title: "Instant Preview",
    body: "See your application take shape in real time.",
    span: "md:col-span-3 lg:col-span-2",
  },
  {
    icon: RefreshCw,
    title: "Smart Iteration",
    body: "Continue improving your project through conversation.",
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive by Default",
    body: "Every generated interface works across devices.",
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    icon: Blocks,
    title: "Modern Components",
    body: "Beautiful UI components and layouts automatically generated.",
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    icon: Zap,
    title: "Fast Workflow",
    body: "Go from idea to interface dramatically faster.",
    span: "md:col-span-6 lg:col-span-1",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Features"
        title="A builder that behaves like a senior team."
        subtitle="Everything you need between the first sentence and a shippable interface."
      />

      <div className="mt-14 grid auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-violet/40",
              f.span,
            )}
          >
            {f.feature && (
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-56 halo opacity-70" />
            )}
            <span className="relative grid size-10 place-items-center rounded-xl border border-border bg-surface-2 text-violet">
              <f.icon className="size-4.5" />
            </span>
            <div className="relative mt-8">
              <h3
                className={cn(
                  "font-semibold",
                  f.feature ? "text-2xl sm:text-3xl" : "text-lg",
                )}
              >
                {f.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
