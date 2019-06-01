var express = require('express');
var router = express.Router();
var ProductsModel = require('../models/products')


/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Home' });
});

/* GET API products . */
router.get('/api/products', function(req, res, next) {  
  ProductsModel.find({},function(err, data){                
    res.send(data)
  }).limit(20)  
});
/* Create add field color and size API products . */
router.get('/api/updateData', function(req, res, next) {  
  ProductsModel.updateMany({}, {$set:{colors: ['White', 'Black', 'Blue', 'Pink', 'Red', 'Violet', 'Green', 'Orange', 'Yellow'], sizes:['S', 'M','L']}},function(err, data){                
    res.send(data)
  }) 
});

// GET API product detail with id
router.get('/api/product/:id', function(req, res, next) {  
  let id = req.params.id
  console.log(id);  
  ProductsModel.find({_id:id},function(err, data){                
    res.send(data)
  })  
});

module.exports = router;
