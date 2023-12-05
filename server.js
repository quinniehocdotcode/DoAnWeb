const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
/// firebase admin
var serviceAccount = require("./web-fahasha-firebase-adminsdk-8p9hk-a78cac6d12.json");
const ad = {
    name: 'admin',
    email: 'admin@gmail.com',
    password: '123456789'
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
//// declare static path
let staticPath = path.join(__dirname,"codeWeb");
// intializing express.js
const app =  express();
// middlewares
app.use(express.static(staticPath)); //khoi tao duong dan
app.use(express.json()); //=> cua ham app.get
// routers
//home route
app.get("/",(req,res)=>{
    res.sendFile(path.join(staticPath,"index.html"));
})
///signup
app.get(("/signup"),(req,res)=>{
    res.sendFile(path.join(staticPath,"signup.html"));
})
//router login
app.get('/login',(req,res)=>{
    res.sendFile(path.join(staticPath,"login.html"))
})
/// admin
app.get(("/admin"),(req,res)=>{
    res.sendFile(path.join(staticPath,"admin.html"));
})
////
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberRegex1 = /^0[0-9]{9}$/
const numberRegex2 = /^\+84[0-9]{9}$/
app.post('/signup',(req,res)=>{
    let{number,email,password} = req.body;
// form validations
    if(!number.length){
        return res.json({'alert':'enter your phone number'})
    }
    else  if(!Number(number.length) ||  number.length <= 10){
        return res.json({'alert':'Số không chứa ký tự và độ dài phải hơn 10 số.'});
    }
    else if(!numberRegex1.test(number) || !numberRegex2.test(number)){
        return res.json({'alert':'Số điện thoại không hợp lệ.'});
    }
    else if(!email.length || !emailRegex.test(email)){
        return res.json({'alert':'Email không hợp lệ'});
    }   
    else if(password.length < 8){
        return res.json({'alert':'Mật khẩu phải dài hơn 8 ký tự.'});
    }
    
        //store user in data base
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert':"Email already exists"});
        }
        else {
            // encrypt the password before storing it.
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash)=>{
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            number:req.body.number,
                            email:req.body.email,
                            password:req.body.password,})
                    })
                })
            })
        
        }
    })
    //console.log(req.body); // => gui thong tin ve terminal
    //res.json('data recieved');
})


app.post('/login',(req,res)=>{
    let{email,password} = req.body;
   // console.log(password);
    if(!email.length || !password.length){
        return res.json({'alert':'fill all the input'})
    }
// ----------
   
    // }
// ------------
    db.collection('users').doc(email).get()
    .then(user =>{
        if(!user.exists){ /// email is not exits
            return res.json({'alert':'log in email does not exit'})
        }else {
            bcrypt.compare(password,user.data().password,(err,result)=>{
                if(result){
                    let data = user.data();
                    return res.json({
                        email:data.email,
                        password:data.password,
                        seller: data.seller,
                    })
                }
                else {
                    return res.json({'alert':'password is in correct'});
                }
            })
        }
    })
})
//admin router
app.get("/admin",(req,res)=>{
    res.sendFile(path.join(staticPath,"admin.html"));
})
// 404 route
app.get('/404',(req,res)=>{
    res.sendFile(path.join(staticPath,"404.html"))
})
app.use((req,res)=>{
    res.redirect('/404');
})
app.listen(3000,()=>{
    console.log('listening on port 3000....');
})