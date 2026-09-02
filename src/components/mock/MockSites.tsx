import type { PreviewKind } from "@/lib/site";

/* Mock website previews rendered inside the builder's live preview frame. */

function Bar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5 text-[10px] text-muted-foreground">
      <span className="font-display text-[11px] font-semibold text-foreground">{label}</span>
      <span className="hidden gap-3 sm:flex">
        <span>Shop</span>
        <span>New</span>
        <span>About</span>
      </span>
      <span className="rounded-full bg-foreground/90 px-2.5 py-1 text-[9px] font-medium text-background">
        Cart
      </span>
    </div>
  );
}

function Swatch({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="h-full w-full"
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    />
  );
}

export function SneakerSite() {
  return (
    <div className="h-full overflow-hidden bg-background">
      <Bar label="VELOCE" />
      <div className="relative h-28 overflow-hidden sm:h-36">
        <Swatch from="oklch(0.35 0.12 292)" to="oklch(0.22 0.06 250)" />
        <div className="absolute inset-0 flex flex-col justify-end gap-1 p-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
            Spring drop 26
          </p>
          <h3 className="max-w-[16ch] font-display text-lg font-semibold leading-tight text-foreground sm:text-2xl">
            Premium sneakers, engineered for motion.
          </h3>
          <div className="mt-1 flex gap-2">
            <span className="rounded-full bg-foreground px-3 py-1 text-[9px] font-medium text-background">
              Shop the drop
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-[9px] text-muted-foreground">
              Lookbook
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          ["oklch(0.6 0.19 292)", "oklch(0.4 0.14 260)"],
          ["oklch(0.55 0.16 200)", "oklch(0.35 0.1 250)"],
          ["oklch(0.6 0.16 30)", "oklch(0.4 0.12 350)"],
        ].map(([a, b], i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border/60 bg-surface">
            <div className="h-12 sm:h-16">
              <Swatch from={a} to={b} />
            </div>
            <div className="space-y-1 p-2">
              <p className="text-[9px] font-medium text-foreground">Runner 0{i + 1}</p>
              <p className="text-[9px] text-muted-foreground">${180 + i * 30}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSite() {
  return (
    <div className="flex h-full bg-background">
      <div className="hidden w-28 shrink-0 border-r border-border/60 p-3 sm:block">
        <div className="mb-4 h-2 w-12 rounded-full bg-foreground/70" />
        {["Overview", "Revenue", "Users", "Reports"].map((n) => (
          <div key={n} className="mb-2 rounded-md px-2 py-1 text-[9px] text-muted-foreground">
            {n}
          </div>
        ))}
      </div>
      <div className="flex-1 p-3">
        <h3 className="font-display text-sm font-semibold text-foreground">Overview</h3>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {["MRR", "Active", "Churn"].map((k, i) => (
            <div key={k} className="rounded-lg border border-border/60 bg-surface p-2">
              <p className="text-[8px] uppercase tracking-widest text-muted-foreground">{k}</p>
              <p className="font-display text-sm text-foreground">
                {["$48.2k", "12,904", "1.4%"][i]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-20 items-end gap-1 rounded-lg border border-border/60 bg-surface p-2 sm:h-28">
          {[40, 62, 48, 75, 58, 88, 70, 96, 66, 84].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-brand-gradient"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CrmSite() {
  return (
    <div className="h-full bg-background p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-foreground">Pipeline</h3>
        <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[9px] text-primary-foreground">
          New deal
        </span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {["Qualified", "Proposal", "Won"].map((col, c) => (
          <div key={col} className="rounded-lg border border-border/60 bg-surface p-2">
            <p className="mb-2 text-[9px] uppercase tracking-widest text-muted-foreground">{col}</p>
            {Array.from({ length: 3 - c }).map((_, i) => (
              <div key={i} className="mb-1.5 rounded-md border border-border/60 bg-surface-2 p-1.5">
                <div className="h-1.5 w-3/4 rounded-full bg-foreground/40" />
                <div className="mt-1 h-1.5 w-1/2 rounded-full bg-foreground/20" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortfolioSite() {
  return (
    <div className="h-full bg-background">
      <Bar label="ATELIER" />
      <div className="p-4">
        <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          Independent designer
        </p>
        <h3 className="mt-1 max-w-[18ch] font-display text-xl font-semibold leading-tight text-foreground">
          Selected work, 2019 — 2026.
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            ["oklch(0.5 0.16 292)", "oklch(0.3 0.08 250)"],
            ["oklch(0.45 0.1 165)", "oklch(0.28 0.06 220)"],
            ["oklch(0.5 0.14 30)", "oklch(0.3 0.08 320)"],
            ["oklch(0.42 0.09 250)", "oklch(0.25 0.05 275)"],
          ].map(([a, b], i) => (
            <div key={i} className="h-14 overflow-hidden rounded-xl">
              <Swatch from={a} to={b} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockSite({ kind }: { kind: PreviewKind }) {
  if (kind === "dashboard") return <DashboardSite />;
  if (kind === "crm") return <CrmSite />;
  if (kind === "portfolio") return <PortfolioSite />;
  return <SneakerSite />;
}
