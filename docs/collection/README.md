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

## `collection-schema-v6.json`

Introduce optional 3D.

This introduces an optional `three` object to `media`.  If present it allows a type to be specified:
- SIMPLE - traditional 3D with glb and environment json
- NONE - no 3D

If absent, existing behaviour should be observed which is equivalent to type SIMPLE.

## `collection-schema-v7.json`

Add `enumeration` property.

Moved `quantity` into `enumeration` property, this is the only required property for  `enumeration`

Other optional properties to support new stock features

- `reserved`, number of items to reserve for premium drop links. Default 0
- `withheld`, number of items to withhold from purchase or claim. Default 0
- `expires`, ISO 8601 date time SKU will expire and not be available for from purchase or claim. Default not set
- `allocation`, should issue numbers be assigned in a `SEQUENTIAL` or `RANDOM` order. Default sequential

Note: `allocation` can't be changed