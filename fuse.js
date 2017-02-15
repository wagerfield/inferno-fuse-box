const FB = require('fuse-box')

const fuse = new FB.FuseBox({
  cache: false,
  homeDir: 'source',
  outFile: 'build/bundle.js',
  plugins: [
    [ /\.tsx?$/, FB.BabelPlugin() ]
  ]
})

fuse.bundle('>index.tsx')
