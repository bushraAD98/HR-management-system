
"use strict";
let allEmployees= [];
let departmentArr=["Administration","Marketing","Development","Finance"];
let levelArr =["Junior","Mid-Senior"
,"Senior"];
function Employee(id,fullName,department,level,image){
this.employeeId = id;
this.fullName = fullName;
this.department = department;
this.level = level;
this.salary = 0;
this.imageUrl = image;
allEmployees.push(this);
}

let ghaziSameer = new Employee(1000,"Ghazi Sameer","Administration","Senior");

let lanaAli = new Employee(1001,"Lana Ali	","Finance","Senior");

let tmaraAyoub = new Employee(1002," Tamara Ayoub	","Marketing","Senior");

let saifWalid = new Employee(1003," Safi Walid","Administration","Mid-Senior");

let omarZaid = new Employee(1004," Omar Zaid	","Development","Senior");

let ranaSaleh = new Employee(1005,"Rana Saleh	", "Development","Junior");

let hadiAhmad = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

console.log(allEmployees);

Employee.prototype.salary=function(){
  this.salary = calcSalary();
}


function calcSalary (){
  if(this.level == "Senior"){
return Math.floor(Math.random() * (2000 - 1500) ) + 1500; }
else if(this.level == "Mid-Senior	"){
return Math.floor(Math.random() * (1500 - 1000) ) + 1000;}
else if(this.level == "Junior	"){
return Math.floor(Math.random() * (1000 - 500) ) + 500;}

}


Employee.prototype.render = function() {
document.write("<h2> employees name & salary : </h2>");
//  document.write(this.fullName + this.salary);
}

function uniqeNum (){
  return Math.floor(1000 + Math.random() * 9000);
}
console.log(uniqeNum());

for(let i=0;i<allEmployees.length;i++){

  allEmployees[i].render;
}

