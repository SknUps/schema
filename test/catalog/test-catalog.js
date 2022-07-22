const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/catalog/catalog-schema-v2.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'catalog.json'))

describe('catalog schema', () => {
  it('validates example JSON', () => {
    deserialize(example, schema)
  })
})
