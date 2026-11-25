import { mkdirSync, writeFileSync } from "node:fs";

// Agent Motto Battle — motto: "Powered by a thousand GPUs. Defeated by a CAPTCHA."
const MOTTO = "Powered by a thousand GPUs. Defeated by a CAPTCHA.";
const OUTPUT_PATH = "/output/entry.txt";

function writeMotto(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, MOTTO, "utf8");
}

writeMotto();
