const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/message/message-schema.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'message.json'))

describe('message-schema.json', () => {
  it('validates example JSON', () => {
    deserialize(example, schema)
  })
})
