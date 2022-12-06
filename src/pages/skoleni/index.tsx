import Head from "next/head";

import { Header } from "@/components/Header"
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moje školení | Vojtěch Mareš - DevOps konzultant, lektor, engineer</title>

        <meta
          name="description"
          content="Moje školení | Vojtěch Mareš - DevOps konzultant, lektor, engineer"
        />
      </Head>
      <main>
        <Header />
        <h1 className="text-4xl mx-auto w-12 my-8">Připravuji</h1>
      </main>
      <Footer />
    </>
  );
}
