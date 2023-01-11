import clsx from "clsx";

import { Container } from "@/components/Container";

const steps = [
  {
    name: "Analýza současného stavu",
    description:
      "Zjistíme kde jsou slabá místa vaší infrastruktury nebo aplikace, a nebo obojího.",
  },
  {
    name: "Návrh řešení",
    description:
      "Navrhnu, jak tato slabá místa odstranit, na co si dát pozor a naplánujeme případné další kroky. ",
  },
  {
    name: "Implementace",
    description:
      "Přesunu vaši aplikaci do Kubernetes, ať na vašem vlastním hardware nebo v public cloudu. Celá infrastruktura bude jasně deklarovaná jako kód pomocí Terraformu.",
  },
  {
    name: "Proškolení vašeho týmu",
    description:
      "Naučím váš tým používat moderní technologie, tak abyste mohli rozvíjet vaší aplikaci a byznys a technologie byly nástrojem k rozvoji, ne břemenem, které s sebou táhnete.",
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-gradient-to-br to-amber-600 via-amber-500 from-amber-500 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Z nuly do cloudu.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-100">
            Vše co budete potřebovat, od začátku až do cíle.
          </p>
        </div>
        <nav aria-label="Progress">
          <ol
            role="list"
            className="mx-auto mt-20 max-w-3xl overflow-hidden pt-2"
          >
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={clsx(
                  stepIdx !== steps.length - 1 ? "pb-10" : "",
                  "relative"
                )}
              >
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-6 -ml-px mt-0.5 h-full w-0.5 bg-white"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-500 bg-white">
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-2xl font-normal text-white">
                      {step.name}
                    </span>
                    <span className="text-lg text-slate-100">
                      {step.description}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
