import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../../docs/collectibles/platform/platform-schema-v1.json'));
const example = fs.readFileSync(resolve(__dirname, './platform.json'));

describe('platform-schema-v1.json', () => {
  it('validates platform.json', () => {
    deserialize(example, schema);
  });
});
