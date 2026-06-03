#!/usr/bin/env bun

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});

import {Command} from "commander"
import { runWakeup } from "./tui/wakeup";

const program = new Command();

program.name("vyroxen").description("Vyroxen is your AI development agent. Analyze codebases, automate tasks, modify files, and build faster using natural language commands.").version('0.1.1')


program.command("wakeup").description("Show the banner and pick cli or telegram mode").action(
    async () => {
        await runWakeup()
    }
);

await program.parseAsync(process.argv)