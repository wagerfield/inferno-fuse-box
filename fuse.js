const {
  FuseBox,
  BabelPlugin,
  ReplacePlugin,
  UglifyJSPlugin
} = require('fuse-box')

const bundler = new FuseBox({
  homeDir: 'source',
  outFile: 'build/bundle.js',
  plugins: [
    BabelPlugin(),
    ReplacePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    // UglifyJSPlugin()
  ]
})

bundler.bundle({
  'build/server.js': '!> [server.tsx]',
  'build/client.js': '!> [client.tsx]',
  'build/vendor.js': '~ client.tsx'
})
