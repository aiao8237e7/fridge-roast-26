// fridge-roast-26 — entry for "Roast the Smart Fridge: One Line, Best Laugh Wins"
// (make.fun competition u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
//
// The program writes exactly one roast line, at most 160 characters, to
// /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The smart fridge rebooted during a firmware update and forgot what cold is — three grand for an appliance that needs a nap and a password reset.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
