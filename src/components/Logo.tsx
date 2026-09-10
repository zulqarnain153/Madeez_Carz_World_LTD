import Image from "next/image";
import Link from "next/link";

// Official Madeez Carz World Ltd logo — /public/logo.png
// Source file is 1774x887px with a transparent background.
// Do not crop, distort, recolor, or recreate this asset.
const LOGO_NATURAL_WIDTH = 1774;
const LOGO_NATURAL_HEIGHT = 887;

interface LogoProps {
  size?: "nav" | "footer" | "mobile";
}

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  nav: "h-14 sm:h-16 lg:h-20",
  footer: "h-16 sm:h-20",
  mobile: "h-11",
};

export function Logo({ size = "nav" }: LogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="Madeez Carz World Ltd"
      width={LOGO_NATURAL_WIDTH}
      height={LOGO_NATURAL_HEIGHT}
      priority
      className={`h-full w-auto object-contain ${sizeClasses[size]}`}
    />
  );

  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Madeez Carz World Ltd — Home"
    >
      {size === "footer" ? (
        // Light backing panel so the logo's dark chrome and black text
        // stay clearly legible against the dark footer background,
        // without altering the logo artwork itself.
        <span className="inline-flex items-center rounded-md bg-white px-5 py-3 shadow-panel">
          {image}
        </span>
      ) : (
        image
      )}
    </Link>
  );
}
