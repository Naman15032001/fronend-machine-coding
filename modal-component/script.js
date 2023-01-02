let modalComp = document.querySelector('.modal-comp');

let openModal = document.querySelector('#open');

let state = false;
console.log(modalComp,"hello");
modalComp.style.display = "none";

openModal.addEventListener('click', (e) => {
    if (!state) {
        modalComp.style.display = "block";
        state = true;
    }
})

let closeModal = document.querySelector('#close');

closeModal.addEventListener("click", (e) => {

    if (state) {
        modalComp.style.display = "none";
        state = false;
    }

})