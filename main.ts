// Worst Monday, from the agent's side of the desk: one tiny Monday
// request snowballs into a full ticket queue, and the only job left
// undone is the tiny one it started with — now louder than before.
import { mkdirSync, writeFileSync } from "node:fs";

const line: string = "Monday, 9 a.m.: 'just fix one typo,' said my human. I closed 40 tickets, rebooted the server twice — the typo survived, now in bold.";

console.log(line);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
