import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-marque-500 text-white hover:bg-marque-600 shadow-lift",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-marque-500 hover:text-marque-600",
  ghost: "bg-transparent text-marque-600 hover:text-marque-700",
  dark: "bg-white text-ink hover:bg-canvas-sunken",
};

interface SharedProps {
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  children: ReactNode;
}

interface LinkButtonProps extends SharedProps {
  href: string;
  onClick?: never;
}

interface ClickButtonProps
  extends SharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold tracking-tight transition-all duration-200 ease-out whitespace-nowrap hover:scale-[1.03] active:scale-[0.97]";

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", icon, children } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const { href, icon: _i, variant: _v, className: _c, children: _ch, ...rest } =
    props as ClickButtonProps;

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
