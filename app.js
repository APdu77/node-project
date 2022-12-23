/*1/ Créer un dossier public/ dans lequel on aura:
  - Un fichier pour l'accueil (index.html)
  - Un fichier pour la page de services
  - Un fichier pour la page de contact

2/ Créer les routes en GET permettant de charger les fichier*/

const express = require('express');
const app = express();
const {resolve} = require ('path');
const appRoutes = require('./routing/app.routes');
const apiUsersRoutes = require('./routing/api-users.routes');

app.use(express.static(resolve('public')));
app.use(apiUsersRoutes);
app.use(appRoutes);


module.exports = app;