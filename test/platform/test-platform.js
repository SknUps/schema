import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../docs/platform/platform-schema.json'));
const example = fs.readFileSync(resolve(__dirname, './platform.json'));

describe('platform-schema.json', () => {
  it('validates platform.json', () => {
    deserialize(example, schema);
  });
});
