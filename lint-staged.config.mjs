import path from "path";

const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .filter((f) => f.includes("/src/"))
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
};

const buildPrettierCommand = (filenames) => {
  return `prettier --write ${filenames
    .filter((f) => f.includes("/src/"))
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;
};
const config = {
  "*.{ts,tsx}": [
    buildEslintCommand,
    buildPrettierCommand,
    "bash -c 'pnpm check-types'",
  ],
};

export default config;
