import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Templates } from "@/components/landing/Templates";
import { Showcase } from "@/components/landing/Showcase";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { BuilderWorkspace } from "@/components/builder/BuilderWorkspace";
import { site, type PreviewKind } from "@/lib/site";

const title = `${site.name} — Build complete applications with AI`;
const description =
  "Describe what you want to build and watch an AI agent generate a polished, responsive application interface in seconds.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [prompt, setPrompt] = useState("");
  const [kind, setKind] = useState<PreviewKind>("sneakers");
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToBuilder = useCallback(() => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const pickChip = (k: PreviewKind, label: string) => {
    setKind(k);
    setPrompt(label);
    scrollToBuilder();
  };

  const generate = () => {
    if (!prompt.trim()) {
      toast("Describe your idea first", { description: "Try one of the example prompts." });
      return;
    }
    toast.success("Build started", { description: prompt });
    scrollToBuilder();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onStartBuilding={() => setModalOpen(true)} />

      <main>
        <Hero
          prompt={prompt}
          setPrompt={setPrompt}
          onGenerate={generate}
          onPickChip={pickChip}
        />

        <section id="builder" className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BuilderWorkspace kind={kind} onKindChange={setKind} />
          </motion.div>
        </section>

        <Showcase />
        <HowItWorks />
        <Features />
        <Templates onUse={pickChip} />
        <Pricing onStartBuilding={() => setModalOpen(true)} />
        <FinalCTA
          onStartBuilding={(v) => {
            if (v.trim()) setPrompt(v);
            setModalOpen(true);
          }}
        />
      </main>

      <Footer />

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close workspace"
                onClick={() => setModalOpen(false)}
                className="absolute -top-11 right-0 grid size-9 place-items-center rounded-xl border border-border bg-surface text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
              <BuilderWorkspace kind={kind} onKindChange={setKind} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
