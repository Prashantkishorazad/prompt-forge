import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { promptChips, type PreviewKind } from "@/lib/site";

function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: (i % 7) * 0.6,
    duration: 7 + (i % 5),
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute size-1 rounded-full bg-violet/60"
          style={{ left: d.left, top: d.top }}
          animate={{ y: [0, -26, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Hero({
  prompt,
  setPrompt,
  onGenerate,
  onPickChip,
}: {
  prompt: string;
  setPrompt: (v: string) => void;
  onGenerate: () => void;
  onPickChip: (kind: PreviewKind, label: string) => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 halo" />
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-14rem] size-[38rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]"
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <Particles />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.a
          href="#product"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-3.5 text-violet" />
          Agentic app generation, now in public beta
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-7 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">Build complete applications with AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Describe what you want to build, and let AI transform your idea into a beautiful,
          functional application.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="glass-panel rounded-3xl p-2 shadow-panel">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onGenerate()}
                placeholder="What do you want to build?"
                className="h-12 w-full bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
              />
              <Button variant="hero" size="lg" className="shrink-0" onClick={onGenerate}>
                Generate App <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {promptChips.map((c) => (
              <button
                key={c.label}
                onClick={() => {
                  setActive(c.label);
                  onPickChip(c.kind, c.label);
                }}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                  active === c.label
                    ? "border-violet/60 bg-violet/15 text-foreground"
                    : "border-border bg-surface-2/50 text-muted-foreground hover:border-violet/40 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
