new Glide('.glide',{
type:'carousel',
startAt:0,
perView:3,
breakpoints:{
    900:{perView:3},
    768:{perView:1}
}
}).mount()