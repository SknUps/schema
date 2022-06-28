const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/giveaway.schema.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'giveaway.json'))

describe('giveaway.schema.json', () => {
  it('validates example JSON', () => {
    deserialize(example, schema)
  })
})
