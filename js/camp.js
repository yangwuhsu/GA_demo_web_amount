function Init(){
    // 按鈕點擊後樣式
    const campBtn = document.querySelectorAll('[data-action="learnMore"]');
    for(let i=0;i<campBtn.length;i++){
        campBtn[i].addEventListener('click',()=>{
            campBtn[i].style.cssText = 'box-shadow: 0px 0px 0px 4px #FDCD43; background-color:rgb(255, 255, 255)';
        });
    }
   
    const camp = document.querySelector('.camp-title');
    const circle = document.querySelector('.camp-flex-circle');
    circleHeight = circle.offsetHeight;
   
    window.addEventListener('scroll',()=>{ 
        if(window.scrollY>(circle.offsetTop-window.innerHeight)+circleHeight && window.scrollY< circle.offsetTop+circleHeight){
            circle.classList.add('circleActive');
        }
        else{
            circle.classList.remove('circleActive');
        }
    });

    
}
window.addEventListener('load',Init);