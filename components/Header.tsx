import Link from "next/link";

import { NavLink } from "@/components/NavLink";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function Header() {
  return (
    <>
      <header className="py-10">
        <Container>
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <span className="text-2xl font-bold">
                <Link href="/">Vojtěch Mareš</Link>
              </span>
              <div className="hidden md:flex md:gap-x-6">
                {/* <NavLink href="#how-can-i-help">Jak vám můžu pomoci?</NavLink> */}
                <NavLink href="/skoleni">Školení</NavLink>
                {/* <NavLink href="/pripadove-studie">Případové studie</NavLink> */}
                <NavLink href="https://vojtechmares.blog/">Blog</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <Button href="mailto:iam@vojtechmares.com" color="amber">
                <span className="text-lg">
                  Napište mi{" "}
                  <span className="hidden lg:inline">ještě dnes</span>
                </span>
              </Button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
