<div id="top"></div>

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<p align="center">
  <a href="https://github.com/Drumpy/vrttv-boilerplate/stargazers">
    <img src="https://img.shields.io/github/stars/Drumpy/vrttv-boilerplate.svg?style=for-the-badge" />
  </a>
  <a href="https://github.com/Drumpy/vrttv-boilerplate/issues">
    <img src="https://img.shields.io/github/issues/Drumpy/vrttv-boilerplate.svg?style=for-the-badge" />
  </a>
</p>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="#">
    <img src="https://i.ibb.co/mqPXzct/VRTTV-Banner.png" alt="VRTTV Banner">
  </a>

  <h2 align="center">VRTTV Boilerplate</h2>
  <p align="center">
    Avoid setting up a project from scratch. Start using VRTTV 🎉
    <br />
    <br />
    <a href="https://vrttv-boilerplate.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Drumpy/vrttv-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/Drumpy/vrttv-boilerplate/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

# 🤔 What’s this?

Are you tired of always creating the same structure from scratch for your projects? Me too. 🥱

This is my _go-to_ when I start a new project on front-end development.

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository 💚

<p align="right">(<a href="#top">back to top</a>)</p>

# 🔮 What’s inside?

- ⚡ [Vite](https://vitejs.dev/) - Next generation frontend tooling.
  - 📦 [Imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - Plugin for compressing image assets.
  - 📦 [Vite Plugin HTML](https://github.com/vbenjs/vite-plugin-html) - Plugin for processing HTML with minify.
- 🌟 [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- 🔀 [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) - Declarative routing for React apps at any scale.
- 💜 [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript.
- 🎨 [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework.
- ⚙️ [Babel](https://babeljs.io/) with [preset-env](https://babeljs.io/docs/en/babel-preset-env) - The compiler for next generation JavaScript.
- 💅 [Prettier](https://prettier.io/) - Opinionated Code Formatter.
- 🔍 [ESLint](https://eslint.org/) - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
  - 📦 [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/) - Easy autofixable import sorting.
  - 📦 [Import Plugin](https://github.com/benmosher/eslint-plugin-import/) - Rules that help validate proper imports.
  - 📦 [Tailwind Plugin](https://github.com/francoismassart/eslint-plugin-tailwindcss/) - Plugin for Tailwind CSS usage.
  - And a few other ES2015+ related rules.
- 🐶 [Husky](https://github.com/typicode/husky) - Git hooks made easy.
  - 🪝 commit-msg
  - 🪝 pre-commit
- 🚫 [Lint Staged](https://github.com/okonet/lint-staged) - Run linters on git staged files.
- ✍️ [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with 🎉 [Gitmoji](https://gitmoji.dev/) - A specification for adding human and machine readable meaning to commit messages.
- 🚦 [GitHub Actions](https://github.com/features/actions) - Automate your workflow on GitHub.
- 🔺 [Vercel](https://vercel.com/) - Deploy your application on Vercel.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# 🚀 Getting Started

These are the necessary steps to use 💯 of the potential of this boilerplate.

## 🚨 Prerequisites

You need this technologies :

- [Node 16>=](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads/)
- [Vercel Account](https://vercel.com/signup)
- [Vercel CLI](https://vercel.com/cli)
- [Gitmoji CLI](https://github.com/carloscuesta/gitmoji-cli#install)

## 💻 Run Locally

1. Option 1: Generate a new repository with this template

- [Use this template](https://github.com/Drumpy/vrttv-boilerplate/generate)

1. Option 2: Copy just the project scaffolding.

```bash
npx --yes degit Drumpy/vrttv-boilerplate your-folder-name
```

1. Option 3: Clone the entire repository.

```bash
git clone https://github.com/Drumpy/vrttv-boilerplate
```

2. Go to the project directory.

```bash
cd vrttv-boilerplate
```

3. Install dependencies.

```bash
npm install
```

4. Start the server.

```bash
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

## ⚙️ Setup GitHub Actions

1. Run Vercel CLI in your project folder. After completed, a folder **.vercel** is created in your root directory.

```bash
vercel --confirm
```

2. Go to actions secrets in your GitHub Repository.

```bash
https://github.com/your-username/your-repo-name/settings/secrets/actions/new
```

3. Add this three tokens.

```bash
# Generate this in https://vercel.com/account/tokens
VERCEL_TOKEN
```

```bash
# It is located in 'project.json' inside the '.vercel' folder
ORG_ID
```

```bash
# It is located in 'project.json' inside the '.vercel' folder
PROJECT_ID
```

### 💡 **Tip!**

You can skip GitHub Action execution by adding **[skip ci]** to your commit message.

```bash
style: change the colors of the theme [skip ci]
```

<p align="right">(<a href="#top">back to top</a>)</p>

## 🐕‍🦺 Setup Husky

1. Run Husky command.

```bash
npx --yes husky install
```

2. Use Gitmoji CLI to commit changes.

```bash
gitmoji -c
```

3. Write your commits following the rules of [Conventional Commit](https://github.com/Drumpy/vrttv-boilerplate#-conventional-commit-rules). Examples:

```bash
feat: added navbar component
```

```bash
fix(navbar): fixed all the broken links
```

### 👇 Creating a commit as an example

<img src="https://i.ibb.co/1dBhQ51/Windows-Terminal-wmp-Pxe1-Q3u.gif"/>

### 📜 Conventional Commit Rules

Use this table as a reference when writing commits. Husky will be in charge of checking that the rules will be followed.

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📝   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  🎨   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  ♻️   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  ⚡   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  ✅   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |  🚨   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  👷   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  ➕   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |  ⏪   |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GitHhub Actions Pipeline -->

# ♾️ GitHub Actions Deployment Pipeline

- 🛑 Cancel Previous Redundant Builds
- 📝 Assign PR to creator
- 💅🏼 Linting
- 🔗 Deploy to Vercel

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

# 📧 Contact

Diego Do Santos - ddosantos@hotmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Drumpy/vite-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/Drumpy/vrttv-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Drumpy/vrttv-boilerplate.svg?style=for-the-badge
[product-screenshot]: https://i.ibb.co/zf7gjMR/Card-Outline.png
