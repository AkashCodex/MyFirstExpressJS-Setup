var express = require('express');


//var app=require('express');

const { route } = require('../app');
var router = express.Router();
//cokie-parser
//var cookieparser=express('cookie-parser');

//router.use(cookieparser());

//router.use(logger);   

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/title',(req,res)=>{
 res.send("Title");
});


//using cookie parser
/*
router.get('/cookie',(req,res)=>{
 res.cookie('cookie','ExpressDemo');
++ res.cookie('name','akash');
});


//check if we use cookie or not


router.get('/getcookie',(req,res)=>{
 res.send(req.cookies);  
});



//router.use(logger);                     Not gonna print log
//Example of MiddleWare function++++++++++++

function logger(req,res,next){
  console.log("LOG");
  next();
}

*/


//params->routes
//body
//query->?


const listOfUsers=[];

// UserDetails->1-File

  //4 Routes
  // User Create->POST

  router.post('/',(req,res)=>{
    res.send("User Created!");  
   });
 
 

  //create Single User



 
   // User Get->Get
 
   router.get('/',(req,res)=>{
    res.send("Get User!");
   });
 

   //User Get->Get User By Id
   router.get('/:id',(req,res)=>{
     res.send(req.params.id); 
   });



 
   // User update->Put/ID
 
    router.put('/:id',(req,res)=>{
    //res.send(req.body);
     res.send({id: req.params.id, body: req.body});
    // console.log(req.params);
    });
 
   // User delete->delete/ID
 
    

   router.delete('/:id',(req,res)=>{
    res.send("User Deleted");
   }); 
 
 






















module.exports = router;






