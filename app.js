
let allEmployees= [];
let btnn = document.getElementById("btn");
let employees = document.getElementById("employeediv");
let form = document.getElementById("form");


// let departmentArr=["Administration","Marketing","Development","Finance"];
// let levelArr =["Junior","Mid-Senior","Senior"];
function Employee(id,fullName,department,level,image){
this.employeeId = id;
this.fullName = fullName;
this.department = department;
this.level = level;
this.salary = 0;
this.imageUrl = image;
allEmployees.push(this);
}

let ghaziSameer = new Employee(1000,"Ghazi Sameer","Administration","Mid-Senior","https://raw.githubusercontent.com/LTUC/prep-course-std/master/Day08/Task/assets/Ghazi.jpg");

let lanaAli = new Employee(1001,"Lana Ali	","Finance","Senior","https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Lana.jpg?raw=true");

let tmaraAyoub = new Employee(1002," Tamara Ayoub	","Marketing","Senior","https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Tamara.jpg?raw=true");

let saifWalid = new Employee(1003," Safi Walid","Administration","Mid-Senior","https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Safi.jpg?raw=true");

let omarZaid = new Employee(1004," Omar Zaid	","Development","Senior","https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Omar.jpg?raw=true");

let ranaSaleh = new Employee(1005,"Rana Saleh	", "Development","Junior","https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Rana.jpg?raw=true");

let hadiAhmad = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Hadi.jpg?raw=true");

console.log(allEmployees);

   Employee.prototype.calcSalary = function (){
  if( this.level == "Senior"){
return Math.floor(Math.random() * (2000 - 1500) ) + 1500; }
else if(this.level == "Mid-Senior	"){
return Math.floor(Math.random() * (1500 - 1000) ) + 1000;}
else if(this.level == "Junior	"){
return Math.floor(Math.random() * (1000 - 500) ) + 500;}
this.salary = calcSalary();
}
console.log(lanaAli.calcSalary());

Employee.prototype.render = function() {
let img = document.createElement("img");
img.setAttribute("src", this.imageUrl);
employees.appendChild(img);
img.style.width="270px";
let name = document.createElement("p");
name.textContent = "Employee Name :"+this.fullName;
employees.appendChild(name);
let id = document.createElement("p")
id.textContent ="Employy ID : "+ this.uniqeNum;
employees.appendChild(id);
let dep = document.createElement("p")
dep.textContent = "Department : " + this.department;
employees.appendChild(dep);
let level = document.createElement("p")
level.textContent = "Level : "+ this.level;
employees.appendChild(level);
let salary = document.createElement("p")
salary.textContent = "Salary : "+ this.calcSalary();
employees.appendChild(salary);

}

for(let i=0;i<allEmployees.length;i++){

   allEmployees[i].render;
 }


function uniqeNum (){
  return Math.floor(1000 + Math.random() * 9000);
  this.employeeId= uniqeNum();
}


// for(let i=0;i<allEmployees.length;i++){

  // allEmployees[i].render;
// }
// console.log(allEmployees);

form.addEventListener("submit", handleSubmit)

function handleSubmit (event){
  event.preventDefault();
console.log(event);
let id = event.target.id.value;
let name = event.target.name.value;
console.log(name);
 let dep = event.target.dep.value;
console.log(dep);
let level = event.target.level.value;
console.log(level);
let im = event.target.im.value;
console.log(im);
this.salary = event.target.value;
let newEmployee = new Employee (id,name,dep,level,im);
newEmployee.render();


}



