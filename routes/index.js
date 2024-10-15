var express = require('express');
var router = express.Router();

var UR = require('../controllers/user')
var SC = require('../controllers/seller')
var AR = require('../controllers/admin')
var MD = require('../middleware/verify')
var CT = require('../controllers/category')
var SU = require('../controllers/subcategory')
var OR = require('../controllers/order')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user', UR.usercreate)
router.post('/seller', SC.usercreate)
router.post('/admin', AR.usercreate)

//get data
router.get('/getAlluser', MD.email, UR.getAlluser)
router.get('/userbyid/:id', UR.getuserbyId)
router.get('/getAlluser', SC.getAlluser)
router.get('/sellerbyid/:id', SC.getsellerbyId)
router.get('/getAlluser', AR.getAlluser)
router.get('/adminbyid/:id', AR.getadminbyId)

//delete
router.get('/getAlluser', UR.getuserbyId)
router.delete('/deletebyid/:id', UR.deletebyId)
router.get('/getAlluser', UR.getuserbyId)
router.delete('/deletebyid/:id', UR.deletebyId)
router.get('/getAlluser', UR.getuserbyId)
router.delete('/deletebyid/:id', UR.deletebyId)


//update
router.get('/getAlluser', UR.getuserbyId)
router.patch('/userbyid/:id', UR.updateuser)
router.get('/getAlluser', UR.getuserbyId)
router.patch('/sellerbyid/:id', SC.updateuser)
router.get('/getAlluser', UR.getuserbyId)
router.patch('/adminbyid/:id', AR.updateuser)

//login 
router.post('/userlogin', UR.userlogin)
router.post('/sellerlogin', SC.sellerlogin)
router.post('/adminlogin', AR.adminlogin)

//category
router.post('/category', CT.categoryAdd)
router.get('/categoryget' , CT.getAllcategory)
router.patch('/categoryupdate/:id', CT.categoryUpdate)
router.delete('/categorydelete/:id', CT.categorydelete)

//subcategory
router.post('/subcategory', SU.subcategoryAdd)
router.get('/subcategoryget' , SU.getAllsubcategory)
router.patch('/subcategoryUpdate/:id', SU.subcategoryUpdate)
router.delete('/subcategorydelete/:id', SU.subcategorydelete)

//order
router.post('/order', OR.orderAdd)
router.get('/orderallget', OR.orderallget)
router.patch('/orderupdate/:id', OR.orderupdate)
router.delete('/orderdelete/:id', OR.orderdelete)



//token authntication
// router.post('/token' , UR.email)


router.get('/user', UR.getAlluser)
router.get('/seller', SC.getAlluser)
router.get('/admin', AR.getAlluser)


module.exports = router;
