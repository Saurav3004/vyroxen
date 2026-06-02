# Vyroxen

> **Vyroxen** – your AI-powered development companion. It analyzes your codebase, helps you automate repetitive tasks, answers questions, and can even modify files on your behalf—all through natural‑language commands.

## 📦 What is it?

Vyroxen is a small, self‑contained TypeScript project written in **Bun**.

* **Bun** is a fast, all‑in‑one JavaScript runtime that ships a package manager, bundler and test runner.
* The core of the tool lives in `index.ts` and exposes a single executable command called `vyroxen`.
* Several working modes are provided:
  * **CLI** – interactive command‑line interface.
  * **Telegram** – future feature (not yet implemented).
  * **Agent** – conversational mode that leverages the LLM to plan and execute actions. All proposed changes are **stage‑only** until you approve them.

## 🔧 Prerequisites

*   **Bun** >= 1.0 – install from https://bun.sh/.
*   A modern NodeJS LTS version (for editors, CI, etc.) is also useful.

## 🚀 Quick Start

```bash
# 1️⃣ Install dependencies
bun install

# 2️⃣ Run the main entry point
bun run index.ts
# or simply
vyroxen
```

You will see a colorful banner and a menu to pick a mode.

### CLI Mode
Once you choose *CLI*, the tool will prompt you for a task. For example:

```
$ vyroxen

[Banner]
What would you like agent to do?

> Add a README summarizing this repository
```

The agent will propose changes, which you can review. After reviewing, you can:

* `✔` – approve and apply them.
* `❌` – reject and leave the repository untouched.

### Agent Mode
Running `vyroxen wakeup` and selecting *CLI* will eventually dispatch to `modes/cli.ts`, which orchestrates the Agent.

## 📁 Project layout
```
├─ ai/                  # LLM provider configuration
├─ modes/                # Mode implementations (cli, agent, etc.)
├─ tui/                  # Terminal UI helpers
├─ agent/                # Core agent logic – tools, orchestrator, diff view
├─ index.ts              # Entrypoint
├─ package.json          # Dependencies & scripts
└─ README.md             # You’re reading it now!
```

## 📑 Contributing

Feel free to open issues or pull requests. If you plan to contribute:

1. Create a branch.
3. Submit a PR – we’ll review and merge after good testing.

## 📄 License

MIT. See the LICENSE file for details.

---

You can learn more on the [official repo](https://github.com/Saurav3004/vyroxen) .
