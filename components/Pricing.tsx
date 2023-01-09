import clsx from "clsx";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type SwirlyDoodleProps = { className: string };

function SwirlyDoodle({ className }: SwirlyDoodleProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

type PlanProps = {
  name: string;
  price: string;
  description: string;
  href: string;
  featured?: boolean;
  buttonText?: string;
};

function Plan({
  name,
  price,
  description,
  href,
  featured = false,
  buttonText = "Napište mi",
}: PlanProps) {
  return (
    <section
      className={clsx(
        "flex flex-col rounded-3xl px-6 sm:px-8",
        featured ? "order-first bg-blue-600 py-8 lg:order-none" : "lg:py-8",
        featured ? "hover:bg-blue-700" : "md:ring-1 md:hover:ring-slate-700 md:ring-transparent",
        "transition ease-in-out duration-300 md:hover:-translate-y-1 md:hover:scale-110"
      )}
    >
      <h3 className="font-display mt-5 text-4xl text-white">{name}</h3>
      <p className="font-display mt-4 text-lg font-light tracking-tight text-white">
        {price}
      </p>
      <p
        className={clsx(
          "mt-2 text-base",
          featured ? "text-white" : "text-slate-400"
        )}
      >
        {description}
      </p>
      <Button
        href={href}
        variant={featured ? "solid" : "outline"}
        color="white"
        className="mt-16"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {buttonText}
      </Button>
    </section>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h3 className="font-display text-xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" />
              <span className="relative">Co pro Vás,</span>
            </span>{" "}
            můžu udělat.
          </h3>
          <p className="mt-4 text-lg text-slate-400">
            Nezáleží na velikosti Vaší firmy, ať jste startup, nebo korporát, dokážu pomoci každému.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Konzultace"
            price="2 000 CZK za hodinu"
            description="Chcete se poradit nebo si nevíte rady? Projdeme Váš současný stav a najdeme kde je problém a navrhneme řešení."
            href="mailto:iam@vojtechmares.com"
          />
          <Plan
            featured
            name="Firemní školení"
            price="24 000 CZK za jednodenní školení"
            description="Jednoduše, s názornými příklady, které si každý vyzkouší. Naučím váš tým nové technologii nebo prohloubíme stávající znalosti."
            href="/skoleni"
            buttonText="Seznam školení"
          />
          <Plan
            name="Implementace"
            price="Cena dohodou"
            description="Analyzujeme vaši situaci, projdeme možnosti, vybereme nejlepší řešení a společně jej nasadíme."
            href="https://calendly.com/vojtechmares/30min"
            buttonText="Domluvme si schůzku"
          />
        </div>
      </Container>
    </section>
  );
}
