const { merge } = require('ramda')
const argv = require('yargs').boolean('p').argv
const fsbx = require('fuse-box')

const isProduction = argv.p

const fuse = new fsbx.FuseBox({
  cache: false,
  homeDir: 'source',
  outFile: 'build/app.js',
  plugins: [
    [ /\.tsx?$/, fsbx.BabelPlugin() ],
    // isProduction && fsbx.EnvPlugin({ NODE_ENV: 'production' }),
    // isProduction && fsbx.UglifyJSPlugin()
  ]
})

const vendor = {
  'build/vendor.js': [
    '+ inferno',
    '+ ramda'
  ].join(' ')
}

// if (isProduction) {

  fuse.bundle(merge({
    'build/app.js': '> [index.tsx]'
  }, vendor))

// } else {

//   fuse.bundle(vendor).then(() => {
//     fuse.devServer('> [index.tsx]', {
//       port: 3000
//     })
//   })
// }
