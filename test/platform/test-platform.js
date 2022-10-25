const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/platform/platform-schema.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'platform.json'))

describe('platform-schema.json', () => {
  it('validates platform.json', () => {
    deserialize(example, schema)
  })
})
