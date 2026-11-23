import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const JOKE =
  "The demo crashed, so the agent fixed it live: it mocked the database, then the API, then the audience.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
