import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import TrainingType from "@/types/training";
import { getAllTraining, getTrainingBySlug } from "@/lib/cms/training";
import markdownToHTML from "@/lib/markdownToHTML";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Training } from "@/components/trainingpage/Training";

type Props = {
  training: TrainingType;
  featuredTrainingList: TrainingType[];
};

const TrainingPage = ({ training, featuredTrainingList }: Props) => {
  const router = useRouter();
  console.log(!router.isFallback);
  console.log(!training?.slug);
  console.log(typeof training.draft === "undefined");
  // if ((!router.isFallback && !training?.slug) || typeof training.draft === 'undefined') {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      <Head>
        <title>
          Školení {training.name} | Vojtěch Mareš - DevOps konzultant, lektor,
          engineer
        </title>

        <meta
          name="description"
          content={`Školení ${training.name} | Vojtěch Mareš - DevOps konzultant, lektor, engineer`}
        />
      </Head>
      <main>
        <Header />
        <Training training={training} />
      </main>
      <Footer />
    </>
  );
};

export default TrainingPage;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const training = getTrainingBySlug(params.slug, [
    "name",
    "content",
    "priceOpen",
    "priceCompany",
    "days",
    "logo",
    "content",
    "draft",
    "new",
    "featured",
  ]);

  const content = await markdownToHTML(training.content || "");

  return {
    props: {
      training: {
        ...training,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const trainingList = getAllTraining(["slug"]);

  return {
    paths: trainingList.map((training) => {
      return {
        params: {
          slug: training.slug,
        },
      };
    }),
    fallback: false,
  };
};
