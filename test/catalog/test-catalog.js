const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/catalog/catalog-schema-v2.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'catalog.json'))

describe('catalog-schema-v1.json', () => {
  it('validates catalog.json', () => {
    deserialize(example, schema)
  })
})
