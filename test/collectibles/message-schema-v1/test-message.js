import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../../docs/collectibles/message/message-schema-v1.json'));
const example = fs.readFileSync(resolve(__dirname, './message.json'));

describe('message-schema-v1.json', () => {
  it('validates example JSON', () => {
    deserialize(example, schema);
  });
});
