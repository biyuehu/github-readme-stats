// @ts-check

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const whitelistFile = join(__dirname, "../../whitelist.json");

let whitelist;
try {
  const data = JSON.parse(readFileSync(whitelistFile, "utf8"));
  whitelist = Array.isArray(data) ? data : undefined;
} catch {
  whitelist = undefined;
}

if (process.env.NODE_ENV === "test") {
  whitelist = ["anuraghazra"];
}

const gistWhitelist = process.env.GIST_WHITELIST
  ? process.env.GIST_WHITELIST.split(",")
  : undefined;

const excludeRepositories = process.env.EXCLUDE_REPO
  ? process.env.EXCLUDE_REPO.split(",")
  : [];

export { whitelist, gistWhitelist, excludeRepositories };
