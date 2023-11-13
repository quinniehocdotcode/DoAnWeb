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

iconAccount.addEventListener('click',()=>{
    popupUser.classList.toggle('hide');
})
window.onload = ()=>{
    let user = JSON.parse(sessionStorage.user || null)
    if(user!=null){
        popupText.innerHTML = `Login as ${user.email}`;
        actionBtn.innerHTML = `log out`;
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
}