import Head from "next/head";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllTraining } from "@/lib/cms/training";
import TrainingType from "@/types/training";
import { TrainingListGrid } from "@/components/trainingpage/TrainingListGrid";

export const getStaticProps = async () => {
  const allTraining = getAllTraining([
    "name",
    "slug",
    "logo",
    "description",
    "days",
    "weight",
    "featured",
    "new",
    "draft",
  ]);

  return {
    props: { allTraining },
  };
};

type Props = {
  allTraining: TrainingType[];
};

const TrainingList = ({ allTraining }: Props) => {
  // remove drafts
  const trainingList = allTraining.filter((val) => !val.draft);

  return (
    <>
      <Head>
        <title>
          Moje školení | Vojtěch Mareš - DevOps konzultant, lektor, engineer
        </title>

        <meta
          name="description"
          content="Moje školení | Vojtěch Mareš - DevOps konzultant, lektor, engineer"
        />
      </Head>
      <main>
        <Header />
        <TrainingListGrid trainingList={trainingList} />
      </main>
      <Footer />
    </>
  );
};

export default TrainingList;
