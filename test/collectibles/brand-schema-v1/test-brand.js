import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../../docs/collectibles/brand/brand-schema-v1.json'));
const example = fs.readFileSync(resolve(__dirname, './brand.json'));

describe('brand-schema-v1.json', () => {
  it('validates brand.json', () => {
    deserialize(example, schema);
  });
});
