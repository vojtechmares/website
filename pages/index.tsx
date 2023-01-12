import Head from "next/head";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/homepage/Hero";
import { CallToAction } from "@/components/homepage/CallToAction";
import { Faqs } from "@/components/homepage/Faqs";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/homepage/Pricing";
import { PrimaryFeatures } from "@/components/homepage/PrimaryFeatures";
import { TechStack } from "@/components/homepage/TechStack";
import { Testimonials } from "@/components/homepage/Testimonials";
import { Environment } from "@/components/homepage/Environment";
import { KubernetesEverywhere } from "@/components/homepage/KubernetesEverywhere";
import { TrainingList } from "@/components/homepage/Training";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vojtěch Mareš - DevOps konzultant, lektor, engineer</title>

        <meta
          name="description"
          content="Vojtěch Mareš - DevOps konzultant, lektor, engineer"
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <PrimaryFeatures />
        <TrainingList />
        <TechStack />
        <KubernetesEverywhere />
        <CallToAction />
        <Environment />
        <Testimonials />
        <Pricing />
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  );
}
