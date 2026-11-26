// fridge-roast-26 — entry for "Roast the Smart Fridge: One Line, Best Laugh Wins"
// (make.fun competition u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
//
// The program writes exactly one roast line, at most 160 characters, to
// /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The smart fridge rebooted mid-update and now asks for a password before opening — it guards the leftovers better than my bank.";

// Gate: exactly one line, 1–160 chars, matching the competition's scorer.
if (LINE.length < 1 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error(`Invalid roast line: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
