
const createFooter = ()=>{
    let footer = document.querySelector('footer');
    footer.innerHTML=`<footer>
    <img class="logo_footer" src="images/fahasa-logo.png" alt="logo">
    <p class="address">Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60
        - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
    <p class="information">Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và
        nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</p>
    <div class="icon_app_footer">
        <a target="_blank" href="https://www.facebook.com/fahasa/" title="Facebook">
            <img alt="Facebook" src="images/Facebook-on.png" />
        </a>
        <a target="_blank" href="https://www.instagram.com/fahasa_official/" title="Instagram">
            <img alt="Instagram" src="images/Insta-on.png" />
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCUZcVOLSxK1q6RfgzQ9-HYQ" title="Youtube">
            <img alt="Youtube" src="images/Youtube-on.png" />
        </a>
        <a target="_blank" href="https://fahasa-blog.tumblr.com/" title="Tumblr">
            <img alt="Tumblr" src="images/tumblr-on.png" />
        </a>
        <a target="_blank" href="https://twitter.com/Fahasa_com" title="Twitter">
            <img alt="Twitter" src="images/twitter-on.png" />
        </a>
        <a target="_blank" href="https://www.pinterest.com/fahasaVN/" title="Pinterest">
            <img alt="Pinterest" src="images/pinterest-on.png" />
        </a>
    </div>

    </footer>`
}
createFooter();


// JS Account
const iconAccount = document.querySelector('.icon_account'); // nhan vao hinh ng de hien len khung box
const popupText =  document.querySelector('#text-status-account'); // hien or to buy ne
const popupUser =  document.querySelector('.from-login-logout') // nay la cai khung da ddc hien len
const signinBtn=document.querySelector('#signup') // nut dang ky
const btnPopup = document.querySelector('#login-logout'); // nut dang nhap  orr nut dang xuat
const signinFaceBook=document.querySelector('#login-by-fb'); // nut dang nhap = fb
const icon_account_mobile =  document.querySelector('.icon_account_mobie');
const icon_cart_mobile =  document.querySelector('.icon_mycart_mobie');
const box_buy_cart =  document.querySelector('.modal');
console.log(icon_cart_mobile)
icon_cart_mobile.addEventListener("click",()=>{
    box_buy_cart.style.display='block';
})


/// click vao icon
icon_account_mobile.addEventListener("click",()=>{
    popupUser.classList.toggle('hide');
})
/// click vao icon
iconAccount.addEventListener('click',()=>{
    popupUser.classList.toggle('hide');
})

window.onload = ()=>{

    let user = JSON.parse(sessionStorage.user || null)
    if(user!=null){
        popupText.innerHTML = `Login as ${user.email}`;
        signinBtn.style.display='none';
        signinFaceBook.style.display='none';
        btnPopup.innerHTML='Đăng xuất'
        btnPopup.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    }
    else {
        popupText.innerHTML = 'Login to Order';
        btnPopup.addEventListener('click',()=>{
            location.href ='/login';
        })

    }
    signinFaceBook.addEventListener('click',()=>{
        alert("Bạn đã đăng nhập bằng Facebook")
        popupText.innerHTML = `Login as Facebook`;
        signinBtn.style.display='none';
        signinFaceBook.style.display='none';
        btnPopup.innerHTML='Đăng xuất'
        btnPopup.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    })
    signinBtn.addEventListener("click",()=>{
        location.href ='/signup';
    })
    
   
} 
