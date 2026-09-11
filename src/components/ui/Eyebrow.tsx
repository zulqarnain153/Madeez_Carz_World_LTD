interface EyebrowProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  const color = tone === "light" ? "text-marque-600" : "text-marque-300";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className="hidden h-[2px] w-8 shrink-0 bg-current opacity-60 sm:block"
        style={{ color: "inherit" }}
      />
      <span
        className={`font-body text-[0.9rem] font-semibold uppercase tracking-[0.08em] sm:text-[0.95rem] sm:tracking-[0.14em] ${color}`}
      >
        {children}
      </span>
    </div>
  );
}
