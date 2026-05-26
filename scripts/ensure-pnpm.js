const fs = require("fs");
const path = require("path");

const ua = process.env.npm_config_user_agent || "";
const isPNPM = ua.startsWith("pnpm/");

function rm(target) {
  try {
    fs.rmSync(target, { recursive: true, force: true });
  } catch {}
}

if (!isPNPM) {
  rm(path.join(process.cwd(), "node_modules"));
  rm(path.join(process.cwd(), "package-lock.json"));
  rm(path.join(process.cwd(), "yarn.lock"));

  console.error(`
🚫 This repository enforces pnpm only.

Detected: ${ua || "unknown"}

Please use pnpm with Corepack:

  corepack enable
  pnpm install

(Corepack will provision the exact version pinned in "packageManager" of package.json.)
`);
  process.exit(1);
}
