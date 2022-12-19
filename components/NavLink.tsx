import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
