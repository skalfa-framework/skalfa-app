const { spawn } = require("child_process");

const userAgent = process.env.npm_config_user_agent || "";
let pm = "npm";

if (userAgent.includes("yarn")) {
  pm = "yarn";
} else if (userAgent.includes("pnpm")) {
  pm = "pnpm";
} else if (userAgent.includes("bun")) {
  pm = "bun";
}

console.log(`[INFO] Executing dev server using package manager: ${pm}`);

const child = spawn(
  `npx concurrently --raw "${pm} run watch" "${pm} run skalfa watch:barrels"`,
  { stdio: "inherit", shell: true }
);

child.on("exit", (code) => {
  process.exit(code || 0);
});
