import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const trainingDir = join(process.cwd(), "content/training");

export const getTrainingSlugs = () => {
  return fs.readdirSync(trainingDir);
};

export const getTrainingBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(trainingDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllTraining = (fields: string[] = []) => {
  const slugs = getTrainingSlugs();
  const trainingList = slugs
    .map((slug) => getTrainingBySlug(slug, fields))
    .sort((tr1, tr2) => {
      const tr1w = parseInt(tr1.weight);
      const tr2w = parseInt(tr2.weight);
      return tr1w > tr2w ? -1 : 1;
    });

  return trainingList;
};
