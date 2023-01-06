import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full focus:outline-none",
};

const variantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
    // Supress TypeScript error
    blue: "", // TODO: fix properly
  },
};

const transitionStyle = "transition duration-150 ease-in-out";

const sizeStyles = {
  default: "px-4 py-2 text-sm",
  large: "px-8 py-4 text-base",
};

type Props = {
  variant?: "solid" | "outline";
  color?: "slate" | "white" | "blue";
  size?: "default" | "large";
  className?: string;
  href?: string;
  children?: ReactNode;
};

export function Button({
  variant = "solid",
  color = "slate",
  size = "default",
  className,
  href,
  children,
}: Props) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    sizeStyles[size],
    transitionStyle,
    className
  );

  if (href !== undefined) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  } else {
    return <button className={className}>{children}</button>;
  }
}
