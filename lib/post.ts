import { readdirSync } from 'fs';
import { join } from 'path';

export const getPostsFiles = (
  path: string = join(process.cwd(), 'assets', 'morajlab', '_posts'),
  extension: string = 'md'
) => {
  const files = readdirSync(path);

  return files.filter((file) => file.includes(`.${extension}`));
};
