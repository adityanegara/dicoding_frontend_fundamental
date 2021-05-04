const user = {
    firstName: "Dimas",
    lastName: "Saputra",
    age: 18
}
 
const admin = {
    name: "Jane",
    position: "Marketing"
}
 
const message = "Dear, " + user.firstName + " " + user.lastName +  "\n\n" +
"Selamat ulang tahun yang ke-" + user.age + " semoga selalu diberikan kesehatan." + "\n\n" +
"Best Regards,\n" +
admin.name + "\n" +
admin.position;
 
console.log(message);

// Template literals

const user2 = {
    firstName: "Dimas",
    lastName: "Saputra",
    age: 18
}
 
const admin2 = {
    name: "Jane",
    position: "Marketing"
}
 
const message2 = `Dear, ${user2.firstName} ${user2.lastName}
 
Selamat ulang tahun yang ke-${user2.age} semoga selalu diberikan kesehatan.
 
Best Regards,
${admin2.name}
${admin2.position}`;
 
console.log(message2);
 
/* output ->
Dear, Dimas Saputra
 
Selamat ulang tahun yang ke-18 semoga selalu diberikan kesehatan.
 
Best Regards,
Jane
Marketing
*/