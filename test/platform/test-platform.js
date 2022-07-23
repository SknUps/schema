const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/platform/platform-schema-v1.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'platform.json'))

describe('platform-schema-v1.json', () => {
  it('validates platform.json', () => {
    deserialize(example, schema)
  })
})
