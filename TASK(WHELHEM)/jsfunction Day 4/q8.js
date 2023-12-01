var students = [
    {name: "carla", age: 21}, { name: "hendry", age: 16},
    {name: "hena",age: 18},{name: "mona",age: 32},
    {name: "cida",age: 16},{name: "tina",age: 54},   {name:"rita",age: 33},{name:"kaya",age: 87},
    
    ];
   function returnMinors(arr)
   {
     let list = [];
     for (let i=0;i<arr.length;i++)
       if (arr[i].age < 20)
         list.push(arr[i].name);
     return list;
   }
   console.log(returnMinors(students));