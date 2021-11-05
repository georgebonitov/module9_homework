const jsonString = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;

let finalList = [];

for (var i = 0; i < list.length; i++) {
    var nodeResult = {
        name: list[i].name,
        age: Number(list[i].age),
        prof: list[i].prof
    }
    finalList.push(nodeResult);
}

let result = {
    list: finalList
}

console.log(result);