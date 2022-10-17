const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const versions = {
  0: {
    schema: fs.readFileSync(path.resolve(__dirname, '../../docs/sku-3d-config/sku-3d-config-schema-v0.json')),
    example: fs.readFileSync(path.resolve(__dirname, 'sku-3d-config-v0.json'))
  },
  1: {
    schema: fs.readFileSync(path.resolve(__dirname, '../../docs/sku-3d-config/sku-3d-config-schema-v1.json')),
    example: fs.readFileSync(path.resolve(__dirname, 'sku-3d-config-v1.json'))
  }
}

describe('sku-3d-config-schema', () => {
  it('validates v0', () => {
    const { schema, example } = versions['0']
    deserialize(example, schema)
  })

  it('validates v1', () => {
    const { schema, example } = versions['1']
    deserialize(example, schema)
  })
})
