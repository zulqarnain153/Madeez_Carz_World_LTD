import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "light" ? "text-ink" : "text-white";
  const descColor = tone === "light" ? "text-ink-soft" : "text-silver-300";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
