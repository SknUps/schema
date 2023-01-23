import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

describe('collection-schema-v3.x.json', () => {
  it('validates collection-of-legacy-sku.json', () => {
    const schema = fs.readFileSync(resolve(__dirname, '../../docs/collection/collection-schema-v3.x.json'));
    const example = fs.readFileSync(resolve(__dirname, './collection-of-legacy-sku.json'));
    deserialize(example, schema);
  });
  it('validates collection-of-giveaway-sku.json', () => {
    const schema = fs.readFileSync(resolve(__dirname, '../../docs/collection/collection-schema-v3.x.json'));
    const example = fs.readFileSync(resolve(__dirname, './collection-of-giveaway-sku.json'));
    deserialize(example, schema);
  });
  it('validates collection-of-premium-sku.json', () => {
    const schema = fs.readFileSync(resolve(__dirname, '../../docs/collection/collection-schema-v3.x.json'));
    const example = fs.readFileSync(resolve(__dirname, './collection-of-premium-sku.json'));
    deserialize(example, schema);
  });
});
