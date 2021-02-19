
var x=1000;

let sId=[];
let fn=[];
var ln=[];
var salary=[];
var jtitle=[];





function addElement(){
  var val = Math.floor(1000 + Math.random() * 9000);
  console.log(val);

   document.getElementById("sID").value=val;

  sId.push(document.getElementById("sID").value);
  jtitle.push(document.getElementById("jbt").value);
  fn.push(document.getElementById("fname").value);
  ln.push(document.getElementById("lname").value);
  salary.push(document.getElementById("gpa").value);
  alert("Data successfully added Your employee Id is"+val)
  document.getElementById("sID").value=""
  document.getElementById("fname").value=""
  document.getElementById("lname").value=""
  document.getElementById("gpa").value=""
  console.log(sId);
  x++;
}


function removeElement(){
  for(var j=0;j<sId.length;j++) {
    if (document.getElementById("searchStudent").value === sId[j]) {
      delete sId[j];
      delete fn[j];
      delete ln[j];
      delete salary[j];
    }
  }

  alert("Data  Deleted")
  console.log(sId);
  document.getElementById("sID").value=""
  document.getElementById("fname").value=""
  document.getElementById("lname").value=""
  document.getElementById("gpa").value=""


}
function editemp(){
  sId[i]=document.getElementById("sID");
  fn[i]=document.getElementById("fname");
  ln[i]=document.getElementById("lname");
  salary[i]=document.getElementById("gpa");
alert("Data Updated");

}
function sortsal(){
  salary.sort();
  console.log(salary);
  document.getElementById("gpaa").innerHTML = salary;
}

function reverseSort(){
  salary.reverse();
  console.log(salary);
  document.getElementById("gpaa").innerHTML = salary;

}
function lnameass(){
  ln.sort();
  console.log(ln);
  document.getElementById("gpaa").innerHTML = ln;
}

function lnamedec(){
  ln.reverse();
  console.log(ln);
  document.getElementById("gpaa").innerHTML = ln;

}


function Printc()
{
  var e = "<hr/>";

  for (var y=0; y<sid.length; y++)
  {
    document.getElementById("sID").innerHTML = sId[y];
    document.getElementById("fname").innerHTML = fn[y];
    document.getElementById("lname").innerHTML = ln[y];
    document.getElementById("gpa").innerHTML = salary[y];

    e += "Element " + y + " = " + salary[y] + "<br/>";

  }
  document.getElementById("gpaa").innerHTML = e;
}


function search(){
  var ser=document.getElementById("searchStudent");
  for(var j=0;j<sId.length;j++){
    if(document.getElementById("searchStudent").value==sId[j]){
      document.getElementById("sID").value = sId[j];
      document.getElementById("fname").value = fn[j];
      document.getElementById("lname").value = ln[j];
      document.getElementById("gpa").value = salary[j];
    }
  }

}

function salsearch(){
  var ser=document.getElementById("searchStudent");
  for(var j=0;j<salary.length;j++){
    if(document.getElementById("searchsal").value==salary[j]){
      document.getElementById("sID").value = sId[j];
      document.getElementById("fname").value = fn[j];
      document.getElementById("lname").value = ln[j];
      document.getElementById("gpa").value = salary[j];
    }
    else{
      alert("Sorry no emplyee found with salary "+document.getElementById("searchsal").value);
    }
  }

}




function printtable(){
  for (var i=0; i<sId.length; i++) {

    document.write("<table border='1'>")

    document.write("<th>Employee Number<td> " + sId[i] + "</th></tr><br><br>");
   // document.write("<td>" + sId[i] + "</td></tr><br>");
    document.write("<th>First name<td> " + fn[i] + "</td></tr><br>");
    document.write("<th>Last name<td> " + ln[i] + "</td></tr><br>");
    document.write("<th>Salary<td> " + salary[i] + "</td></tr><br>");
    document.write("<th>Title<td> " + jtitle[i] + "</td></tr><br>");

  }
}
