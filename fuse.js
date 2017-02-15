const FB = require('fuse-box')

const bundler = new FB.FuseBox({
  homeDir: 'source',
  outFile: 'build/bundle.js',
  plugins: [
    [/\.tsx$/, FB.BabelPlugin()]
  ]
})

bundler.bundle('>index.tsx')