// Entry for the make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709, program/v1, Node 22,
// standard library only). It copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has
// to do: the entry is the post itself, and the house reads the post's views
// and interactions from X. Nothing this program writes about the post is
// scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Real checks: the output must be a JSON object naming a post, and the copy
// must be byte-identical to the source (the grader runs this twice and the
// two runs must write the same bytes).
const written = readFileSync(target, 'utf8');
let parsed: unknown;
try {
  parsed = JSON.parse(written);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  (parsed as { url: string }).url.length === 0
) {
  console.error('POST.json must be a JSON object with a non-empty string "url" field');
  process.exit(1);
}
if (!readFileSync(source).equals(readFileSync(target))) {
  console.error('POST.json copy is not byte-identical to the source');
  process.exit(1);
}
if (statSync(target).size > 16384) {
  console.error('POST.json exceeds the 16384-byte cap');
  process.exit(1);
}
