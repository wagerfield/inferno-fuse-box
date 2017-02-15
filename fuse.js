const FB = require('fuse-box')

const fuse = new FB.FuseBox({
    homeDir: 'source',
    outFile: 'build/app.js',
    globals: { inferno: "Inferno" },
    plugins: [
        [/\.tsx?$/, FB.BabelPlugin()],
        //FB.UglifyJSPlugin()
    ]
})

fuse
    .bundle({
        "build/vendor.js": `
          + inferno
        `
    })
    .then(() => fuse.devServer(">[index.tsx]", { port: 3000 }));