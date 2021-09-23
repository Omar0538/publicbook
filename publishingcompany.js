let index=1;
setInterval(function(){
    document.querySelector(`[data-glide-dir="=${index}"]`).click();
    index++;
    console.log(index);
    if(index >document.getElementsByClassName('glide__bullet').length-1){
        index=0;
    }
},2000);

document.getElementById('click').addEventListener('click',function(){
   document.getElementsByClassName('add')[0].classList.toggle('hide');
});