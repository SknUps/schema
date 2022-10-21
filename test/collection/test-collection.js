const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

describe('collection-schema-v2.json', () => {
  it('validates collection-of-legacy-sku.json', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema-v2.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-legacy-sku.json'))
    deserialize(example, schema)
  })
  it('validates collection-of-giveaway-sku.json', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema-v2.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-giveaway-sku.json'))
    deserialize(example, schema)
  })
  it('validates collection-of-premium-sku.json', () => {
    const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema-v2.json'))
    const example = fs.readFileSync(path.resolve(__dirname, 'collection-of-premium-sku.json'))
    deserialize(example, schema)
  })
})
