const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: './libs/ui/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
