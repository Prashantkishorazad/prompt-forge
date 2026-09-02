import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

const columns = [
  { title: "Product", links: ["Features", "Templates", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Resources", links: ["Documentation", "Community", "Help Center"] },
];

const socials = [
  { label: "X", icon: Twitter },
  { label: "GitHub", icon: Github },
  { label: "Discord", icon: MessageCircle },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The agentic workspace where a sentence becomes a shippable product.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              {c.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#top"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
          <p className="text-xs text-muted-foreground">
            © {site.year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#top"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-violet/40 hover:text-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
