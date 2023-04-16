import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

describe('collection-schema-v11.json', () => {
  const json = [
    'collection-of-legacy-sku.json',
    'collection-of-various-sku-media.json',
    'collection-of-various-sku-types.json',
  ];
  for (const each of json) {
    it(`validates ${each}`, () => {
      const schema = fs.readFileSync(resolve(__dirname, '../../docs/collection/collection-schema-v11.json'));
      const example = fs.readFileSync(resolve(__dirname, `./${each}`));
      deserialize(example, schema);
    });
  }
});
