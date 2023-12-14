var productArray = JSON.parse(localStorage.getItem("productArray"));
    var btntest = document.querySelectorAll('.btn-buy-it');
    var product_price =  document.querySelectorAll('.product_price')
    var product_name =  document.querySelectorAll('.product_name')
    var product_img = document.querySelectorAll('.product_img')

    //create product

function createProductBox(productData) {
    const productBox = document.createElement('div');
    productBox.classList.add('box');

    const productImage = document.createElement('img');
    productImage.classList.add('product_img')
    //console.log(productImage);
    productImage.src = productData.images[0];
    productImage.alt = productData.name;
    productImage.addEventListener("click", function () {
      previewProduct(productData);
      
    });
    productBox.appendChild(productImage);

    const productName = document.createElement('h2');
    productName.classList.add('product_name'); /// class ne
    productName.id = 'name1';
    productName.textContent = productData.name;
    productBox.appendChild(productName);

    const productPrice = document.createElement('div');
    productPrice.classList.add('product_price'); // class nef
   // console.log(productPrice)
    productPrice.textContent = `${productData.price} đ`;
    productBox.appendChild(productPrice);

    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');
    buttonWrapper.appendChild(button);
    productBox.appendChild(buttonWrapper);
    button.textContent = 'Thêm vào giỏ';
    button.classList.add('btn-buy-it'); // dang test.
    return productBox;
}

// hiện chi tiết sản phẩm ///
function previewProduct(detail) {
  
  var namesp = document.getElementById("namesp");
  namesp.innerHTML = detail.name;
  // var theloai = document.getElementById("theloai");
  // theloai.innerHTML = detail.category;
  var tacgia = document.getElementById("tacgia");
  tacgia.innerHTML = detail.author;
  var giaca = document.getElementById("giaca");
  giaca.innerHTML = detail.price;
  var imagessp = document.getElementById("imagessp");
  imagessp.innerHTML = detail.images[0];
  imagessp.src = detail.images[0];
  var gioithieu = document.getElementById("gioithieu");
  gioithieu.innerHTML = detail.description;
 
  const productPreview = document.querySelector(".product-preview");
  productPreview.style.display = "flex";

}
// 


// document.addEventListener('DOMContentLoaded', function () {
//     createProductBoxes(productArray);
// });
/*c2
window.onload = function() {
  createProductBoxes(productArray);
};
*/// pagination--------
function createProduct(array) {
    const itemsPerPage = 8; // Số lượng sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;
    let currentProducts = array;

    const prevPageButton = document.getElementById('first-page');
    const nextPageButton = document.getElementById('last-page');
    // noi xuat hien nut
    const pageButtonsContainer = document.getElementById('page-buttons');

    function showProducts(page) {

        const container = document.querySelector('.list_box');
        container.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < endIndex && i < currentProducts.length; i++) {
            const product = currentProducts[i];
            const productBox = createProductBox(product);
            container.appendChild(productBox);
        }
        
        btntest = document.querySelectorAll('.btn-buy-it');
        product_price =  document.querySelectorAll('.product_price')
        product_name =  document.querySelectorAll('.product_name')
        product_img = document.querySelectorAll('.product_img')
        btntest.forEach((element,index)=>{
           element.addEventListener('click',()=>{
               let gia_cart = product_price[index].innerHTML
               let name_cart = product_name[index].innerHTML
               let img_cart = product_img[index].src
               addItemToCart(name_cart,gia_cart,img_cart )
               // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
              // modal.style.display = "block";
               
               updatecart();
              
            })
            
               
       })
    }

    function updatePaginationButtons() {
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === Math.ceil(currentProducts.length / itemsPerPage);
        if (currentPage === 1) {
          prevPageButton.style.display = 'none';
        } else {
          prevPageButton.style.display = 'block'; // Hoặc 'inline' tùy thuộc vào kiểu hiển thị mong muốn
        }
        
        if (currentPage === Math.ceil(currentProducts.length / itemsPerPage)) {
          nextPageButton.style.display = 'none';
        } else {
          nextPageButton.style.display = 'block'; // Hoặc 'inline' tùy thuộc vào kiểu hiển thị mong muốn
        }
    }

    function createPageButton(page) {
        const button = document.createElement('button');
        button.textContent = page;
        button.setAttribute('id', 'page-button');
        button.addEventListener('click', () => {
            currentPage = page;
            showProducts(currentPage);
            updatePaginationButtons();
            updatePageButtons();
        });
        return button;
    }

    function updatePageButtons() {
        pageButtonsContainer.innerHTML = '';
        if (Math.ceil(currentProducts.length / itemsPerPage) > 1) {
            const pageButton = createPageButton(currentPage);
            pageButtonsContainer.appendChild(pageButton);

            if (currentPage > 1) {
                const prevButton = createPageButton(currentPage - 1);
                pageButtonsContainer.insertBefore(prevButton, pageButton);
            }

            if (currentPage < Math.ceil(currentProducts.length / itemsPerPage)) {
                const nextButton = createPageButton(currentPage + 1);
                pageButtonsContainer.appendChild(nextButton);
            }
        }
    }

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage=1;
            showProducts(currentPage);
            updatePaginationButtons();
            updatePageButtons();
        }
    });

    nextPageButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(currentProducts.length / itemsPerPage)) {
            currentPage= Math.ceil(currentProducts.length / itemsPerPage);
            showProducts(currentPage);
            updatePaginationButtons();
            updatePageButtons();
        }
    });
    
   
    showProducts(currentPage);        
    updatePaginationButtons();
    updatePageButtons();
    
}

document.addEventListener('DOMContentLoaded', function () {
    createProduct(productArray);

});
////
window.addEventListener('storage', function (event) {
  if (event.key === 'productArray') {
    productArray = JSON.parse(localStorage.getItem("productArray"));
    createProduct(productArray);
    console.log(productArray)
  }
});
////cap nhật lại array khi co thay doi
///-------------------searchBox--------------------------------

function searchProduct(searchId) {

    var searchBox = document.getElementById(searchId);

    var searchString = removeVietnameseDiacritics(searchBox.value.toLowerCase());
    var resultsList = [];
    for (var i = 0; i < productArray.length; i++) {
        var product = productArray[i];
        var productName = removeVietnameseDiacritics(product.name)
        if (productName.toLowerCase().indexOf(searchString) !== -1) {
            resultsList.push(product);
        }
    }
    alert(resultsList.length);
    if (resultsList.length == 0) {

        let resultsHTML = document.querySelector(".list_box");
        resultsHTML.innerHTML = '<h2>Không tồn tại sản phẩm</h2>';


    } else {
        //xoa cái cũ thêm cái mới
        const resultsHTML = document.querySelector(".list_box");
        resultsHTML.innerHTML = '';
        createProduct(resultsList);
    }
}
function searchOnEnter(event, searchId) {
    if (event.key === 'Enter') {
        searchProduct(searchId);
    }
}

function filterProduct(str) {

    //let condition=str.removeVietnameseDiacritics;
    var resultsList = [];
    for (var i = 0; i < productArray.length; i++) {
        var product = productArray[i];
        var productCategory = removeVietnameseDiacritics(product.category);
        if (productCategory.toLowerCase().indexOf(str) !== -1) {
            resultsList.push(product);
        }
    }

    if (resultsList.length == 0) {
        let resultsHTML = document.querySelector(".list_box");
        resultsHTML.innerHTML = '<h2>Chua co san pham</h2>';
    } else {
        const resultsHTML = document.querySelector(".list_box");
        resultsHTML.innerHTML = '';
        createProduct(resultsList);
    }

}

function removeVietnameseDiacritics(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ắ|ằ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    // Loại bỏ tất cả các ký tự không phải là chữ cái hoặc số
    str = str.replace(/[^a-zA-Z0-9\s]/g, '');
    // Loại bỏ dấu cách thừa và dấu cách ở đầu và cuối chuỗi
    str = str.trim().replace(/\s+/g, ' ');
    return str;
}


// xóa giỏ hàng
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i];
  button.addEventListener("click", function (event) {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove();
    updatecart()
  })
}
// thay đổi số lượng
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column huhu">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`

 
    cart_temp.name = title;  // fix gap
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart() // y tuong la lay het du lieu xong moiw push, push lan luot
  })
}
// update cart 
var cart_item = document.getElementsByClassName("cart-items")[0];

function updatecart() {
    cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)
    var quantity = quantity_item.value
    cart_temp.cash = price; 
      total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
  
  for(let i=0;i<navigator;i++){
     cart_item[i].addEventListener('click',()=>{
    console.log(i);
    })
  }
 
}
/// status text cart
var statusText = document.querySelector('.status-text');
window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    getStatus = JSON.parse(localStorage.getItem("cart"))
    if( getStatus[0].status == 1 ){
              statusText.innerText = "Đã xác nhận";
          }
          else if (getStatus[0].status == 0){
              statusText.innerText = "Chưa xác nhận";
          }
          else{
              statusText.innerText = "Chưa xác nhận";
          }
  }
});
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("cart");
  var close = document.getElementsByClassName("close")[0];
  var close_footer = document.getElementsByClassName("close-footer")[0];
  var order = document.getElementsByClassName("order")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  close.onclick = function () {
    modal.style.display = "none";
  }
  close_footer.onclick = function () {
      cart_item.innerHTML=""
      statusText.innerText = "Chưa xác nhận";
      document.getElementsByClassName("cart-total-price")[0].innerText = 0 + 'VNĐ'
      localStorage.setItem('cart',"")
    modal.style.display = "none";
  }
  var cart = [];
  var cart_temp={};
  let login_account ;
  order.onclick = function () {
    login_account=document.querySelector('#text-status-account');
    if(login_account.innerHTML != "Login to Order"){
      let cart_item_title = document.querySelectorAll('.cart-item-title'); /// name
      let cart_price = document.querySelectorAll('.cart-price.cart-column.huhu'); // gia
      let cart_quantity_input =  document.querySelectorAll('.cart-quantity-input') /// so luong
      for(let i=0;i<cart_item_title.length;i++ ){
          const cart_temp={};
          cart_temp.name = cart_item_title[i].innerHTML;
          cart_temp.cash = parseFloat(cart_price[i].innerHTML);
          cart_temp.quantity = parseInt(cart_quantity_input[i].value);
          cart_temp.total = cart_temp.cash * cart_temp.quantity;
          cart_temp.status = -1;
          cart[i] = cart_temp;
      }
      localStorage.setItem("cart",JSON.stringify(cart)) //// cay vai~
  
      alert("Đã đặt hàng thành công.");

    }
    else{
      alert("vui lòng đăng nhập để đặt hàng.");
    }
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  //
  // menu mobile
  // var btn_menu = document.getElementById("btnmenu");
  // btn_menu.addEventListener("click", function () {
  //   var item_menu = document.getElementById("menutop");
  //   if (item_menu.style.display === "block") {
  //     item_menu.style.display = "none";
  //   } else {
  //     item_menu.style.display = "block";
  //   }
  // })
  
  
  



