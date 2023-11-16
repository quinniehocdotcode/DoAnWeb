//// redirect to home page if user logged in
window.onload = () =>{
    if(sessionStorage.user){
        user = JSON.parse(user.authToken,user.email);
        if(compareToken(user.authToken,user.email))
        {
            location.replace('/');
        }
    }
} 
const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('.submit-btn');
const number = document.querySelector('#number')||null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const ad = {
    name: 'admin',
    email: 'admin@gmail.com',
    password: '123456789'
};
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberRegex1 = /^0[0-9]{9}$/
const numberRegex2 = /^\+84[0-9]{9}$/
submitBtn.addEventListener('click',()=>{
    if(number != null){
        // if(number.value.length < 10){
        //     showAlert('name must be 10 letters long');
        // }
        // else if(!Number(number.value) || number.value.length <10)
        //     showAlert("invalid number,please enter valid one");
        // else if(!email.value.length)
        //     showAlert("enter your email!")
        // else if(password.value.length < 8)
        //     showAlert("password should be letters long")
        // else {
            loader.style.display='block';
            ///submit form
            sendData('/signup',{
                number:number.value,
                email:email.value,
                password:password.value,      
                seller:false
            })
       // }
    }
    else {
        loader.style.display='block';
        if(email.value === ad.email ){

            if(password.value === ad.password){
               location.replace('/seller');
            }  
            else  {
                return showAlert("Sai Mat Khau Ban oi!!!");
            }
        }  
         else{
            loader.style.display='block'
            sendData('/login',{
                email:email.value,
                password:password.value,
                seller:false
            })
        }
    }
})

/// sent data function
const sendData = (path,data)=>{
    fetch(path,{
        method:'post',
        headers:new Headers({'Content-Type':'application/json'}),
        body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then(response=>{
        processData(response);
    })
}
const processData = (data) => {
    loader.style.display=null;
    if(data.alert){
        showAlert(data.alert);
    }
    else if(data.email){
        ///console.log(data) //=> kiem tra xem co data co thuoc tinh email hay khong
        data.authToken = generateToken(data.email);
       
        sessionStorage.user = JSON.stringify(data);
        console.log(sessionStorage.user);
        location.replace('/');
    
    }
}
/// alter function
const showAlert = (msg)=>{
    let alertBox  = document.querySelector('.alter-box');
    let alertMsg = document.querySelector('.alter-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(()=>{
        alertBox.classList.remove('show');
    },3000)
}
///// JS Cho Admin

