// CORE/ESPREX.JS
const esprexApp = (req, res) => {
    // routing --> déclenchement du bon ctrl en fonction de l'url de la requête
    
    if (esprexApp.router.routes[req.url]) {
        esprexApp.router.routes[req.url](req, res);
    }
    else {
        res.end('Page not found');
    }
    
  };
  
  esprexApp.router = { routes: {}};

esprexApp.get = function(paramRoute, paramCtrl) {
  esprexApp.router.routes[paramRoute] = paramCtrl;
};

module.exports = function() { return esprexApp; };

// APP.JS
const esprex = function() { return esprexApp; };//simulation import
const app = esprex();

app.get('/home', (request, response) => { response.end('Page Accueil'); });
app.get('/contact', (request, response) => { response.end('Page Contact'); });

// BIN/WWW
require('http')
  .createServer(app)
  .listen(8989);
  
  
  
  
  
  // Node détecte une requête HTTP sur le port de notre serveur HTTPS
  // --> Node exécute esprexApp
  //
  
  // Requête 1 --> GET /home --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 2 --> GET /contact --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 3 --> GET /services --> Node invoque la méthode --> esprexApp({}, {});