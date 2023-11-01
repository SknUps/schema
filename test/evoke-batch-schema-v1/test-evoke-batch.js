import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../docs/evoke-batch/evoke-batch-schema-v1.json'));
const example = fs.readFileSync(resolve(__dirname, './evoke-batch.json'));

describe('evoke-batch-schema-v1.json', () => {
  it('validates evoke-batch.json', () => {
    deserialize(example, schema);
  });
});
