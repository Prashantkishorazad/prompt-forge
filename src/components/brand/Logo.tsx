import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-8 shrink-0 place-items-center rounded-xl bg-brand-gradient",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
        <path
          d="M12 2.5 14.6 9.4 21.5 12 14.6 14.6 12 21.5 9.4 14.6 2.5 12 9.4 9.4Z"
          fill="currentColor"
          className="text-primary-foreground"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  showName = true,
  compact = false,
}: {
  className?: string;
  showName?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={compact ? "size-7 rounded-lg" : ""} />
      {showName && (
        <span
          className={cn(
            "font-display font-semibold tracking-tight text-foreground",
            compact ? "text-sm" : "text-[1.05rem]",
          )}
        >
          {site.name}
        </span>
      )}
    </span>
  );
}
