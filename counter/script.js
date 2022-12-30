let countValEle = document.querySelector('#count-val');

let addBtn = document.querySelector('#inc-btn');

let decBtn = document.querySelector('#dec-btn');

let resetBtn = document.querySelector('#reset-bnt');

let incBtn = document.querySelector('#inc');

//console.log(countValEle,addBtn,decBtn,resetBtn);

let val = +countValEle.innerText;

let acc = +incBtn.value;

incBtn.addEventListener('change', (e) => {
    acc = +(e.target.value);
    console.log(acc);
})

resetBtn.addEventListener('click', (e) => {
    countValEle.innerText = 0;
    val=0;
})

addBtn.addEventListener('click', (e) => {
    val = val + acc;
    console.log(val);
    countValEle.innerText = val;
})

decBtn.addEventListener('click',(e)=>{
    if(val-acc<0){
        return;
    }

    val = val - acc;

    countValEle.innerText = val;
})






