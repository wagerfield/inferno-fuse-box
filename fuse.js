const FB = require('fuse-box')

const bundler = new FB.FuseBox({
  homeDir: 'source',
  outFile: 'build/bundle.js',
  plugins: [
    FB.BabelPlugin()
  ]
})

bundler.bundle('>index.jsx')