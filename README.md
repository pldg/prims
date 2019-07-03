# Prims

Batch processing images from an input directory, a simple way to generate [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Packages

- [prims](packages/prims)
- [prims-cli](packages/prims-cli)

## Contribution

This repository use [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to locally link `prims` to `prims-cli`.

Run `yarn install` from the root directory to install all packages dependencies.

Use `yarn upgrade --latest` to upgrade dependencies to last version (ignores the version range), all *package.json* files will be updated as well to reflect the latest version range (if *package.json* is not automatically updated, then bump the version number manually).
