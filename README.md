## Via SASS (from scratch)

> npm --save-dev install sass<br/>
> sass scss/style.scss dist/css/style.css

Vous pouvez utiliser l'option `--watch` afin de compiler vos fichiers scss à chaque sauvegarde.

Afin d'obtenir un fichier css exploitable dans un environnement de production il faudra utiliser l'option `--style=compressed` :
> sass --style=compressed scss/style.scss:dist/css/style.min.css

## Via Webpack (from scratch)

> npm --save-dev install webpack webpack-cli<br/>
> npm --save-dev install sass<br/>
> npm --save-dev install extract-loader file-loader sass-loader<br/>

Il faut ensuite configurer le fichier de configuration de webpack, situé à la racine du projet et qui se nomme `webpack.config.js`.<br/>
Une fois la configuration faite il suffit de lancer webpack via la commande :

> npx webpack

Vous pouvez utiliser l'option `--watch` afin de compiler vos fichiers scss à chaque sauvegarde.

## Lancement depuis le repo

> npm install<br/>
> npx webpack

Vous pouvez utiliser l'option `--watch` afin de compiler vos fichiers scss à chaque sauvegarde.

## Ressources

* [La documentation](https://sass-lang.com/documentation)<br/>
* [Playground](https://www.sassmeister.com/)