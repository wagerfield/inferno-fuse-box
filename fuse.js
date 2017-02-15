const FB = require('fuse-box')

const fuse = new FB.FuseBox({
  homeDir: 'source',
  outFile: 'build/app.js',
  plugins: [
    [ /\.tsx?$/, FB.BabelPlugin() ],
    FB.EnvPlugin({ NODE_ENV: 'production' }),
    FB.UglifyJSPlugin()
  ]
})

fuse.bundle({
  'build/vendor.js': '+ inferno',
  'build/app.js': '> [index.tsx]'
})

// fuse.bundle({
//   'build/vendor.js': '+ inferno',
// }).then(() => {
//   fuse.devServer('> [index.tsx]', {
//     port: 3000
//   })
// })
