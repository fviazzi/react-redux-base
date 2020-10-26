// External modules
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Internal modules
const config = require("./config.json");

module.exports = new BrowserSyncPlugin({

  host  : 'localhost',

  port  : 8000,

  proxy : config.server,

  open  : config.browserSync.open,

  files : [{

    match: [
      'src/**/*.jsx',
      'src/**/*.scss'
    ],

    server: {
      baseDir : [ config.server ]
    },

    fn: (event, file) => {
      if (event === "change") {
        const bs = require('browser-sync').get('bs-webpack-plugin');
        bs.reload();
      }
    }
  }]
});