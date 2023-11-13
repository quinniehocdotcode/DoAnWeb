//const ShowAlert =  require('./form.js');
let loader = document.querySelector('.loader');
const becomeSellerElement = document.querySelector('.become-seller')
const applyForm = document.querySelector('.apply-form')
const showApplyFormBtn = document.querySelector('#apply-btn')
const centerProduct = document.querySelector('.center-product');
// Display 
showApplyFormBtn.addEventListener('click',()=>{
    becomeSellerElement.classList.add('hide');
    centerProduct.classList.remove('hide');
})
//  JS cho seller
let listproduct=[];
let sl=[];
for(var i=0;i<10;i++){
    sl[i]=10;
}
let content = document.querySelector('.content-seller');
let update = document.querySelector('#update-btn');
let controlUser = document.querySelector('#control-user-btn');
    function create (){
        for(var i=0;i<10;i++){
            let oneproduct = document.createElement('div');
            oneproduct.innerHTML = `
            <div class="one-product">
                <img src="anh/muonkiepnhansinh (1).jpg" id="img-product" alt="">
                <p class="count-text">So luong: ${sl[i]}</p>
                <label for="count-product">Thêm số lượng:</label>
                <input type="text" name="" class="count-product" id="count-product">
                <br>
                <button class="change-count">Chấp nhận thay đổi</button>
                <br>
                <button class="delete-btn">Delete Sản phẩm</button>
            </div>
        `;
        listproduct.push(oneproduct);
        }
    }
update.addEventListener('click', () => {
    content.innerHTML = '';
    create ();
    for(var i=0;i<sl.length;i++){
        content.appendChild(listproduct[i]);
    } 
    const numChange =  document.querySelectorAll('.count-product');
    const btnChange =  document.querySelectorAll('.change-count');
    const btnDelete = document.querySelectorAll('.delete-btn');
    const btnDeleteYes = document.querySelector('#delete-yes')
    const btnDeleteNo = document.querySelector('#delete-no')
    const alterDelete =  document.querySelector('.alter-delete')
    for (let i = 0; i < sl.length; i++) {
        btnChange[i].addEventListener('click', () => {
            sl[i]=Number(numChange[i].value)+sl[i];
            console.log(sl[i]);
           listproduct[i].querySelector(".count-text").innerText =`So luong: ${sl[i]}`; 
        });
    }
    for (let i = 0; i < sl.length; i++) {
        btnDelete[i].addEventListener('click', () => {
            alterDelete.classList.remove('hide');
            btnDeleteYes.addEventListener('click',()=>{
                listproduct.splice(i,1);
                sl.splice(i,1);
                alterDelete.classList.add('hide');
            })
            btnDeleteNo.addEventListener('click',()=>{
                alterDelete.classList.add('hide');
            })
            
        });
    }
    
    
});
// 

// JS cho Alert message
const alertMessage = document.querySelector('.alter-message');
const alertNumber = document.querySelector('#alert-number');
const alertName = document.querySelector('#alert-name');
let alert = [
    {
        name:"qui cute",
        number:"12****789"
    },
    {
        name:"qui dz",
        number:"123****556"
    }
]
let index = 0;
const functionAlert = setInterval(()=>{
    index++;
    if(index%2==0){
        alertName.innerText = `Anh: ${alert[0].name}`
        alertNumber.innerText = `${alert[0].number} `
        alertMessage.style.display="block"
        setTimeout(()=>{
            alertMessage.style.display="none"
        },2000)
        
    }
    else{
            alertName.innerText = `Anh: ${alert[1].name}`
            alertNumber.innerText = `${alert[1].number}`
            alertMessage.style.display="block"
        setTimeout(()=>{
            alertMessage.style.display="none"
        },2000)
        
    }
},4000) 
//  Js For Control Account User
let account = {
        name:"Hong Qui",
        email:"quidz@gmail.com",
        number:900990022,
        password:12345678,
        active:1
    };
let btnControlUser = document.querySelector('#control-user-btn');
let controlAccountUser = document.querySelector('.control-account-user');
const showAccount = () =>{
    const createChildUser = document.createElement('div');
    createChildUser.innerHTML = `<div class="one-user">
    <p class="name-user">Name: ${account.name}</p>
    <p class="gmail-user">Email: ${account.email}</p>
    <p class="number-user">Number: ${account.number}</p>
    <div class="password-user">
        <p class="password-user-text">Password: *******</p>
        <button id="password-user-key">Show</button>
    </div>
    <div class="active-user">
        <p class="active-user-state">Sate: ${account.active}</p>
        <button id="active-user-key">Lock</button>
    </div>
</div>`
    controlAccountUser.appendChild(createChildUser);
}
showAccount();
const btnPasswordUserKey = document.querySelector('#password-user-key');
const textPasswordUser = document.querySelector('.password-user-text')
const btnActiveUserKey = document.querySelector('#active-user-key');
const textSateUser = document.querySelector('.active-user-state');
btnPasswordUserKey.addEventListener('click',()=>{
    if(btnPasswordUserKey.textContent == 'Show'){
        textPasswordUser.textContent = `Password: ${account.password}`
        btnPasswordUserKey.textContent = "Hide";
    }
    else {
        textPasswordUser.textContent = `Password: ******`
        btnPasswordUserKey.textContent = "Show";
        
    }
})
btnActiveUserKey.addEventListener('click',()=>{
    if(account.active == 1){
        account.active = 0;
        textSateUser.textContent = `Sate: ${account.active}`
        btnActiveUserKey.textContent = "Unlock"
    }
    else{
        account.active = 1;
        textSateUser.textContent = `Sate: ${account.active}`
        btnActiveUserKey.textContent = "Lock"
    }         
})
////
    // update = document.querySelector('#update-btn');
    // controlUser = document.querySelector('#control-user-btn');
    // controlAccountUser = document.querySelector('.control-account-user');
    // content = document.querySelector('.content-seller');
    let contentParent = document.querySelector('.content-seller-parent');
    update.addEventListener('click',()=>{
        contentParent.style.display='block'
        controlAccountUser.style.display='none'
    })
    controlUser.addEventListener('click',()=>{
        contentParent.style.display='none'
        controlAccountUser.style.display='block'
    
    })
// JS for Upload product from file

let uploadImages = document.querySelectorAll('.fileupload');
let imagePaths = [];
let displayimg = document.querySelectorAll('.display-img')
let displayBigImg = document.querySelector('#display-big-img')
uploadImages.forEach((fileupload, index) => {
    fileupload.addEventListener('change', () => {
        const file = fileupload.files[0];

        if (file && file.type.includes('image')) {
            // Tạo URL từ tệp đã chọn
            const imageUrl = URL.createObjectURL(file);
            imagePaths[index] = imageUrl;
            displayimg[index].src = imagePaths[index];
        } else {
            showAlert('Chỉ chấp nhận tệp hình ảnh');
        }
        displayBigImg.src = imagePaths[index];
    });
});

function showAlert(message) {
    // Viết mã hiển thị thông báo theo ý muốn của bạn
        console.error(message);
        alert(message);
}
