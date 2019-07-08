const Init = () =>{
    // 抓購物車數量的dom
    const cartCount = document.querySelector('.cart_count');
    
    // 抓購物車按鈕
    const addCartBtns = document.querySelectorAll('.addCart');
    var localGetCart = [];
    var CartArr = [];

    localGetCart = JSON.parse(localStorage.getItem('cartItems'));
   
    ReloadCart();
    
        function ReloadCart(){
            localGetCart = JSON.parse(localStorage.getItem('cartItems'));
            if(localGetCart){
                CartArr = localGetCart;
                cartCount.textContent = CartArr.length;
                if(addCartBtns.length !== 0){
                    // 改變已加到購物車的div樣式 用id判斷
                    CartId = CartArr.map(item =>item.id);
                    for(let i = 0;i<CartId.length; i++){
                        addCartBtns[i].value='In Cart';
                        addCartBtns[i].classList.add('inputInCart');  
                    }
                }               
            }
        }

    // 查詢CheckOut按鈕
    const checkOut = document.querySelector('.cart_check_out_container');
    // 顯示畫面的容器
    const cartDOM = document.querySelector('.cart_container');
    // 查詢顯示結帳處
    const totalBtn = document.querySelector('.cart_total_price');

    
    var  totalPrice = 0;
    CartArr.forEach(productItem => {
            cartDOM.insertAdjacentHTML('beforeend',
            ` <div class="cart_item">
                <div class="cart-pic">
                <img src="${productItem.image}" alt="" class="cart_item_image">
            </div>
            <h3 class="cart_item_name">${productItem.name}</h3>
            <h3 class="cart_item_price">${productItem.price}</h3>
            <h3 class="cart_item_amount_container">
                <div class="cart_minus">-</div>
                <div class="cart_amount">${productItem.amount}</div>
                <div class="cart_add">+</div>
            </h3>
            <h3 class="cart_item_subtotal">${productItem.subtotal}</h3>
            </div>`
        );

        // 加號
        const CartAddBtns = document.querySelectorAll('.cart_add');
        // 減號
        const CartMinusBtns = document.querySelectorAll('.cart_minus');
        // 數量
        const CartAmount = document.querySelectorAll('.cart_amount');
        
        // 點擊增加商品數量
        CartAddBtns.forEach((CartAddBtn,index)=>{
            ReloadCart();
            var amount = CartArr[index].amount;
            var price = CartArr[index].price.substring(1);
            CartAddBtn.addEventListener('click',()=>{
                amount = amount +1;
                CartArr[index].amount = amount;
                var SubTotalPrice = price*amount;
                CartArr[index].subtotal = SubTotalPrice;
                localStorage.setItem('cartItems',JSON.stringify(CartArr));
                ReloadCart();
            CartAmount[index].innerHTML = CartArr[index].amount;
            SubTotal[index].innerHTML = "$"+CartArr[index].subtotal;
               
            });
            
        });

        // 點擊減少商品數量
        CartMinusBtns.forEach((CartMinusBtn,index)=>{
            
            CartMinusBtn.addEventListener('click',()=>{
                ReloadCart();
                let amount = CartArr[index].amount;
                let price = CartArr[index].price.substring(1);
                if(amount>1){
                    amount = amount-1;
                    CartArr[index].amount = amount;
                }
                var SubTotalPrice = price*amount;
                CartArr[index].subtotal = SubTotalPrice;
                localStorage.setItem('cartItems',JSON.stringify(CartArr));
                ReloadCart();
            CartAmount[index].innerHTML = CartArr[index].amount;
            SubTotal[index].innerHTML = "$"+ CartArr[index].subtotal;
               
            });
        });

        // 總金額
        const SubTotal = document.querySelectorAll('.cart_item_subtotal');
        var all = 0;
        for(let i = 0;i<SubTotal.length;i++){
            var total = parseInt(SubTotal[i].textContent);   
            all = all+total;    
        }
        totalBtn.textContent = "$"+all;        

    });

    // 點擊checkout 判斷localstorage有無存東西 有就清空資料庫 無就alert提醒訊息
    checkOut.addEventListener('click',()=>{
        if(CartArr.length<1){
            alert('Please Choose Products.');   
            window.location.replace('../index.html'); 
        }else{
            localStorage.clear();
            window.location.replace('thank.html');
        }
        ReloadCart();
    });
}
window.addEventListener('load',Init);

// 如何計算總額不需重整？

    
   
        
    

   



    
  


 


 
 