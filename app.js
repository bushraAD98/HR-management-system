
// let allEmployees= [];
let btnn = document.getElementById("btn");
let employees = document.getElementById("employeediv");
let form = document.getElementById("form");

Employee.allEmployees = [];
// let departmentArr=["Administration","Marketing","Development","Finance"];
// let levelArr =["Junior","Mid-Senior","Senior"];
function Employee(id, fullName, department, level, image) {
  this.employeeId = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  this.imageUrl = image;
  // this.calcSalary();
  console.log(this);
  Employee.allEmployees.push(this);
}

Employee.prototype.calcSalary = function () {
  if (this.level == "Senior") {
    this.salary= Math.floor(Math.random() * (2000 - 1500)) + 1500;
  }

  if (this.level == "Mid-Senior") {
    this.salary= Math.floor(Math.random() * (1500 - 1000)) + 1000;
  }

  if (this.level == "Junior") {
    this.salary= Math.floor(Math.random() * (1000 - 500)) + 500;
  }
}


let ghaziSameer = new Employee(1000, "Ghazi Sameer", "Administration", "Mid-Senior", "./assets/Ghazi.jpg");
ghaziSameer.calcSalary();

let lanaAli = new Employee(1001, "Lana Ali	", "Finance", "Senior", "./assets/Lana.jpg");
lanaAli.calcSalary();
let tmaraAyoub = new Employee(1002, " Tamara Ayoub	", "Marketing", "Senior", "./assets/Tamara.jpg");
tmaraAyoub.calcSalary();
let saifWalid = new Employee(1003, " Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
saifWalid.calcSalary();
let omarZaid = new Employee(1004, " Omar Zaid	", "Development", "Senior", "./assets/Omar.jpg");
omarZaid.calcSalary();
let ranaSaleh = new Employee(1005, "Rana Saleh	", "Development", "Junior", "./assets/Rana.jpg");
ranaSaleh.calcSalary();
let hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");
// saveStorage();
hadiAhmad.calcSalary();
console.log(Employee.allEmployees);

function saveStorage() {
  let stringData = JSON.stringify(Employee.allEmployees);
  localStorage.setItem("employee", stringData);
}
function getStorage() {

  let data = localStorage.getItem("employee");
  let parse = JSON.parse(data);

  if (parse !== null) {
    for (let i = 0; i < parse.length; i++) {

      new Employee(parse[i].employeeId, parse[i].fullName, parse[i].department, parse[i].level, parse[i].imageUrl);

    }



  }


}



Employee.prototype.render = function () {

  let img = document.createElement("img");
  img.setAttribute("src", this.imageUrl);
  employees.appendChild(img);
  img.style.width = "270px";


  let name = document.createElement("p");
  name.textContent = "Employee Name :" + this.fullName;
  employees.appendChild(name);



  let id = document.createElement("span")
  id.textContent = "Employy ID : " + this.uniqeNum();
  employees.appendChild(id);



  let dep = document.createElement("p")
  dep.textContent = "Department : " + this.department;
  employees.appendChild(dep);


  let level = document.createElement("p")
  level.textContent = "Level : " + this.level;
  employees.appendChild(level);




  let salary = document.createElement("p")
  salary.textContent = "Salary : " + this.salary;
  employees.appendChild(salary);

}
function renderAll() {

  for (let i = 0; i < Employee.allEmployees.length; i++) {

    Employee.allEmployees[i].render();

  }
}




Employee.prototype.uniqeNum = function () {
  return Math.floor(1000 + Math.random() * 9000);
  this.employeeId = uniqeNum();
}


// for(let i=0;i<allEmployees.length;i++){

// allEmployees[i].render;
// }
// console.log(allEmployees);

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  let id = event.target.id.value;
  console.log(id);
  let name = event.target.name.value;
  console.log(name);
  let dep = event.target.dep.value;
  console.log(dep);
  let level = event.target.level.value;
  console.log(level);
  let im = event.target.im.value;
  console.log(im);
  // let salary = event.target.value;
  let newEmployee = new Employee(id, name, dep, level, im);
newEmployee.calcSalary();
 
  saveStorage();
  newEmployee.render();

}
if(localStorage.getItem("employee")){
  Employee.allEmployees = [];
}
getStorage();
renderAll();



