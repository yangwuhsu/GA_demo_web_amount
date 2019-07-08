    function Init(){
        var localGetCart = [];
        var CartArr = [];

        // 抓購物車數量的dom
        const cartCount = document.querySelector('.cart_count');
        const productBtns = document.querySelectorAll('.addCartProduct');
        const InitProductName = document.querySelector('.pro-title');
        reloadCart();

        function reloadCart(){
            var localGetCart = JSON.parse(localStorage.getItem('cartItems'));
            if(localGetCart){
                CartArr = localGetCart;
                cartCount.textContent = CartArr.length;
                CartArr.forEach(element=>{
                    if(element.name === InitProductName.innerText){
                        productBtns[0].value = 'In Cart';
                        productBtns[0].classList.add('inputInCart');
                    }
               })
            }
        }
        // 抓所有加到購物車按鈕，並取得這頁點擊的商品資訊
        productBtns.forEach(productBtn => {
            productBtn.addEventListener('click',()=>{
                DomId = productBtn.id;
                // 找點擊的商品DOM
                const btnParent = productBtn.parentNode;
                const btnGrandpa = btnParent.parentNode;
                const ddd = btnGrandpa.parentNode.childNodes.item(1);
                const productImage = ddd.querySelector('img');
                const productPrice = btnGrandpa.querySelector('.pro-price');
           
                if(DomId === 'product_AddCart_beverage'){
                    productElement={
                        id:0,
                        image:productImage.src,
                        name:'Beverage',
                        price:productPrice.innerText,
                        amount:1,
                        subtotal:0
                    }
                }else if(DomId === 'product_AddCart_donuts'){
                    productElement={
                        id:1,
                        image:productImage.src,
                        name:'Donuts',
                        price:productPrice.innerText,
                        amount:1,
                        subtotal:0
                    }
                }else if(DomId === 'product_AddCart_beer'){
                    productElement={
                        id:2,
                        image:productImage.src,
                        name:'Beer',
                        price:productPrice.innerText,
                        amount:1,
                        subtotal:0
                    }
                }else if(DomId === 'product_AddCart_chips'){
                    productElement={
                        id:3,
                        image:productImage.src,
                        name:'Chips',
                        price:productPrice.innerText,
                        amount:1,
                        subtotal:0
                    }
                }
                addToCart(DomId);
            });
        });

        function addToCart(DomId){
           if( productBtns.value !== 'In Cart'){
                CartArr.push(productElement);
                localStorage.setItem('cartItems',JSON.stringify(CartArr));
                reloadCart();
           }   
        }
     }
    
    window.addEventListener('load',Init);


   