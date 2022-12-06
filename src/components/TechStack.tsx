import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'


import screenshotArgoCD from '@/images/screenshots/argocd.png'
import screenshotGitLab from '@/images/screenshots/gitlab.png'
import screenshotTerraform from '@/images/screenshots/terraform.png'
import screenshotKubernetes from '@/images/screenshots/kubernetes.png'
import screenshotGrafana from '@/images/screenshots/grafana.png'
import screenshotPrometheus from '@/images/screenshots/prometheus.png'

import logoTerraform from '@/images/logos/tools/terraform.svg'
import logoGit from '@/images/logos/tools/git.svg'
import logoKubernetes from '@/images/logos/tools/kubernetes.svg'
import logoPrometheus from '@/images/logos/tools/prometheus.svg'
import logoArgo from '@/images/logos/tools/argo.svg'
import logoGrafana from '@/images/logos/tools/grafana.svg'


const features = [
  {
    name: 'Verzování',
    summary:
      'Spravujte svůj kód pomocí verzovacího nástroje Git.',
    description:
      'Mějte historii změn v aplikaci od začátku až do dnes, můžete se kdykoliv vrátit do bodu v čase. Řešte konflikty včas, předtím než je nasadíte do produkce a umožněte vaším programátorům spolupracovat na jednou, aniž by si překáželi.',
    image: screenshotGitLab,
    icon: logoGit,
  },
  {
    name: 'Infastruktura jako kód',
    summary: 'Mějte vaši infrastrukturu deklarativně definovanou a verzovanou, díky Terraformu.',
    description:
      'Vaši infrastrukturu můžete snadno přesunout k jinému poskytovateli, a nebo jen vytvořit nové prostředí pro zákazníka, aby si váš produkt vyzkoušel a to během minut.',
    image: screenshotTerraform,
    icon: logoTerraform,
  },
  {
    name: 'Orchestrace',
    summary:
      'Nechte vaši aplikaci běžet napříč mnoha servery a škálovat dle potřeb.',
    description:
      'Kubernetes se stalo nejen standardem, ale i hlavní platformou pro vývoj aplikací ať SaaS nebo dodávaných třetím stranám. Jde o skvělou platformu pro provoz vaší aplikace ať ve veřejném cloudu nebo na vlastním hardwaru popř. on edge blízko koncových uživatelů.',
    image: screenshotKubernetes,
    icon: logoKubernetes,
  },
  {
    name: 'Monitoring',
    summary:
      'Sledujte Vaši aplikaci, jak se chová v čase.',
    description:
      'Prometheus je standard pro monitoring aplikací, ať v Kubernetes ale i mimo. Sbírejte telemetrická data v čase o vaši aplikaci. Vyhodnoťte, kde má vaše aplikace slabá místa. Zároveň můžete tvořit pravidla, dle kterých vás AlertManager upozorní, když se něco pokazí.',
    image: screenshotPrometheus,
    icon: logoPrometheus,
  },
  {
    name: 'Vizualizace',
    summary:
      'Od grafů zatížení procesoru po počet otevřených TCP spojení, vše jasně a přehledně.',
    description:
      'Grafana je skvělý nástroj pro vizualizaci dat z monitoringu, vytvořte si dashboardy pro jednotlivé části vaší aplikace, mějte pohromadě infrastrukturu, provoz na síti, dostupnost a třeba počet neúspěšných pokusů o přihlášení, zda vůči vaší aplikaci neprobíhá hackerský útok.',
    image: screenshotGrafana,
    icon: logoGrafana,
  },
  {
    name: 'GitOps',
    summary:
      'Spravujte stav Vašich prostředí deklarativně, ať vždy víte, jaký je aktuální stav.',
    description:
      'ArgoCD je spolehlivý nástroj pro práci s Kubernetes a nasazováním změn a přitom si udržovat přehled o právě nasazených aplikacích, verzím a konfiguraci, snadno, soplehlivě, verzovaně.',
    image: screenshotArgoCD,
    icon: logoArgo,
  },
]

type FeatureType = {
  name: string|ReactNode,
  summary: string,
  description: string,
  image: StaticImageData,
  icon: any,
}

type FeatureProps = {
  feature: FeatureType,
  isActive: boolean,
  className?: string,
  props?: any,
}

function Feature({ feature, isActive, className, ...props }: FeatureProps ) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <Image src={feature.icon} className={clsx(
          'w-32 rounded-lg p-2 flex justify-center',
          // isActive ? 'fill-blue-600' : 'fill-slate-500'
        )} alt="" />
      <h3
        className={clsx(
          'mt-6 text-lg font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8 gap-y-4">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Open Source DevOps stack
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Věřím v Open Source technologie, prakticky všichni je denně využíváme
            a jsou naší budoucností.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
