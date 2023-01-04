import Ajv from 'ajv';
import addFormats from 'ajv-formats';

/**
 * @param {Buffer} json
 * @param {Buffer} schema
 */
export function deserialize (json, schema) {
  const ajv = new Ajv({ strict: true });
  addFormats(ajv);
  const validate = ajv.compile(JSON.parse(schema));
  const valid = validate(JSON.parse(json));
  if (!valid) {
    console.error(JSON.stringify(validate.errors, null, 2));
    throw new Error(`Cannot deserialize JSON ${json}\nERRORS: ${JSON.stringify(validate.errors, null, 2)}`);
  }
}
