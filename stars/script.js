let stars = document.querySelectorAll('.fa-star');
let spanval =document.getElementById('rval');
let currRating = 0;
spanval.innerText=currRating;



stars.forEach((star) => {
    star.addEventListener("mouseover", (e) => {
        let currid = star.id;

        stars.forEach(star => star.classList.remove("checked"));

        for (let i = 1; i <= currid; i++) {
            stars[i-1].classList.add("checked");
        }

    })
})

stars.forEach((star) => {
    star.addEventListener("mouseout", (e) => {
       

        stars.forEach(star => star.classList.remove("checked"));

        for (let i = 1; i <= currRating; i++) {
            stars[i-1].classList.add("checked");
        }

    })
})

stars.forEach((star) => {
    star.addEventListener("click", (e) => {
       
        currRating = star.id;
        stars.forEach(star => star.classList.remove("checked"));

        for (let i = 1; i <= currRating; i++) {
            stars[i-1].classList.add("checked");
        }
       
        spanval.innerText=currRating;
    })
})

