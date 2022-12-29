let mainCont = document.querySelector('.main-cont');

let index = 0;

for (let i = 0; i < 8; i++) {

    let row_div = document.createElement('div');

    row_div.classList.add("row-cont")

    mainCont.appendChild(row_div);

    for (let j = 0; j < 8; j++) {
        let cell_div = document.createElement('div');
        cell_div.classList.add("col-cont")
        cell_div.setAttribute('id', index);

        if (index % 2 !== 0 && i % 2 === 0) {
            cell_div.classList.add("col-black")
        }
        if (i % 2 !== 0 && index % 2 == 0) {
            cell_div.classList.add("col-black")
        }
        index++;
        row_div.appendChild(cell_div);
    }
}

let cells = document.querySelectorAll('.col-cont');

cells.forEach(cell => [
    cell.addEventListener("mouseover", (e) => {

        cells.forEach(cell => {
            if (cell.classList.contains('col-selec')) {
                cell.classList.remove('col-selec');
            }
        })

        let idx = cell.id;

        cell.classList.add('col-selec')

        //console.log(idx);

        let rdigupper = +idx;

        let rdiglower = +idx;

        let ldiglower = +idx;

        let ldigupper = +idx;

        console.log(rdigupper);

        while (rdigupper >= 0 && ((rdigupper + 1) % 8 != 0)) {

            

            if (((rdigupper - 6) % 8 === 0)) {
                rdigupper = rdigupper - 7;
                let ele = document.getElementById(rdigupper);
                if (ele) {
                    ele.classList.add('col-selec')
                }
                break;
            }

            rdigupper = rdigupper - 7;

            let ele = document.getElementById(rdigupper);

            if (ele) {
                ele.classList.add('col-selec');
            }


            // console.log("yooo");
        }

        // console.log("yooo");



        while (ldigupper >= 0 && ldigupper % 8 != 0) {

            if (((ldigupper - 9) % 8 === 0)) {
                ldigupper = ldigupper - 9;
                let ele = document.getElementById(ldigupper);
                if (ele) {
                    ele.classList.add('col-selec')
                }
                break;
            }

            ldigupper = ldigupper - 9;

            let ele = document.getElementById(ldigupper);

            if (ele) {
                ele.classList.add('col-selec')
            }


        }


       
        while (((ldiglower) <= 63) && ldiglower % 8 != 0) {
           

            if (((ldiglower + 7) % 8 === 0)) {
                ldiglower = ldiglower + 7;
                let ele = document.getElementById(ldiglower);
                if (ele) {
                    ele.classList.add('col-selec')
                }
                break;
            }

            ldiglower = ldiglower + 7;

            let ele = document.getElementById(ldiglower);
            if (ele) {
                ele.classList.add('col-selec')
            }




        }

        while (((rdiglower) <= 63) && (rdiglower + 1) % 8 != 0) {
        

            if (((rdiglower + 10) % 8 === 0)) {
                rdiglower = rdiglower + 9;
                let ele = document.getElementById(rdiglower);
                if (ele) {
                    ele.classList.add('col-selec')
                }
                break;
            }

            rdiglower = rdiglower + 9;

            let ele = document.getElementById(rdiglower);
            if (ele) {
                ele.classList.add('col-selec')
            }




        }



    })
]);

cells.forEach(cell => {
    cell.addEventListener("mouseout", (e) => {

        if (cell.classList.contains('col-selec')) {
            cell.classList.remove('col-selec');
        }
    })
})