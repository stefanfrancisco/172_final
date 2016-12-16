var _ = require('lodash');
var router = require('express').Router();

var users = [{username: "Lauren", address: "1 Washington Sq"}, {username: "Spoorthy", address: "2 Washington Sq"}];
var id = 0;
// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.


router.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
    res.json(users);
  })

 .post(function(req, res){
  	var user = req.body;
    id++;
    user.id = id + '';
  	users.push(user);

  	res.json(user);
  })
  

router.get('/err', function(req, res){
	console.log("An error has occured!");
	throw "Error on the user";
})
module.exports = router;
