import Image from "next/image";

import { Container } from "@/components/Container";

import logoKubernetes from "@/images/logos/tools/kubernetes.svg";
import logok3s from "@/images/logos/tools/k3s.svg";
import logoRancher from "@/images/logos/tools/rancher.svg";
import logoAWS from "@/images/logos/tools/amazonaws.svg";
import logoDigitalOcean from "@/images/logos/tools/digitalocean.svg";
import logovmware from "@/images/logos/tools/vmware.svg";

const features = [
  {
    name: "Kubernetes",
    summary:
      "Open Source systém pro automatizaci deploymentů, škálování a správu kontejnerizovaných aplikací.",
    description:
      "Kubernetes je na platformě nezávislý systém, díky kterému může běžet Vaše aplikace u vás v datacentru, v public cloudu nebo třeba v okrajových lokalitách, a nebo třeba na všech najednou, bez problému.",
    icon: logoKubernetes,
    iconColor: "#326CE5",
  },
  {
    name: "k3s & rke2",
    summary:
      "k3s: lehká distrubuce Kubernetes; rke2: Kubernetes do Vašeho datacentra.",
    description:
      "k3s i rke2 jsou velice snadno instalovatelné distribuce Kubernetes, které můžete nainstalovat úplně všude a přitom mít stále k dispozici celý Kubernetes ekosystém, bez kompromisů.",
    icon: logok3s,
    iconColor: "#FFC61C",
  },
  {
    name: "Rancher",
    summary: "Kubernetes jako služba, ve Vašem datacentru.",
    description:
      "Platforma, pro Vaše Kubernetes clustery. Komplexní řešení celého životního cyklu clusteru. Neřešte každodení problémy, nechte je řešit Rancher řešit za vás.",
    icon: logoRancher,
    iconColor: "#0075A8",
  },
  {
    name: "AWS",
    summary: "Největší veřejný cloud. Máte problém? AWS má na to službu.",
    description:
      "Amazon Web Services (AWS) je cloudový poskytovatel služeb, včetně ukládání obrovských objemů dat, výpočetního výkonu a sítí. To vše aby pomohli firmám i jednotlivcům růst. AWS je nejrozšířenější poskytovatel, který je cenově dostupný, flexibilní cesta, jak stavět a provozovat aplikace a služby.",
    icon: logoAWS,
    iconColor: "#232F3E",
  },
  // {
  //   name: 'Google Cloud Platform',
  //   summary:
  //     'Organize all of your contacts, service providers, and invoices in one place.',
  //   description:
  //     'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
  //   icon: logoGCP,
  //   iconColor: '#4285F4',
  // },
  {
    name: "DigitalOcean",
    summary: "Jednoduchý cloudový poskytovatel, ve kterém se neztratíte.",
    description:
      "DigitalOcean patří k menším cloudovým poskytovatelům, avšak jejich portfolio vám pro Vaši aplikaci bohatě stačí a nebudete se ztrácet v komplexitě velkých poskytovatelů se spoustou služeb.",
    icon: logoDigitalOcean,
    iconColor: "#0080FF",
  },
  // {
  //   name: 'OpenStack',
  //   summary:
  //     'Organize all of your contacts, service providers, and invoices in one place.',
  //   description:
  //     'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
  //   icon: logoOpenStack,
  //   iconColor: '#ED1944',
  // },
  {
    name: "VMware",
    summary:
      "Populární řešení pro správu Vaše datacentra, od virtuálních serverů až po úložiště.",
    description:
      "VMware je virtualizační platforma, která umožňuje vytvářet a spravovat virtuální servery a jejich fyzickém hardwaru. Zároveň umožňuje vytvářet oddělená prostředí například pro vývoj a ostrý provoz, tak i pro zcela různé aplikace.",
    icon: logovmware,
    iconColor: "#607078",
  },
];

type FeatureType = {
  name: string;
  summary: string;
  description: string;
  icon: any;
  iconColor: string;
};

type FeatureProps = {
  feature: FeatureType;
  className?: string;
  props?: any[];
};

function Feature({ feature, className, ...props }: FeatureProps) {
  return (
    <div className={className} {...props}>
      <Image
        src={feature.icon}
        className="rounded-lg p-2"
        width="128"
        height="128"
        color={feature.iconColor}
        alt=""
      />
      <h3 className="mt-6 text-lg font-medium text-amber-500">{feature.name}</h3>
      <p className="font-display mt-2 text-xl text-black">
        {feature.summary}
      </p>
      <p className="mt-4 text-slate-700">{feature.description}</p>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        {features.map((feature) => (
          <div key={feature.name}>
            <Feature feature={feature} className="relative" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Environment() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Jakákoliv platforma, kdekoliv
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Od veřejného cloudu přes on-premise až po serverless, se vším vám
            poradím.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
