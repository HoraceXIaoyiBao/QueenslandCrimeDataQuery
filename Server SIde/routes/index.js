var express = require('express');
const mysql = require('mysql');
var bodyparser=require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The World Database API' });
});
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Lots of routes available' });
});


router.get("/api/city/:CountryCode", function(req, res) {
  var query = "SELECT * FROM ?? WHERE ??=?";
  var table = ["city", "CountryCode", req.params.CountryCode];
  query = mysql.format(query, table);

  req.db.query(query, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error executing MySQL query" });
    } else {
      res.json({ Error: false, Message: "Success", Cities: rows });
    }
  });
});

module.exports = router;
router.get("/api/city", function(req, res) {
  var query = "SELECT name, district FROM ??";
  var table = ["city"];
  query = mysql.format(query, table);
  req.db.query(query, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error executing MySQL query" });
    } else {
      res.json({ Error: false, Message: "Success", City: rows });
    }
  });
});
////////////////////////////////////////////////////////////////
//                                                            //
//                           Login                            //
//                                                            //
////////////////////////////////////////////////////////////////

router.post("/api/login", function(req, res) {
  console.log('this is login');
  console.log(req.body.email); 
  console.log(req.body.password); 
  var query = "SELECT * FROM web_computing.users WHERE email=?";
  var table = [  req.body.email];
  query = mysql.format(query, table);

  req.db.query(query, function(err, rows) {
  if (err) 
    {
         res.json({ Error: true, Message: "Error executing MySQL query" });
    } 
  else
    {
       console.log(rows);
       if(rows.length==0)
         {
            res.status(400).send('Wrong username or password!');
           //res.json({ Error: false, Message: "Can not find the user"});
           //res.err('Wrong username or password!');
         }
       else
       {
         var token="1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik,0p;/1qaz"
           res.json({ token:token });
       }
    }
  });
});
////////////////////////////////////////////////////////////////
//                                                            //
//                         Register                           //
//                                                            //
////////////////////////////////////////////////////////////////

router.post("/api/register", function(req, res) {
  console.log('this is register');
  console.log(req.body); 
      
  var myDate = new Date();
  var time=myDate.getFullYear()+'-'+myDate.getMonth()+'-'+myDate.getDate();

  var query = "INSERT INTO web_computing.users (email,password,created_at,updated_at) values (?,?,?,?);";
  var table = [req.body.email,req.body.password,time,time  ];

  query = mysql.format(query, table);
  console.log(query);
  req.db.query(query, function(err, rows) {
    if (err) 
    {   
         console.log("err",err);
         res.status(400).send('User already exist!');
  
    } 
    else
    {
           res.json({ Error: false, Message: "Success", Cities: rows });
    }
  });
});

////////////////////////////////////////////////////////////////
//                                                            //
//                         Offences                           //
//                                                            //
////////////////////////////////////////////////////////////////

router.get("/api/offences", function(req, res) {
      console.log('this is offences');

      var query = "SELECT pretty FROM web_computing.offence_columns;";

      console.log(query);
      req.db.query(query, function(err, rows) {
      if (err) 
      {   
          console.log("err",err);
          res.status(400).send('Connection Error');
      } 
      else
      {
        var result=new Array();
          for (var i=0;i<rows.length;i++)
            {

              result[i]=rows[i]['pretty'];
            }
            console.log(result);
            res.json({offences: result });
      }
  });
});
////////////////////////////////////////////////////////////////
//                                                            //
//                           Search                           //
//                                                            //
////////////////////////////////////////////////////////////////
router.get("/api/search", function(req, res) {
  console.log('this is offences');

  // Get the filters from URL
  console.log(req.url);
  var UTF8url = decodeURIComponent(req.url);
  console.log("UTF-8:",UTF8url);
  queryfilters=UTF8url.split('?');
  filters=queryfilters[1].split('&');

  var filterSQL="";
  console.log("queryfilters: ",queryfilters);
  
  var offence='';


  if(filters.length!=0)
  {
    filterSQL=filterSQL+" WHERE ";
      for(var i=0;i<filters.length;i++)
      {
        if(i==0)
        {
          var filter=filters[i].split('=');
          offence=filter[1];
          
        }
        else
        {
          var filter=filters[i].split('=');
          var filtername=filter[0];
          var filtervalue=filter[1];
          filterSQL=filterSQL +" "+ filtername  +"='"+ filtervalue+"'";
          if(i!=filters.length-1)
            filterSQL=filterSQL+' and ';
        }
      }
  }
  
  if(filters.length==1) filterSQL="";

  offence=offence.toLowerCase();
  // drop the space
  offence = offence.replace(/\s+/g,"");
  console.log("filter:   ",filters);
  console.log("filterSQL:   ",filterSQL);
  var query1 = "SELECT areas.area as LGA,query.Total as total,areas.lat,areas.lng FROM web_computing.areas INNER JOIN (SELECT offences.area as area, SUM(offences.??) as Total FROM web_computing.offences";

  var query2=" Group by web_computing.offences.area ) as query ON web_computing.areas.area =query.area;";
  
  var query=query1+filterSQL+query2;
  //query=query+filterSQL;
  var table = [offence ];

  query = mysql.format(query, table);
  console.log(query);
  req.db.query(query, function(err, rows) {
  if (err) 
  {   
      console.log("err",err);
      res.status(400).send('Connection Error');
  } 
  else
  {
   
        res.json({result: rows });
  }
 });
});



////////////////////////////////////////////////////////////////
//                                                            //
//                      Areas-Filters                         //
//                                                            //
////////////////////////////////////////////////////////////////

router.get("/api/areas", function(req, res) {
  console.log('this is offences');
 
  var query = "SELECT area FROM web_computing.areas;";

  console.log(query);
  req.db.query(query, function(err, rows) {
  if (err) 
  {   
      console.log("err",err);
      res.status(400).send('Connection Error');
  } 
  else
  {
     var result=new Array();
      for (var i=0;i<rows.length;i++)
        {

          result[i]=rows[i]['area'];
        }
        console.log(result);
        res.json({areas: result });
  }
 });
});


////////////////////////////////////////////////////////////////
//                                                            //
//                      Year-Filters                          //
//                                                            //
////////////////////////////////////////////////////////////////

router.get("/api/years", function(req, res) {
  console.log('this is Year');
  var result=new Array();
  for (var i=2001;i<=2019;i++)
     {
        result[i-2001]=i;
     }
  console.log(result);
  res.json({years: result });
  

});

////////////////////////////////////////////////////////////////
//                                                            //
//                      Age-Filters                           //
//                                                            //
////////////////////////////////////////////////////////////////

router.get("/api/age", function(req, res) {
  console.log('this is age');
  var result=new Array();
  result[0]="Adult";
  result[1]= "Juvenile";
  console.log(result);
  res.json({ages: result });
});

////////////////////////////////////////////////////////////////
//                                                            //
//                      Gender-Filters                        //
//                                                            //
////////////////////////////////////////////////////////////////

router.get("/api/gender", function(req, res) {
  console.log('this is gender');
  var result=new Array();
  result[0]="Female";
  result[1]="Male";
  result[2]="Not Stated";
  console.log(result);
  res.json({genders: result });
});


 
