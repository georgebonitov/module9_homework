const parser = new DOMParser();

const xmlString = `
<list>
<student>
<name lang="en">
<first>Ivan</first>
<second>Ivanov</second>
</name>
<age>35</age>
<prof>teacher</prof>
</student>
<student>
<name lang="ru">
<first>Петр</first>
<second>Петров</second>
</name>
<age>58</age>
<prof>driver</prof>
</student>
</list>
`;

let finalList = [];

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

var xmlLength = xmlDOM.querySelectorAll('student').length;

for (var i = 0; i < xmlLength; i++) {
    
    var studentNode = xmlDOM.getElementsByTagName("student")[i];
    var nameNode = studentNode.querySelector("name");
    var firstNode = nameNode.querySelector("first");
    var secondNode = nameNode.querySelector("second");
    var ageNode = studentNode.querySelector("age");
    var profNode = studentNode.querySelector("prof");
    
    var nodeResult = {
        name: firstNode.textContent + ' ' + secondNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
    };

    finalList.push(nodeResult);
    
}

let result = {
    list: finalList
}

console.log(result);