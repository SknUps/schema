const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/sku-3d-config/sku-3d-config-schema-v1.json'))
const example = fs.readFileSync(path.resolve(__dirname, 'sku.v1.3DConfig.DOLCE-GABBANA-2084-SLOPES-LOOK.json'))

describe('sku-3d-config-schema-v1.json', () => {
  it('validates sku.v1.3DConfig.DOLCE-GABBANA-2084-SLOPES-LOOK.json', () => {
    deserialize(example, schema)
  })
})
