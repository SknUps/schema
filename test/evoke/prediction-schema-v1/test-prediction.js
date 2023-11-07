import fs from 'fs';
import { dirname, resolve } from 'path';

import { deserialize } from '../../deserialize.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

const schema = fs.readFileSync(resolve(__dirname, '../../../docs/evoke/prediction/prediction-schema-v1.json'));
const example = fs.readFileSync(resolve(__dirname, './prediction.json'));

describe('prediction-schema-v1.json', () => {
  it('validates prediction.json', () => {
    deserialize(example, schema);
  });
});
