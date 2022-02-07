

//localstorage

let data = localStorage.getItem("employee");
let parse = JSON.parse(data); 

//variables 

let parent = document.getElementById("parent");
let table = document.createElement("table");
parent.appendChild(table);





//Table Functions :


function renderHeader(){
    
let tr = document.createElement("tr");
parent.appendChild(tr);
let thDep = document.createElement("th");
thDep.textContent="Department  ";
tr.appendChild(thDep);
let thOne = document.createElement("th");
thOne.textContent=" Number Of Employees  ";
tr.appendChild(thOne);

let thTwo = document.createElement("th");
thTwo.textContent=" Average Salary  ";
tr.appendChild(thTwo);


let thThree = document.createElement("th");
thThree.textContent=" Total Salary  ";
tr.appendChild(thThree);
}


function renderTableData(){

   //row1  
  let tr1 = document.createElement("tr");
  parent.appendChild(tr1);
  let tdDep1 = document.createElement("td");
  tdDep1.textContent="Administration ";
  tr1.appendChild(tdDep1);
  let tdOne = document.createElement("td");
  tdOne.textContent=numOfemployeesAdministration();
  tr1.appendChild(tdOne);
  
  let tdTwo = document.createElement("td");
  tdTwo.textContent=avgSalAdministration();
  tr1.appendChild(tdTwo);
  
  
  let tdThree = document.createElement("td");
  tdThree.textContent=totalSalAdministration();
  tr1.appendChild(tdThree);

  //row2

  let tr2 = document.createElement("tr");
  parent.appendChild(tr2);
  let tdDep2 = document.createElement("td");
  tdDep2.textContent="Marketing ";
  tr2.appendChild(tdDep2);
  let tdSec1 = document.createElement("td");
  tdSec1.textContent=numOfemployeesMarketing();
  tr2.appendChild(tdSec1);
  
  let tdSec2 = document.createElement("td");
  tdSec2.textContent=avgSalMarketing();
  tr2.appendChild(tdSec2);
  
  
  let tdSec3 = document.createElement("td");
  tdSec3.textContent=totalSalMarketing();
  tr2.appendChild(tdSec3);

  //row3
  
  let tr3 = document.createElement("tr");
  parent.appendChild(tr3);
  let tdDep3 = document.createElement("td");
  tdDep3.textContent="Development ";
  tr3.appendChild(tdDep3);
  let tdThr1 = document.createElement("td");
  tdThr1.textContent=numOfemployeesDevelopment();
  tr3.appendChild(tdThr1);
  
  let tdThr2 = document.createElement("td");
  tdThr2.textContent=avgSalDevelopment();
  tr3.appendChild(tdThr2);
  
  
  let tdThr3 = document.createElement("td");
  tdThr3.textContent=totalSalDevelopmentg();
  tr3.appendChild(tdThr3);

  //row4
  
  let tr4 = document.createElement("tr");
  parent.appendChild(tr4);
  let tdDep4 = document.createElement("td");
  tdDep4.textContent="Finance ";
  tr4.appendChild(tdDep4);
  let tdF1 = document.createElement("td");
  tdF1.textContent=numOfemployeesFinance();
  tr4.appendChild(tdF1);
  
  let tdF2 = document.createElement("td");
  tdF2.textContent=avgSalFinance();
  tr4.appendChild(tdF2);
  
  
  let tdF3 = document.createElement("td");
  tdF3.textContent=totalSalFinance();
  tr4.appendChild(tdF3);


  }

  //table footer
  function renderFooter(){
let footer = document.createElement("tfoot");
let tr5 = document.createElement("tr");
parent.appendChild(tr5);
parent.appendChild(footer);
let tdFirst = document.createElement("td");
tdFirst.textContent="Conclusion";
tdFirst.style.color="#14681c";
tr5.appendChild(tdFirst);
let td1=document.createElement("td");
td1.textContent=totalEmployees();
tr5.appendChild(td1);

let td2=document.createElement("td");
td2.textContent=avgSalary();
tr5.appendChild(td2);



let td3=document.createElement("td");
td3.textContent=totalSalary();
tr5.appendChild(td3);



  }



//Calculation Functions :
// admuinistration

function numOfemployeesAdministration (){
  let count =0;
parse.forEach(element => {
  if(element.department == "Administration"){
    count++;
  }
});
return count;
}

function avgSalAdministration (){
  let sum =0;
  let count = numOfemployeesAdministration();
  parse.forEach(element => {
    if(element.department == "Administration"){
sum += element.salary; }
  });
  console.log(sum);
  console.log(count);
  return sum/count;
}
function totalSalAdministration(){
let sum =0;
parse.forEach(element => {
  if(element.department == "Administration"){
    sum +=element.salary; }
});
return sum;
}


//marketing
function numOfemployeesMarketing (){
  let count =0;
parse.forEach(element => {
  if(element.department == "Marketing"){
    count++;
  }
});
return count;
}

function avgSalMarketing (){
  let sum =0;
  let count = numOfemployeesMarketing();
  parse.forEach(element => {
    if(element.department == "Marketing"){
sum += element.salary; }
  });
  return sum/count;
}
function totalSalMarketing(){
let sum =0;
parse.forEach(element => {
  if(element.department == "Marketing"){
    sum +=element.salary; }
});
return sum;
}

//development

function numOfemployeesDevelopment (){
  let count =0;
parse.forEach(element => {
  if(element.department == "Development"){
    count++;
  }
});
return count;
}

function avgSalDevelopment (){
  let sum =0;
  let count = numOfemployeesDevelopment();
  parse.forEach(element => {
    if(element.department == "Development"){
sum += element.salary; }
  });
  return sum/count;
}
function totalSalDevelopmentg(){
let sum =0;
parse.forEach(element => {
  if(element.department == "Development"){
    sum +=element.salary; }
});
return sum;
}


//Finance

function numOfemployeesFinance(){
  let count =0;
parse.forEach(element => {
  if(element.department == "Finance"){
    count++;
  }
});
return count;
}

function avgSalFinance (){
  let sum =0;
  let count = numOfemployeesFinance();
  parse.forEach(element => {
    if(element.department == "Finance"){
sum += element.salary; }
  });
  return sum/count;
}
function totalSalFinance(){
let sum =0;
parse.forEach(element => {
  if(element.department == "Finance"){
    sum +=element.salary; }
});
return sum;
}

//conslusion calculations
function totalEmployees(){
  let total = parse.length;
  return total;
}

function avgSalary(){
  let sum =0;
parse.forEach(element => {
 sum += element.salary;   
  });
  return sum/parse.length ;
}

function totalSalary(){
  let total =0;
  parse.forEach(element => {
    total += element.salary;
  });
  return total;
}


renderHeader();
renderTableData();
renderFooter();