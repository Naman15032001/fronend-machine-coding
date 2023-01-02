const array = [{
        name: "a",
        country: "in"
    },
    {
        name: "b",
        country: "uk"
    },
    {
        name: "c",
        country: "in"
    },
    {
        name: "d",
        country: "us"
    },
]

function groupBy(array , prop){
    
    let obj={};

    array.forEach(element => {

        let del = element[prop];
        if(obj[del]){
            obj[del].push(element);
        }else{
            obj[del]=[];
            obj[del].push(element);
        }
        
    });
    return obj;
}

console.log(groupBy(array,"country"));