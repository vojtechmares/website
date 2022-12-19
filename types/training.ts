type TrainingType = {
  name: string;
  slug: string;
  priceOpen: number;
  priceCompany: number;
  logo: string;
  days: number;
  description: string;
  content: string;

  trainingHubId?: string;
  draft?: true;
  new?: true;
  featured?: true;
  weight: number; // custom sorting
};

export default TrainingType;
