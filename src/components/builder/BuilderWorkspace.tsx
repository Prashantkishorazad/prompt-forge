import { useEffect, useMemo, useState } from "react";
import {
  Check,
  Compass,
  FileCode2,
  Folder,
  HelpCircle,
  Home,
  LayoutTemplate,
  Loader2,
  Mic,
  Monitor,
  Paperclip,
  Rocket,
  Send,
  Settings,
  Share2,
  Smartphone,
  Tablet,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { Skeleton } from "@/components/ui/skeleton";
import { MockSite } from "@/components/mock/MockSites";
import { buildSteps, type PreviewKind } from "@/lib/site";
import { cn } from "@/lib/utils";

type Device = "desktop" | "tablet" | "mobile";

const deviceWidth: Record<Device, string> = {
  desktop: "100%",
  tablet: "620px",
  mobile: "340px",
};

const projectTitle: Record<PreviewKind, string> = {
  sneakers: "AI Ecommerce Platform",
  dashboard: "SaaS Analytics Suite",
  crm: "Revenue CRM Platform",
  portfolio: "Studio Portfolio",
};

const aiReply: Record<PreviewKind, string> = {
  sneakers:
    "Got it. I'll create a premium ecommerce experience with a modern storefront, product catalog, shopping experience, and responsive design.",
  dashboard:
    "On it. I'll assemble an analytics workspace with KPI cards, revenue charts, and a focused navigation shell.",
  crm: "Understood. I'll build a pipeline-first CRM with deal stages, activity tracking, and a clean data layout.",
  portfolio:
    "Perfect. I'll craft an editorial portfolio with a bold type hierarchy, project grid, and quiet motion.",
};

const userPrompt: Record<PreviewKind, string> = {
  sneakers: "Create a modern ecommerce website for premium sneakers.",
  dashboard: "Build a SaaS analytics dashboard for a subscription business.",
  crm: "Build a CRM platform for a B2B sales team.",
  portfolio: "Create a minimal portfolio website for a design studio.",
};

const navItems = [
  { label: "Home", icon: Home },
  { label: "My Projects", icon: Folder },
  { label: "Templates", icon: LayoutTemplate },
  { label: "Deployments", icon: Rocket },
];

export function BuilderWorkspace({
  kind,
  onKindChange,
  className,
}: {
  kind: PreviewKind;
  onKindChange?: (k: PreviewKind) => void;
  className?: string;
}) {
  const [device, setDevice] = useState<Device>("desktop");
  const [step, setStep] = useState(0);
  const [rendered, setRendered] = useState(false);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setStep(0);
    setRendered(false);
    const timers = buildSteps.map((_, i) =>
      setTimeout(() => setStep(i + 1), 700 * (i + 1)),
    );
    const done = setTimeout(() => setRendered(true), 700 * buildSteps.length + 500);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [kind]);

  const currentStepLabel = useMemo(
    () => (step >= buildSteps.length ? "Generating storefront…" : `${buildSteps[step]}…`),
    [step],
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-surface shadow-panel",
        className,
      )}
    >
      <div className="flex h-[42rem] max-h-[80vh]">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 flex-col border-r border-border bg-sidebar p-3 lg:flex">
          <div className="px-1.5 py-2">
            <Logo compact />
          </div>
          <nav className="mt-4 space-y-0.5">
            {navItems.map((n, i) => (
              <button
                key={n.label}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                  i === 1
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                )}
              >
                <n.icon className="size-4" />
                {n.label}
              </button>
            ))}
          </nav>

          <p className="mt-6 px-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Personal Workspace
          </p>
          <button className="mt-2 flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground">
            <Compass className="size-4" />
            My Workspace
          </button>

          <div className="mt-auto space-y-0.5 border-t border-sidebar-border pt-3">
            <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground hover:text-foreground">
              <Settings className="size-4" /> Settings
            </button>
            <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground hover:text-foreground">
              <HelpCircle className="size-4" /> Help
            </button>
            <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-sidebar-border bg-surface-2/60 p-2">
              <span className="grid size-7 place-items-center rounded-full bg-brand-gradient text-[10px] font-semibold text-primary-foreground">
                AR
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs text-foreground">Aria Rhodes</p>
                <p className="truncate text-[10px] text-muted-foreground">Pro plan</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
              <FileCode2 className="size-3.5 shrink-0" />
              <span className="truncate">
                Projects <span className="px-1 text-border">/</span>
                <span className="text-foreground">{projectTitle[kind]}</span>
              </span>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1 text-[11px] text-muted-foreground sm:inline-flex">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
              </span>
              {rendered ? "Ready" : "Building"}
            </span>
            <div className="flex items-center gap-1.5">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Preview
              </Button>
              <Button
                variant="subtle"
                size="sm"
                onClick={() => toast.success("Share link copied to clipboard")}
              >
                <Share2 className="size-3.5" /> Share
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={() => toast("Deploying preview build…", { description: "Demo only." })}
              >
                Deploy
              </Button>
            </div>
          </header>

          <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
            {/* Chat */}
            <section className="hidden min-h-0 flex-col border-r border-border lg:flex">
              <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground">
                  {userPrompt[kind]}
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-violet/25 bg-violet/10 px-3.5 py-2.5 text-sm text-foreground">
                  {aiReply[kind]}
                </div>

                <div className="space-y-2 rounded-2xl border border-border bg-surface-2/50 p-3">
                  {buildSteps.map((s, i) => (
                    <AnimatePresence key={s} mode="wait">
                      {i < step ? (
                        <motion.div
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <Check className="size-3.5 text-mint" />
                          {s}
                        </motion.div>
                      ) : (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground/40">
                          <Loader2
                            className={cn("size-3.5", i === step && "animate-spin text-violet")}
                          />
                          {s}
                        </div>
                      )}
                    </AnimatePresence>
                  ))}
                  <div className="flex items-center gap-2 border-t border-border/70 pt-2 text-xs text-foreground">
                    <span className="size-1.5 animate-pulse rounded-full bg-violet" />
                    {currentStepLabel}
                  </div>
                </div>
              </div>

              <div className="border-t border-border p-3">
                <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-surface-2/60 px-2.5 py-1.5">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Describe what you want to change..."
                    className="h-8 min-w-0 flex-1 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
                  />
                  <button className="grid size-7 place-items-center rounded-lg text-muted-foreground hover:text-foreground">
                    <Paperclip className="size-3.5" />
                  </button>
                  <button className="grid size-7 place-items-center rounded-lg text-muted-foreground hover:text-foreground">
                    <Mic className="size-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (!draft.trim()) return;
                      toast.success("Iteration queued", { description: draft });
                      setDraft("");
                    }}
                    className="grid size-7 place-items-center rounded-lg bg-brand-gradient text-primary-foreground"
                  >
                    <Send className="size-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Preview */}
            <section className="flex min-h-0 flex-col bg-background/60">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  {(["desktop", "tablet", "mobile"] as Device[]).map((d) => {
                    const Icon = d === "desktop" ? Monitor : d === "tablet" ? Tablet : Smartphone;
                    return (
                      <button
                        key={d}
                        aria-label={d}
                        onClick={() => setDevice(d)}
                        className={cn(
                          "grid size-7 place-items-center rounded-lg border transition-colors",
                          device === d
                            ? "border-violet/50 bg-violet/15 text-foreground"
                            : "border-transparent text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <Icon className="size-3.5" />
                      </button>
                    );
                  })}
                </div>
                <div className="hidden gap-1.5 sm:flex">
                  {(["sneakers", "dashboard", "crm", "portfolio"] as PreviewKind[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => onKindChange?.(k)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[10px] capitalize transition-colors",
                        kind === k
                          ? "border-violet/50 bg-violet/15 text-foreground"
                          : "border-border text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-auto p-4">
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  style={{ width: deviceWidth[device] }}
                  className="mx-auto h-full min-h-[18rem] overflow-hidden rounded-2xl border border-border bg-surface shadow-panel"
                >
                  <AnimatePresence mode="wait">
                    {rendered ? (
                      <motion.div
                        key={kind}
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="h-full"
                      >
                        <MockSite kind={kind} />
                      </motion.div>
                    ) : (
                      <motion.div key="skeleton" exit={{ opacity: 0 }} className="space-y-3 p-4">
                        <Skeleton className="h-6 w-1/3 bg-surface-2" />
                        <Skeleton className="h-28 w-full bg-surface-2" />
                        <div className="grid grid-cols-3 gap-3">
                          <Skeleton className="h-20 bg-surface-2" />
                          <Skeleton className="h-20 bg-surface-2" />
                          <Skeleton className="h-20 bg-surface-2" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
