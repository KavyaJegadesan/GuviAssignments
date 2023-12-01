var arr= [[["firstName", "kavya"], ["lastName", "durai"], ["age", 21], ["role", "lazy"]], [["firstName", "raj"], ["lastName", "rasu"], ["age", 28], ["role", "developer"]]];

function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for (let i=0;i<arr.length;i++)
  tranformEmployeeList.push(Object.fromEntries(arr[i]));
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));