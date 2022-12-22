/*const esprexApp = (req, res) => {
    esprexApp.router[req.url](req, res);
    res.end('HTTPS');
} ;*/

const esprexApp = (req, res) => {
    const { router: { routes }} = esprexApp;
    
    if (routes[req.url]) {
      routes[req.url](req, res);
    }
    else {
      res.end('Page not found.');
    }
  };

esprexApp.router = { routes : {} } ;

esprexApp.get = function (route, controller)
{
esprexApp.router.routes[route]=controller;
};


module.exports = () => esprexApp;