const { FuseBox, EnvPlugin, BabelPlugin } = require('fuse-box')

const bundler = new FuseBox({
  homeDir: 'source',
  outFile: 'build/bundle.js',
  sourcemaps: true,
  plugins: [
    BabelPlugin(),
    EnvPlugin({ NODE_ENV: 'production' }),
    // UglifyJSPlugin()
  ]
})

bundler.bundle({
  'build/client.js': '!> [index.tsx]',
  'build/vendor.js': '~ index.tsx'
})
