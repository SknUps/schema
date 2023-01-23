# collection schema

This allows `collection.json` in catalog-loader to be validated.

branches of catalog-loader use specific versions of collection schema.

The symlink `collection-schema.json` must always point to the current stable version.

The current stable version is the version used by the **main** branch of catalog-loader.

vscode-extension consumes the symlink, thus creating the impression of automatic updates.

---

## `collection-schema-v3.json`

Current stable version.

## `collection-schema-v3.x.json`

Forked from v3 .

This was an attempt to introduce a more formal concept of a SKU Collection.

This development is parked for now.

## `collection-schema-v4.json`

Permit breaking change to SKU Data Model v1 / v2 to prevent confusion between the terms `DYNAMIC` and `STATIC`.

## `collection-schema-v5.json`

Introduce SKU Data Model v3.

This permits `media`, and therefore multiple `secondary` media comprising an Item Carousel.
