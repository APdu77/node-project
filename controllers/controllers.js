const controllers = {
    users : (req, res) => {res.json({name: 'coco'})},
    home : (req, res) => {
        res.sendFile(resolve ('public','index.html'));
      },
    contact : (req, res) => {
        res.sendFile(resolve ('public','contact.html'));
      },
    services : (req, res) => {
        res.sendFile(resolve ('public','index.html'));
      },
    _default : '*'
}

module.exports = controllers ;
