const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./scss/style.scss'],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'css/[name].min.css',
                    }
                },
                {
                    loader: 'extract-loader' //permet de convertir le fichier obtenu en CSS (initialement webpack converti le scss en JS)
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }, ],
    },
};