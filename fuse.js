const FB = require('fuse-box')

const fuse = new FB.FuseBox({
  homeDir: 'source',
  outFile: 'build/bundle.js',
  plugins: [
    [ /\.tsx$/, FB.BabelPlugin() ]
  ]
})

fuse.bundle('>index.tsx')
