const esprexApp = (req, res) => {
    const { router: { routes } } = esprexApp;
    const activeRoute = routes[req.url];

    if (activeRoute && activeRoute.has(req.method)) {
        activeRoute.get(req.method)(req, res);
    }
    else {
        res.end('Page not found.');
    }
};


esprexApp.router = { routes: {} };

esprexApp.all = function (routeName, controller, method) {
    const route = esprexApp.router.routes[routeName];
    if (!route) {
        esprexApp.router.routes[routeName] = new Map([
            [method, controller]
        ]);
    }
    else {
        route.set(method, controller);
    }
};

esprexApp.get = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'GET');
};
esprexApp.post = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'POST');
};
esprexApp.put = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'PUT');
};
esprexApp.patch = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'PATCH');
};
esprexApp.delete = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'DELETE');
};


module.exports = () => esprexApp;