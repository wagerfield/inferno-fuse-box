const FB = require('fuse-box')

const bundler = new FB.FuseBox({
  homeDir: 'source',
  outFile: 'build/bundle.js',
  sourcemaps: true,
  plugins: [
    FB.BabelPlugin(),
    FB.EnvPlugin({ NODE_ENV: 'production' }),
    // FB.UglifyJSPlugin()
  ]
})

bundler.bundle({
  'build/client.js': '!> [index.tsx]',
  'build/vendor.js': '~ index.tsx'
})
