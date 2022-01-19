const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: './apps/webextension/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
