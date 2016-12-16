var router = require('express').Router();
var category = [{name: 'Comedy'}, {name: 'Horror'}];

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    console.log('Hey from category!!!');
    res.send(category);
  });

module.exports = router;
