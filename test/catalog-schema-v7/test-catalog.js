import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';


const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../docs/catalog/catalog-schema-v7.json'));
const example = fs.readFileSync(resolve(__dirname, './catalog.json'));

describe('catalog-schema-v7.json', () => {
  it('validates catalog.json', () => {
    deserialize(example, schema);
  });
});
