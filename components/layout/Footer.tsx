import Link from "next/link";

import { Container } from "@/components/Container";
// import { Logo } from '@/components/Logo'
import { Button } from "@/components/Button";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className="py-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-4">
            <div>
              <h4 className="text-lg font-medium">Vojtěch Mareš</h4>
              <ul className="mt-4 list-none">
                <li>
                  <Link href="tel:+420732490651" className="underline">
                    +420 732 490 651
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:iam@vojtechmares.com"
                    className="underline"
                  >
                    iam@vojtechmares.com
                  </Link>
                </li>
                <li className="mt-4">
                  Company ID
                  <br />
                  <code id="company-id">06999280</code>
                </li>
                <li className="mt-2">
                  VAT ID
                  <br />
                  <code id="vat-id">CZ9709180063</code>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Nejblíbenější školení</h3>
              <ul className="mt-4 list-disc pl-4">
                <li>
                  <Link href="/skoleni/kubernetes" className="underline">
                    Kubernetes
                  </Link>
                </li>
                {/* <li>
                  <Link href="/skoleni/gitlab-ci" className="underline">GitLab CI</Link>
                </li> */}
                <li>
                  <Link href="/skoleni/terraform" className="underline">
                    Terraform
                  </Link>
                </li>
                {/* <li>
                  <Link href="/skoleni/rancher" className="underline">Rancher</Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Důležité odkazy</h3>
              <ul className="mt-4 list-disc pl-4">
                {/* <li>
                  <Link
                    href="https://devops-skoelni.cz/?utm_source=vojtechmares&utm_medium=vojtechmares-com-website&utm_content=link"
                    className="underline"
                    target="_blank"
                  >
                    DevOps-Skoleni.cz
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="https://skoleni.io/?utm_source=vojtechmares&utm_medium=vojtechmares-com-website&utm_content=link"
                    className="underline"
                    target="_blank"
                  >
                    Skoleni.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://devopsaci.cz/?utm_source=vojtechmares&utm_medium=vojtechmares-com-website&utm_content=link"
                    className="underline"
                    target="_blank"
                  >
                    DevOpsaci.cz
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Zaujal jsem vás?</h3>
              <p className="mt-4">
                Zaujal jsem vás avšak nevíte, jak přesně bych vám mohl pomoci?
                Nebojte se zeptat a společně vymyslíme, jak vám mohu pomoci.
              </p>
              <Button
                href="https://calendly.com/vojtechmares/30min"
                className="mt-5"
              >
                Domluvme si schůzku
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.linkedin.com/in/vojtech-mares/"
              target="_blank"
              className="group"
              aria-label="Vojtěch Mareš na LinkedIn"
            >
              <svg
                // role="img"
                // viewBox="0 0 24 24"
                // xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-6 w-6 fill-black group-hover:fill-slate-700"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/vojtechmares_"
              target="_blank"
              className="group"
              aria-label="Vojtěch Mareš na Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-black group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://github.com/vojtechmares"
              target="_blank"
              className="group"
              aria-label="Vojtěch Mareš na GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-black group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-slate-700 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Vojtěch Mareš. Všechna
            práva vyhrazena.
          </p>
        </div>
      </Container>
    </footer>
  );
}
