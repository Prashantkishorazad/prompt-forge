import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CrmSite, DashboardSite, PortfolioSite, SneakerSite } from "@/components/mock/MockSites";
import type { PreviewKind } from "@/lib/site";

const templates: {
  name: string;
  tag: string;
  kind: PreviewKind;
  Preview: () => React.JSX.Element;
}[] = [
  { name: "SaaS Dashboard", tag: "Analytics", kind: "dashboard", Preview: DashboardSite },
  { name: "Ecommerce Store", tag: "Retail", kind: "sneakers", Preview: SneakerSite },
  { name: "AI Chat App", tag: "Assistant", kind: "portfolio", Preview: PortfolioSite },
  { name: "CRM Platform", tag: "Sales", kind: "crm", Preview: CrmSite },
  { name: "Analytics Dashboard", tag: "Data", kind: "dashboard", Preview: DashboardSite },
  { name: "Portfolio Website", tag: "Personal", kind: "portfolio", Preview: PortfolioSite },
];

export function Templates({ onUse }: { onUse: (kind: PreviewKind, label: string) => void }) {
  return (
    <section id="templates" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Templates"
        title="Start with an idea."
        subtitle="Explore what you can create."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t, i) => (
          <motion.button
            key={t.name + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            whileHover={{ scale: 1.015 }}
            onClick={() => {
              onUse(t.kind, `Build a ${t.name.toLowerCase()}`);
              toast.success(`${t.name} template loaded`);
            }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface text-left transition-colors hover:border-violet/40"
          >
            <div className="pointer-events-none h-44 overflow-hidden border-b border-border/70">
              <div className="h-[22rem] w-[150%] origin-top-left scale-[0.66]">
                <t.Preview />
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.tag}</p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-medium text-primary-foreground shadow-glow">
                Use Template →
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
