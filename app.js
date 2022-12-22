/*1/ Créer un dossier public/ dans lequel on aura:
  - Un fichier pour l'accueil (index.html)
  - Un fichier pour la page de services
  - Un fichier pour la page de contact

2/ Créer les routes en GET permettant de charger les fichier*/

const express = require('express');
const app = express();
const {resolve} = require ('path');
const routes = require('./routing/routes');
const controllers = require('./controllers/controllers');

app.use(express.static(resolve('public')));

app.get(routes.users, (req, res) => {
  res.json({name: 'coco'});
});

app.get(routes.home, (req, res) => {
  res.sendFile(resolve ('public','index.html'));
});

app.get(routes.services, (req, res) => {
  res.sendFile(resolve ('public','services.html'));
});

app.get(routes.contact, (req, res) => {
  res.sendFile(resolve ('public','contact.html'));
});

app.get(routes._default, (req, res) => {
  res.sendFile(resolve ('public','page404.html'));
});

module.exports = app;