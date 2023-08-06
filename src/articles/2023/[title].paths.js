import fs from 'fs';

export default {
  paths() {
    return fs.readdirSync('articles').map((file) => {
      return {
        params: {
          file,
        },
      };
    });
  },
};
