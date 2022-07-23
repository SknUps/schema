const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/brand/brand-schema-v1.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'brand.json'))

describe('brand-schema-v1.json', () => {
  it('validates brand.json', () => {
    deserialize(example, schema)
  })
})
