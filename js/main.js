function Init(){
    var localGetCart = [];
    var CartArr = [];
    // 抓購物車數量的dom
    const cartCount = document.querySelector('.cart_count');
    // 抓購物車按鈕
    const addCartBtns = document.querySelectorAll('.addCart');
    
    ReloadCart()

    function ReloadCart(){
        var localGetCart = JSON.parse(localStorage.getItem('cartItems'));
        var InitImage = document.querySelectorAll('.product-image');
        var InitTitle = document.querySelectorAll('.item-title');
        var InitPrice = document.querySelectorAll('.price');
        var InitProduct = document.querySelectorAll('.product');
      
        if(localGetCart){
            CartArr = localGetCart;
            cartCount.textContent = CartArr.length;
            if(addCartBtns.length >0){
                console.log(CartArr);
                CartArr.forEach((element,index,arrays)=>{
                    console.log(element.image);
                    addCartBtns[element.id].value = 'In Cart';
                    InitProduct[element.id].classList.add('InCartBorder');
                    addCartBtns[element.id].classList.add('inputInCart');
                    InitTitle[element.id].classList.add('InCartText');
                    InitPrice[element.id].classList.add('InCartText');
                    InitImage[element.id].src = `index_img/${element.name}_incart.svg`;
                })
            }
                
        }
    }
 

    // 存商品資訊
    productArr = [];
    addCartBtns.forEach((addCartBtn,index,arrays) =>{
        const productDOMContainer = addCartBtn.previousElementSibling;
        const productDOMFisrt = productDOMContainer.children;
        const productImage = productDOMFisrt.item(0).querySelector('.product-image');
        productParam = 
            {   
                id:index ,
                image: productImage.src,
                name:productDOMContainer.querySelector('.item-title').innerText,
                price:productDOMContainer.querySelector('.price').innerText,
                amount:1,
                subtotal:0,
            }
        productArr.push(productParam);
        
    });



//加到購物車按鈕建立監聽事件
    addCartBtns.forEach((addCartBtn,index,arrays) =>{
        addCartBtn.addEventListener('click',()=>{
            
            if(addCartBtns[index].value !== 'In Cart'){
                CartArr.push(productArr[index]);
                localStorage.setItem('cartItems',JSON.stringify(CartArr));
                ReloadCart();
                console.log(JSON.parse(localStorage.getItem('cartItems')));
            }
        });
    });

}

    
window.addEventListener('load',Init);
       
         
       

       

 
