const { resolve } = require('path');

function home(req, res) {
  res.sendFile(resolve('public', 'index.html'));
};

function contact(req, res) {
  res.sendFile(resolve('public', 'contact.html'));
};

function services(req, res) {
  res.sendFile(resolve('public', 'services.html'));
};

function defaultCtrl(req, res) {
  res.sendFile(resolve('public','page404.html'));
};



module.exports = {
  home,
  services,
  contact,
  defaultCtrl
};
