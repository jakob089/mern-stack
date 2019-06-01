var express = require('express');
var router = express.Router();
const User = require('../models/products')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/create', async(req,res,next) => {
//   const newUser = await new User({
//     name : 'John'
//   })
//   await newUser.save()
//   res.send(newUser)
// })

router.get('/get', async(req,res) => {
  const userData = await User.find().catch(err=> console.log(err))
  res.send(userData)
})

module.exports = router;
