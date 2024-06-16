let colors = ['red','blue','green']
let index = 0

setInterval(()=>{
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
},3000)