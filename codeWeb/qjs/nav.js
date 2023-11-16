const createNav = ()=>{
    let nav = document.querySelector('header');
    nav.innerHTML=`<header>
    
</header>`
}
//createNav();


// JS Account
const iconAccount = document.querySelector('.icon_account');
const popupUser = document.querySelector('.login-logout-popup');
const popupText =  document.querySelector('.text-pop');
const actionBtn = document.querySelector('.login-logout');
const signinBtn=document.querySelector('.signin-1')
const signinFaceBook=document.querySelector('.signin-by-face');
iconAccount.addEventListener('click',()=>{
    popupUser.classList.toggle('hide');
})
window.onload = ()=>{
    let user = JSON.parse(sessionStorage.user || null)
    if(user!=null){
        popupText.innerHTML = `Login as ${user.email}`;
        signinBtn.style.display='none';
        signinFaceBook.style.display='none';
        actionBtn.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    }
    else {
        popupText.innerHTML = 'Login to Order';
        actionBtn.innerHTML = 'Login';
        actionBtn.addEventListener('click',()=>{
            location.href ='/login';
        })

    }
    signinFaceBook.addEventListener('click',()=>{
        alert("Bạn đã đăng nhập bằng Facebook")
        popupText.innerHTML = `Login as Facebook`;
        signinBtn.style.display='none';
        signinFaceBook.style.display='none';
        actionBtn.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    })


}

