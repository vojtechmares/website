import Head from "next/head";

import { Header } from "./../components/Header"
import { Hero } from "./../components/Hero"
import { CallToAction } from './../components/CallToAction'
import { Faqs } from './../components/Faqs'
import { Footer } from './../components/Footer'
import { Pricing } from './../components/Pricing'
import { PrimaryFeatures } from './../components/PrimaryFeatures'
import { TechStack } from './../components/TechStack'
import { Testimonials } from './../components/Testimonials'
import { Environment } from './../components/Environment'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vojtech Mares - DevOps consultant, lector, engineer</title>

        <meta
          name="description"
          content="Vojtech Mares - DevOps consultant, lector, engineer"
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <PrimaryFeatures />
        <TechStack />
        <CallToAction />
        <Environment />
        {/* <Testimonials /> */}
        <Pricing />
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  );
}
