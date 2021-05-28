# JPL Design System Assets

**This is an active work-in-progress**

This repo will contain all of the frontend assets necessary to work with the html markup available through the [JPL WWW Storybook](https://designlabinternal.domain/storybook/). Assets are provided via webpack. We are working on providing compiled css and js files as well.

**Table of contents**

- [Getting started](#getting-started)
  - [Included Components:](#included-components)
  - [Important notes:](#important-notes)
- [Configuration Files](#configuration-files)
- [Syncing with www-frontend](#syncing-with-www-frontend)
  - [How were the files sourced and what changes were made to them?](#how-were-the-files-sourced-and-what-changes-were-made-to-them)

## Getting started

**Install dependencies**

```sh
npm i
```

**Serve at http://localhost:3000/**

```sh
# serve at http://localhost:3000/
# you may need to refresh if you've never run the project before
npm run dev
```

**Build to /dist**

```sh
npm run build
```

### Included Components:

A list of included components can be viewed in the `components` array in [jpl-ds.config.js](./jpl-ds.config.js)

### Important notes:

- The included components thus far are arbitrary and more for testing. They can be selected by modifying `jpl-ds.config.js`
- `index.html` demos some html markup and scripts (lazyload) but it is not comprehensive
- Purge settings can be modified in `tailwind.purge.config.js`. Currently they are set to purge against www-frontend

## Configuration Files

This repo contains several configuration files. Here is a breakdown of what each one is for:

| File                       | Description                                                                                                       | Src          |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------- | :----------- |
| `jpl-ds.config.js`         | Main configuration file for this repo. Determines which components are included in the distributed design system. | local        |
| `tailwind.config.js`       | Tailwind CSS config file copied directly from www-frontend without making any changes                             | www-frontend |
| `tailwind.purge.config.js` | Purge configuration for this repo.                                                                                | local        |
| `postcss.config.js`        | PostCSS configuration for this repo. Note that purge settings are handled via tailwind configuration              | local        |

## Syncing with [www-frontend](https://github.com/nasa-jpl/www-frontend)

**To update assets:**

```sh
# update base tailwind, scss, and font files
npm run sync:base

# update component scss based on components configured in `jpl-ds.config.js`
npm run sync:components

# update all assets
npm run sync:all
```

> Assets are tracked in this repo.

### How were the files sourced and what changes were made to them?

Several assets are copied from the www-frontend repo via npm scripts. Below is an outline of the copied files and their relation to this repo:

**Files that are copied from [frontend-www](https://github.com/nasa-jpl/www-frontend):**

- Tailwind config: `tailwind.config.js`
- SCSS files: entire `/assets/scss/` folder\*
- Webfonts: entire `/static/fonts/` folder
- Webfont CSS: `/static/styles/font-face.css`\*
- Plugins/scripts: `/plugins/detect-ie.js`, `/plugins/lazysizes.client.js`

\*All of the above files are untouched except for:

- `font-face.css`: automatically renamed to `_fonts.scss` and placed in `/src/scss/` via `npm sync:base`
- `/assets/scss/` folder has some files unique to this repo:
  - `main.scss`: similar to the original `main.scss` but with key differences (see comments in file for more details)
  - `_fonts.scss`: updated and renamed from `font-face.css` via `npm sync:base`
  - `_components.scss`: the scss partial that imports all component scss in `/src/scss/components/`, which is built by this repo via `npm sync:components`
