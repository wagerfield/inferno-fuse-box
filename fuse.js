const { join } = require('path')
const argv = require('yargs').boolean('p').argv
const fsbx = require('fuse-box')

const buildDir = 'build'
const sourceDir = 'source'

const appBundle = join(buildDir, 'app.js')
const lazyBundle = join(buildDir, 'lazy.js')
const vendorBundle = join(buildDir, 'vendor.js')

const appEntry = '> [index.tsx]'
const lazyEntry = 'lazy.tsx'

const isProduction = argv.p

const fuse = new fsbx.FuseBox({
  homeDir: sourceDir,
  outFile: appBundle,
  plugins: [
    fsbx.BabelPlugin(),
    isProduction && fsbx.EnvPlugin({ NODE_ENV: 'production' }),
    isProduction && fsbx.UglifyJSPlugin()
  ]
})

const bundles = {
  [lazyBundle]: lazyEntry,
  [vendorBundle]: [
    '+ inferno',
    '+ inferno-component'
  ].join(' '),
}

if (isProduction) {

  fuse.bundle(Object.assign({
    [appBundle]: appEntry
  }, bundles))

} else {

  fuse.bundle(bundles).then(() => {
    fuse.devServer(appEntry, {
      port: 8000
    })
  })
}
