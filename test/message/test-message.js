const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/message.schema.v1.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'message.json'))

describe('message.schema.v1.json', () => {
  it('validates example JSON', () => {
    deserialize(example, schema)
  })
})
