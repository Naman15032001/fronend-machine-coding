let boxes = document.querySelectorAll('.box');
let clickOrder = [];
let clickidx=0;

console.log(boxes);

boxes.forEach(box=>{
    console.log(box);
    box.addEventListener("click",(e)=>{
        if(!clickOrder.includes(box.id)){
            box.classList.add('change-color');
            clickOrder.push(box.id);
            clickidx++;
            
            if(clickidx==boxes.length){  
                let timeout=500;      
                clickOrder.forEach(idx=>{
                    timeout+=500;
                    console.log(timeout);
                    let oldbox = document.getElementById(idx)
                    setTimeout(()=>{
                        oldbox.classList.remove('change-color');
                    },timeout+1000)
                    
                })
                clickOrder=[];
                clickidx=0;
            }
        }   
    })
})