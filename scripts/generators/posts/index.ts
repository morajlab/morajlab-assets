import { getPostsFiles, createAPIFile } from '../../../lib/.';

export const postsRunner = () => {
  const content = getPostsFiles().map((file) => ({
    file,
    path: `assets/morajlab/_posts/${file}`,
  }));

  createAPIFile('posts', JSON.stringify({ content, count: content.length }));
};

export default postsRunner;
