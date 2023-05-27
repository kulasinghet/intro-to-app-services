var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello',function(req,res,next){
  res.send('Hello and welcome to MLSA session');
});

router.post('/bye',function(req,res,next){
  let message = req.body.message;
  res.send('Bye and thanks for attending the session. You said: '+message);
});

module.exports = router;
