import Image from "next/image";
import clsx from "clsx";

import TrainingType from "@/types/training";
import { Container } from "./Container";
import { Button } from "./Button";

type TrainingDetailProps = {
  training: TrainingType;
  className?: string;
  props?: any[];
};

const TrainingDetail = ({
  training,
  className,
  ...props
}: TrainingDetailProps) => {
  return (
    <div
      className={clsx(
        className,
        "rounded-3xl py-8 px-6 shadow sm:px-8",
        training.featured ? "bg-amber-500 py-8" : "",
        training.featured ? "hover:bg-amber-600" : "md:ring-1 md:hover:ring-slate-700 md:ring-transparent",
        "transition ease-in-out duration-300 md:hover:-translate-y-1 md:hover:scale-110 "
      )}
      {...props}
    >
      <Image
        src={training.logo}
        className="h-32 w-32 rounded-full"
        width="1500"
        height="1500"
        alt=""
      />
      <div className="mt-6 flex justify-between">
        <div className="flex">
          <h3 className="font-display text-xl font-medium text-white">
            {training.name}
          </h3>
          {training.new ? (
            <>
              <span className="border-1 ml-2 rounded-full border border-orange-800 bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                new!
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
        <p className="text-md max-w-2xl text-white">
          {training.days} {training.days === 1 ? "den" : "dny"}
        </p>
      </div>
      <p
        className={clsx(
          "text-md mt-4",
          training.featured ? "text-white" : "text-slate-200"
        )}
      >
        {training.description.split(" ").splice(0, 40).join(" ") + "..."}
      </p>
      <Button
        href={"/skoleni/" + training.slug}
        variant={training.featured ? "solid" : "outline"}
        color="white"
        className="mt-8 w-full"
      >
        Zjistit více
      </Button>
    </div>
  );
};

type TrainingListProps = {
  trainingList: TrainingType[];
};

const TrainingListMobile = ({ trainingList }: TrainingListProps) => {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden sm:-mx-6 sm:px-6 lg:hidden">
      {trainingList.map((training) => (
        <div
          key={training.slug}
          className={clsx(training.featured ? "order-first lg:order-none" : "")}
        >
          <TrainingDetail training={training} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  );
};

const TrainingListDesktop = ({ trainingList }: TrainingListProps) => {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        {trainingList.map((training) => (
          <div
            key={training.slug}
            className={clsx(
              training.featured ? "order-first lg:order-none" : ""
            )}
          >
            <TrainingDetail training={training} className="relative" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TrainingListGrid = ({ trainingList }: TrainingListProps) => {
  return (
    <>
      <section
        id="training-list"
        aria-label="Seznam školení"
        className="bg-black pt-16 pb-14 sm:pb-20 sm:pt-24 lg:pb-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Moje školení
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-400">
              Od veřejného cloudu přes on-premise až po serverless, se vším vám
              poradím.
            </p>
          </div>
          <TrainingListMobile trainingList={trainingList} />
          <TrainingListDesktop trainingList={trainingList} />
        </Container>
      </section>
    </>
  );
};
