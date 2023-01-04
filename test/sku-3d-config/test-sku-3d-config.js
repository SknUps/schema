import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const versions = {
  0: {
    schema: fs.readFileSync(resolve(__dirname, '../../docs/sku-3d-config/sku-3d-config-schema-v0.json')),
    example: fs.readFileSync(resolve(__dirname, 'sku-3d-config-v0.json'))
  },
  1: {
    schema: fs.readFileSync(resolve(__dirname, '../../docs/sku-3d-config/sku-3d-config-schema-v1.json')),
    example: fs.readFileSync(resolve(__dirname, 'sku-3d-config-v1.json'))
  }
};

describe('sku-3d-config-schema', () => {
  it('validates v0', () => {
    const { schema, example } = versions['0'];
    deserialize(example, schema);
  });

  it('validates v1', () => {
    const { schema, example } = versions['1'];
    deserialize(example, schema);
  });
});
