#!/usr/bin/env bun

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