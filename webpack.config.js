const path = require('path');

module.exports = {
    mode: 'development', //en mode 'development' le fichier CSS généré sera standart alors qu'en mode 'production' il sera minifié, c'est à dire écrit sur 1 ligne 
    entry: ['./scss/style.scss'], //tableau permettant de définir les différents point d'entrée du script.
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