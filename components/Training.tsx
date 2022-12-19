import Image from "next/image";

import TrainingType from "@/types/training";
import { Container } from "./Container";
import { Button } from "./Button";

type Props = {
  training: TrainingType;
};

export const Training = ({ training }: Props) => {
  const formatter = new Intl.NumberFormat("cs", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  });
  return (
    <>
      <div className="pb-14 sm:pb-20 lg:pb-32">
        <div className="bg-slate-900 pt-16 pb-16">
          <Container className="flex justify-around">
            <Image
              src={training.logo}
              className="h-40 w-40 rounded-full"
              width="1500"
              height="1500"
              alt=""
            />
            <h2 className="font-display self-center text-4xl tracking-tight text-white sm:text-6xl">
              Školení {training.name}
            </h2>
          </Container>
        </div>
        <Container>
          <div className="mt-12 md:grid md:grid-cols-5 md:gap-x-4 md:gap-y-4">
            <div className="md:col-span-3">
              <div
                className="prose prose-slate prose-h1:text-2xl prose-h1:font-medium prose-h2:text-xl prose-h2:font-medium prose-h3:text-lg prose-h3:font-medium prose-li:my-0"
                dangerouslySetInnerHTML={{ __html: training.content }}
              />
            </div>
            <div className="mt-8 md:col-span-2 md:mt-0">
              {training.days === 2 ? (
                <div className=" mb-8 rounded-lg bg-blue-50 p-4 shadow">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {/* <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-blue-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-blue-700">
                        Toto školení je{" "}
                        <span className="font-medium text-blue-700">
                          dvoudenní.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="mt-8 overflow-hidden rounded-lg bg-slate-50 shadow md:mt-0">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-slate-900">
                    Cena za školení
                  </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5 sm:px-6">
                      <dt className="font-medium text-gray-500">
                        Veřejný termín
                      </dt>
                      <dd className="mt-1 text-gray-900 sm:mt-0">
                        {formatter.format(training.priceOpen)} bez DPH
                      </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5 sm:px-6">
                      <dt className="font-medium text-gray-500">
                        Firemní školení
                      </dt>
                      <dd className="mt-1 text-gray-900 sm:mt-0">
                        {formatter.format(training.priceCompany)} bez DPH
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  variant="solid"
                  color="blue"
                  className="w-full text-lg font-medium"
                  href="mailto:iam@vojtechmares.com"
                >
                  Nezávazně poptat
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
