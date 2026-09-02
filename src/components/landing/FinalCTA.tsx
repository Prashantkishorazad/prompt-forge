import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function FinalCTA({ onStartBuilding }: { onStartBuilding: (prompt: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface px-6 py-20 text-center sm:px-12">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 size-[26rem] rounded-full bg-violet/25 blur-[130px]"
          animate={{ x: [0, 60, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-azure/20 blur-[130px]"
          animate={{ x: [0, -50, 0], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Your next big idea starts with a prompt.
          </h2>
          <p className="mt-4 text-muted-foreground">Stop waiting to build. Start creating.</p>

          <div className="glass-panel mx-auto mt-9 flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:items-center">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onStartBuilding(value)}
              placeholder="What will you build today?"
              className="h-12 w-full bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <Button
              variant="hero"
              size="lg"
              className="shrink-0"
              onClick={() => onStartBuilding(value)}
            >
              Start Building Free <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
