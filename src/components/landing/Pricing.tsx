import { Check } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month",
    features: ["Limited projects", "AI generation", "Community support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced AI",
      "Priority generation",
      "Custom domains",
      "Premium support",
    ],
    cta: "Start Building",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    features: [
      "Team collaboration",
      "Advanced security",
      "Dedicated support",
      "Custom infrastructure",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing({ onStartBuilding }: { onStartBuilding: () => void }) {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple plans that scale with the build."
        subtitle="Start free. Upgrade when your ideas start shipping."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              "relative flex flex-col rounded-3xl border p-7",
              t.popular
                ? "border-violet/50 bg-surface shadow-glow lg:-translate-y-3"
                : "border-border bg-surface",
            )}
          >
            {t.popular && (
              <span className="absolute -top-3 left-7 rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-semibold">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.period}</span>
            </p>
            <ul className="mt-7 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-mint" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={t.popular ? "hero" : "subtle"}
              size="lg"
              className="mt-8 w-full"
              onClick={() => {
                if (t.name === "Pro") return onStartBuilding();
                toast.success(
                  t.name === "Enterprise"
                    ? "Our team will reach out shortly"
                    : "Free workspace ready",
                  { description: "Frontend demo — no account was created." },
                );
              }}
            >
              {t.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      <div
        id="enterprise"
        className="mt-16 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-surface p-8 sm:flex-row sm:items-center"
      >
        <div>
          <h3 className="text-xl font-semibold">Enterprise-grade from day one</h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            SSO, audit trails, private model routing, and dedicated build capacity for teams that
            ship under scrutiny.
          </p>
        </div>
        <Button
          variant="subtle"
          size="lg"
          onClick={() => toast("Enterprise brief sent", { description: "Demo only." })}
        >
          Talk to sales
        </Button>
      </div>
    </section>
  );
}
