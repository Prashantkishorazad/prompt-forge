import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar({ onStartBuilding }: { onStartBuilding: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled && "border-b border-border/70 bg-background/70 backdrop-blur-xl",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2/70 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="pill" className="text-muted-foreground">
            Sign In
          </Button>
          <Button variant="hero" size="pill" onClick={onStartBuilding}>
            Start Building
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2/60 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="subtle" size="pill" className="flex-1">
              Sign In
            </Button>
            <Button
              variant="hero"
              size="pill"
              className="flex-1"
              onClick={() => {
                setOpen(false);
                onStartBuilding();
              }}
            >
              Start Building
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
