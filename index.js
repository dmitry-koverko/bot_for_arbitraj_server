var firebase = require("firebase");
var express = require('express')
var bodyParser = require('body-parser')
const path = require('path');
var port = process.env.PORT || 80;
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


const firebaseConfig = {
  apiKey: "AIzaSyBbQwUAj1rzL_wH307MSW7f7-ub_9x4BDM",
  authDomain: "testnaming-d9014.firebaseapp.com",
  databaseURL: "https://testnaming-d9014-default-rtdb.firebaseio.com",
  projectId: "testnaming-d9014",
  storageBucket: "testnaming-d9014.appspot.com",
  messagingSenderId: "670227042256",
  appId: "1:670227042256:web:744022faaf9ed28c9cb3d5",
  measurementId: "G-1EWFE37SQJ"
};

firebase.initializeApp(firebaseConfig);


app.post('/api/user/:id/add_balance', function (req, res) {
   //req.query.tagId
  // create user in req.body
  console.log(req.body);
  res.send(req.body.label)
})

app.get('/payment',function(req,res){
  res.sendFile(path.join(__dirname+'/payment.html'));
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})
