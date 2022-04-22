/*
let counters = [1,2,3,4,5];
let myMultiples = [];
const n = 4;

counters.map((multiple) => {myMultiples.push(n*multiple)});

//console.log(myMultiples);
console.log(myMultiples.map((multiple, index) => "element: "+myMultiples[index]));
*/
let myArr = [
    {id: 1, name: 'Abraham'},
    {id: 2, name: 'Bill'},
    {id: 1, name: 'Caleb'},
    {id: 3, name: 'Daniel'},
    {id: 2, name: 'Ezekiel'},
    {id: 1, name: 'Forbse'},
    {id: 2, name: 'Gamal'},
    {id: 3, name: 'Hosea'},
    {id: 2, name: 'Ima'},
    {id: 3, name: 'James'},
];

console.log(mergeArrObj(myArr));
function mergeArrObj(arr=[]){
    let result = [];
    while (arr.length) {
        let resultArrObj = arr[0];
        let sameIds = arr.filter(el => arr[0].id === el.id);
        if(sameIds.length>1){
            let aggregateStr = sameIds[0].name;
            for(i=1;i<sameIds.length;i++){
                aggregateStr+='_';
                aggregateStr+=sameIds[i].name;
            }
            resultArrObj.name = aggregateStr;
        }
        result.push(resultArrObj);
        arr = arr.filter(el => arr[0].id !== el.id);
    }
    return result;
}

