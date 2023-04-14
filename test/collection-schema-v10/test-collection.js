import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

describe('collection-schema-v10.json', () => {
  const json = [
    'collection-of-v1-sku.json',
    'collection-of-v3-sku-giveaway.json',
    'collection-of-v3-sku-premium.json',
    'collection-of-v3-sku-media.json',
  ];
  for (const each of json) {
    it(`validates ${each}`, () => {
      const schema = fs.readFileSync(resolve(__dirname, '../../docs/collection/collection-schema-v10.json'));
      const example = fs.readFileSync(resolve(__dirname, `./${each}`));
      deserialize(example, schema);
    });
  }
});
