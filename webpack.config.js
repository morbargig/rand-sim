const webpack = require( 'webpack' )
const path = require( 'path' )
const nodeExternals = require( 'webpack-node-externals' )

const bannerOptions = {
    raw: true,
    banner: 'require("source-map-support").install();'
}

module.exports = {
    target: 'node',
    mode: 'production',
    stats: 'errors-only',
    devServer: {
        colors: true,
        hash: false,
    },
    entry: {
        app: [ './src/server.js' ]
    },
    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    },
    output: {
        path: path.resolve( __dirname, './build' ),
        filename: 'server.js'
    },
    externals: [ nodeExternals() ],
    plugins: [
        new webpack.BannerPlugin( bannerOptions )
    ],
    devtool: 'sourcemap'
}
