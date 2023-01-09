import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32" // bg-gradient-to-br to-cyan-600 via-blue-600 from-blue-600
    >
      {/* <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={1920}
        height={1015}
        loading="eager"
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Posuňte svoji aplikaci už dnes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Je na čase pozvednout vaši infrastrukturu na dnešní standardy. Vaše
            infrastruktura by měla nabídnout Vaši aplikaci světu, ne ji držet
            zpátky.
          </p>
          <Button
            href="https://calendly.com/vojtechmares/30min"
            color="white"
            className="mt-10"
          >
            Domluvme si schůzku
          </Button>
        </div>
      </Container>
    </section>
  );
}
