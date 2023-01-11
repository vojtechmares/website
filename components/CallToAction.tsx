import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-amber-500 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Posuňte svoji aplikaci už dnes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Je na čase pozvednout Vaši infrastrukturu na dnešní standardy. Vaše
            infrastruktura by měla nabídnout Vaši aplikaci světu, ne ji držet
            zpátky.
          </p>
          <Button
            href="https://calendly.com/vojtechmares/30min"
            color="white"
            size="large"
            className="mt-10"
          >
            Domluvme si schůzku
          </Button>
        </div>
      </Container>
    </section>
  );
}
