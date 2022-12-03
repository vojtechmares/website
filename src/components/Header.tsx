import Link from "next/link"

import { NavLink } from "@/components/NavLink";
import { Container } from "@/components/Container"
import { Button } from "@/components/Button"

export function Header() {
  return (
    <>
      <header className="py-10">
        <Container>
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <span className="text-2xl font-bold">
                <Link href="#">Vojtech Mares</Link>
              </span>
              <div className="hidden md:flex md:gap-x-6">
                <NavLink href="#how-can-i-help">How can I help?</NavLink>
                {/* <NavLink href="#">Courses</NavLink> */}
                <NavLink href="https://vojtechmares.blog/">Blog</NavLink>
            </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button href="#book-me" color="blue">
              <span className="text-lg">
                Book me <span className="hidden lg:inline">today</span>
              </span>
            </Button>
          </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
