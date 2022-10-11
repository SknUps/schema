# schema

This repository hosts JSON schema files related to the SKNUPS platform.

GitHub Pages will serve any file in the `/docs` directory of the `main` branch over **public** internet.

## Versioning

The library version is managed by github actions.
- The `package.json` contains a fixed `0.0.1-snapshot.1` version that is used for local builds
- A merge to the `main` branch will trigger a SNAPSHOT build with version `0.0.1-snapshot.<commit time>`
- A tag `vX.Y.Z` will trigger a RELEASE build with version `X.Y.Z`

## Current Versions

### catalog
[`https://sknups.github.io/schema/catalog/catalog-schema-v2.json`](https://sknups.github.io/schema/catalog/catalog-schema-v2.json)

### collection
[`https://sknups.github.io/schema/collection/collection-schema-v1.json`](https://sknups.github.io/schema/collection/collection-schema-v1.json)

### giveaway
[`https://sknups.github.io/schema/giveaway/giveaway-schema.json`](https://sknups.github.io/schema/giveaway.schema.json)

###inventory
[`https://sknups.github.io/schema/inventory/inventory-schema-v1.json`](https://sknups.github.io/schema/inventory.schema.v1.json)
