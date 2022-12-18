let comment = document.querySelector('.comment-cont');

function viewComment(e){

    //console.log(e);

    let divele= document.createElement('div');

    divele.setAttribute("class","coment-details");

    divele.innerHTML=`
    <input type="text" class="input" placeholder="add text here"/>
    <button class="btn submit">Submit</button>;
    `

    return divele;


}

function handleReply(val){

    let divEle = document.createElement("div")

    divEle.setAttribute("class","all-comments");

    divEle.innerHTML=`
    <div class="card">
    <span class="text">${val}</span>
    <span id="reply" class="reply">Comment</span>
    </div>
    `

    return divEle;


}

comment.addEventListener("click",(e)=>{

    //click on comment

    //console.log(e.target.classList)

    let commentClick = e.target.classList.contains("reply");

    //console.log("naman",commentClick);

    let submitClick = e.target.classList.contains("submit")

    let commentEle = viewComment(e);

    //console.log(e.target.closest(".all-comments"))

    let closestEle = e.target.closest(".all-comments")

    if(commentClick){
        console.log("Comment clicked");
        closestEle.appendChild(commentEle)
    }
    //click on reply

    if(submitClick){

        console.log("submit clicked");

        console.log(e.target.closest(".coment-details").children[0].value)

        let cc= e.target.closest(".coment-details");

        let inputEleval = e.target.closest(".coment-details").children[0].value

       // console.log(e.target.value,"ammm");

       if(inputEleval){

        let newCom = handleReply(inputEleval);

        closestEle.appendChild(newCom)

        cc.remove()
       }




    }



})