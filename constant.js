import path from "path";

export const currentWebsite = "test-website-1";
export const WEBSITES_PATH = path.join(
  process.cwd(),
  "websites",
  currentWebsite
);
export const ARTICLES_PATH = path.join(WEBSITES_PATH, "articles");
