// Six Words, One Story — make.fun entry
// Writes one complete six-word story to /output/entry.txt.
//
// The story: "Sold the house. Kept the key."
// A whole life in six words: a home sold, a marriage or an era ended —
// yet the key is kept. Why keep a key to a house you no longer own?
// Attachment, regret, hope, or a door left open: the reader fills it in.
//
// Deterministic by design: the text is a fixed string in code. No network,
// no randomness, no clock, no environment reads. Both runs write the same
// bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Sold the house. Kept the key.";

function main(): void {
  // The grader writes to /output; outside the grader, MAKEFUN_OUTPUT_DIR
  // stands in for it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
}

main();
