var router = require('express').Router();
var posts = [{title: 'Post1', text: 'Lorem Ipsum something something', author: 'Lauren', categories: 'Comedy'}, {title: 'Post2', text: 'Final too hard', author: 'Spoorthy', categories: 'Horror'}];
// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
   .get(function(req, res){
    console.log('Hey from post!!');
    res.send(posts);
  })
 .post(function(req, res){
  	var poast = req.body;
    id++;
    post.id = id + '';
  	posts.push(post);

  	res.json(user);
  })
module.exports = router;
