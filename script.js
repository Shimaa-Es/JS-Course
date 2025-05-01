// string methods challenge starts
// let a = "Elzero Web School";
// console.log(a.charAt(2).toUpperCase(2) + a.slice(3, 6));
// console.log(a.charAt(13).repeat(8).toUpperCase(13));
// console.log(a.slice(0,6));
// console.log(a.substring(0,7)+a.substring(11,17));
// console.log(a.charAt(0).toLocaleLowerCase(0)+a.slice(1,16).toLocaleUpperCase()+a.charAt(16).toLocaleLowerCase(16));
// string methods challenge ends

// يمكن أن تكون الأرقام Double Precision أكثر دقة من الأرقام ذات الدقة المفردة، لأنها تستخدم 64 بتًا لتمثيل الرقم بدلاً من 32 بتًا.

// وهذا يعني أن الأرقام Double Precision يمكن أن تمثل قيم أكبر وأصغر من الأرقام ذات الدقة المفردة، وتسمح بإجراء العمليات الحسابية الأكثر دقة.

// وفيما يتعلق بأنواع الأرقام في JavaScript، فإن اللغة توفر ثلاثة أنواع أساسية للأرقام: الأعداد الصحيحة (integers) والأعداد العشرية (floating-point numbers) و NaN (Not a Number).

// ويتم تمثيل الأعداد العشرية في JavaScript باستخدام Double Precision، حيث يتم تخزينها باستخدام 64 بتًا، كما يمكن استخدام الأعداد العشرية في JavaScript لتمثيل الأعداد الصحيحة بسبب نطاقها الأكبر.

// أما بالنسبة لـ Syntactic Sugar في JavaScript، فهناك العديد من الأمثلة على ذلك، مثل استخدام "arrow functions" بدلاً من الدوال العادية و "template literals" بدلاً من السلاسل النصية المعتادة.

// هناك العديد من أمثلة Syntactic Sugar في JavaScript، وهنا مثال بسيط:

// بدلاً من استخدام الدالة العادية:

// function add(x, y) {
//   return x + y;
// }
// يمكن استخدام الـ arrow function:

// const add = (x, y) => x + y;
// وبه
// ذا يتم تبسيط كتابة الدالة وجعلها أكثر وضوحًا وسهولة للفهم

//  if condition challenge starts
// let a =10;
// if (a < 10) {
//     console.log(10);
// }else if(a >=10 && a<=40){
//     console.log("10 TO 40");
// }else if(a>40){
//     console.log(">40")
// }else{
//     console.log("Unknown");
// }
// a<10?console.log(10):a >=10 && a<=40?console.log("10 TO 40"):a>40?console.log(">40"):console.log("Unknown");

// let st="Elzero Web School";
// if(typeof"????"===typeof"34"){
//     console.log("Good");
// }
// if (st.charAt(st.search("W")).toLowerCase() === "w") {
//     console.log("Good");
// }

// if(st.length!=="string"){
//     console.log("Good");
// }
// if(typeof Number(st)==="number"){
//     console.log("Good");
// }
// if(st.slice(0,6).repeat(2)==="ElzeroElzero"){
//     console.log("Good");
// }

// if condition challenge ends

//  switch condition challenge starts
// let job = "mannager";
// let salary =0 ;

// if (job === "mannager"){
//     salary = 8000;
// }else if (job === "IT" || job === "Support"){
//     salary=6000;
// }else if (job === "Developer" || job === "Designer"){
//     salary=7000;
// }else{
//     salary=4000;
// }
// switch (job){
//     case "mannager":
//         salary =8000;
//         console.log("Salary is 8000$");
//         break;
//         case "IT":case "Support":
//             salary=6000;
//             console.log("salary is 6000$");
//             break;
//         case "Developer":case "Designer":
//             salary=7000;
//             console.log("salary is 7000$");
//             break;
//             default:
//                 salary=4000;
//                 console.log("salary is 4000$");
//                 break;
// }

// let holidays =0;
// let money =0;

// if (holidays === 0){
//     money=5000;
//     console.log(`My money is ${money}$`);
// }else if (holidays === 1 || holidays === 2){
//     money=3000;
//     console.log(`My money is ${money}$`);
// }else if (holidays === 3 ){
//     money =2000;
//     console.log(`My money is${money}$`);
// }
// swich condition challenge ends

// Arrays challenge starts
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// my.length =[++counter];
// console.log(my.reverse()); // 1
// console.log(my.slice(++zero,(counter)).reverse()); // 2
// console.log(`El${my[++zero].slice(--counter)}`); // 3
// console.log(my[++zero][++counter]+my[--counter][--zero]); // 4

// Array method Challenge End

// For Loop Challenge Start
// let myAdmins = ["Ahmed", "Osama", "Sayed", "stop", "Samera"];
// let myEmployees = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// document.write(`<div>We Have ${myAdmins.indexOf("stop")} Admins</div>`);
// document.write(`<hr></hr>`);
// for(i=0;i<myAdmins.length;i++){
//     if(i===myAdmins.indexOf("stop")) 
//         break;
//     document.write(`<div>The Admin For Team ${(i+1)+ myAdmins[i]} </div>`)
//     document.write(`<h3>Team Members: </h3>`)
//     document.write(`<div>`)
    
//     let counter=0;
//     for(j=0;j<myEmployees.length;j++){
//         if(myAdmins[i][0]===myEmployees[j][0]){
//             document.write(`<p>`)
//             document.write(`- ${(++counter)}`)
//             document.write(` ${myEmployees[j]}</p>`);
//         }
        
//     }
//     document.write(`<hr></hr>`);
//     document.write(`</div>`)
// }

// Function Advanced Practiceo 
// function showInfo(us = "Un", ag = "Un" ,rt = 0 ,show ="yes",  ...sk){
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour Rate: $${rt}</p>`);
//     if (show==="yes") {
//         if (sk.length>0){
//             document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//         }else{
//             document.write(`<p>Skills:No Skills </p>`);
//         }
//     }else{
//     document.write(`<p>Skills Is Hidden</p>`);
//     }
//     document.write(`</div>`);
// }
// showInfo("Shimaa", 25 , 5000, "yes", "Html", "Css", "JS");
// End Function Advanced Practiceo 

// Start Fuction- Random Argument Challenge

function showDetailes(a, b, c){
    let userName, Age, Status;
typeof a==="string"?userName=a:typeof b==="string"?userName=b:userName=c;
typeof a==="number"?Age=a:typeof b=="number"?Age=b:Age=c;
typeof a=="boolean"?Status=a:typeof b=="boolean"?Status=b:Status=c;
    document.write(`<div>`);
    document.write(`<p>`);
    document.write(`Welcome,${userName}, `);
    document.write(`Your Age Is${Age}, `);
    Status===true?document.write(`You Are Availaple To Work${Status}`):document.write(`You Are not Availaple To Work${Status}`);
    document.write(`</p>`);
    document.write(`</div>`);
}
showDetailes(25,"Shimaa",false);
