var router = require('express').Router();

// api router will mount other routers
// for all our resources

//This is the initial API Endpoint 
router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});
router.use('/users', require('./user/userRoutes'));

//Setup root level route for Post resource in api.js
router.use('/posts', require('./post/postRoutes'));

//Setup root level route for category resource in api.js
router.use('/categories', require('./category/categoryRoutes'));
 
module.exports = router;
