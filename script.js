/** @format */

let     arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    const arr2 = arr.map(function(element) {
        console.log(element);
    });
  
    
  }
  
  function PrintStudentsbyForEach(arr) {
    //Write your code here , just console.log
    arr.forEach(function(element) {
        console.log(element);
      });
      
  }
  
  function addData() {
    //Write your code here, just console.log
    let student = {id:4,name:"susan",age:"20",marks:45};
    arr.push(student);
    printArrray(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.forEach(function(element,index) {
        if(element.marks<=35){
            arr.splice(index);
        }
      });
    printArrray(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 =  [
        { id: 4, name: "tony", age: "18", marks: 80 },
        { id: 5, name: "max", age: "20", marks: 75 },
        { id: 6, name: "ben", age: "19", marks: 35 },
      ];

    let combine = arr.concat(arr2);
    printArrray(combine);
  }

  function printArrray(a){
    a.forEach(function(element) {
        console.log(element);
      });

  }
  
