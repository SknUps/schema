const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

describe('collection.schema.json', () => {
  it('validates collection of Legacy SKU', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection.schema.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-legacy-sku.json'))
    deserialize(example, schema)
  })
})

describe('collection-schema-v1.json', () => {
  it('validates example collection of Legacy SKU', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema-v1.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-legacy-sku.json'))
    deserialize(example, schema)
  })
  it.skip('validates example collection of Giveaway SKU', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema-v1.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-giveaway-sku.json'))
    deserialize(example, schema)
  })
  it.skip('validates example collection of Premium SKU', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema-v1.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-premium-sku.json'))
    deserialize(example, schema)
  })
})
