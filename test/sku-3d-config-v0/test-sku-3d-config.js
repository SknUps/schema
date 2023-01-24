import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

describe('sku-3d-config-schema-v0.json', () => {
  it('validates sku-3d-config.json', () => {
    const schema = fs.readFileSync(resolve(__dirname, '../../docs/sku-3d-config/sku-3d-config-schema-v0.json'));
    const example = fs.readFileSync(resolve(__dirname, 'sku-3d-config.json'));
    deserialize(example, schema);
  });
});
