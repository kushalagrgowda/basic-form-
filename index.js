/* <scriot scr="index.js"></script>
console.log("" '' ``);
for alert = window.log("alert");
document.getElementById("myH1").textContent = 'hello';

variables-> declaration(let x); , assingment(x=3); or let age=3;
console.log("u are is  ${age}");
to know thw type of the variable -> console.log(typeof age);

booleans-> true or false.
arithmetic operators -> (-+/*), operands->values variables .exponential(to the power)-> **. 
order- left to right ->paranthesis, modulus or exponents, multi or division , add or sub.
 
accepting of the user input->easy way(window prompt). professional way(html textbox).

ex :
let username;
document=getElementById("mySubmit").onclick = function(){
    username=getElementById("myText").value;
    document.getElemntById("myH1").textContent="hello ${username}"   
}

Type conversion->ex:str->no 

math->built in object,
ex -> 1. Math.PI
       console.log();

      2. console.log(Math.PI)
      3. let x=10
      z=Math.sqrt(x);
Math.abs -> gives only positive value.
let max=math.max(x,y,z);
console.log(max);

random no generator-> let randomNum = Math.random();
console.log(randomNum);
  
let randomNum=Math.floor(Math.random()*6)+1;
console.log(randomNum);( for not to show the decimal values)

if else statement->
ex-> let age = 13
if (age >=  18){
console.log("u r eligible");
}
else{
    console.log("u r not");
}

conditions works for boolean values also.
we can do nested loops also.

.checked-> this is used for multiple selection . we can use this for single option.
checkbox -> key word . 
ex: if true ->on , else false->off.
const mycheckbox=document.getElementById("mycheckbox");

ternary operator-> it is a shortcut for if and else statement, helps to assing the variable based on a condition,
condition? codeIfTrue: codeIfFalse;(?->ternary operator).
ex: let age = 25;
let message = age=>18 ? "u r adult": "u r not";
console.log(message);

switch-> it is used when we r going to use so many if elseif else statements .
in the switch case we need to add cases and for every case add break to break the statement ,
 and at the last we need to add default case doe unknown value.

 string method->allow to manifulate and work with text,
 let userName="abba";(userName.charAt(0))
console.log(userName.charAt("0"));
ex2(index method)-> let userName="abba";(userName.indexOf(0))
console.log(userName.indexOf("0"));
ex3(length)->let userName="abba";(userName.length)
console.log(userName.length);
ex4(trim menthod)->let userName="abba";(userName.trim
console.log(userName.trim)
ex5ndex method)-> let userName="abba";(userName.lastIndexOf("b")
console.log(userName.indexOf("0"));(here it takes the last accurance and give that index no)
ex6(upper case)Name="abba";(userName.tUpperCase()
console.log(userName.toUpperCase());
we can do the lower case , repeat(3)it repeats 3 tyms ,startWith and endsWith(this means we can not give white space in the beginning,
and cannot ends with whitespace),include(same as above),replaceAll(we can replacefrom one type to another type)
ex->let phoneNumber="123-635-3828"
 phoneNumber= phoneNumber.replaceAll("-","");
console.log(userName. phoneNumber);
padStart->we can adjust the string menthod by giving the length and char for the extra string)
ex->let phoneNumber="123-635-3828"
 phoneNumber= phoneNumber.padStart("20","0")
console.log(userName. phoneNumber); output->00000000123-635-3828.
padEnd ->same as padStart.

string slicing->tring.sciling

responsive->
userstate->
validation->
refresh->
*/
alert("Registration Successful!");

function selectOnlyOne(clickedBox) {

  let checkboxes = document.getElementsByName("course");

  checkboxes.forEach(function(box) {
    if (box !== clickedBox) {
      box.checked = true;
    }
  });

}
