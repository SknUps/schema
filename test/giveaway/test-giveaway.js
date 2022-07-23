const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/giveaway/giveaway-schema-v1.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'giveaway.json'))

describe('giveaway-schema-v1.json', () => {
  it('validates giveaway.json', () => {
    deserialize(example, schema)
  })
})
