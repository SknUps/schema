import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../docs/giveaway/giveaway-schema.json'));
const example = fs.readFileSync(resolve(__dirname, './giveaway.json'));

describe('giveaway-schema.json', () => {
  it('validates giveaway.json', () => {
    deserialize(example, schema);
  });
});
