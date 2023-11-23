let workers=[
    ["tyler brooks",
    "$2500",
    "amature level",
    "tyler12@gmail.com",
],

    ["james spoonky",
    "$3000",
    "proffessional",
    "spoonky@outlook.com",
],

    ["emma star",
    "$1500",
    "entirely-level",
    "emma@yahoo.com",
],

    ["dennis nicholas",
    "$5000",
    "expert(pro)",
    "dennis@gmail.com", 
],


    ["mrs.finley",
    "$1000",
    "entirely-level",
    "finley31@icloud.com",
],

    ["ms.grace sophia",
    "$2500",
    "amature",
    "grace@gmail.com",
],

    ["mark",
    "$3000",
    "professional",
    "Mark@gmail.com",

],
   ["emma wood",
   "$5000",
   "expert(pro)",
   "Emmawood35@icloud.com",

],
   ["William Tyler",
    "$3500",
    "professional",
    "William65@yahoo.com",

],
   ["cheryl watson",
    "$1200",
    "entirely-level",
    "cheryl87@outlook.com",

],


];

document.write("<table border='1px'><h1>CYBER-SECURITY COMPANY MONTHLY PAYROLL<h1>");
document.write("<tr>")
document.write("<th> S/N </th>")
document.write("<th> Name </th>")
document.write("<th> Amount </th>")
document.write("<th> Experience </th>")
document.write("<th> Email </th>")
document.write("</tr>");
for(let i=0; i<workers.length; i++){
    const element= workers[i]
    const Name=element[0]
    const Amount=element[1]
    const Experience=element[2]
    const Email=element[3]
    document.write("<tr>");
    document.write(`<td>${i + 1}</td>`);
    document.write(`<td>`+Name+`</td>`);
    document.write(`<td>`+Amount+`</td>`);
    document.write(`<td>`+Experience+`</td>`);
    document.write(`<td>`+Email+`</td>`);
    document.write("</tr>");

}
document.write('</table>');

