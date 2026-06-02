# Vyroxen

**Vyroxen** is an AI‑powered development assistant built with **TypeScript** and **Bun**. It can analyze your codebase, automate repetitive tasks, answer questions, and modify files through natural‑language commands.

---

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [CLI Mode](#cli-mode)
  - [Agent Mode](#agent-mode)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Codebase analysis** – understand the repository layout and content.
- **Task automation** – generate, edit, or delete files via natural language.
- **Interactive CLI** – prompt‑driven interface for quick actions.
- **LLM‑driven agent** – plans and executes complex workflows, with changes staged for review before applying.

---

## Prerequisites
- **Bun** ≥ 1.0 – install from <https://bun.sh/>.
- A recent LTS version of Node.js (optional, for editor integrations).

---

## Installation
```bash
# Clone the repository
git clone https://github.com/Saurav3004/vyroxen.git
cd vyroxen

# Install dependencies using Bun
bun install
```

---

## Usage
The package ships a single executable `vyroxen`.

### CLI Mode
```bash
vyroxen
```
Select **CLI** from the menu and describe the task you want the agent to perform, e.g., *"Add a README summarizing this repository"*. The agent will propose file changes; you can:
- ✅ Approve to apply the changes.
- ❌ Reject to leave the repository untouched.

### Agent Mode
```bash
vyroxen wakeup
```
This starts the conversational agent. It leverages an LLM to plan and execute actions across the codebase, always staging modifications for your approval.

---

## Project Structure
```
├─ ai/                 # LLM provider configuration
├─ agent/              # Core agent logic – tools, orchestrator, diff view
├─ modes/              # Mode implementations (cli, agent, etc.)
├─ tui/                # Terminal UI helpers
├─ index.ts            # Entrypoint
├─ package.json        # Dependencies & scripts
└─ README.md           # This file
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit your changes with clear messages.
4. Open a Pull Request for review.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
