import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './Container'

import logoKubernetes from '@/images/logos/tools/kubernetes.svg'
import logok3s from '@/images/logos/tools/k3s.svg'
import logoRancher from '@/images/logos/tools/rancher.svg'
import logoAWS from '@/images/logos/tools/amazonaws.svg'
import logoOpenStack from '@/images/logos/tools/openstack.svg'
import logoDigitalOcean from '@/images/logos/tools/digitalocean.svg'
import logovmware from '@/images/logos/tools/vmware.svg'
import logoGCP from '@/images/logos/tools/googlecloud.svg'

const features = [
  {
    name: 'Kubernetes',
    summary: 'Stay on top of things with always up-to-date reporting features.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    icon: logoKubernetes,
    iconColor: '#326CE5',
  },
  {
    name: 'k3s',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    icon: logok3s,
    iconColor: '#FFC61C',
  },
  {
    name: 'Rancher',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: logoRancher,
    iconColor: '#0075A8',
  },
  {
    name: 'AWS',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: logoAWS,
    iconColor: '#232F3E',
  },
  {
    name: 'Google Cloud Platform',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: logoGCP,
    iconColor: '#4285F4',
  },
  {
    name: 'DigitalOcean',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: logoDigitalOcean,
    iconColor: '#0080FF',
  },
  {
    name: 'OpenStack',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: logoOpenStack,
    iconColor: '#ED1944',
  },
  {
    name: 'VMWare',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: logovmware,
    iconColor: '#607078',
  },
]

type FeatureType = {
  name: string,
  summary: string,
  description: string,
  icon: any,
  iconColor: string,
}

type FeatureProps = {
  feature: FeatureType
  className?: string,
  props?: any[],
}

function Feature({ feature, className, ...props }: FeatureProps) {
  return (
    <div
      className={className}
      {...props}
    >
      <Image src={feature.icon} className="w-32 rounded-lg p-2" color={feature.iconColor} alt="" />
      <h3
        className="mt-6 text-lg font-medium text-blue-600"
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
          <Feature feature={feature} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  )
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
  )
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
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Any platform, anywhere
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            From public cloud, over on premise to edge solutions, it is all fine. I&apos;ve got you covered.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
