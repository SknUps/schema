const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection.schema.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'platform.json'))

describe('collection.schema.json', () => {
  it('validates example platform.json', () => {
    deserialize(example, schema)
  })
})
