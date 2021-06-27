import { writeFileSync } from 'fs';
import { join } from 'path';

export const createAPIFile = (path: string, content: string) => {
  writeFileSync(join(process.cwd(), 'api', `${path}.json`), content, {
    encoding: 'utf8',
  });
};
