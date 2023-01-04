const schedule = [{
        "id": "a",
        "dependencies": ["b", "c"]
    },
    {
        "id": "b",
        "dependencies": ["d"]
    },
    {
        "id": "c",
        "dependencies": ["e"]
    },
    {
        "id": "d",
        "dependencies": []
    },
    {
        "id": "e",
        "dependencies": ["f"]
    },
    {
        "id": "f",
        "dependencies": []
    },
];

let result = [];

let temp=[...schedule]

while (result.length != schedule.length) {

    schedule.forEach((sd ,idx) => {

        if (sd.dependencies.length == 0 && !result.includes(sd.id)) {
            result.push(sd.id);
            //schedule.splice(idx,1);
            for (let i = 0; i < schedule.length; i++) {

                let array=schedule[i].dependencies
                const index = array.indexOf(sd.id);
                if (index > -1) {
                    array.splice(index, 1);
                }
            }
        }
    })
}

console.log(result);