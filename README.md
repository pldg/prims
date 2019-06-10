# Prims

Batch processing images from an input directory.

## Packages

- [prims](./packages/prims)
- [prims-cli](./packages/prims-cli)

## Contribution

This repository use [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to locally link `prims` to `prims-cli`.

Run `yarn install` from the root directory to install all packages dependencies.

Use `yarn upgrade --latest` to upgrade dependencies to last version (ignores the version range), all *package.json* files should be updated as well to reflect the latest version range (if not update the version number manually).
