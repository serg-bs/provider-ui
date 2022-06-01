import "./telecom_logo.png"
module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.png$/,
                use: [{loader: 'file-loader'}]
            }
        ]
    }
}