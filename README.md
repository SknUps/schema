# schema

This repository hosts JSON schema files related to the SKNUPS platform.

GitHub Pages will serve any file in the `/docs` directory of the `main` branch over **public** internet.

## Versioning

The library version is managed by github actions.
- The `package.json` contains a fixed `0.0.1-snapshot.1` version that is used for local builds
- A merge to the `main` branch will trigger a SNAPSHOT build with version `0.0.1-snapshot.<commit time>`
- A tag `vX.Y.Z` will trigger a RELEASE build with version `X.Y.Z`

## Symlinks

There should be a symbolic link to the latest stable version of each schema.
Create symbolic link to version 1 of your schema like this:

```bash
# from root of Git repository
ln -sf prediction-schema-v1.json docs/evoke/prediction/prediction-schema.json
```

## Evoke

[`https://sknups.github.io/schema/evoke/prediction/prediction-schema.json`](https://sknups.github.io/schema/evoke/prediction/prediction-schema.json)

## SKNUPS Collectibles Platform

### brand
[`https://sknups.github.io/schema/collectibles/brand/brand-schema.json`](https://sknups.github.io/schema/collectibles/brand/brand-schema.json)

### catalog
[`https://sknups.github.io/schema/collectibles/catalog/catalog-schema.json`](https://sknups.github.io/schema/collectibles/catalog/catalog-schema.json)

### collection
[`https://sknups.github.io/schema/collectibles/collection/collection-schema.json`](https://sknups.github.io/schema/collectibles/collection/collection-schema.json)

### giveaway
[`https://sknups.github.io/schema/collectibles/giveaway/giveaway-schema.json`](https://sknups.github.io/schema/collectibles/giveaway/giveaway-schema.json)

### inventory
[`https://sknups.github.io/schema/collectibles/inventory/inventory-schema.json`](https://sknups.github.io/schema/collectibles/inventory/inventory-schema.json)

### message
[`https://sknups.github.io/schema/collectibles/message/message-schema.json`](https://sknups.github.io/schema/collectibles/message/message-schema.json)

### platform
[`https://sknups.github.io/schema/collectibles/platform/platform-schema.json`](https://sknups.github.io/schema/collectibles/platform/platform-schema.json)

### sku-3d-config
[`https://sknups.github.io/schema/collectibles/sku-3d-config/sku-3d-config-schema.json`](https://sknups.github.io/schema/collectibles/sku-3d-config/sku-3d-config-schema.json)
