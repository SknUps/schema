import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../docs/message/message-schema.json'));
const example = fs.readFileSync(resolve(__dirname, './message.json'));

describe('message-schema.json', () => {
  it('validates example JSON', () => {
    deserialize(example, schema);
  });
});
