//// redirect to home page if user logged in
window.onload = () =>{
    const logo_header = document.querySelector('.logo_header')
    console.log(logo_header)
    logo_header.addEventListener('click',()=>{
        location.href ='/';
    })
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
/// check admin orr user bi khoa o day.
var account = JSON.parse(localStorage.getItem('account'))
window.addEventListener("storage",(e)=>{
    if(e.key = 'account'){
        account = JSON.parse(localStorage.getItem('account'));
        console.log(account);
    }
})
// 
submitBtn.addEventListener('click',()=>{
    if(number != null){
        // phan nay dang ky, no gui du lieu len FireBase.
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
        if(!emailRegex.test(email.value) ){
            setTimeout(()=>{
                loader.style.display='none';
            },2000)
           
            return showAlert("Sai định dạng email");

        }
        // 
        for(let i=0;i<account.length;i++){
            if( email.value.toLowerCase() === account[i].gmail.toLowerCase()) {
                if(password.value ==  null){
                    showAlert("Bạn chưa nhập mật khẩu.");
                }
                if(account[i].status === 0){
                    loader.style.display='none';
                    return showAlert("Tài khoản của bạn đã bị khóa");
                }
                if( password.value === account[i].pass){
                    let account_login={
                        email:''
                    }
                    account_login.email =  account[i].gmail;
                    localStorage.setItem('status_login',JSON.stringify(account_login));
                    location.replace('/');
                }
                else{
                    console.log(password.value ,account[i].pass)
                    loader.style.display='none';
                    return showAlert("Sai mật khẩu, vui lòng đăng nhập lại");
                }
                loader.style.display='none';
            }
        } 
        // 
        if(email.value === ad.email ){

            if(password.value === ad.password){
               location.replace('/admin');
            }  
            else  {
                return showAlert("Sai mật khẩu, vui lòng đăng nhập lại!");
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

