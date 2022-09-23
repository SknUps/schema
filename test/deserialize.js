const Ajv = require('ajv')
const addFormats = require('ajv-formats')

/**
 * @param {Buffer} json
 * @param {Buffer} schema
 */
function deserialize (json, schema) {
  const ajv = new Ajv({ strict: true })
  addFormats(ajv)
  const validate = ajv.compile(JSON.parse(schema))
  const valid = validate(JSON.parse(json))
  if (!valid) {
    console.error(JSON.stringify(validate.errors, null, 2))
    throw new Error(`Cannot deserialize JSON ${json}`)
  }
}

module.exports = {
  deserialize
}
